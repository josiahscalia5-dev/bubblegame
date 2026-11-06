"""Screen 4 region comparison: the ORIGINAL approved Screen 4 against real game frames, region by region.

    ~/.bubblewash-tools/metrics/bin/python WebDemo/tools/screen4/region_compare.py <out dir> <label>=<frame.png> [<label>=<frame.png> ...]

The original: Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg (767 x 1536).
Each frame (layer_diag.cjs's base_page.png, the page with the HUD) is resized to the original's 767 x 1536.

The user's seven regions (fractions of the frame; boxes drawn on regions.jpg):
  1 tunnel      the cobalt rings and the distant centre (the vortex ring zone, and the far centre circle)
  2 water       the foreground water, waves and splashes (below and beside her)
  3 character   her pink silhouette and its water contact
  4 brushes     the left and right side brushes
  5 objects     the gold paw coins, the purple gem, the smiling sock
  6 colour      the bubbles, lighting and colour balance (the whole picture's colour, and the upper bubble zone)
  7 frame       the overall camera perspective and composition (the whole frame, small: structure only)
Per region, several independent measures, none of them a verdict on its own (the user: "do not rely on one numerical
similarity score"):
  - LPIPS (AlexNet; perceptual distance, 0 = the same; lower is closer);
  - SSIM on the luminance (structure; 1 = the same);
  - dE: the CIEDE2000 distance between the region's mean colours;
  - hist: the Bhattacharyya distance between the regions' a*b* colour histograms (0 = the same colour mix);
  - the shares of saturated blue, white and pink pixels (the original's alongside);
  - character only: the pink silhouette's overlap with the original's (IoU) and its top / base / width.
Writes <out dir>/regions.json, regions.md (a table per frame) and regions.jpg (the boxes on the original). Diagnostic only.
"""
import sys, os, json
import numpy as np, cv2
from PIL import Image, ImageDraw
from skimage.metrics import structural_similarity
from skimage.color import rgb2lab, deltaE_ciede2000
import torch, lpips

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', '..'))
ORIG = os.path.join(ROOT, 'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg')
W, H = 767, 1536
# (x0, y0, x1, y1) as fractions; a region may have several boxes (measured over all of them)
REGIONS = {
    '1 tunnel rings': [(0.12, 0.22, 0.88, 0.47)],
    '1 far centre': [(0.38, 0.47, 0.62, 0.60)],
    '2 foreground water': [(0.0, 0.84, 1.0, 0.94), (0.0, 0.70, 0.22, 0.84), (0.80, 0.80, 1.0, 0.86)],
    '3 character + contact': [(0.22, 0.66, 0.78, 0.90)],
    '4 brushes': [(0.0, 0.14, 0.24, 0.42), (0.75, 0.24, 1.0, 0.63)],
    '5 coins gem sock': [(0.02, 0.52, 0.33, 0.69), (0.26, 0.48, 0.40, 0.55), (0.58, 0.53, 0.85, 0.69), (0.76, 0.66, 1.0, 0.82)],
    '6 bubbles + upper light': [(0.55, 0.13, 1.0, 0.33), (0.0, 0.42, 0.14, 0.60)],
    '6 colour balance (whole)': [(0.0, 0.10, 1.0, 0.93)],
    '7 composition (whole)': [(0.0, 0.0, 1.0, 1.0)],
}
NET = None


def load(p):
    return np.asarray(Image.open(p).convert('RGB').resize((W, H), Image.LANCZOS))


def boxes(name):
    return [(int(a * W), int(b * H), int(c * W), int(d * H)) for a, b, c, d in REGIONS[name]]


def lp(a, b):
    global NET
    if NET is None: NET = lpips.LPIPS(net='alex', verbose=False)
    t = lambda x: torch.from_numpy(x.astype(np.float32) / 127.5 - 1).permute(2, 0, 1)[None]
    with torch.no_grad(): return float(NET(t(a), t(b)).detach())


def fit(x, h=256):   # LPIPS / SSIM at a fixed size (aspect kept)
    s = h / x.shape[0]; return cv2.resize(x, (max(16, int(x.shape[1] * s)), h), interpolation=cv2.INTER_AREA)


def shares(x):
    hsv = cv2.cvtColor(x, cv2.COLOR_RGB2HSV).reshape(-1, 3).astype(int)
    hh, ss, vv = hsv[:, 0] * 2, hsv[:, 1] / 255, hsv[:, 2] / 255
    blue = ((hh >= 195) & (hh <= 235) & (ss > 0.55) & (vv > 0.45)).mean()
    white = ((ss < 0.12) & (vv > 0.88)).mean()
    pink = (((hh >= 300) | (hh <= 12)) & (ss > 0.35) & (vv > 0.47)).mean()
    lav = ((hh > 235) & (hh < 290) & (ss > 0.12) & (ss < 0.5) & (vv > 0.6)).mean()
    return dict(sat_blue=round(blue * 100, 1), white=round(white * 100, 1), pink=round(pink * 100, 1), lavender=round(lav * 100, 1))


def hist_ab(x):
    lab = cv2.cvtColor(x, cv2.COLOR_RGB2LAB)
    h = cv2.calcHist([lab], [1, 2], None, [32, 32], [0, 256, 0, 256]); return cv2.normalize(h, h).flatten()


def pinkmask(x):
    hsv = cv2.cvtColor(x, cv2.COLOR_RGB2HSV)
    m = (((hsv[..., 0] > 150) | (hsv[..., 0] < 6)) & (hsv[..., 1] > 90) & (hsv[..., 2] > 120)).astype(np.uint8)
    n, lab, st, _ = cv2.connectedComponentsWithStats(m, 8)
    if n < 2: return np.zeros_like(m, bool)
    return lab == (1 + np.argmax(st[1:, cv2.CC_STAT_AREA]))


def region(a, b, name):
    bx = boxes(name)
    ca = [a[y0:y1, x0:x1] for x0, y0, x1, y1 in bx]; cb = [b[y0:y1, x0:x1] for x0, y0, x1, y1 in bx]
    wts = np.array([c.shape[0] * c.shape[1] for c in ca], float); wts /= wts.sum()
    L = sum(w * lp(fit(p), fit(q)) for w, p, q in zip(wts, ca, cb))
    S = sum(w * structural_similarity(cv2.cvtColor(fit(p), cv2.COLOR_RGB2GRAY), cv2.cvtColor(fit(q), cv2.COLOR_RGB2GRAY), data_range=255) for w, p, q in zip(wts, ca, cb))
    fa = np.concatenate([c.reshape(-1, 3) for c in ca])[None]; fb = np.concatenate([c.reshape(-1, 3) for c in cb])[None]
    la, lb_ = rgb2lab(fa.astype(float) / 255).reshape(-1, 3).mean(0), rgb2lab(fb.astype(float) / 255).reshape(-1, 3).mean(0)
    dE = float(deltaE_ciede2000(la[None], lb_[None])[0])
    hd = float(cv2.compareHist(hist_ab(fa.astype(np.uint8)), hist_ab(fb.astype(np.uint8)), cv2.HISTCMP_BHATTACHARYYA))
    r = dict(lpips=round(L, 3), ssim=round(S, 3), dE=round(dE, 1), hist=round(hd, 3), game=shares(fb.astype(np.uint8)), original=shares(fa.astype(np.uint8)))
    if name.startswith('3'):
        x0, y0, x1, y1 = bx[0]
        ma, mb = pinkmask(a[y0:y1, x0:x1]), pinkmask(b[y0:y1, x0:x1])
        def geo(m):
            ys, xs = np.nonzero(m)
            if not len(ys): return {}
            return dict(top=round((y0 + ys.min()) / H, 3), base=round((y0 + ys.max()) / H, 3), width=round((xs.max() - xs.min()) / W, 3), area=round(m.mean() * (y1 - y0) * (x1 - x0) / (W * H) * 100, 2))
        r['silhouette'] = dict(iou=round(float((ma & mb).sum() / max(1, (ma | mb).sum())), 3), game=geo(mb), original=geo(ma))
    return r


def main():
    out = sys.argv[1]; os.makedirs(out, exist_ok=True)
    o = load(ORIG); res = {}
    for arg in sys.argv[2:]:
        label, p = arg.split('=', 1); g = load(p)
        res[label] = {name: region(o, g, name) for name in REGIONS}
    json.dump(res, open(os.path.join(out, 'regions.json'), 'w'), indent=1)
    with open(os.path.join(out, 'regions.md'), 'w') as f:
        f.write('Region comparison against the ORIGINAL approved Screen 4 (tools/screen4/region_compare.py). LPIPS: lower is closer; SSIM: higher is closer; dE: mean-colour CIEDE2000; hist: a*b* histogram Bhattacharyya distance (lower is closer); shares in % (game / original).\n\n')
        labels = list(res)
        f.write('| region | ' + ' | '.join(f'{l} LPIPS / SSIM / dE / hist' for l in labels) + ' | saturated blue % | white % | pink % | lavender % |\n')
        f.write('|---|' + '---|' * (len(labels) + 4) + '\n')
        for name in REGIONS:
            cells = [f"{res[l][name]['lpips']} / {res[l][name]['ssim']} / {res[l][name]['dE']} / {res[l][name]['hist']}" for l in labels]
            sh = lambda k: ' / '.join(str(res[l][name]['game'][k]) for l in labels) + f" ({res[labels[0]][name]['original'][k]})"
            f.write(f'| {name} | ' + ' | '.join(cells) + f" | {sh('sat_blue')} | {sh('white')} | {sh('pink')} | {sh('lavender')} |\n")
        for l in labels:
            s = res[l]['3 character + contact'].get('silhouette')
            if s: f.write(f"\n{l}: her silhouette IoU with the original's {s['iou']}; game {s['game']}; original {s['original']}\n")
        f.write('\nRanked by LPIPS (the largest perceptual differences first), per frame:\n')
        for l in labels:
            rk = sorted(((res[l][n]['lpips'], n) for n in REGIONS if 'whole' not in n), reverse=True)
            f.write(f"- {l}: " + ', '.join(f'{n} {v}' for v, n in rk) + '\n')
    im = Image.fromarray(o).copy(); d = ImageDraw.Draw(im)
    cols = ['#ffcc33', '#ffcc33', '#55ddff', '#77ee99', '#ff88bb', '#ffaa55', '#bbaaff', '#ffffff', '#ffffff']
    for (name, c) in zip(REGIONS, cols):
        if 'whole' in name: continue
        for x0, y0, x1, y1 in boxes(name): d.rectangle([x0, y0, x1, y1], outline=c, width=3); d.text((x0 + 4, y0 + 2), name, fill=c)
    im.save(os.path.join(out, 'regions.jpg'), quality=88)
    print(open(os.path.join(out, 'regions.md')).read())


if __name__ == '__main__':
    main()

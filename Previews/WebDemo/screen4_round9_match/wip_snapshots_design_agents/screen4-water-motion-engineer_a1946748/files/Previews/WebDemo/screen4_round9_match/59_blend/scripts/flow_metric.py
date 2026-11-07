"""Does the water move past her? (diagnostic only, sixteenth session)

    python flow_metric.py <clip.mp4> <t0> <t1> [label]

Dense optical flow (OpenCV Farneback) between consecutive frames of a gameplay clip from t0 to t1 (s). Per pair:
  her motion: the median flow of her own pink fur pixels (her mask: saturated pink, the largest blob in the lower half
  near the middle);
  the water's motion RELATIVE to her in three zones (pink, gold and the HUD corners left out):
    contact: a strip round her lower edge (from 12 % of her height above her lowest pink row to 8 % of the frame below it),
             within her width plus 6 % of the frame each side;
    beside:  the same rows, 6-22 % of the frame outside her width on each side;
    below:   from 8 % to 18 % of the frame below her lowest pink row, her width plus 10 % each side.
Prints, per zone (px per second of a 1536-px-tall frame): STREAMING, the time-mean over the pairs of the zone's median
flow vector relative to her (x mirrored left of her centre, so +x is outward on both sides; +y is down the screen, toward
the camera): water flowing past her as she travels has a steady direction, so this is large; a pad that rides with her and
only wobbles against her (her bob) averages out, so this is small; OSCILLATION, the rms of the vectors about that mean (the
wobble); and the median relative speed."""
import sys, numpy as np, cv2
path, t0, t1 = sys.argv[1], float(sys.argv[2]), float(sys.argv[3]); label = sys.argv[4] if len(sys.argv) > 4 else path
cap = cv2.VideoCapture(path); fps = cap.get(cv2.CAP_PROP_FPS)
frames = []
i = 0
while True:
    ok, f = cap.read()
    if not ok: break
    t = i / fps
    if t0 - 1e-6 <= t <= t1 + 1e-6: frames.append(f)
    i += 1
H, W = frames[0].shape[:2]; k = 1536 / H
def pink_mask(bgr):
    hsv = cv2.cvtColor(bgr, cv2.COLOR_BGR2HSV).astype(float); h, s, v = hsv[..., 0] * 2, hsv[..., 1] / 255, hsv[..., 2] / 255
    m = (((h >= 290) | (h <= 12)) & (s > 0.35) & (v > 0.45)).astype(np.uint8); m[:int(0.55 * H)] = 0; m[int(0.97 * H):] = 0
    m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, np.ones((5, 5), np.uint8))
    n, lab, st, cen = cv2.connectedComponentsWithStats(m)
    if n < 2: return None
    best = max(range(1, n), key=lambda j: st[j, cv2.CC_STAT_AREA] - 4 * abs(cen[j][0] - W * 0.47))
    return lab == best
def keep_mask(bgr):
    hsv = cv2.cvtColor(bgr, cv2.COLOR_BGR2HSV).astype(float); h, s = hsv[..., 0] * 2, hsv[..., 1] / 255
    keep = ~((((h >= 290) | (h <= 15)) & (s > 0.3)) | ((h > 20) & (h < 65) & (s > 0.35)))
    yy, xx = np.mgrid[0:H, 0:W]; keep &= ~((yy / H > 0.885) & ((xx / W < 0.37) | (xx / W > 0.66)))
    return keep
res = {'contact': [], 'beside': [], 'below': []}; mov = {'contact': [], 'beside': [], 'below': []}; vec = {'contact': [], 'beside': [], 'below': []}; her_v = []
for a, b in zip(frames[:-1], frames[1:]):
    ga, gb = cv2.cvtColor(a, cv2.COLOR_BGR2GRAY), cv2.cvtColor(b, cv2.COLOR_BGR2GRAY)
    fl = cv2.calcOpticalFlowFarneback(ga, gb, None, 0.5, 4, 21, 3, 7, 1.5, 0) * fps * k   # px/s of a 1536 frame
    pm = pink_mask(a)
    if pm is None: continue
    ys, xs = np.nonzero(pm); bot, top, x0, x1 = ys.max(), ys.min(), xs.min(), xs.max(); hh = bot - top
    hv = np.median(fl[pm], axis=0); her_v.append(hv)
    rel = fl - hv; spd = np.hypot(rel[..., 0], rel[..., 1])
    keep = keep_mask(a) & ~pm
    Z = np.zeros((H, W), bool)
    def box(y0, y1, xa, xb):
        z = Z.copy(); z[max(0, int(y0)):min(H, int(y1)), max(0, int(xa)):min(W, int(xb))] = True; return z & keep
    zc = box(bot - 0.12 * hh, bot + 0.08 * H, x0 - 0.06 * W, x1 + 0.06 * W)
    zs = box(bot - 0.12 * hh, bot + 0.08 * H, x0 - 0.22 * W, x0 - 0.06 * W) | box(bot - 0.12 * hh, bot + 0.08 * H, x1 + 0.06 * W, x1 + 0.22 * W)
    zb = box(bot + 0.08 * H, bot + 0.18 * H, x0 - 0.10 * W, x1 + 0.10 * W)
    for nm, z in (('contact', zc), ('beside', zs), ('below', zb)):
        if z.sum() > 50:
            res[nm].append(float(np.median(spd[z]))); mov[nm].append(float((spd[z] > 60).mean()))
            # the zone's median flow relative to her, x mirrored left of her centre (so +x is outward on both sides)
            sg = np.where(np.arange(W)[None, :] < (x0 + x1) / 2, -1.0, 1.0)
            vec[nm].append([float(np.median((rel[..., 0] * sg)[z])), float(np.median(rel[..., 1][z]))])
hv = np.array(her_v)
print(f'{label}: {len(frames) - 1} frame pairs, {t0}-{t1} s | her own screen motion: median |v| {np.median(np.hypot(hv[:, 0], hv[:, 1])):.0f} px/s')
for nm in res:
    if res[nm]:
        v = np.array(vec[nm]); m = v.mean(0); osc = np.sqrt(((v - m) ** 2).sum(1).mean())
        print(f'  {nm:8s} relative to her: STREAMING (time-mean vector) outward {m[0]:+5.0f}, down {m[1]:+5.0f} = {np.hypot(*m):4.0f} px/s'
              f' | oscillation about it (rms) {osc:4.0f} px/s | median speed {np.median(res[nm]):4.0f} px/s')

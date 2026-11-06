"""The foreground water round her: how hazy / how deep / how sharp (R8, 6 November 2026). Frames resized to the original's
767 x 1536; the band x 60-700, y 1250-1420 (the art director's water band) and the wider band y 0.80-0.97, the pink
character, the gold coins and the HUD button corners left out.

    "$BW_PY" -I haze_metrics.py label=frame.png ...   (the ORIGINAL is always the first row)

Columns: dark (Rec.709 luma < 0.6: the cobalt pockets and shadows), deep cobalt (hue 200-240, sat >= 0.55, value <= 0.75),
saturated blue (hue 185-230, sat >= 0.55, value > 0.5), white (sat < 0.12, value > 0.88: the highlights), mean luma, the luma
P10 / P90 (the tonal spread), sharpness (the variance of the Laplacian of the luma, x 1000) and crisp highlights (white
pixels whose 7 x 7 neighbourhood mean luma is at least 0.12 lower: small bright highlights, not white areas).
"""
import sys, numpy as np, cv2
from PIL import Image
ORIG = '/workspace/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
BANDS = {'water band x60-700 y1250-1420': (60, 700, 1250, 1420), 'wide band y0.80-0.97': (0, 767, int(0.80 * 1536), int(0.97 * 1536))}

def metrics(path, box):
    a = np.asarray(Image.open(path).convert('RGB').resize((767, 1536), Image.LANCZOS)).astype(np.float32) / 255
    luma = a @ np.array([0.2126, 0.7152, 0.0722], np.float32)
    hsv = cv2.cvtColor((a * 255).astype(np.uint8), cv2.COLOR_RGB2HSV).astype(float)
    h, s, v = hsv[..., 0] * 2, hsv[..., 1] / 255, hsv[..., 2] / 255
    x0, x1, y0, y1 = box
    yy, xx = np.mgrid[0:1536, 0:767]
    m = (xx >= x0) & (xx < x1) & (yy >= y0) & (yy < y1)
    m &= ~((((h >= 290) | (h <= 15)) & (s > 0.3)) | ((h > 20) & (h < 65) & (s > 0.35)))   # not pink, not gold
    m &= ~((yy > 0.885 * 1536) & ((xx < 0.37 * 767) | (xx > 0.66 * 767)))                  # not the HUD buttons
    lap = cv2.Laplacian(luma, cv2.CV_32F, ksize=3)
    local = cv2.blur(luma, (7, 7))
    white = (s < 0.12) & (v > 0.88)
    crisp = white & (local < luma - 0.12)
    L = luma[m]
    return {'dark': (L < 0.6).mean(), 'deep': ((h >= 200) & (h <= 240) & (s >= 0.55) & (v <= 0.75))[m].mean(),
            'sat': ((h >= 185) & (h <= 230) & (s >= 0.55) & (v > 0.5))[m].mean(), 'white': white[m].mean(),
            'mean': L.mean(), 'p10': np.percentile(L, 10), 'p90': np.percentile(L, 90), 'sharp': lap[m].var() * 1000, 'crisp': crisp[m].mean()}

rows = [('ORIGINAL', ORIG)] + [a.rsplit('=', 1) for a in sys.argv[1:]]
for bn, box in BANDS.items():
    print(f'\n## {bn}\n')
    print('| frame | dark | deep cobalt | saturated blue | white | mean luma | luma P10-P90 | sharpness | crisp highlights |')
    print('|---|---|---|---|---|---|---|---|---|')
    for lab, p in rows:
        r = metrics(p, box)
        print(f"| {lab} | {r['dark']*100:.1f} % | {r['deep']*100:.1f} % | {r['sat']*100:.1f} % | {r['white']*100:.1f} % | {r['mean']:.3f} | {r['p10']:.2f}-{r['p90']:.2f} | {r['sharp']:.1f} | {r['crisp']*100:.2f} % |")

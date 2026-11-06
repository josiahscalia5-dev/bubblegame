"""Per-layer bubble coverage of the tunnel: for each moment T (inventory/T<t>/), the share of the tunnel box (x 0.05-0.95,
y 0.25-0.70 of the 768 x 1536 canvas, above the water) where hiding the layer changes the pixel by more than 12 levels, and
how much saturated blue (layer_metrics.py's definition: hue 190-235, s >= 0.5, v >= 0.35) the box gains with it hidden.
  python coverage.py <T>..."""
import sys, json, numpy as np, cv2
sys.path.insert(0, '/home/user/bubblegame/WebDemo/tools/screen4')
import layer_metrics as LM
def satblue(im):
    h = cv2.cvtColor(im, cv2.COLOR_RGB2HSV_FULL).astype(float); H = h[..., 0] * 360 / 256; S = h[..., 1] / 255; V = h[..., 2] / 255
    return (H >= 190) & (H <= 235) & (S >= 0.5) & (V >= 0.35)
out = {}
if __name__ != "__main__": sys.argv = sys.argv[:1]
for t in sys.argv[1:]:
    d = f'inventory/T{t}'; b = LM.load(f'{d}/base_canvas.png'); hh, ww = b.shape[:2]
    box = (slice(int(0.25 * hh), int(0.70 * hh)), slice(int(0.05 * ww), int(0.95 * ww)))
    sb0 = satblue(b)[box].mean() * 100; row = {'sat_blue_full': round(sb0, 1)}
    for lab in ['no_tunnelBubbles', 'no_heroBubbles', 's3', 'no_s4Bubbles', 'no_r5Droplets', 'no_points', 'no_waterlineBubbles', 'no_all_but_waterline']:
        if lab == 's3': lab = 'no_s3Bubbles'
        a = LM.load(f'{d}/abl_{lab}.png'); ch = (np.abs(a.astype(int) - b.astype(int)).max(2) > 12)[box].mean() * 100
        row[lab] = (round(ch, 1), round(satblue(a)[box].mean() * 100 - sb0, 1))
    out[t] = row
for t, r in out.items(): print(t, json.dumps(r))
json.dump(out, open('inventory/coverage.json', 'w'), indent=1)

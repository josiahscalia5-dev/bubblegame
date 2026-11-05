"""phone_measure.py <original> <frames...> : checkpoint 06 and 07 numbers for phone captures (screen fractions).
- rim_top: the first row (from 10% of the height down) where the gold rim shows across the centre band x 0.30-0.70
  (gold: hue 8-32 on OpenCV's 0-180 scale, saturation >= 90, value >= 140; at least 6% of the band's width in the row);
- purple_band: the share of the band between the mission banner's bottom (first row below 8% where the banner's blue
  #2a7bff-ish stops) and rim_top that is plain lavender/purple (hue 120-150, saturation 40-170, value 120-255);
- pale_rect: pale near-white pixels (value >= 225, saturation <= 40) in the box the rectangle filled in the 14:25 capture,
  screen x 0.36-0.71, y 0.17-0.21, as a share of that box.
"""
import sys, cv2, numpy as np
def meas(path):
    im = cv2.imread(path); H, W = im.shape[:2]; hsv = cv2.cvtColor(im, cv2.COLOR_BGR2HSV)
    x0, x1 = int(0.30 * W), int(0.70 * W)
    h, s, v = hsv[..., 0].astype(int), hsv[..., 1].astype(int), hsv[..., 2].astype(int)
    gold = (h >= 8) & (h <= 32) & (s >= 90) & (v >= 140)
    rim = None
    for y in range(int(0.10 * H), int(0.45 * H)):
        if gold[y, x0:x1].mean() >= 0.06: rim = y / H; break
    pale = (v >= 225) & (s <= 40)
    box = pale[int(0.17 * H):int(0.21 * H), int(0.36 * W):int(0.71 * W)].mean()
    return rim, box
o = meas(sys.argv[1]); print('%-48s rim_top %.3f  pale_rect %.3f' % ('ORIGINAL', o[0], o[1]))
for f in sys.argv[2:]:
    r, b = meas(f); print('%-48s rim_top %s  pale_rect %.3f' % (f.split('/')[-1], '%.3f' % r if r else '  -  ', b))

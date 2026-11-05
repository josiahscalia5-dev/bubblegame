# hide_diff.py: what each hidden layer contributes (hide_probe.cjs output): a montage of the full frame and, per layer, the
# frame with the pixels that change when the layer is hidden tinted red; prints each layer's changed share in boxes.
#   hide_diff.py <probe dir> <out.png> [box x0,x1,y0,y1 ...]
import sys, os, glob, cv2, numpy as np
d, out = sys.argv[1], sys.argv[2]
boxes = [tuple(map(float, b.split(','))) for b in sys.argv[3:]] or [(0.0, 0.10, 0.45, 0.80), (0.02, 0.98, 0.74, 0.885)]
a = cv2.imread(os.path.join(d, 'all.png')).astype(int)
H, W = a.shape[:2]
tiles = [a.astype(np.uint8)]
for p in sorted(glob.glob(os.path.join(d, 'hide_*.png'))):
    b = cv2.imread(p).astype(int)
    m = np.abs(a - b).sum(2) > 24
    t = a.copy(); t[m] = (t[m] * 0.4 + np.array([0, 0, 255]) * 0.6).astype(int); t = np.ascontiguousarray(t.astype(np.uint8))
    name = os.path.basename(p)[5:-4]
    cv2.putText(t, name, (6, 22), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (255, 255, 255), 2)
    tiles.append(t)
    print(f"{name:22s} " + '  '.join(f"box {bx}: {m[int(bx[2]*H):int(bx[3]*H), int(bx[0]*W):int(bx[1]*W)].mean()*100:5.1f}%" for bx in boxes))
cv2.imwrite(out, np.hstack(tiles))

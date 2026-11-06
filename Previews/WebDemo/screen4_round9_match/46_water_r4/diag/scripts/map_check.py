# Where R3c's projected texture lands on screen against the original: per 64 px patch of the foreground band,
# the best shift (phase correlation), the vertical / horizontal scale (best of a few), and the sharpness ratio.
import sys, numpy as np, cv2
from PIL import Image
O = np.asarray(Image.open(sys.argv[1]).convert('RGB').resize((768, 1536), Image.LANCZOS)).astype(np.float32)
G = np.asarray(Image.open(sys.argv[2]).convert('RGB')).astype(np.float32)
if G.shape[0] != 1536: G = np.asarray(Image.open(sys.argv[2]).convert('RGB').resize((768, 1536), Image.LANCZOS)).astype(np.float32)
go = cv2.cvtColor(O, cv2.COLOR_RGB2GRAY); gg = cv2.cvtColor(G, cv2.COLOR_RGB2GRAY)
def lap(a): return float(cv2.Laplacian(a, cv2.CV_32F, ksize=3).var())
def ncc(a, b): a = a - a.mean(); b = b - b.mean(); return float((a * b).sum() / (np.sqrt((a * a).sum() * (b * b).sum()) + 1e-6))
print('patch(x,y)   shift(dx,dy)  ncc   best sy  sharp game/orig  mean L game-orig  sat game/orig')
hsvO = cv2.cvtColor(O / 255, cv2.COLOR_RGB2HSV); hsvG = cv2.cvtColor(G / 255, cv2.COLOR_RGB2HSV)
for y in range(1120, 1480, 64):
    for x in range(0, 768 - 63, 96):
        a = go[y:y + 64, x:x + 64]; b = gg[y:y + 64, x:x + 64]
        (dx, dy), r = cv2.phaseCorrelate(a.astype(np.float64), b.astype(np.float64))
        # vertical scale: stretch the original patch about its centre and see which matches best
        best = (0, 1.0)
        for sy in (0.8, 0.9, 1.0, 1.1, 1.25, 1.5):
            M = np.float32([[1, 0, 0], [0, sy, (1 - sy) * (y + 32)]])
            w = cv2.warpAffine(go, M, (768, 1536), flags=cv2.INTER_LINEAR)[y:y + 64, x:x + 64]
            c = ncc(w, b)
            if c > best[0]: best = (c, sy)
        print(f'({x:3d},{y:4d})  ({dx:+5.1f},{dy:+5.1f})  {ncc(a, b):.2f}  {best[1]:.2f} ({best[0]:.2f})  {lap(b) / max(lap(a), 1e-3):.2f}  {b.mean() - a.mean():+6.1f}  {hsvG[y:y+64,x:x+64,1].mean() / max(hsvO[y:y+64,x:x+64,1].mean(),1e-3):.2f}')

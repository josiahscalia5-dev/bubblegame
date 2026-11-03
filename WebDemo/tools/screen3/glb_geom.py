"""Front silhouettes and hole measurements of a GLB mesh (positions/indices from the binary chunk)."""
import json, struct, sys
import numpy as np
from PIL import Image, ImageDraw

def load(path):
    d = open(path, 'rb').read()
    cl = struct.unpack('<I', d[12:16])[0]; j = json.loads(d[20:20 + cl])
    off = 20 + cl; bl = struct.unpack('<I', d[off:off + 4])[0]; binc = d[off + 8: off + 8 + bl]
    def acc(i):
        a = j['accessors'][i]; bv = j['bufferViews'][a['bufferView']]
        comp = {5126: np.float32, 5125: np.uint32, 5123: np.uint16, 5121: np.uint8}[a['componentType']]
        n = {'SCALAR': 1, 'VEC2': 2, 'VEC3': 3, 'VEC4': 4}[a['type']]
        start = bv.get('byteOffset', 0) + a.get('byteOffset', 0)
        stride = bv.get('byteStride', 0)
        arr = np.frombuffer(binc, dtype=comp, count=a['count'] * n if not stride else None, offset=start) if not stride else None
        if stride:
            raw = np.frombuffer(binc[start:start + stride * a['count']], dtype=np.uint8).reshape(a['count'], stride)
            arr = raw[:, :n * np.dtype(comp).itemsize].copy().view(comp)
        return arr.reshape(a['count'], n) if n > 1 else arr
    p = j['meshes'][0]['primitives'][0]
    return acc(p['attributes']['POSITION']).astype(float), acc(p['indices']).reshape(-1, 3), j

def silhouette(P, I, out, res=600):
    lo, hi = P[:, :2].min(0), P[:, :2].max(0); k = res / (hi - lo).max()
    im = Image.new('L', (int((hi[0] - lo[0]) * k) + 2, int((hi[1] - lo[1]) * k) + 2), 0); d = ImageDraw.Draw(im)
    for t in I:
        q = [((P[v, 0] - lo[0]) * k, (hi[1] - P[v, 1]) * k) for v in t]; d.polygon(q, fill=255)
    im.save(out); return np.asarray(im) > 0, lo, hi, k

if __name__ == '__main__':
    path, out = sys.argv[1], sys.argv[2]
    P, I, j = load(path)
    occ, lo, hi, k = silhouette(P, I, out)
    H, W = occ.shape
    cx = int((0 - lo[0]) * k)
    print('bbox', lo.round(3), hi.round(3), 'z', P[:, 2].min().round(3), P[:, 2].max().round(3))
    # the open passage through the middle: for each row, the empty run containing x = 0
    for frac in np.linspace(0.05, 0.95, 19):
        r = int(H * frac); row = occ[r]
        if row[cx]: print('  y %+.3f: solid at centre' % (hi[1] - r / k)); continue
        a = cx; b = cx
        while a > 0 and not row[a - 1]: a -= 1
        while b < W - 1 and not row[b + 1]: b += 1
        print('  y %+.3f: open from x %+.3f to %+.3f (half-width %.3f)' % (hi[1] - r / k, lo[0] + a / k, lo[0] + b / k, (b - a) / k / 2))

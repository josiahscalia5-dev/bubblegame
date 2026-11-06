import sys, numpy as np
from PIL import Image
L = lambda p: np.asarray(Image.open(p).convert('RGB').resize((767, 1536))).astype(np.float32) / 255
for m in sys.argv[1:]:
    d = f'{m}'
    full = L(f'{d}/base_canvas.png') - L(f'{d}/abl_no_bloom.png')          # all the bloom
    face = L(f'{d}/abl_face_solo.png') - L(f'{d}/abl_face_solo_nobloom.png')  # the bloom the face makes on its own
    other = L(f'{d}/abl_no_face.png') - L(f'{d}/abl_no_face_nobloom.png')     # the bloom everything else makes (face hidden)
    band = (slice(1250, 1420), slice(60, 700)); tun = (slice(300, 900), slice(150, 620)); low = (slice(1180, 1250), slice(60, 700))
    f = lambda a, b: a[b].mean() * 255
    print(f'{m}: bloom added, mean RGB-levels:  water band  all {f(full, band):.1f}, face-only {f(face, band):.1f}, others (face hidden) {f(other, band):.1f}'
          f' | just above the water (y 1180-1250) all {f(full, low):.1f} | the tunnel middle (y 300-900) all {f(full, tun):.1f}')

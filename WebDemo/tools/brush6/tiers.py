# brush6 tier colours (lane brush6, session ddf175f2): the median sRGB of each bristle tier, the cap's bell and the rim band, in the approved
# Scene 6 and in game frames (864x1536 or any size: fractions), in the same boxes (the approved tiers' measured spans, TARGETS.md). Also the
# per-channel linear ratio approved / frame (multiply the tier's colour settings by it, in linear light, to move toward the approved).
#   python3 tiers.py frame.png [frame2.png ...]
import sys
import numpy as np
from PIL import Image

A = '/home/user/bubblegame/Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/06_Swim_Collect_Avoid_Enemies.png'
BOX = {   # name: (x0, x1, y0, y1)
    'L pink': (0.0, 0.14, 0.495, 0.545), 'L white': (0.0, 0.14, 0.558, 0.592), 'L blue': (0.0, 0.14, 0.603, 0.650), 'L pale': (0.0, 0.14, 0.662, 0.705),
    'L bell': (0.0, 0.11, 0.415, 0.455), 'L rim': (0.0, 0.12, 0.462, 0.483),
    'R pink': (0.89, 1.0, 0.505, 0.56), 'R white': (0.89, 1.0, 0.57, 0.612), 'R blue': (0.89, 1.0, 0.622, 0.665), 'R pale': (0.89, 1.0, 0.672, 0.71),
}


def lin(c):
    c = np.asarray(c) / 255.0
    return np.where(c <= 0.04045, c / 12.92, ((c + 0.055) / 1.055) ** 2.4)


def med(p, b):
    img = np.asarray(Image.open(p).convert('RGB')).astype(float)
    H, W = img.shape[:2]
    x0, x1, y0, y1 = b
    px = img[int(y0 * H):int(y1 * H), int(x0 * W):int(x1 * W)].reshape(-1, 3)
    return np.median(px, 0)


if __name__ == '__main__':
    frames = sys.argv[1:]
    for k, b in BOX.items():
        a = med(A, b)
        row = f'{k:8s} approved #{"".join(f"{int(v):02x}" for v in a)}'
        for f in frames:
            m = med(f, b)
            r = lin(a) / np.maximum(lin(m), 1e-4)
            row += f' | #{"".join(f"{int(v):02x}" for v in m)} lin x{r[0]:.2f},{r[1]:.2f},{r[2]:.2f}'
        print(row)

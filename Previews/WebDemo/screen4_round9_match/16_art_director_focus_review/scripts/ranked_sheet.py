# ranked_sheet.py: original | focus canvas (3.0 s) side by side at 767x1536 each, with the zones of the ranked differences
# numbered (1 water round her, 2 her size/place, 3+4 ring zone upper arc: ribbons and streaks, 5 floor band behind her,
# 6 core, 7 left wall wedge, 8 objects). Writes ranked_differences_sheet.png.
import numpy as np, cv2
R = '/home/user/bubblegame/'
O = R+'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
F = R+'Previews/WebDemo/screen4_round9_match/15_focus_pass/final/focus_final_t3.00_canvas.png'
W, H = 767, 1536
def load(p): return cv2.resize(cv2.imread(p)[..., :3], (W, H), interpolation=cv2.INTER_AREA)
def box(im, x0, y0, x1, y1, n, col):
    cv2.rectangle(im, (int(x0*W), int(y0*H)), (int(x1*W), int(y1*H)), col, 3)
    cv2.putText(im, str(n), (int(x0*W)+6, int(y0*H)+34), cv2.FONT_HERSHEY_SIMPLEX, 1.2, (0, 0, 0), 6)
    cv2.putText(im, str(n), (int(x0*W)+6, int(y0*H)+34), cv2.FONT_HERSHEY_SIMPLEX, 1.2, col, 2)
out = []
for nm, p, ch, coin, sock in (('ORIGINAL', O, (.249, .702, .714, .859), (.781, .673, 1.0, .799), (.64, .555, .83, .665)),
                              ('FOCUS 3.0 s (canvas)', F, (.192, .687, .791, .894), (.668, .647, .958, .795), (.64, .525, .87, .655))):
    im = load(p)
    box(im, .02, .74, .98, .885, 1, (0, 255, 255))
    box(im, *ch, 2, (0, 0, 255))
    box(im, .20, .29, .85, .44, '3+4', (255, 255, 0))
    box(im, .0, .60, 1.0, .70, 5, (0, 165, 255))
    cv2.circle(im, (int(.53*W), int(.525*H)), int(.12*W), (255, 0, 255), 3); cv2.putText(im, '6', (int(.53*W)+int(.12*W)-10, int(.525*H)), cv2.FONT_HERSHEY_SIMPLEX, 1.2, (255, 0, 255), 3)
    box(im, .0, .44, .22, .79, 7, (0, 255, 0))
    box(im, *coin, 8, (255, 128, 0)); box(im, *sock, 8, (255, 128, 0))
    cv2.rectangle(im, (0, 0), (W, 50), (20, 15, 15), -1); cv2.putText(im, nm, (10, 36), cv2.FONT_HERSHEY_SIMPLEX, 1.1, (255, 255, 255), 2)
    out.append(im)
cv2.imwrite('ranked_differences_sheet.png', np.hstack([out[0], np.full((H, 10, 3), 255, np.uint8), out[1]]))

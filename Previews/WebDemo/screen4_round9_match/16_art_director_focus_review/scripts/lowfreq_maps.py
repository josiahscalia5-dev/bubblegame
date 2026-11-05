# lowfreq_maps.py: low-frequency (Gaussian sigma 18 px at 767x1536) maps of L* and of white share, original vs focus canvas.
# Writes lowfreq_maps.png: [orig blurred | focus blurred | L* difference focus-orig (red = focus darker, blue = focus lighter, +-25 L*)
# | white-share difference (red = focus has less white)], and prints a 10x20 grid of mean L* difference.
import numpy as np, cv2
R = '/home/user/bubblegame/'
O = R+'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
F = R+'Previews/WebDemo/screen4_round9_match/15_focus_pass/final/focus_final_t3.00_canvas.png'
def load(p): return cv2.resize(cv2.imread(p)[..., :3], (767, 1536), interpolation=cv2.INTER_AREA)
o, f = load(O), load(F)
def Lw(im):
    lab = cv2.cvtColor(im, cv2.COLOR_BGR2LAB).astype(float); L = lab[..., 0]*100/255
    h = cv2.cvtColor(im, cv2.COLOR_BGR2HSV).astype(float); wh = ((h[..., 1] < 0.15*255) & (h[..., 2] > 0.88*255)).astype(float)
    return cv2.GaussianBlur(L, (0, 0), 18), cv2.GaussianBlur(wh, (0, 0), 18)
Lo, wo = Lw(o); Lf, wf = Lw(f)
dL = Lf - Lo; dW = wf - wo
def heat(d, s):
    d = np.clip(d/s, -1, 1); im = np.zeros(d.shape+(3,), np.uint8)
    im[..., 2] = (255*np.clip(-d, 0, 1)).astype(np.uint8); im[..., 0] = (255*np.clip(d, 0, 1)).astype(np.uint8)
    im[..., 1] = 0; return im
sheet = np.hstack([cv2.GaussianBlur(o, (0, 0), 6), cv2.GaussianBlur(f, (0, 0), 6), heat(dL, 25), heat(dW, 0.4)])
for x in range(1, 4): sheet[:, x*767-2:x*767+2] = 255
for gy in np.arange(0.1, 1.0, 0.1):
    Y = int(gy*1536); sheet[Y, :] = 128; cv2.putText(sheet, f'{gy:.1f}', (2, Y-3), 0, 0.6, (255, 255, 255), 1)
cv2.imwrite('lowfreq_maps.png', cv2.resize(sheet, None, fx=0.5, fy=0.5, interpolation=cv2.INTER_AREA))
print('mean L* difference focus - original, cells of 0.1 W x 0.05 H (rows y 0.20-0.90):')
print('   y\\x ' + ' '.join(f'{x/10:5.1f}' for x in range(10)))
for r in range(4, 18):
    y0, y1 = int(r*0.05*1536), int((r+1)*0.05*1536)
    print(f'  {r*0.05:4.2f} ' + ' '.join(f'{dL[y0:y1, int(c*76.7):int((c+1)*76.7)].mean():+5.1f}' for c in range(10)))
print('white share difference focus - original (percentage points), same cells:')
for r in range(4, 18):
    y0, y1 = int(r*0.05*1536), int((r+1)*0.05*1536)
    print(f'  {r*0.05:4.2f} ' + ' '.join(f'{100*dW[y0:y1, int(c*76.7):int((c+1)*76.7)].mean():+5.0f}' for c in range(10)))

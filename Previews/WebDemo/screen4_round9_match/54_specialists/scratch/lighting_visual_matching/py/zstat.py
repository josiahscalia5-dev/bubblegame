import sys, numpy as np, cv2
from PIL import Image
ORIG='/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
D='/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/52_diagnosis/ablation/'
def cls(z):
    hsv = cv2.cvtColor(z, cv2.COLOR_RGB2HSV).astype(float); h, s, v = hsv[..., 0] * 2, hsv[..., 1] / 255, hsv[..., 2] / 255
    gold = (h > 20) & (h < 65) & (s > 0.35); pink = ((h >= 290) | (h <= 15)) & (s > 0.3)
    k = ~(gold | pink)
    r = {'cob': ((h >= 205) & (h <= 235) & (s >= 0.6) & (v >= 0.45) & (v <= 0.92))[k].mean(),
         'turq': ((h >= 180) & (h < 205) & (s >= 0.45) & (v > 0.55))[k].mean(),
         'pale': ((h >= 185) & (h <= 235) & (s >= 0.12) & (s < 0.45) & (v > 0.75))[k].mean(),
         'white': ((s < 0.12) & (v > 0.88))[k].mean(),
         'lav': ((h > 235) & (h < 290) & (s > 0.12) & (v > 0.5))[k].mean(),
         'sat': s[k].mean(), 'n': k.mean()}
    return r
def load(p): return np.asarray(Image.open(p).convert('RGB').resize((767,1536), Image.LANCZOS))
files = {'ORIG': ORIG}
for a in sys.argv[2:]:
    l, p = a.split('=',1); files[l] = p if p.startswith('/') else D + p
bands = eval(sys.argv[1])
for (y0,y1,x0,x1) in bands:
    print(f'zone y {y0}-{y1} x {x0}-{x1}')
    for l,p in files.items():
        a = load(p); z = a[int(y0*1536):int(y1*1536), int(x0*767):int(x1*767)]
        r = cls(z)
        print(f"  {l:14s} cob {r['cob']*100:5.1f} turq {r['turq']*100:5.1f} pale {r['pale']*100:5.1f} white {r['white']*100:5.1f} lav {r['lav']*100:5.1f} sat {r['sat']:.2f} kept {r['n']:.2f}")

import sys, numpy as np, colorsys
from PIL import Image
def stats(p, y0=0.80, y1=0.93, x0=0.0, x1=1.0, orig=False):
    im=Image.open(p).convert('RGB')
    if orig: im=im.resize((538,1076), Image.LANCZOS)
    a=np.asarray(im).astype(float)/255; H,W,_=a.shape
    r=a[int(y0*H):int(y1*H), int(x0*W):int(x1*W)].reshape(-1,3)
    mx=r.max(1); mn=r.min(1); s=(mx-mn)/np.maximum(mx,1e-6); R,G,B=r.T
    pink=(R>0.6)&(R>G+0.3)&(B>G); white=(s<0.15)&(mx>0.85)
    blue=(~pink)&(~white)&(B>=R)&(B>G*0.9)
    L=0.2126*R+0.7152*G+0.0722*B
    hh=np.array([colorsys.rgb_to_hsv(*q)[0]*360 for q in r[blue][::7]])
    return (f'white {white.mean()*100:4.1f}%  blue {blue.mean()*100:4.1f}%  pink {pink.mean()*100:4.1f}% | blue: lum p25/p50/p75 '
            f'{np.percentile(L[blue],25):.2f}/{np.percentile(L[blue],50):.2f}/{np.percentile(L[blue],75):.2f}  sat med {np.median(s[blue]):.2f}  hue med {np.median(hh):.0f}')
O='Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
print('band y .80-.93 (her base and the water in front of her)')
print('ORIGINAL ', stats(O, orig=True))
for lab,p in zip(sys.argv[1::2], sys.argv[2::2]): print(lab.ljust(9), stats(p))

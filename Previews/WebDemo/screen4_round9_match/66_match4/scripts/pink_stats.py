import sys, numpy as np, colorsys; from PIL import Image
def m(p, orig=False):
    im=Image.open(p).convert('RGB')
    if orig: im=im.resize((538,1076))
    a=np.asarray(im).astype(float)/255; H,W,_=a.shape
    r=a[int(.66*H):int(.86*H), int(.2*W):int(.76*W)].reshape(-1,3)
    R,G,B=r.T; mx=r.max(1); mn=r.min(1); s=(mx-mn)/np.maximum(mx,1e-6)
    pink=(R>0.5)&(R>G+0.25)&(B>G)
    hh=np.array([colorsys.rgb_to_hsv(*q)[0]*360 for q in r[pink][::5]])
    L=0.2126*R+0.7152*G+0.0722*B
    return f'pink {pink.mean()*100:4.1f}%  hue med {np.median(hh):.0f}  sat med {np.median(s[pink]):.2f}  value med {np.median(mx[pink]):.2f}  lum p25/p50/p75 {np.percentile(L[pink],25):.2f}/{np.median(L[pink]):.2f}/{np.percentile(L[pink],75):.2f}'
print('her region y .66-.86, x .20-.76')
print('ORIGINAL ', m('Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg', True))
for lab,p in zip(sys.argv[1::2], sys.argv[2::2]): print(lab.ljust(9), m(p))

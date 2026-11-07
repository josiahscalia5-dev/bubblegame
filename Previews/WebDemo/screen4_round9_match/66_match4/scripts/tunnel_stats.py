import sys, numpy as np; from PIL import Image
def m(p, orig=False):
    im=Image.open(p).convert('RGB')
    if orig: im=im.resize((538,1076))
    a=np.asarray(im).astype(float)/255; H,W,_=a.shape
    r=a[int(.30*H):int(.60*H), int(.2*W):int(.8*W)].reshape(-1,3)
    mx=r.max(1); mn=r.min(1); s=(mx-mn)/np.maximum(mx,1e-6); R,G,B=r.T
    blue=(B>R)&(B>G*0.9)&(s>0.2); L=0.2126*R+0.7152*G+0.0722*B
    return f'blue {blue.mean()*100:4.1f}%  sat med {np.median(s[blue]):.2f}  lum med {np.median(L[blue]):.2f}  sat>0.75 {((s>0.75)&blue).mean()*100:4.1f}%'
print('tunnel y .30-.60, x .2-.8 (page)')
print('ORIGINAL  ', m('Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg', True))
for lab,p in zip(sys.argv[1::2], sys.argv[2::2]): print(lab.ljust(10), m(p))

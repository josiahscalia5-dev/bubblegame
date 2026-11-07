import sys, numpy as np; from PIL import Image
from scipy import ndimage
def her(p, orig=False):
    im=Image.open(p).convert('RGB')
    if orig: im=im.resize((538,1076), Image.LANCZOS)
    a=np.asarray(im).astype(float)/255; H,W,_=a.shape
    r,g,b=a[...,0],a[...,1],a[...,2]
    pink=(r>0.6)&(r>g+0.3)&(b>g)&(r>b-0.05)
    m=np.zeros_like(pink); y0,y1=int(0.6*H),int(0.93*H); m[y0:y1, int(0.15*W):int(0.85*W)]=pink[y0:y1, int(0.15*W):int(0.85*W)]
    m=ndimage.binary_closing(m, iterations=3)
    lab,n=ndimage.label(m); sz=ndimage.sum(m,lab,range(1,n+1)); k=np.argmax(sz)+1; blob=lab==k
    ys,xs=np.nonzero(blob)
    w=[np.ptp(blob[y].nonzero()[0]) if blob[y].any() else 0 for y in range(H)]
    print(f'{"/".join(p.split("/")[-2:])[:28]:28s}: area {blob.sum()/(H*W)*100:.1f}% of frame, x {xs.min()/W:.3f}-{xs.max()/W:.3f} (w {(xs.max()-xs.min())/W:.3f}), y {ys.min()/H:.3f}-{ys.max()/H:.3f} (h {(ys.max()-ys.min())/H:.3f}), max row width {max(w)/W:.3f}')
her('Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg', True)
for p in sys.argv[1:]: her(p)

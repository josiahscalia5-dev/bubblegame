import sys, numpy as np; from PIL import Image
def bands(p, orig=False, y0=None, y1=None):
    im=Image.open(p).convert('RGB')
    if orig: im=im.resize((768,1536), Image.LANCZOS)
    a=np.asarray(im).astype(float)/255; H,W,_=a.shape
    r,g,b=a[...,0],a[...,1],a[...,2]
    pink=(r>0.45)&(r>g+0.25)&(b>g)&(r>b-0.1)
    m=np.zeros_like(pink); x0,x1=int(0.2*W),int(0.76*W)
    ys=np.nonzero(pink[int(0.6*H):int(0.9*H), x0:x1].sum(1)>40)[0]+int(0.6*H)
    top,bot=ys.min(),ys.max()
    out=[]
    for i in range(5):
        ya,yb=int(top+(bot-top)*i/5),int(top+(bot-top)*(i+1)/5)
        sel=pink[ya:yb,x0:x1]; px=a[ya:yb,x0:x1][sel]
        lum=px@[0.2126,0.7152,0.0722]
        out.append(f"{np.mean(px,0).round(2)} lum {np.percentile(lum,25):.2f}/{np.percentile(lum,50):.2f}/{np.percentile(lum,75):.2f}")
    print(p.split('/')[-2][:14], f'top {top/H:.3f} bot {bot/H:.3f}'); [print('  band',i,o) for i,o in enumerate(out)]
bands('Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg', True)
for p in sys.argv[1:]: bands(p)

import sys, numpy as np, cv2
from PIL import Image
W0,H0=538,1076
def load(p): return np.asarray(Image.open(p).convert('RGB').resize((W0,H0),Image.LANCZOS)).astype(np.float32)/255
for p in sys.argv[1:]:
  im=load(p); hsv=cv2.cvtColor(im,cv2.COLOR_RGB2HSV); h,s,v=hsv[...,0],hsv[...,1],hsv[...,2]
  obj=((h>=28)&(h<65)&(s>0.45))|(((h>=290)|(h<20))&(s>0.3)&(v>0.5))
  obj=cv2.dilate(obj.astype(np.uint8),np.ones((9,9),np.uint8))>0
  for sig in (3,5):
    # use blue-channel saturation structure: rings alternate saturated blue and pale
    g=cv2.GaussianBlur(s,(0,0),sig)
    gx=cv2.Sobel(g,cv2.CV_32F,1,0,ksize=3); gy=cv2.Sobel(g,cv2.CV_32F,0,1,ksize=3); mag=np.hypot(gx,gy)
    acc=np.zeros((H0,W0),np.float32); yy,xx=np.mgrid[0:H0,0:W0]
    reg=(yy>0.28*H0)&(yy<0.60*H0)&(xx>0.15*W0)&(xx<0.85*W0)&~obj
    thr=np.percentile(mag[reg],80); m=reg&(mag>thr)
    ys,xs=np.nonzero(m); ux=gx[m]/mag[m]; uy=gy[m]/mag[m]; w=np.ones_like(mag[m])
    for t in np.arange(-250,251,1.0):
        X=np.round(xs+ux*t).astype(int); Y=np.round(ys+uy*t).astype(int)
        ok=(X>=0)&(X<W0)&(Y>=0)&(Y<H0); np.add.at(acc,(Y[ok],X[ok]),w[ok])
    acc=cv2.GaussianBlur(acc,(0,0),8)
    sub=acc.copy(); sub[:int(0.38*H0)]=0; sub[int(0.66*H0):]=0; sub[:, :int(0.3*W0)]=0; sub[:, int(0.75*W0):]=0
    y,x=np.unravel_index(np.argmax(sub),sub.shape)
    print(f"{p.split('/')[-1]:40s} sig {sig} vp ({x/W0:.3f}, {y/H0:.3f})")

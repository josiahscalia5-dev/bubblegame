"""The big right sock's box: white cuff/body (s<.2, v>.82) or violet stripes/toe (h 250-300, s>.35) inside a search box
   round the approved sock (x .58-.90, y .53-.74), largest connected component after closing; fractions of the frame."""
from common import *
from scipy import ndimage as ndi
for lab,p,vp in FR:
    im=load(p); h,s,v=hsv(im); yy,xx=np.mgrid[0:H0,0:W0]
    box=(xx>0.58*W0)&(xx<0.90*W0)&(yy>0.53*H0)&(yy<0.74*H0)
    m=box&(((s<0.2)&(v>0.82))|((h>=250)&(h<300)&(s>0.35)&(v>0.35)))
    m=ndi.binary_opening(ndi.binary_closing(m,iterations=3),iterations=2); lb,n=ndi.label(m)
    k=np.argmax(ndi.sum(m,lb,range(1,n+1)))+1; ys,xs=np.nonzero(lb==k)
    print(f"{lab:10s} sock x {xs.min()/W0:.3f}-{xs.max()/W0:.3f} y {ys.min()/H0:.3f}-{ys.max()/H0:.3f} (w {(xs.max()-xs.min())/W0:.3f} W, h {(ys.max()-ys.min())/H0:.3f} H) ctr ({xs.mean()/W0:.3f}, {ys.mean()/H0:.3f})")

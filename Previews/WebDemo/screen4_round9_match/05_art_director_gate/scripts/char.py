from common import *
from scipy import ndimage as ndi
for lab,p,vp in FR:
    im=load(p); h,s,v=hsv(im); yy,xx=np.mgrid[0:H0,0:W0]
    pink=((h>=290)|(h<20))&(s>0.25)&(v>0.45)&(yy>0.60*H0)&(yy<0.95*H0)&(xx>0.10*W0)&(xx<0.90*W0)
    pink=ndi.binary_closing(pink,iterations=4); pink=ndi.binary_opening(pink,iterations=2)
    labm,n=ndi.label(pink); sizes=ndi.sum(pink,labm,range(1,n+1)); k=np.argmax(sizes)+1; m=labm==k
    ys,xs=np.nonzero(m)
    # width at the widest row and rows
    rows=m.sum(1); top=ys.min()/H0; bot=ys.max()/H0
    # lowest visible pink per column in the central half -> waterline on the body
    cols=[c for c in range(int(0.3*W0),int(0.7*W0)) if m[:,c].any()]
    wl=np.median([np.nonzero(m[:,c])[0].max() for c in cols])/H0
    print(f"{lab:9s} body x {xs.min()/W0:.3f}-{xs.max()/W0:.3f} (w {(xs.max()-xs.min())/W0:.3f}W)  y {top:.3f}-{bot:.3f}  waterline(median lowest pink, x.3-.7) {wl:.3f}  area {m.sum()/(W0*H0)*100:.1f}%  centre x {xs.mean()/W0:.3f}  mean colour {hexc(im[m].mean(0))} S {s[m].mean():.2f} V {v[m].mean():.2f}  top-vp {(top-vp[1]):.3f}H")

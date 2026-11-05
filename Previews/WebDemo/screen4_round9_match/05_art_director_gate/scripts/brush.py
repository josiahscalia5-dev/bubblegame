from common import *
from scipy import ndimage as ndi
for lab,p,vp in FR:
    im=load(p); h,s,v=hsv(im); yy,xx=np.mgrid[0:H0,0:W0]
    hud=0.205 if lab=='approved' else 0.172
    # brush = pink/magenta fur OR its white/blue tufts adjacent; use pink core then fill
    pink=((h>=290)|(h<20))&(s>0.22)&(v>0.45)
    for side,reg in (('left',(xx<0.40*W0)&(yy>0.08*H0)&(yy<0.55*H0)),('right',(xx>0.62*W0)&(yy>0.25*H0)&(yy<0.74*H0))):
        m=pink&reg; m=ndi.binary_closing(m,iterations=6); m=ndi.binary_opening(m,iterations=2)
        labm,n=ndi.label(m)
        if n==0: print(lab,side,'none'); continue
        sizes=ndi.sum(m,labm,range(1,n+1)); k=np.argmax(sizes)+1; mm=labm==k
        ys,xs=np.nonzero(mm); vis=mm&(yy>hud*H0)
        print(f"{lab:9s} {side:5s} brush pink x {xs.min()/W0:.3f}-{xs.max()/W0:.3f} y {ys.min()/H0:.3f}-{ys.max()/H0:.3f}  area {100*mm.sum()/(W0*H0):.1f}% (below HUD {100*vis.sum()/(W0*H0):.1f}%)  ctr ({xs.mean()/W0:.3f},{ys.mean()/H0:.3f})  colour {hexc(np.median(im[mm],0))}")

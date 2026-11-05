from common import *
from scipy import ndimage as ndi
for lab,p,vp in FR:
    im=load(p); h,s,v=hsv(im); yy,xx=np.mgrid[0:H0,0:W0]
    pink=((h>=290)|(h<20))&(s>0.25)&(v>0.45)&(yy>0.60*H0)&(yy<0.95*H0)&(xx>0.10*W0)&(xx<0.90*W0)
    pink=ndi.binary_closing(pink,iterations=4); pink=ndi.binary_opening(pink,iterations=2)
    labm,n=ndi.label(pink); sizes=ndi.sum(pink,labm,range(1,n+1)); m=labm==(np.argmax(sizes)+1)
    row=[]
    for x in np.arange(0.26,0.75,0.04):
        c=int(x*W0); col=np.nonzero(m[:,c-2:c+3].any(1))[0]
        row.append(f"{x:.2f}:{col.max()/H0:.3f}/{col.min()/H0:.3f}" if len(col) else f"{x:.2f}:-")
    print(f"{lab:9s} lowest/highest pink per column: "+'  '.join(row))

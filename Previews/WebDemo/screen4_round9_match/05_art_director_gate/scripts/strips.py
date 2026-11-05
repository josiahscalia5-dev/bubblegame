"""The opening's edges: class shares in the left and right frame strips (x < .08, x > .92) between the rim and the bank
   (y .40-.76), and the bevel band under the rim at the top (x .30-.70, y .25-.31). Art Director's HSV classes."""
from common import *
for lab,p,vp in FR[:2]:
    im=load(p); cl,h,s,v=classes(im); yy,xx=np.mgrid[0:H0,0:W0]
    blue=cl['azure']|cl['electric blue']|cl['deep cobalt']|cl['pale blue']
    for k,m in (('left strip x<.08 y.40-.76',(xx<0.08*W0)&(yy>0.40*H0)&(yy<0.76*H0)),('right strip x>.92 y.40-.76',(xx>0.92*W0)&(yy>0.40*H0)&(yy<0.76*H0)),
                ('top bevel x.30-.70 y.25-.31',(xx>0.30*W0)&(xx<0.70*W0)&(yy>0.25*H0)&(yy<0.31*H0))):
        m=m&~cl['gold']&~cl['pink']; n=max(m.sum(),1)
        print(f"{lab:10s} {k:28s} lavender {100*(cl['lavender']&m).sum()/n:4.1f} blue {100*(blue&m).sum()/n:4.1f} (deep {100*(cl['deep cobalt']&m).sum()/n:4.1f}) white {100*(cl['white']&m).sum()/n:4.1f} S {s[m].mean():.2f} med {hexc(np.median(im[m],0))} lum-std {(v[m]).std():.3f}")

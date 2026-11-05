"""Class shares in the user's six target zones (precision kit 10_TARGET_ZONES_ANNOTATED.jpg, boxes read off that image,
   fractions of 767 x 1536), approved vs merged. HUD buttons masked in the game frame for zones 3 and 6."""
from common import *
Z={'1 housing':(0.013,0.213,0.986,0.304),'2 whirlpool':(0.081,0.307,0.919,0.667),'3 swimmer':(0.086,0.684,0.924,0.914),
   '4 objects':(0.047,0.434,0.971,0.728),'5 brushes':(0.01,0.24,0.986,0.63),'6 foreground':(0.005,0.781,0.99,0.967)}
KEYS=['white','pale blue','azure','electric blue','deep cobalt','lavender','gold','pink']
for lab,p,vp in FR[:2]:
    im=load(p); cl,h,s,v=classes(im); yy,xx=np.mgrid[0:H0,0:W0]
    hudb=np.zeros((H0,W0),bool)
    if lab!='approved': hudb|=(yy>0.835*H0)&(((xx>0.03*W0)&(xx<0.33*W0))|((xx>0.67*W0)&(xx<0.98*W0)))|(yy>0.885*H0)&(xx>0.33*W0)&(xx<0.67*W0)&(yy<0.98*H0)
    else: hudb|=(yy>0.88*H0)&((xx<0.40*W0)|(xx>0.70*W0))
    print('==',lab)
    for k,(x0,y0,x1,y1) in Z.items():
        m=(xx>=x0*W0)&(xx<x1*W0)&(yy>=y0*H0)&(yy<y1*H0)&~hudb; n=max(m.sum(),1)
        print(f"  {k:13s} S {s[m].mean():.2f} V {v[m].mean():.2f} med {hexc(np.median(im[m],0))} | "+' '.join(f"{c.split()[0][:5]} {100*(cl[c]&m).sum()/n:4.1f}" for c in KEYS))

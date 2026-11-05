from common import *
from scipy import ndimage as ndi
KEYS=['white','pale blue','azure','electric blue','deep cobalt','lavender']
for lab,p,(vx,vy) in FR:
    im=load(p); cl,h,s,v=classes(im); yy,xx=np.mgrid[0:H0,0:W0]
    hudb=np.zeros((H0,W0),bool)
    if lab!='approved':
        hudb|=(yy>0.835*H0)&(((xx>0.03*W0)&(xx<0.33*W0))|((xx>0.67*W0)&(xx<0.98*W0)))
        hudb|=(yy>0.885*H0)
    else: hudb|=(yy>0.875*H0)
    violet=(h>=245)&(h<300)&(s>0.25)&(v>0.45)
    satblue=(h>=180)&(h<240)&(s>=0.45)
    lum=(0.2126*im[...,0]+0.7152*im[...,1]+0.0722*im[...,2]).astype(np.float32)/255
    R={'under body x.33-.67 y.835-.875':(yy>0.835*H0)&(yy<0.875*H0)&(xx>0.33*W0)&(xx<0.67*W0),
       'foam bank y.80-.875 all x':(yy>0.80*H0)&(yy<0.875*H0)}
    print('==',lab)
    for k,m0 in R.items():
        m=m0&~hudb&~cl['gold']; n=max(m.sum(),1)
        sh={c:100*(cl[c]&m).sum()/n for c in KEYS}
        wm=cl['white']&m; labw,nw=ndi.label(wm); szs=ndi.sum(wm,labw,range(1,nw+1)) if nw else np.array([0])
        print(f"  {k:30s} n {n} med {hexc(np.median(im[m],0))} S {s[m].mean():.2f} V {v[m].mean():.2f} | "+' '.join(f"{c.split()[0][:5]} {x:4.1f}" for c,x in sh.items())+f" | pink {100*(cl['pink']&m).sum()/n:4.1f} violet {100*(violet&m).sum()/n:4.1f} satblue {100*(satblue&m).sum()/n:4.1f} | white blobs>=20px {int((szs>=20).sum())} hp5 {(lum-cv2.GaussianBlur(lum,(0,0),5))[m].std():.3f} hi {100*((v>0.95)&(s<0.15)&m).sum()/n:.1f}")

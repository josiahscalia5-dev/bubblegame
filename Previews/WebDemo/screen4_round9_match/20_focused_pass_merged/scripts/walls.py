from common import *
from scipy import ndimage as ndi
KEYS=['white','pale blue','azure','electric blue','deep cobalt','lavender']
for lab,p,(vx,vy) in FR:
    im=load(p); cl,h,s,v=classes(im); yy,xx=np.mgrid[0:H0,0:W0]
    hud=0.205 if lab=='approved' else 0.172
    rr=np.hypot((xx-vx*W0)/W0,(yy-vy*H0)/W0); ang=np.rad2deg(np.arctan2(-(yy-vy*H0),xx-vx*W0))
    lum=(0.2126*im[...,0]+0.7152*im[...,1]+0.0722*im[...,2]).astype(np.float32)/255
    hp2=lum-cv2.GaussianBlur(lum,(0,0),1.5); hp6=lum-cv2.GaussianBlur(lum,(0,0),5)
    obj=cl['gold']|cl['pink']
    hi=(v>0.95)&(s<0.15)
    labm,n=ndi.label(hi); sz=ndi.sum(hi,labm,range(1,n+1)); small=np.isin(labm,np.nonzero(sz<=12)[0]+1)
    R={'upper wall r.12-.45 a30-150':(rr>0.12)&(rr<0.45)&(ang>30)&(ang<150)&(yy>hud*H0),
       'side walls r.15-.45 |a|<30|>150':(rr>0.15)&(rr<0.45)&((np.abs(ang)<30)|(np.abs(ang)>150))&(yy<0.66*H0),
       'mid vortex r.08-.20':(rr>0.08)&(rr<0.20),
       'centre r<.06':rr<0.06,
       'floor ahead y.58-.68 x.3-.75':(yy>0.58*H0)&(yy<0.68*H0)&(xx>0.3*W0)&(xx<0.75*W0),
       'play area y.21-.83':(yy>max(hud,0.21)*H0)&(yy<0.83*H0)}
    print('==',lab)
    for k,m0 in R.items():
        m=m0&~obj; n=max(m.sum(),1)
        sh={c:100*(cl[c]&m).sum()/n for c in KEYS}; other=100-sum(sh.values())
        warm=100*(m&(((h>=15)&(h<70)&(s>0.12))|((h>=320)|(h<15))&(s>0.12)&(s<=0.3))).sum()/n
        print(f"  {k:32s} S {s[m].mean():.2f} V {v[m].mean():.2f} med {hexc(np.median(im[m],0))} | "+' '.join(f"{c.split()[0][:5]} {x:4.1f}" for c,x in sh.items())+f" oth {other:4.1f} warm {warm:4.1f} | hi {100*(hi&m).sum()/n:4.1f}% sparkle {100*(small&m).sum()/n:4.2f}% | hp1.5 {hp2[m].std():.3f} hp5 {hp6[m].std():.3f} | obj {100*(m0&obj).sum()/max(m0.sum(),1):.0f}%")

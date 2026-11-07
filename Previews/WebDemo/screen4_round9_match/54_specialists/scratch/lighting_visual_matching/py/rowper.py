# white-dash row periodicity on the floor: white mask unwrapped in log r round the vanishing point (0.50, 0.54); the
# autocorrelation of the white share per log-r bin; focus's dashes repeat every 1/9 ln r
import sys, numpy as np, cv2
from PIL import Image
D='/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/52_diagnosis/ablation/'
ORIG='/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
for arg in sys.argv[1:]:
    l,p=arg.split('=',1); p = ORIG if p=='ORIG' else (p if p.startswith('/') else D+p)
    a=np.asarray(Image.open(p).convert('RGB').resize((767,1536),Image.LANCZOS))
    vp=(0.528,0.532) if l.startswith('ORIG') else (0.50,0.54)
    H,W=1536,767; ys,xs=np.mgrid[0:H,0:W]
    dx=(xs-vp[0]*W)/W; dy=(ys-vp[1]*H)/W; r=np.hypot(dx,dy); ang=np.degrees(np.arctan2(-dy,dx))
    hsv=cv2.cvtColor(a,cv2.COLOR_RGB2HSV).astype(float); s,v=hsv[...,1]/255,hsv[...,2]/255
    white=(s<0.12)&(v>0.88)
    sel=(ang<-60)&(ang>-120)&(r>0.2)&(r<0.75)&(ys<0.80*H)   # the floor ahead, below the centre, above her lower body
    lr=np.log(r[sel]); w=white[sel].astype(float)
    bins=np.arange(np.log(0.2),np.log(0.75),0.01); idx=np.digitize(lr,bins)
    prof=np.array([w[idx==i].mean() if (idx==i).any() else 0 for i in range(1,len(bins))])
    prof=prof-prof.mean(); ac=np.correlate(prof,prof,'full')[len(prof)-1:]; ac/=ac[0] if ac[0] else 1
    lag=np.arange(len(ac))*0.01
    k=(lag>=0.08)&(lag<=0.14)
    print(f"{l:10s} floor-ahead white {w.mean()*100:5.1f}%  autocorr peak at lag {lag[k][np.argmax(ac[k])]:.2f} ln = {ac[k].max():+.2f} (lags 0.08-0.14)")

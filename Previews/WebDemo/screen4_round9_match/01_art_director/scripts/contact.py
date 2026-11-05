from common import *
from scipy import ndimage as ndi
KEYS=['white','pale blue','azure','electric blue','deep cobalt','lavender']
for lab,p,(vx,vy) in FR:
    im=load(p); cl,h,s,v=classes(im); yy,xx=np.mgrid[0:H0,0:W0]
    lum=(0.2126*im[...,0]+0.7152*im[...,1]+0.0722*im[...,2]).astype(np.float32)/255
    gm=np.hypot(cv2.Sobel(lum,cv2.CV_32F,1,0),cv2.Sobel(lum,cv2.CV_32F,0,1))
    violet=(h>=245)&(h<300)&(s>0.25)&(v>0.45)
    satblue=(h>=180)&(h<240)&(s>=0.45)
    R={'sides+under y.70-.835':(yy>0.70*H0)&(yy<0.835*H0),
       'contact x.30-.70 y.78-.835':(yy>0.78*H0)&(yy<0.835*H0)&(xx>0.30*W0)&(xx<0.70*W0),
       'left of char x<.24 y.70-.835':(yy>0.70*H0)&(yy<0.835*H0)&(xx<0.24*W0),
       'right of char x>.74 y.70-.835':(yy>0.70*H0)&(yy<0.835*H0)&(xx>0.74*W0)}
    print('==',lab)
    for k,m0 in R.items():
        m=m0&~cl['gold']; n=max(m.sum(),1)
        sh={c:100*(cl[c]&m).sum()/n for c in KEYS}
        wm=cl['white']&m; edge=cv2.dilate(wm.astype(np.uint8),np.ones((3,3),np.uint8)).astype(bool)&~cv2.erode(wm.astype(np.uint8),np.ones((3,3),np.uint8)).astype(bool)&m
        labw,nw=ndi.label(wm); szs=ndi.sum(wm,labw,range(1,nw+1)) if nw else np.array([0])
        print(f"  {k:30s} med {hexc(np.median(im[m],0))} S {s[m].mean():.2f} | "+' '.join(f"{c.split()[0][:5]} {x:4.1f}" for c,x in sh.items())+f" | pink {100*(cl['pink']&m).sum()/n:4.1f} violet {100*(violet&m).sum()/n:4.1f} satblue {100*(satblue&m).sum()/n:4.1f} | white blobs {nw} (>=20px {int((szs>=20).sum())}) edge-grad {gm[edge].mean() if edge.any() else 0:.2f} hp5 {(lum-cv2.GaussianBlur(lum,(0,0),5))[m].std():.3f}")

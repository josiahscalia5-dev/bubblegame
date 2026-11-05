from common import *
KEYS=['white','pale blue','azure','electric blue','deep cobalt','lavender']
for lab,p,(vx,vy) in FR:
    im=load(p); cl,h,s,v=classes(im); yy,xx=np.mgrid[0:H0,0:W0]
    hud=0.205 if lab=='approved' else 0.172
    rr=np.hypot((xx-vx*W0)/W0,(yy-vy*H0)/W0)
    lum=(0.2126*im[...,0]+0.7152*im[...,1]+0.0722*im[...,2]).astype(np.float32)/255
    hp=np.abs(lum-cv2.GaussianBlur(lum,(0,0),4))
    flat=cl['lavender']&(cv2.GaussianBlur(hp,(0,0),3)<0.02)
    R={'top band y hud-.30 all x':(yy>hud*H0)&(yy<0.30*H0),
       'left strip x<.12 y.25-.66':(xx<0.12*W0)&(yy>0.25*H0)&(yy<0.66*H0),
       'whole frame y.17-.835':(yy>0.172*H0)&(yy<0.835*H0)}
    print('==',lab)
    for k,m0 in R.items():
        m=m0&~(cl['gold']|cl['pink']); n=max(m.sum(),1)
        print(f"  {k:28s} lavender {100*(cl['lavender']&m).sum()/n:4.1f}%  flat-lavender {100*(flat&m).sum()/n:4.1f}%  lav median {hexc(np.median(im[m&cl['lavender']],0)) if (m&cl['lavender']).any() else '-'} S {np.median(s[m&cl['lavender']]) if (m&cl['lavender']).any() else 0:.2f}  satblue {100*(m&(h>=180)&(h<240)&(s>=0.45)).sum()/n:4.1f}%")

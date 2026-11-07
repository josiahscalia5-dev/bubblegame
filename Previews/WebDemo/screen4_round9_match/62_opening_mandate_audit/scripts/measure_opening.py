# Opening audit measurements (read-only): ORIGINAL scaled uniformly to 1076 px tall vs the accepted page captures (538 x 1076,
# HUD included; s3_shot.cjs, seed 7). Fractions of the frame. (A gold-rim and a gem detector were tried and dropped: unreliable.) Usage: python measure_opening.py <frames_dir>
import sys, cv2, numpy as np
O='Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
F=sys.argv[1]
def load(p):
    im=cv2.imread(p)
    if im.shape[0]!=1076: im=cv2.resize(im,(round(im.shape[1]*1076/im.shape[0]),1076),interpolation=cv2.INTER_AREA)
    return im
def hsv(im):
    h=cv2.cvtColor(im,cv2.COLOR_BGR2HSV_FULL).astype(np.float32); return h[...,0]*360/256,h[...,1]/255,h[...,2]/255
frames={'ORIGINAL':O,'ACC t0':f'{F}/t0.png','ACC +1s':f'{F}/t1.0.png','ACC +2s':f'{F}/t2.0.png','ACC +3s':f'{F}/t3.0.png'}
for k,p in frames.items():
    im=load(p); H,S,V=hsv(im); Hh,Ww=H.shape
    lav=((H>=250)&(H<300)&(S>0.12)&(S<0.55)&(V>0.6))[:int(.36*Hh)]; lavp=100*lav[int(.16*Hh):].mean()
    # her: the largest pink blob in y .60-.95
    m=(((H>=300)|(H<10))&(S>0.35)&(V>0.45)).astype(np.uint8); m[:int(.60*Hh)]=0; m[int(.95*Hh):]=0
    n,l,st,ce=cv2.connectedComponentsWithStats(cv2.morphologyEx(m,cv2.MORPH_CLOSE,np.ones((5,5),np.uint8)))
    i=1+int(np.argmax(st[1:,4])) if n>1 else 0; x,y,w,h,a=st[i]
    prof=[(l[y+int(f*h)]==i).sum()/Ww for f in (0.08,0.16,0.25,0.5)]
    print(f'{k:9s} | lavender housing y .16-.36: {lavp:4.1f} % | her box x {x/Ww:.2f}-{(x+w)/Ww:.2f} y {y/Hh:.2f}-{(y+h)/Hh:.2f} (w {w/Ww:.2f}), width at 8/16/25/50 % below her top {" / ".join(f"{q:.2f}" for q in prof)}')

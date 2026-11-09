from common import *
import cv2
for p,name,uim in [(A,'approved',ui_approved()),(G,'u206',ui_game()),(T,'tap',ui_tap())]:
    img=load(p); h,s,v=hsv(img)
    g=(img.mean(-1)*255).astype(np.uint8); edges=cv2.Canny(g,60,140)>0
    for side,b in [('upper-left  x0-.32 y.26-.47',box(0.0,0.26,0.32,0.47)),('upper-right x.68-1 y.26-.47',box(0.68,0.26,1.0,0.47)),('low-left x.16-.36 y.47-.56',box(0.16,0.47,0.36,0.56)),('low-right x.64-.84 y.47-.56',box(0.64,0.47,0.84,0.56))]:
        m=np.zeros((H,W),bool); m[b]=True; m&=~uim
        hh,ss,vv=h[m],s[m],v[m]
        gold=((hh>=28)&(hh<62)&(ss>0.45)&(vv>0.55)).mean()*100
        pink=((hh>=300)&(hh<350)&(ss>0.45)&(vv>0.55)).mean()*100
        glow=((hh>=255)&(hh<320)&(ss<0.55)&(vv>0.9)).mean()*100
        cob=((hh>=205)&(hh<250)&(ss>0.55)).mean()*100
        ctl=(((hh>=160)&(hh<200)&(ss>0.4)&(vv>0.7))|((hh>=50)&(hh<70)&(ss>0.5)&(vv>0.9))).mean()*100
        print(f"{name:8s} {side}: visible {m.sum()/((b[0].stop-b[0].start)*(b[1].stop-b[1].start))*100:3.0f}% | gold {gold:4.1f} pink {pink:4.1f} bright glow {glow:4.1f} cobalt {cob:4.1f} cyan/yellow lights {ctl:3.1f} | edges {edges[m].mean()*100:4.1f}%")

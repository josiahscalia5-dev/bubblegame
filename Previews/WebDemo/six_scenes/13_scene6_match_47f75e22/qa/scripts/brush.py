from common import *
from scipy import ndimage as nd
def rowclass(img,x0,x1,name,side,uim):
    h,s,v=hsv(img)
    print(f"{name} {side} strip x {x0}-{x1}: per 0.02H row, shares pink(H300-350,S>.4,V>.5) / white(S<.2,V>.8) / blue(H195-240,S>.4) / gold(H30-60,S>.45,V>.55) / lav(H250-300,S.15-.6)")
    line=[]
    for fy in np.arange(0.24,0.86,0.02):
        b=box(x0,fy,x1,fy+0.02); hh,ss,vv,u=h[b],s[b],v[b],uim[b]
        if u.mean()>0.5: line.append(f"{fy:.2f}:UI"); continue
        pk=((hh>=300)&(hh<350)&(ss>0.4)&(vv>0.5)).mean(); wt=((ss<0.2)&(vv>0.8)).mean(); bl=((hh>=195)&(hh<240)&(ss>0.4)).mean(); gd=((hh>=30)&(hh<60)&(ss>0.45)&(vv>0.55)).mean(); lv=((hh>=250)&(hh<300)&(ss>0.15)&(ss<0.6)).mean()
        line.append(f"{fy:.2f}:{pk*100:3.0f}/{wt*100:3.0f}/{bl*100:3.0f}/{gd*100:3.0f}/{lv*100:3.0f}")
    for i in range(0,len(line),6): print('   '+'  '.join(line[i:i+6]))
for p,name,uim in [(A,'approved',ui_approved()),(G,'u206',ui_game()),(T,'tap',ui_tap())]:
    img=load(p)
    rowclass(img,0.0,0.16,name,'LEFT',uim); rowclass(img,0.84,1.0,name,'RIGHT',uim)

import numpy as np, cv2
from PIL import Image
R='/home/user/bubblegame/Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/'
G='/home/user/bubblegame/Previews/WebDemo/six_scenes/09_s56_ac4e3449/'
def box(p, seed):
    a=np.asarray(Image.open(p).convert('RGB').resize((864,1536),Image.LANCZOS))
    hsv=cv2.cvtColor(a,cv2.COLOR_RGB2HSV).astype(float); h=hsv[...,0]*2; s=hsv[...,1]/255; v=hsv[...,2]/255
    m=(((h>=300)|(h<345))&(h>=300)&(s>0.45)&(v>0.55)).astype(np.uint8)
    m=cv2.morphologyEx(m,cv2.MORPH_OPEN,np.ones((5,5),np.uint8))
    n,lab,st,cen=cv2.connectedComponentsWithStats(m)
    l=lab[seed[1],seed[0]]
    if l==0:
        # nearest big component
        d=[(abs(cen[i][0]-seed[0])+abs(cen[i][1]-seed[1]),i) for i in range(1,n) if st[i,4]>5000]; l=min(d)[1]
    x,y,w,hh,area=st[l]
    return dict(x0=int(x),y0=int(y),x1=int(x+w),y1=int(y+hh),w=int(w),h=int(hh),cx=round(float(cen[l][0])),cy=round(float(cen[l][1])),area=int(area))
print('S5 ref ',box(R+'05_Into_The_Laundry_Tunnel.png',(430,1000)))
print('S5 tap ',box(G+'s56_tap.png',(430,1000)))
print('S6 ref ',box(R+'06_Swim_Collect_Avoid_Enemies.png',(430,1050)))
print('S6 u206',box(G+'s56_206.png',(430,950)))

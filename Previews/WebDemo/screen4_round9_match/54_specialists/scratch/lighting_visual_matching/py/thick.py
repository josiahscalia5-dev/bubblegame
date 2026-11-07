# white pieces on the floor ahead (x 0.15-0.85, y 0.58-0.80 of the 767 x 1536 frame; gold / pink left out): count, the
# median area, and thickness = 2 x the largest inscribed radius (distance transform), median and 90th percentile
import sys, numpy as np, cv2
from PIL import Image
D='/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/52_diagnosis/ablation/'
ORIG='/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
box=eval(sys.argv[1])
for arg in sys.argv[2:]:
    l,p=arg.split('=',1); p = ORIG if p=='ORIG' else (p if p.startswith('/') else D+p)
    a=np.asarray(Image.open(p).convert('RGB').resize((767,1536),Image.LANCZOS))
    y0,y1,x0,x1=box; z=a[int(y0*1536):int(y1*1536),int(x0*767):int(x1*767)]
    hsv=cv2.cvtColor(z,cv2.COLOR_RGB2HSV).astype(float); h,s,v=hsv[...,0]*2,hsv[...,1]/255,hsv[...,2]/255
    k=~(((h>20)&(h<65)&(s>0.35))|(((h>=290)|(h<=15))&(s>0.3)))
    white=((s<0.12)&(v>0.88)&k).astype(np.uint8)
    n,lab,st,_=cv2.connectedComponentsWithStats(white,8)
    dt=cv2.distanceTransform(white,cv2.DIST_L2,3)
    th=[];ar=[]
    for i in range(1,n):
        if st[i,4]<20: continue
        th.append(2*dt[lab==i].max()); ar.append(st[i,4])
    th=np.array(th) if th else np.zeros(1); ar=np.array(ar) if ar else np.zeros(1)
    print(f"{l:12s} white {white[k.astype(bool)].mean()*100:5.1f}%  pieces>=20px {len(ar):3d}  area med {np.median(ar):5.0f}  thickness med {np.median(th):4.1f} px p90 {np.percentile(th,90):4.1f} px")

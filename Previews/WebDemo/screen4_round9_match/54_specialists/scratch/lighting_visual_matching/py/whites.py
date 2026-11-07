import sys, numpy as np, cv2
from PIL import Image
ORIG='/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
D='/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/52_diagnosis/ablation/'
y0,y1,x0,x1 = eval(sys.argv[1])
files={'ORIG':ORIG}
for a in sys.argv[2:]:
    l,p=a.split('=',1); files[l]=p if p.startswith('/') else D+p
for l,p in files.items():
    a=np.asarray(Image.open(p).convert('RGB').resize((767,1536),Image.LANCZOS))
    z=a[int(y0*1536):int(y1*1536), int(x0*767):int(x1*767)]
    hsv=cv2.cvtColor(z,cv2.COLOR_RGB2HSV).astype(float); h,s,v=hsv[...,0]*2,hsv[...,1]/255,hsv[...,2]/255
    gold=(h>20)&(h<65)&(s>0.35); pink=((h>=290)|(h<=15))&(s>0.3); k=~(gold|pink)
    white=((s<0.12)&(v>0.88))&k
    n,lab,st,cen=cv2.connectedComponentsWithStats(white.astype(np.uint8),8)
    areas=st[1:,4]; big=areas[areas>=12]
    # elongation of components >= 12 px: via moments
    el=[]
    for i in range(1,n):
        if st[i,4]<12: continue
        ys,xs=np.nonzero(lab==i); c=np.cov(np.vstack([xs,ys])) if len(xs)>2 else None
        if c is None: continue
        ev=np.linalg.eigvalsh(c); el.append(np.sqrt(max(ev[1],1e-6)/max(ev[0],1e-3)))
    el=np.array(el) if el else np.array([0])
    cob=((h>=205)&(h<=235)&(s>=0.6)&(v>=0.45)&(v<=0.92))[k].mean(); tq=((h>=180)&(h<205)&(s>=0.45)&(v>0.55))[k].mean()
    pale=((h>=185)&(h<=235)&(s>=0.12)&(s<0.45)&(v>0.75))[k].mean(); lav=((h>235)&(h<290)&(s>0.12)&(v>0.5))[k].mean()
    print(f"{l:10s} white {white[k].mean()*100:5.1f}% pieces>=12px {len(big):3d} median area {np.median(big) if len(big) else 0:6.0f} p90 {np.percentile(big,90) if len(big) else 0:6.0f} elong med {np.median(el):4.1f} p90 {np.percentile(el,90):4.1f} | cob {cob*100:4.1f} turq {tq*100:4.1f} pale {pale*100:4.1f} lav {lav*100:4.1f} sat {s[k].mean():.2f}")

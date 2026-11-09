from common import *
from scipy import ndimage as nd
def hx(c): c=np.clip(c,0,1); return '#%02x%02x%02x'%tuple(int(x*255+0.5) for x in c)
for p,name,boxes in [(A,'approved',[(0.30,0.47,0.44,0.54),(0.58,0.475,0.70,0.54)]),(G,'u206',[(0.44,0.445,0.60,0.53)])]:
    img=load(p); h,s,v=hsv(img)
    for b in boxes:
        m=np.zeros((H,W),bool); m[box(*b)]=True
        body=m&(h>=230)&(h<290)&(s>0.3)
        print(f"{name} enemy body in {b}: median {hx(np.median(img[body],0))} H {np.median(h[body]):.0f} S {np.median(s[body]):.2f} V {np.median(v[body]):.2f}; darkest-20% {hx(np.percentile(img[body],20,axis=0))}")
# coin sizes: fit each gold component in the game frames individually using a stricter mask + distance transform peaks
for p,name in [(G,'u206'),(T,'tap'),(A,'approved')]:
    img=load(p); h,s,v=hsv(img)
    gold=(h>=30)&(h<62)&(s>0.40)&(v>0.6)
    gold=nd.binary_fill_holes(nd.binary_closing(gold,iterations=3))
    dt=nd.distance_transform_edt(gold)
    # local maxima of the distance transform = disc centres; radius = dt value
    mx=(dt==nd.maximum_filter(dt,size=41))&(dt>22)
    ys,xs=np.nonzero(mx); r=dt[ys,xs]
    o=np.argsort(-r); seen=[]
    for i in o:
        if any((xs[i]-a)**2+(ys[i]-b)**2<(0.8*max(r[i],rr))**2 for a,b,rr in seen): continue
        seen.append((xs[i],ys[i],r[i]))
    print(name,'gold discs (inscribed circle): '+'; '.join(f"({x/W:.2f},{y/H:.3f}) d {2*rr/W:.3f}W" for x,y,rr in seen[:8]))

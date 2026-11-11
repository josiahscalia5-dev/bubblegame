from common import *
from scipy import ndimage as nd
for p,name,uim in [(A,'approved',ui_approved()),(G,'u206',ui_game()),(T,'tap',ui_tap())]:
    img=load(p); h,s,v=hsv(img)
    hero=np.asarray(Image.open(f'hero_{name}.png'))>0
    m=np.zeros((H,W),bool); m[box(0.15,0.70,0.85,0.795)]=True; m&=~uim&~nd.binary_dilation(hero,iterations=6)
    L=img@np.array([0.2126,0.7152,0.0722])
    p5,p50,p95=np.percentile(L[m],[5,50,95])
    deep=(m&(v<0.80)&(s>0.5)).sum()/m.sum()*100
    pale=m&(s<0.25)&(v>0.8)
    thin=pale&~nd.binary_opening(pale,iterations=2)
    # orientation / scale of detail: dominant spatial frequency via gradient magnitude mean
    gy,gx=np.gradient(nd.gaussian_filter(L,1.0)); gm=np.hypot(gx,gy)
    print(f"{name:8s} fg water: luminance p5 {p5:.2f} p50 {p50:.2f} p95 {p95:.2f} (spread {p95-p5:.2f}); deep saturated (S>.5,V<.8) {deep:.1f}%; pale {pale.sum()/m.sum()*100:.1f}% of which thin (<~5px) {thin.sum()/max(1,pale.sum())*100:.0f}%; mean gradient {gm[m].mean()*100:.2f}")
    # splash at hero base: sides
    ys,xs=np.nonzero(hero); y1=ys.max(); x0,x1=xs.min(),xs.max()
    for nm,b in [('left of base',(slice(int(y1-0.06*H),int(y1+0.01*H)),slice(max(0,x0-60),x0+20))),('right of base',(slice(int(y1-0.06*H),int(y1+0.01*H)),slice(x1-20,min(W,x1+60))))]:
        r=np.zeros((H,W),bool); r[b]=True; r&=~hero&~uim
        pl=r&(s<0.25)&(v>0.8); th=pl&~nd.binary_opening(pl,iterations=2)
        print(f"     {nm}: pale {pl.sum()/max(1,r.sum())*100:.0f}% (thin {th.sum()/max(1,pl.sum())*100:.0f}%)")
    # lower foreground below the hero to the UI (game only: y .80-.87)
    if name!='approved':
        r=np.zeros((H,W),bool); r[box(0.0,0.795,1.0,0.87)]=True; r&=~uim
        pl=r&(s<0.25)&(v>0.8); thick=nd.binary_erosion(pl,iterations=4)
        print(f"     lowest water y .795-.87: pale {pl.sum()/r.sum()*100:.1f}%, thick {thick.sum()/max(1,pl.sum())*100:.0f}% of it")

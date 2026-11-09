from common import *
from scipy import ndimage as nd
def srgb2lin(c): return np.where(c<=0.04045,c/12.92,((c+0.055)/1.055)**2.4)
def hx(c): c=np.clip(c,0,1); return '#%02x%02x%02x'%tuple(int(x*255+0.5) for x in c)
def lin(c): l=srgb2lin(np.clip(c,0,1)); return '(%.3f,%.3f,%.3f)'%tuple(l)
for p,name,uim in [(A,'approved',ui_approved()),(G,'u206',ui_game()),(T,'tap',ui_tap())]:
    img=load(p); h,s,v=hsv(img)
    hero=np.asarray(Image.open(f'hero_{name}.png'))>0
    m=np.zeros((H,W),bool); m[box(0.15,0.70,0.85,0.795)]=True
    m&=~uim&~nd.binary_dilation(hero,iterations=6)
    blue=m&(h>=170)&(h<250)&(s>=0.35)
    px=img[blue]; L=px@np.array([0.2126,0.7152,0.0722])
    o=np.argsort(L); n=len(o)
    q=lambda a,b: px[o[int(a*n):int(b*n)]].mean(0)
    print(f"{name}: water body (blue, S>=.35) n={n}: troughs (darkest 15%) {hx(q(0,.15))} lin{lin(q(0,.15))}; body (40-60%) {hx(q(.4,.6))} lin{lin(q(.4,.6))}; highlights (top 10%) {hx(q(.9,1))} lin{lin(q(.9,1))}")
    # thin vs thick pale
    pale=m&(s<0.25)&(v>0.8)
    thick=nd.binary_erosion(pale,iterations=4)
    soft=m&(s>=0.25)&(s<0.5)&(v>0.75)
    print(f"   pale {pale.sum()/m.sum()*100:.1f}% of region; share of pale that is THICK (survives 4px erosion) {thick.sum()/max(1,pale.sum())*100:.1f}%; soft pastel halo (S .25-.5, V>.75) {soft.sum()/m.sum()*100:.1f}%")
    # vanishing point: blurred luminance peak in centre
    Lm=img.mean(-1); Lb=nd.gaussian_filter(Lm,8)
    c=np.zeros((H,W),bool); c[box(0.30,0.30,0.70,0.58)]=True; c&=~uim
    Lc=np.where(c,Lb,-1); iy,ix=np.unravel_index(np.argmax(Lc),Lc.shape)
    # centroid of top 0.3% brightest in region
    thr=np.percentile(Lb[c],99.7); ys,xs=np.nonzero(c&(Lb>=thr))
    print(f"   brightest point of tunnel (blur 8px) ({ix/W:.3f},{iy/H:.3f}); top-0.3% centroid ({xs.mean()/W:.3f},{ys.mean()/H:.3f})")

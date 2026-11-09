from common import *
from scipy import ndimage as nd
def hx(c): c=np.clip(c,0,1); return '#%02x%02x%02x'%tuple(int(x*255+0.5) for x in c)
def comps(mask,minpx,name,img,kind,filt=None):
    lab,n=nd.label(mask); out=[]
    for i,sl in enumerate(nd.find_objects(lab)):
        cm=lab[sl]==i+1; a=cm.sum()
        if a<minpx: continue
        y0,y1=sl[0].start/H,sl[0].stop/H; x0,x1=sl[1].start/W,sl[1].stop/W
        w=(sl[1].stop-sl[1].start); hh=(sl[0].stop-sl[0].start)
        fill=a/(w*hh)
        if filt and not filt(w,hh,fill,x0,y0): continue
        out.append((a,x0,y0,x1,y1,w,hh,fill,hx(img[sl][cm].mean(0))))
    out.sort(key=lambda t:-t[0])
    for a,x0,y0,x1,y1,w,hh,fill,c in out[:8]:
        print(f"  {name} {kind}: bbox x {x0:.3f}-{x1:.3f} y {y0:.3f}-{y1:.3f}  w {w/W:.3f}W ({w}px) h {hh}px fill {fill:.2f} centre ({(x0+x1)/2:.3f},{(y0+y1)/2:.3f}) mean {c}")
for p,name,uim in [(A,'approved',ui_approved()),(G,'u206',ui_game()),(T,'tap',ui_tap())]:
    img=load(p); h,s,v=hsv(img)
    # gold discs (coins)
    gold=(h>=30)&(h<62)&(s>0.45)&(v>0.55)&~uim
    gold=nd.binary_closing(gold,iterations=4); gold=nd.binary_fill_holes(gold)
    comps(gold,600,name,img,'gold disc',filt=lambda w,hh,f,x0,y0: 0.6<w/hh<1.6 and f>0.55)
    # cobalt gear: saturated blue, in upper half (y .25-.58), not water
    gear=(h>=212)&(h<250)&(s>0.55)&(v>0.25)&~uim
    reg=np.zeros((H,W),bool); reg[box(0,0.25,1,0.58)]=True
    g2=nd.binary_closing(gear&reg,iterations=3)
    comps(g2,1500,name,img,'blue blob (gear?)')
    # enemies: purple-blue round, centre region
    en=(h>=235)&(h<285)&(s>0.30)&(v>0.35)&(v<0.97)&~uim
    reg=np.zeros((H,W),bool); reg[box(0.22,0.40,0.78,0.62)]=True
    e2=nd.binary_fill_holes(nd.binary_closing(en&reg,iterations=3))
    comps(e2,1500,name,img,'purple round (enemy?)',filt=lambda w,hh,f,x0,y0: 0.6<w/hh<1.6 and f>0.5)

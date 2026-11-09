from common import *
from scipy import ndimage as nd
def hero(p, name):
    img=load(p); h,s,v=hsv(img)
    pink=((h>=295)|(h<=350))&(h>=295)&(s>0.30)&(v>0.45)
    reg=np.zeros_like(pink); reg[box(0.18,0.45,0.82,0.80)]=True
    m=pink&reg
    m=nd.binary_opening(m,iterations=2)
    lab,n=nd.label(m)
    sizes=nd.sum(m,lab,range(1,n+1))
    # component containing the centre column near y 0.65
    k=np.argmax(sizes)+1
    comp=lab==k
    comp=nd.binary_closing(comp,iterations=3)
    ys,xs=np.nonzero(comp)
    x0,x1,y0,y1=xs.min(),xs.max(),ys.min(),ys.max()
    # width profile per row
    rows={}
    for fy in np.arange(0.50,0.80,0.02):
        r=int(fy*H); xx=np.nonzero(comp[r])[0]
        if len(xx): rows[round(fy,2)]=(round(xx.min()/W,3),round(xx.max()/W,3))
    area=comp.sum()/(W*H)
    cx,cy=xs.mean()/W, ys.mean()/H
    print(f"{name}: bbox x {x0/W:.3f}-{x1/W:.3f} (w {(x1-x0)/W:.3f} W) y {y0/H:.3f}-{y1/H:.3f} (h {(y1-y0)/H:.3f} H) area {area*100:.2f}% centroid ({cx:.3f},{cy:.3f})")
    # mean colour of fur
    c=img[comp].mean(0); hh=h[comp]; ss=s[comp]; vv=v[comp]
    print(f"   fur mean sRGB #{int(c[0]*255):02x}{int(c[1]*255):02x}{int(c[2]*255):02x}  H med {np.median(hh):.0f} S med {np.median(ss):.2f} V med {np.median(vv):.2f}")
    print('   rows:', rows)
    Image.fromarray((comp*255).astype(np.uint8)).save(f'hero_{name}.png')
    return comp
hero(A,'approved'); hero(G,'u206'); hero(T,'tap')

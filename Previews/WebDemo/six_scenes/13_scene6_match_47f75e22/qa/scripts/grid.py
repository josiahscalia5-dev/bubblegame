from common import *
from PIL import ImageDraw
def grid(p,out,x0,y0,x1,y1,step=0.02):
    im=Image.open(p).convert('RGB'); d=ImageDraw.Draw(im)
    for i in range(0,101):
        f=i*step
        if f>1: break
        col=(255,255,0) if abs((f*100)%10)<1e-6 else (0,255,0)
        d.line([(f*W,0),(f*W,H)],fill=col,width=1); d.line([(0,f*H),(W,f*H)],fill=col,width=1)
    c=im.crop((int(x0*W),int(y0*H),int(x1*W),int(y1*H)))
    c=c.resize((c.width*2,c.height*2),Image.NEAREST); c.save(out)
grid(A,'vp_a.png',0.36,0.36,0.64,0.52); grid(G,'vp_g.png',0.36,0.32,0.64,0.52); grid(T,'vp_t.png',0.36,0.32,0.64,0.52)

import sys
from PIL import Image, ImageDraw
p=sys.argv[1]; x0,y0,x1,y1=map(float,sys.argv[2:6]); out=sys.argv[6]; step=float(sys.argv[7]) if len(sys.argv)>7 else 0.01
im=Image.open(p).convert('RGB'); W,H=im.size
c=im.crop((int(x0*W),int(y0*H),int(x1*W),int(y1*H))); s=1400/c.width; c=c.resize((1400,int(c.height*s)),Image.LANCZOS)
d=ImageDraw.Draw(c)
import numpy as np
for y in np.arange(np.ceil(y0/step)*step,y1,step):
    Y=(y-y0)*H*s; d.line([(0,Y),(c.width,Y)],fill=(255,255,0) if round(y/step)%5==0 else (0,255,0),width=1); d.text((2,Y+1),f'{y:.3f}',fill=(255,255,0))
for x in np.arange(np.ceil(x0/0.05)*0.05,x1,0.05):
    X=(x-x0)*W*s; d.line([(X,0),(X,c.height)],fill=(255,0,255),width=1); d.text((X+2,2),f'{x:.2f}',fill=(255,0,255))
c.save(out)

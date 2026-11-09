import sys
from PIL import Image, ImageDraw, ImageFont
src, out = sys.argv[1], sys.argv[2]
x0,y0,x1,y1 = [float(v) for v in sys.argv[3:7]] if len(sys.argv)>3 else (0,0,1,1)
step = float(sys.argv[7]) if len(sys.argv)>7 else 0.05
scale = float(sys.argv[8]) if len(sys.argv)>8 else 1.0
im = Image.open(src).convert('RGB')
W,H = im.size
c = im.crop((int(x0*W),int(y0*H),int(x1*W),int(y1*H)))
c = c.resize((int(c.width*scale),int(c.height*scale)), Image.LANCZOS)
d = ImageDraw.Draw(c)
cw,ch = c.size
import math
def fx(f): return (f-x0)/(x1-x0)*cw
def fy(f): return (f-y0)/(y1-y0)*ch
k = math.ceil(x0/step)
while k*step <= x1+1e-9:
    f=k*step; x=fx(f); major = abs(round(f/ (step*2))*(step*2)-f)<1e-6
    d.line([(x,0),(x,ch)], fill=(0,255,0) if major else (255,255,0), width=1)
    d.text((x+2,2), f"{f:.3f}".rstrip('0'), fill=(0,0,0))
    k+=1
k = math.ceil(y0/step)
while k*step <= y1+1e-9:
    f=k*step; y=fy(f); major = abs(round(f/(step*2))*(step*2)-f)<1e-6
    d.line([(0,y),(cw,y)], fill=(0,255,0) if major else (255,255,0), width=1)
    d.text((2,y+2), f"{f:.3f}".rstrip('0'), fill=(0,0,0))
    k+=1
c.save(out)
print(W,H,c.size)

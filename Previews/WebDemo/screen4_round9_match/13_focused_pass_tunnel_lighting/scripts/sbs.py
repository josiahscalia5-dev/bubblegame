"""sbs.py out.png H frame1 [frame2 ...] : side by side, approved first, every frame resized to height H.
   Optional crop via CROP=x0,y0,x1,y1 (fractions) applied to every frame."""
import sys, os
from PIL import Image
APP='/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
out=sys.argv[1]; H=int(sys.argv[2]); fr=[APP]+sys.argv[3:]
crop=os.environ.get('CROP')
ims=[]
for p in fr:
    im=Image.open(p).convert('RGB')
    if crop:
        x0,y0,x1,y1=map(float,crop.split(',')); W,Hh=im.size
        im=im.crop((int(x0*W),int(y0*Hh),int(x1*W),int(y1*Hh)))
    w=round(im.size[0]*H/im.size[1]); ims.append(im.resize((w,H),Image.LANCZOS))
S=Image.new('RGB',(sum(i.size[0] for i in ims)+6*(len(ims)-1),H),(255,255,255))
x=0
for i in ims: S.paste(i,(x,0)); x+=i.size[0]+6
S.save(out)

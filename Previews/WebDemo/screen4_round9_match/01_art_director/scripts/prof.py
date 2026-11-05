import sys, numpy as np, colorsys
from PIL import Image
A='/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
G='/home/user/bubblegame/Previews/WebDemo/screen4_round8_splash/splash_%ss_fullres.png'
x=float(sys.argv[1]); y0,y1,st=map(float,sys.argv[2:5]); ts=sys.argv[5:] or ['2.85']
ims=[('APP',np.asarray(Image.open(A).convert('RGB').resize((538,1076),Image.LANCZOS)))]+[(t,np.asarray(Image.open(G%t).convert('RGB').resize((538,1076),Image.LANCZOS))) for t in ts]
for y in np.arange(y0,y1+1e-9,st):
    row=f"y {y:.3f} "
    for n,im in ims:
        Y=int(y*1076); X=int(x*538); c=im[Y-1:Y+2,X-2:X+3].reshape(-1,3).mean(0)
        h,s,v=colorsys.rgb_to_hsv(*(c/255))
        row+=f"| {n} #{int(c[0]):02x}{int(c[1]):02x}{int(c[2]):02x} H{h*360:3.0f} S{s:.2f} V{v:.2f} "
    print(row)

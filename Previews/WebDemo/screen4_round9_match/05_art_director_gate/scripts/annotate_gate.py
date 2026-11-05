"""Annotated side by side: original | merged 3.0 s, both 1536 px tall, the user's six zones (precision kit 10) and the top
   fixes (numbered, red) marked."""
from PIL import Image, ImageDraw, ImageFont
A='/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
G='/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/04_merged/match_t3.00.png'
OUT='/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/05_art_director_gate/approved_vs_merged_3.00s_gate_annotated.png'
F=lambda n: ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', n)
a=Image.open(A).convert('RGB'); g=Image.open(G).convert('RGB'); g=g.resize((round(g.size[0]*1536/g.size[1]),1536),Image.LANCZOS)
ZONES=[('1',(0.013,0.213,0.986,0.304),(255,190,60)),('2',(0.081,0.307,0.919,0.667),(40,220,240)),('3',(0.086,0.684,0.924,0.914),(255,70,140)),
       ('4',(0.047,0.434,0.971,0.728),(255,200,80)),('5',(0.01,0.24,0.986,0.63),(170,120,255)),('6',(0.005,0.781,0.99,0.967),(60,230,200))]
FIX=[('F1 centre: wall rw in screen space',('c',0.53,0.53,0.09)),('F2 foreground bank mass',('b',0.0,0.765,1.0,0.84)),
     ('F3 wall bands, cobalt, cyan, no lime',('b',0.16,0.31,0.90,0.47)),('F4 housing bevel / rim',('b',0.0,0.235,1.0,0.31)),
     ('F4',('b',0.0,0.40,0.09,0.76)),('F5 star sparkles',('p',[(0.51,0.34),(0.57,0.27),(0.60,0.32),(0.86,0.37)])),
     ('F6 gem, coins',('b',0.08,0.43,0.40,0.57)),('F7 under-body water',('b',0.28,0.79,0.76,0.86))]
HDR,PAD=56,16; W=PAD*3+a.size[0]+g.size[0]
img=Image.new('RGB',(W,HDR+1536+PAD),(18,18,26)); d=ImageDraw.Draw(img)
xs=[PAD,PAD*2+a.size[0]]; img.paste(a,(xs[0],HDR)); img.paste(g,(xs[1],HDR))
d.text((xs[0],14),'ORIGINAL approved Screen 4 (the only target)',fill=(255,255,255),font=F(24)); d.text((xs[1],14),'MERGED 2a6ab30 ?s3=match, 3.0 s (HUD on)',fill=(255,255,255),font=F(24))
for k,(x0,im) in enumerate(zip(xs,(a,g))):
    w,h=im.size
    for n,(X0,Y0,X1,Y1),c in ZONES:
        d.rectangle((x0+X0*w,HDR+Y0*h,x0+X1*w,HDR+Y1*h),outline=c,width=2); d.rectangle((x0+X0*w+3,HDR+Y0*h+3,x0+X0*w+27,HDR+Y0*h+31),fill=c); d.text((x0+X0*w+8,HDR+Y0*h+4),n,fill=(0,0,0),font=F(22))
    if k==1:
        for lab,sh in FIX:
            red=(255,40,40)
            if sh[0]=='c':
                _,cx,cy,r=sh; R=r*w; d.ellipse((x0+cx*w-R,HDR+cy*h-R,x0+cx*w+R,HDR+cy*h+R),outline=red,width=5); tx,ty=x0+cx*w+R+4,HDR+cy*h-14
            elif sh[0]=='b':
                _,X0,Y0,X1,Y1=sh; d.rectangle((x0+X0*w,HDR+Y0*h,x0+X1*w,HDR+Y1*h),outline=red,width=4); tx,ty=x0+X0*w+34,HDR+Y0*h+4
            else:
                for (px,py) in sh[1]: d.ellipse((x0+px*w-16,HDR+py*h-16,x0+px*w+16,HDR+py*h+16),outline=red,width=4)
                tx,ty=x0+sh[1][0][0]*w-120,HDR+sh[1][0][1]*h+20
            tw=d.textlength(lab,font=F(19)); d.rectangle((tx-3,ty-2,tx+tw+3,ty+24),fill=(255,255,255)); d.text((tx,ty),lab,fill=red,font=F(19))
    # approved centre marked on the original too
    if k==0: R=0.06*w; d.ellipse((x0+0.528*w-R,HDR+0.532*h-R,x0+0.528*w+R,HDR+0.532*h+R),outline=(255,240,0),width=3)
img.save(OUT,optimize=True); print(img.size)

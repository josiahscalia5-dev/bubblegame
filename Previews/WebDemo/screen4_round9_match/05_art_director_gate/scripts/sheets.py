"""Gate images: (1) crop sheet per area, original | merged 3.0 s at the same frame fractions; (2) a gridded zoom of the
   objects (coins, gem, sock) for reading boxes. Original 767x1536; merged page frame 807x1602 (HUD on)."""
from PIL import Image, ImageDraw, ImageFont
A='/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
G='/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/04_merged/match_t3.00.png'
OUT='/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/05_art_director_gate/'
a=Image.open(A).convert('RGB'); g=Image.open(G).convert('RGB')
F=lambda n: ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', n)
AREAS=[('1 housing and framing',(0.0,0.20,1.0,0.42)),('2 deep blue tunnel (centre r<.06 W ring drawn)',(0.20,0.33,0.86,0.70)),
       ('3 light and reflections (upper wall)',(0.10,0.30,0.95,0.50)),('4 character immersion',(0.15,0.66,0.85,0.90)),
       ('5 foreground waves (game HUD covers y>.835 at the sides)',(0.0,0.74,1.0,0.97)),('6 objects',(0.0,0.40,1.0,0.76))]
def crop(im,b): W,H=im.size; return im.crop((int(b[0]*W),int(b[1]*H),int(b[2]*W),int(b[3]*H)))
rows=[]; TW=760
for name,b in AREAS:
    ca,cg=crop(a,b),crop(g,b); h=int(TW*ca.size[1]/ca.size[0]); ca=ca.resize((TW,h),Image.LANCZOS); cg=cg.resize((TW,h),Image.LANCZOS)
    r=Image.new('RGB',(2*TW+30,h+44),(20,20,28)); d=ImageDraw.Draw(r); d.text((10,8),f"{name}   x {b[0]:.2f}-{b[2]:.2f}, y {b[1]:.2f}-{b[3]:.2f}   ORIGINAL | MERGED 3.0 s",fill=(255,255,255),font=F(22))
    r.paste(ca,(10,40)); r.paste(cg,(TW+20,40))
    if name.startswith('2'):
        for k,(vx,vy) in enumerate([(0.528,0.532),(0.53,0.53)]):
            cx=10+k*(TW+10)+(vx-b[0])/(b[2]-b[0])*TW; cy=40+(vy-b[1])/(b[3]-b[1])*h; rr=0.06/(b[2]-b[0])*TW
            d.ellipse((cx-rr,cy-rr,cx+rr,cy+rr),outline=(255,240,0),width=3)
    rows.append(r)
S=Image.new('RGB',(rows[0].size[0],sum(r.size[1] for r in rows)),(20,20,28)); y=0
for r in rows: S.paste(r,(0,y)); y+=r.size[1]
S.save(OUT+'crops_per_area_original_vs_merged_3.00s.jpg',quality=90)
# gridded objects zoom
b=(0.0,0.40,1.0,0.84); Z=[]
for im,lab in ((a,'ORIGINAL'),(g,'MERGED 3.0 s')):
    c=crop(im,b).resize((800,int(800*(b[3]-b[1])*im.size[1]/im.size[0]/(b[2]-b[0]))),Image.LANCZOS); d=ImageDraw.Draw(c); W,H=c.size
    for i in range(0,51):
        x=i/50; X=int(x*W); d.line((X,0,X,H),fill=(255,255,0) if i%5==0 else (90,90,90),width=1)
        if i%5==0: d.text((X+2,2),f"{x:.1f}",fill=(255,255,0),font=F(14))
    for j in range(0,23):
        yv=b[1]+j*0.02; Y=int((yv-b[1])/(b[3]-b[1])*H); d.line((0,Y,W,Y),fill=(255,255,0) if j%5==0 else (90,90,90),width=1)
        if j%5==0 or j%5==0: d.text((2,Y+2),f"{yv:.2f}",fill=(255,255,0),font=F(14))
    d.text((W-200,H-26),lab,fill=(255,255,255),font=F(20)); Z.append(c)
zz=Image.new('RGB',(1610,Z[0].size[1]),(20,20,28)); zz.paste(Z[0],(0,0)); zz.paste(Z[1],(810,0)); zz.save(OUT+'objects_zoom_grid_original_vs_merged_3.00s.jpg',quality=90)

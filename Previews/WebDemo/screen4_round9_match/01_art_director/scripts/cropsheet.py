from PIL import Image, ImageDraw, ImageFont
OUT='/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/01_art_director/crops_approved_vs_3.00s.png'  # saved as .jpg q92 afterwards
A='/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
G='/home/user/bubblegame/Previews/WebDemo/screen4_round8_splash/splash_3.00s_fullres.png'
F=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',22)
a=Image.open(A).convert('RGB'); g=Image.open(G).convert('RGB')
rows=[('5 rim, bevel and collar (y .13-.33)',(0,0.13,1,0.33)),
      ('2 walls and core (x .18-.88, y .30-.62)',(0.18,0.30,0.88,0.62)),
      ('2 floor ahead of the hero (x .25-.80, y .56-.70)',(0.25,0.56,0.80,0.70)),
      ('3 water round the hero (y .72-.90)',(0,0.72,1,0.90)),
      ('4 sock and right coin (x .58-1, y .52-.84)',(0.58,0.52,1.0,0.84))]
W=1600; half=(W-20)//2; tiles=[]
for lab,(x0,y0,x1,y1) in rows:
    pair=[]
    for im in (a,g):
        c=im.crop((int(x0*im.width),int(y0*im.height),int(x1*im.width),int(y1*im.height)))
        c=c.resize((half,round(c.height*half/c.width)),Image.LANCZOS); pair.append(c)
    h=max(p.height for p in pair); t=Image.new('RGB',(W,h+40),(18,18,28)); d=ImageDraw.Draw(t)
    d.text((8,8),'APPROVED  |  '+lab,font=F,fill='white'); d.text((half+28,8),'GAME 3.0 s',font=F,fill='white')
    t.paste(pair[0],(0,40)); t.paste(pair[1],(half+20,40)); tiles.append(t)
out=Image.new('RGB',(W,sum(t.height for t in tiles)+10*len(tiles)),(0,0,0)); y=0
for t in tiles: out.paste(t,(0,y)); y+=t.height+10
s=min(1.0,3600/out.height)
if s<1: out=out.resize((int(out.width*s),int(out.height*s)),Image.LANCZOS)
out.save(OUT,optimize=True); print(out.size)

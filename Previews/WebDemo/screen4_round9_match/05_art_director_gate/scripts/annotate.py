from PIL import Image, ImageDraw, ImageFont
OUT='/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/01_art_director/'
A='/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
G='/home/user/bubblegame/Previews/WebDemo/screen4_round8_splash/splash_3.00s_fullres.png'
F=lambda n: ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',n)
H=1602
a=Image.open(A).convert('RGB'); a=a.resize((round(a.width*H/a.height),H),Image.LANCZOS)
g=Image.open(G).convert('RGB')
gap=30; top=70; foot=420
W=a.width+g.width+gap
im=Image.new('RGB',(W,H+top+foot),(18,18,28)); im.paste(a,(0,top)); im.paste(g,(a.width+gap,top))
d=ImageDraw.Draw(im)
d.text((10,14),'APPROVED original Screen 4',font=F(26),fill='white')
d.text((a.width+gap+10,14),'GAME ?s3=splash, gameplay 3.0 s, seed 7',font=F(26),fill='white')
C={1:(255,230,0),2:(0,255,255),3:(255,80,80),4:(80,255,80),5:(255,140,0)}
def P(panel,x,y):
    ox,w=(0,a.width) if panel=='a' else (a.width+gap,g.width)
    return ox+x*w, top+y*H
def box(panel,n,x0,y0,x1,y1,lab=None,width=4,anchor='tl'):
    p0=P(panel,x0,y0); p1=P(panel,x1,y1)
    d.rectangle([p0,p1],outline=C[n],width=width)
    t=str(n) if lab is None else f"{n} {lab}"
    f=F(24 if lab is None else 19); bb=d.textbbox((0,0),t,font=f)
    tx,ty=(p0[0]+4,p0[1]+3) if anchor=='tl' else ((p0[0]+4,p1[1]-bb[3]-6) if anchor=='bl' else (p1[0]-bb[2]-8,p0[1]+3))
    d.rectangle([tx-3,ty-2,tx+bb[2]+3,ty+bb[3]+3],fill=(0,0,0))
    d.text((tx,ty),t,font=f,fill=C[n])
def circle(panel,n,cx,cy,rw,width=3):
    ox,w=(0,a.width) if panel=='a' else (a.width+gap,g.width)
    X,Y=ox+cx*w, top+cy*H; R=rw*w
    d.ellipse([X-R,Y-R,X+R,Y+R],outline=C[n],width=width)
def cross(panel,n,cx,cy):
    X,Y=P(panel,cx,cy); d.line([(X-18,Y),(X+18,Y)],fill=(255,0,0),width=4); d.line([(X,Y-18),(X,Y+18)],fill=(255,0,0),width=4)
    d.ellipse([X-5,Y-5,X+5,Y+5],outline=C[n],width=2)
def hline(y,lab,col=(255,255,255)):
    Y=top+y*H
    for x in range(0,W,16): d.line([(x,Y),(x+8,Y)],fill=col,width=2)
    d.text((a.width+1,Y-14),lab,font=F(10),fill=col)
# 1 composition: mouth circles + vanishing points + guide lines at the approved's levels
circle('a',1,0.52,0.54,0.50); circle('g',1,0.52,0.508,0.527)
cross('a',1,0.528,0.532); cross('g',1,0.540,0.512)
hline(0.532,'vp'); hline(0.29,'.29'); hline(0.228,'.228'); hline(0.836,'.836')
# 5 rim + collar
box('a',5,0.10,0.205,0.995,0.300,'rim+bevel',anchor='tr'); box('g',5,0.005,0.150,0.995,0.245,'rim under HUD + flat collar',anchor='tr')
# 2 walls, centre, floor ahead
box('a',2,0.18,0.31,0.62,0.45,'walls'); box('g',2,0.18,0.31,0.62,0.45,'walls')
circle('a',2,0.528,0.532,0.06,2); circle('g',2,0.540,0.512,0.06,2)
box('a',2,0.30,0.585,0.62,0.68,'floor',anchor='bl'); box('g',2,0.30,0.60,0.62,0.68,'floor',anchor='bl')
# 3 water round the hero
box('a',3,0.005,0.745,0.995,0.875,'water round hero',anchor='bl'); box('g',3,0.005,0.745,0.995,0.875,'water round hero',anchor='bl')
# 4 objects
for b in [(0.648,0.555,0.838,0.665,'sock'),(0.085,0.544,0.301,0.660,'coin'),(0.087,0.441,0.213,0.499,None),(0.468,0.529,0.571,0.579,None),(0.778,0.671,0.996,0.800,'coin'),(0.271,0.489,0.374,0.529,None),(0.005,0.233,0.20,0.415,'brush'),(0.786,0.393,0.995,0.611,'brush'),(0.65,0.285,0.86,0.36,'bubble')]:
    box('a',4,*b[:4],b[4],width=3)
for b in [(0.651,0.56,0.93,0.736,'sock'),(0.005,0.545,0.21,0.73,'coin'),(0.02,0.478,0.225,0.575,None),(0.452,0.505,0.648,0.60,'cluster'),(0.78,0.70,0.995,0.83,'coin'),(0.223,0.491,0.340,0.543,None),(0.005,0.15,0.085,0.344,None),(0.796,0.334,0.995,0.687,'brush'),(0.66,0.205,0.95,0.34,'bubble+ghost')]:
    box('g',4,*b[:4],b[4],width=3)
# footer legend
y=top+H+12
lines=[(1,'1 SHAPE & CAMERA: vanishing point .532 vs .512 (0.02 H too high); mouth radius 0.50 W vs 0.53 W, top .29 vs .245; 7-10 ring bands vs 5-7.'),
 (2,'2 WALL & FLOOR WATER: cyan reflections 13% vs 2% of the upper wall; white caps + pale 20% vs 36%; core warm 47% vs 11% (lavender 11% vs 46%);'),
 (2,'   floor ahead lavender 3% vs 31%; rings too regular and too contrasty (band contrast 0.17-0.20 vs 0.25-0.35).'),
 (3,'3 WATER ROUND THE HERO: smooth pale-lilac swell under the body (texture 0.077 vs 0.112, fur-through-water violet 15% vs 37%);'),
 (3,'   sides an over-white soft mist (foam bank white 36% vs 20%, saturated blue between only 5% vs 14%; right side white 52% vs 31%).'),
 (4,'4 OBJECTS: sock 0.28 x 0.18 vs 0.19 x 0.11 (1.5x); left coins 1.6-1.8x and cut by the edge; right coin hidden by spray; 3 coins + sock + gem'),
 (4,'   clustered on the vanishing point; left brush 0.8% vs 2.0% of the frame, right brush 4.1% vs 1.6%; a clipped ghost dome behind the big bubble.'),
 (5,'5 RIM & HOUSING: rim at y .155-.20 behind the HUD (approved .215-.28, visible right across); 0.017 H vs 0.03-0.04 H thick;'),
 (5,'   a 0.07 H flat pale-lavender collar #9f95e6 (S .35) where the approved has a 0.035 H violet bevel #6e62d3 (S .53) and a navy ring.'),
 (1,'All numbers: APPROVED vs GAME 3.0 s. Dashed lines: the approved levels (rim top .228, mouth top .29, vanishing point .532, waterline .836). Red crosses: vanishing points.')]
for n,t in lines:
    d.text((14,y),t,font=F(19),fill=C[n]); y+=40
im.save(OUT+'approved_vs_3.00s_annotated.png',optimize=True)
print(im.size)

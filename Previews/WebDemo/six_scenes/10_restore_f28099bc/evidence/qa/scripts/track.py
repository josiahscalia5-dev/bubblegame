import numpy as np, cv2
from skimage.metrics import structural_similarity as ssim
from PIL import Image
R='/home/user/bubblegame/Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/'
B='/home/user/bubblegame_lanes/_evidence/baseline/'
G='/home/user/bubblegame/Previews/WebDemo/six_scenes/09_s56_ac4e3449/'
pairs=[('S1','01_Surprise_Hideout.png',B+'t_-1.00.png'),('S2','02_She_Loads_Laundry.png',B+'t_2.40.png'),
('S3','03_Oops_He_Goes_In.png',B+'t_4.80.png'),('S4','04_The_Wash_Begins.png',B+'t_7.00.png'),
('S5 opening 8.4s','05_Into_The_Laundry_Tunnel.png',B+'t_8.40.png'),('S5 live s56 tap','05_Into_The_Laundry_Tunnel.png',G+'s56_tap.png'),
('S6 live s56 u206','06_Swim_Collect_Avoid_Enemies.png',G+'s56_206.png')]
def L(p): return np.asarray(Image.open(p).convert('RGB').resize((864,1536),Image.LANCZOS))
for n,r,g in pairs:
    a=L(R+r)[330:1180]; b=L(g)[330:1180]
    sa=cv2.resize(a,(216,212),interpolation=cv2.INTER_AREA); sb=cv2.resize(b,(216,212),interpolation=cv2.INTER_AREA)
    s=ssim(cv2.cvtColor(sa,cv2.COLOR_RGB2GRAY),cv2.cvtColor(sb,cv2.COLOR_RGB2GRAY),data_range=255)
    ha=cv2.calcHist([cv2.cvtColor(a,cv2.COLOR_RGB2HSV)],[0,1],None,[36,8],[0,180,0,256]); hb=cv2.calcHist([cv2.cvtColor(b,cv2.COLOR_RGB2HSV)],[0,1],None,[36,8],[0,180,0,256])
    cv2.normalize(ha,ha); cv2.normalize(hb,hb)
    hc=cv2.compareHist(ha,hb,cv2.HISTCMP_CORREL)
    # gold pixels: brightness of gold metal
    def gold(x):
        hsv=cv2.cvtColor(x,cv2.COLOR_RGB2HSV).astype(float); h=hsv[...,0]*2; s=hsv[...,1]/255; v=hsv[...,2]/255
        m=(h>=28)&(h<=55)&(s>0.45)&(v>0.35)
        return m.mean()*100, (np.median(v[m]) if m.sum() else 0)
    ga=gold(a); gb=gold(b)
    print(f"{n:18s} SSIM_gray_216x212={s:.3f}  HSVhist_corr={hc:.3f}  gold_share ref/game={ga[0]:.1f}/{gb[0]:.1f}%  gold_medV ref/game={ga[1]:.2f}/{gb[1]:.2f}")

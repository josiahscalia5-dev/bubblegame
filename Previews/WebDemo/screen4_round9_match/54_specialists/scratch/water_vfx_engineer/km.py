import numpy as np, cv2
from PIL import Image
o=np.array(Image.open('/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg').convert('RGB')).astype(np.float32)
def km(name, box, k=6):
    x0,y0,x1,y1=box; px=o[y0:y1,x0:x1].reshape(-1,3)
    # drop pink fur: r>g+40 and r>b-10
    pink=(px[:,0]>px[:,1]+50)&(px[:,0]>150)
    px=px[~pink]
    crit=(cv2.TERM_CRITERIA_EPS+cv2.TERM_CRITERIA_MAX_ITER,30,0.5)
    _,lab,cen=cv2.kmeans(px,k,None,crit,3,cv2.KMEANS_PP_CENTERS)
    cnt=np.bincount(lab.ravel(),minlength=k)/len(lab)
    order=np.argsort(-cnt)
    print(name, box, 'pink dropped %.0f%%'%(100*pink.mean()))
    for i in order:
        c=cen[i]; print('   #%02x%02x%02x %4.1f%%'%(int(c[0]),int(c[1]),int(c[2]),100*cnt[i]), end='')
    print()
km('heaps front', (215,1225,480,1335))
km('left heap only', (225,1235,330,1320))
km('right heap only', (345,1285,470,1340))
km('froth left side', (0,1240,210,1390))
km('froth right side', (480,1260,767,1400))
km('lower water mid', (290,1380,540,1536))
km('band 1150-1536 all', (0,1150,767,1536),8)

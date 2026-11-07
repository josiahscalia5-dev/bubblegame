import numpy as np, sys
from PIL import Image
D='/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/52_diagnosis/ablation/'
S='/tmp/claude-0/-home-user-bubblegame/08b39b21-0dec-5ec1-bc99-07d34f97f077/scratchpad/ins/'
def L(p): return np.asarray(Image.open(D+p).convert('RGB')).astype(float)
base=L('R9_T1.0/base_canvas.png')
b2=L('R9w_T1.0/base_canvas.png')
print('bases identical:', np.abs(base-b2).max())
sets={'A_swirl_whirl':['R9w_T1.0/abl_25_noSwirl.png','R9w_T1.0/abl_23_noWhirlpool.png'],
      'B_plus_bubbles':['R9w_T1.0/abl_25_noSwirl.png','R9w_T1.0/abl_23_noWhirlpool.png','R9w_T1.0/abl_22_noBubbleLayers.png']}
for k,v in sets.items():
    # composite in linear light: sum the deltas
    lin=lambda a:(a/255.)**2.2
    acc=lin(base)
    for p in v: acc=acc+(lin(L(p))-lin(base))
    out=(np.clip(acc,0,1)**(1/2.2)*255).round().astype(np.uint8)
    Image.fromarray(out).save(S+f'est_{k}.png')
print('ok')

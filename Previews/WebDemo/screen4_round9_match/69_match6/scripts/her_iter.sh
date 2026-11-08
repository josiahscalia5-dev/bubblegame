#!/usr/bin/env bash
# her_iter.sh <label> [S3]: Tap to Start canvas + her solo (same frame), and a sheet ORIGINAL | match5 | <label>
L=$1; S3V=${2:-intunnel,structmatch}; SP=/tmp/claude-0/-home-user-bubblegame/8140e507-b3f0-5294-a0db-dfc0f4eba5b6/scratchpad
cd /home/user/bubblegame/WebDemo; source ../Tools/bw_tools_env.sh >/dev/null 2>&1
echo '[{"label":"her_solo","solo":["PinkFuzzyMascot"]}]' > $SP/abl_solo.json
rm -rf $SP/it/$L; S3=$S3V NOTAP=1 node tools/screen4/layer_diag.cjs $PWD $SP/it/$L $SP/abl_solo.json > $SP/it/$L.log 2>&1
~/.bubblewash-tools/visual/bin/python - "$L" <<PY
import sys; from PIL import Image, ImageDraw
L=sys.argv[1]; SP='$SP'; box=(130,880,640,1400)
o=Image.open('/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg').convert('RGB').resize((768,1536),Image.LANCZOS).crop(box)
cols=[('ORIGINAL',o),('match5 (previous)',Image.open(SP+'/base/abl/base_canvas.png').convert('RGB').crop(box)),(L,Image.open(SP+'/it/'+L+'/base_canvas.png').convert('RGB').crop(box)),
('match5 alone',Image.open(SP+'/base/abl/abl_her_solo.png').convert('RGB').crop(box)),(L+' alone',Image.open(SP+'/it/'+L+'/abl_her_solo.png').convert('RGB').crop(box))]
W=Image.new('RGB',(520*len(cols),560),'white'); d=ImageDraw.Draw(W)
for i,(t,im) in enumerate(cols): W.paste(im,(i*520,40)); d.text((i*520+8,10),t,fill='black')
W.resize((W.width//2,W.height//2),Image.LANCZOS).save(SP+'/it/'+L+'_sheet.jpg',quality=90)
PY

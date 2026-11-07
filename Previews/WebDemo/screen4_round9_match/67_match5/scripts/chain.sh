#!/usr/bin/env bash
# match5's proofs: identity (layer_diag.cjs canvases, seed 7) against the accepted bundle and against the match4 bundle under
# ,nomatch5; the gameplay tests; a Pixel 7 recording (the script jumps at 5.9 s).
#   bash chain.sh <repo> <scratch> <accepted bundle 38466b67> <accepted index.html> <match4 bundle 3fff8982>
R="$1"; SP="$2"; E=$R/Previews/WebDemo/screen4_round9_match/67_match5; D=$R/WebDemo; OUT=$SP/identity67; mkdir -p $OUT
source $R/Tools/bw_tools_env.sh > /dev/null 2>&1
mk() { O=$SP/$1; mkdir -p $O; for f in $D/*; do b=$(basename $f); [ "$b" = game.bundle.js ] || [ "$b" = index.html ] || ln -sfn $f $O/$b; done; cp $2 $O/game.bundle.js; cp $3 $O/index.html; }
mk webdemo67_acc "$3" "$4"; mk webdemo67_m4 "$5" "$4"; : > $E/proofs/identity.txt
run() { L="$1"; OLD=$SP/$2; SO="$3"; SN="$4"; M="$5"; if [ "$M" = start ]; then EX="NOTAP=1"; else EX="T=${M#T}"; fi
  (cd $D && env S3="$SO" $EX node tools/screen4/layer_diag.cjs $OLD $OUT/${L}_${M}_old > /dev/null 2>&1)
  (cd $D && env S3="$SN" $EX node tools/screen4/layer_diag.cjs $D $OUT/${L}_${M}_new > /dev/null 2>&1)
  ~/.bubblewash-tools/visual/bin/python -c "
import numpy as np; from PIL import Image
a,b=(np.asarray(Image.open(p).convert('RGBA')).astype(int) for p in ['$OUT/${L}_${M}_old/base_canvas.png','$OUT/${L}_${M}_new/base_canvas.png'])
print('$L $M:', int((np.abs(a-b).sum(-1)>0).sum()), 'pixels differ ($(md5sum < $OLD/game.bundle.js | cut -c1-8) ?s3=$SO vs $(md5sum < $D/game.bundle.js | cut -c1-8) ?s3=$SN)')" | tee -a $E/proofs/identity.txt; }
echo "== identity $(date -u +%H:%M:%S)"
run accepted webdemo67_acc intunnel intunnel start; run accepted webdemo67_acc intunnel intunnel T3.0; run normal webdemo67_acc , , T1.0
run rollback_match4 webdemo67_m4 intunnel,structmatch intunnel,structmatch,nomatch5 start; run rollback_match4 webdemo67_m4 intunnel,structmatch intunnel,structmatch,nomatch5 T3.0
cp $OUT/rollback_match4_T3.0_old/base_canvas.png $E/proofs/seed7_3.0s_MATCH4_canvas.png
(cd $D && S3=intunnel,structmatch T=3.0 node tools/screen4/layer_diag.cjs $D $OUT/new_T3.0 > /dev/null 2>&1); cp $OUT/new_T3.0/base_canvas.png $E/proofs/seed7_3.0s_MATCH5_canvas.png
echo "== gameplay $(date -u +%H:%M:%S)"; bash $E/scripts/gameplay.sh $R
echo "== clip $(date -u +%H:%M:%S)"; F=$SP/clip67; rm -rf $F; mkdir -p $F
(cd $D && S3=intunnel,structmatch ART_OFF=1 node $R/Previews/WebDemo/screen4_round9_match/51_swim/scripts/record_phone.cjs $D $F 9 game > $E/videos/clip_new.log 2>&1)
ffmpeg -v error -y -framerate 30 -i $F/f%04d.jpg -vf scale=618:-2 -c:v libx264 -pix_fmt yuv420p -crf 22 -movflags +faststart $E/videos/swim_steer_coins_new.mp4
cp $F/track.json $E/videos/track_new.json; echo "clip: $(tail -n 1 $E/videos/clip_new.log) | $(ls $F | grep -c jpg) frames"
echo "== done $(date -u +%H:%M:%S)"

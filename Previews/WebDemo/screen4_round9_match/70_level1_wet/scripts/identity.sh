#!/usr/bin/env bash
# Identity proofs for the Level 1 continuity pass (layer_diag.cjs canvases, Math.random seed 7, 768 x 1536):
#   the accepted ?s3=intunnel, the normal game and the candidate ?s3=intunnel,structmatch against ccr-76d4bc77-rqhl8o's build (92bd9272);
#   the match6 candidate (,match6) against its own build (b5f69217); level1 with ,nowet,noport against the previous level1 (92bd9272);
#   and the new level1 at Tap to Start against the previous level1 (expected 0: the pass acts only after 30 m and in the opening).
#   bash identity.sh <repo> <scratch> <frozen new demo dir> <ccr bundle 92bd9272> <match6 bundle b5f69217> <index.html>
R="$1"; SP="$2"; NEW="$3"; E=$R/Previews/WebDemo/screen4_round9_match/70_level1_wet; D=$R/WebDemo; OUT=$SP/identity70; mkdir -p $OUT
source $R/Tools/bw_tools_env.sh > /dev/null 2>&1
mk() { O=$SP/$1; mkdir -p $O; for f in $D/*; do b=$(basename $f); [ "$b" = game.bundle.js ] || [ "$b" = index.html ] || ln -sfn $f $O/$b; done; cp $2 $O/game.bundle.js; cp $3 $O/index.html; }
mk webdemo70_ccr "$4" "$6"; mk webdemo70_m6 "$5" "$6"; : > $E/proofs/identity.txt
run() { L="$1"; OLD=$SP/$2; SO="$3"; SN="$4"; M="$5"; if [ "$M" = start ]; then EX="NOTAP=1"; else EX="T=${M#T}"; fi
  (cd $D && env S3="$SO" $EX node tools/screen4/layer_diag.cjs $OLD $OUT/${L}_${M}_old > /dev/null 2>&1)
  (cd $D && env S3="$SN" $EX node tools/screen4/layer_diag.cjs $NEW $OUT/${L}_${M}_new > /dev/null 2>&1)
  ~/.bubblewash-tools/visual/bin/python -c "
import numpy as np; from PIL import Image
a,b=(np.asarray(Image.open(p).convert('RGBA')).astype(int) for p in ['$OUT/${L}_${M}_old/base_canvas.png','$OUT/${L}_${M}_new/base_canvas.png'])
print('$L $M:', int((np.abs(a-b).sum(-1)>0).sum()), 'pixels differ ($(md5sum < $OLD/game.bundle.js | cut -c1-8) ?s3=$SO vs $(md5sum < $NEW/game.bundle.js | cut -c1-8) ?s3=$SN)')" | tee -a $E/proofs/identity.txt; }
run accepted webdemo70_ccr intunnel intunnel start; run accepted webdemo70_ccr intunnel intunnel T3.0; run normal webdemo70_ccr , , T1.0
run candidate webdemo70_ccr intunnel,structmatch intunnel,structmatch start; run candidate webdemo70_ccr intunnel,structmatch intunnel,structmatch T3.0
run match6_kept webdemo70_m6 intunnel,structmatch intunnel,structmatch,match6 start; run match6_kept webdemo70_m6 intunnel,structmatch intunnel,structmatch,match6 T3.0
run level1_rollback webdemo70_ccr intunnel,structmatch,level1 intunnel,structmatch,level1,nowet,noport start; run level1_rollback webdemo70_ccr intunnel,structmatch,level1 intunnel,structmatch,level1,nowet,noport T3.0
run level1_new_tap webdemo70_ccr intunnel,structmatch,level1 intunnel,structmatch,level1 start
echo "== done $(date -u +%H:%M:%S)"

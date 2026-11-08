#!/usr/bin/env bash
# Identity proofs for Level 1 flow (session b0abcf95, 8 November 2026): layer_diag.cjs WebGL canvases (seed 7, 768 x 1536, the DOM
# HUD and banners not included) of the frozen previous build (a62848a0, verified at session start) against the frozen flow build:
#   the accepted ?s3=intunnel, the normal game, the candidate ?s3=intunnel,structmatch, match6 (opt-in): expected 0 px;
#   level1,noflow against the previous level1 at Tap to Start and 3 / 8 / 20 / 38 s into the run: expected 0 px;
#   level1 (flow) against the previous level1 at Tap to Start: expected 0 px (the far drum socks it parks are not in view).
#   bash identity.sh <repo> <scratch> <old demo dir> <new demo dir>
R="$1"; SP="$2"; OLD="$3"; NEW="$4"; E=$R/Previews/WebDemo/screen4_round9_match/71_level1_flow; OUT=$SP/identity71; mkdir -p $OUT
source $R/Tools/bw_tools_env.sh > /dev/null 2>&1; : > $E/proofs/identity.txt
run() { L="$1"; SO="$2"; SN="$3"; M="$4"; if [ "$M" = start ]; then EX="NOTAP=1"; else EX="T=${M#T}"; fi
  (cd $R/WebDemo && env S3="$SO" $EX timeout 900 node tools/screen4/layer_diag.cjs $OLD $OUT/${L}_${M}_old > /dev/null 2>&1)
  (cd $R/WebDemo && env S3="$SN" $EX timeout 900 node tools/screen4/layer_diag.cjs $NEW $OUT/${L}_${M}_new > /dev/null 2>&1)
  ~/.bubblewash-tools/visual/bin/python -c "
import numpy as np; from PIL import Image
a,b=(np.asarray(Image.open(p).convert('RGBA')).astype(int) for p in ['$OUT/${L}_${M}_old/base_canvas.png','$OUT/${L}_${M}_new/base_canvas.png'])
print('$L $M:', int((np.abs(a-b).sum(-1)>0).sum()), 'pixels differ ($(md5sum < $OLD/game.bundle.js | cut -c1-8) ?s3=$SO vs $(md5sum < $NEW/game.bundle.js | cut -c1-8) ?s3=$SN)')" | tee -a $E/proofs/identity.txt; }
run accepted intunnel intunnel start; run accepted intunnel intunnel T3.0; run normal , , T1.0
run candidate intunnel,structmatch intunnel,structmatch start; run candidate intunnel,structmatch intunnel,structmatch T3.0
run match6_optin intunnel,structmatch,match6 intunnel,structmatch,match6 start
for M in start T3.0 T8.0 T20.0 T38.0; do run level1_noflow intunnel,structmatch,level1 intunnel,structmatch,level1,noflow $M; done
run level1_flow_tap intunnel,structmatch,level1 intunnel,structmatch,level1 start
echo "== done $(date -u +%H:%M:%S)" | tee -a $E/proofs/identity.txt

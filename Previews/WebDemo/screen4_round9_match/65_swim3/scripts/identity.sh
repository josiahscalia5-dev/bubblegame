#!/usr/bin/env bash
# Identity proofs for swim3: layer_diag.cjs base canvas renders (seed 7, 768 x 1536) of the same moments by an OLD bundle (in a
# scratch copy of WebDemo whose other files are links to this checkout's) and by this checkout's bundle; pixels that differ.
#   bash identity.sh <repo> <scratch> <accepted bundle 38466b67> <its index.html> <previous candidate bundle 452f9568> <its index.html>
R="$1"; SP="$2"; D=$R/WebDemo; E=$R/Previews/WebDemo/screen4_round9_match/65_swim3/proofs; OUT=$SP/identity65; mkdir -p $E $OUT
mk() { O=$SP/$1; mkdir -p $O; for f in $D/*; do b=$(basename $f); [ "$b" = game.bundle.js ] || [ "$b" = index.html ] || ln -sfn $f $O/$b; done; cp $2 $O/game.bundle.js; cp $3 $O/index.html; }
mk webdemo_acc "$3" "$4"; mk webdemo_prev "$5" "$6"
: > $E/identity.txt
run() {   # label oldroot old_s3 new_s3 moment
  L="$1"; OLD=$SP/$2; SO="$3"; SN="$4"; M="$5"; if [ "$M" = start ]; then EX="NOTAP=1"; else EX="T=${M#T}"; fi
  (cd $D && env S3="$SO" $EX node tools/screen4/layer_diag.cjs $OLD $OUT/${L}_${M}_old > $OUT/${L}_${M}_old.log 2>&1)
  (cd $D && env S3="$SN" $EX node tools/screen4/layer_diag.cjs $D $OUT/${L}_${M}_new > $OUT/${L}_${M}_new.log 2>&1)
  ~/.bubblewash-tools/visual/bin/python - "$OUT/${L}_${M}_old/base_canvas.png" "$OUT/${L}_${M}_new/base_canvas.png" "$L $M" "$(md5sum < $OLD/game.bundle.js | cut -c1-8) ?s3=$SO" "$(md5sum < $D/game.bundle.js | cut -c1-8) ?s3=$SN" <<'PY' | tee -a $E/identity.txt
import sys, numpy as np; from PIL import Image
a, b = (np.asarray(Image.open(p).convert('RGBA')).astype(int) for p in sys.argv[1:3])
print(f'{sys.argv[3]}: {int((np.abs(a - b).sum(-1) > 0).sum())} pixels differ ({sys.argv[4]} vs {sys.argv[5]})')
PY
}
run accepted webdemo_acc intunnel intunnel start; run accepted webdemo_acc intunnel intunnel T1.0; run accepted webdemo_acc intunnel intunnel T3.0
run noswim2 webdemo_acc intunnel,noswim2 intunnel,noswim2 T1.0; run blend webdemo_acc intunnel,blend intunnel,blend T1.0
run normal webdemo_acc , , start; run normal webdemo_acc , , T1.0
run rollback webdemo_prev intunnel,structmatch intunnel,structmatch,noswim3 start
run rollback webdemo_prev intunnel,structmatch intunnel,structmatch,noswim3 T1.0
run rollback webdemo_prev intunnel,structmatch intunnel,structmatch,noswim3 T3.0
# the established seed-7 3.0 s comparison: the previous candidate and the new one (the canvases kept for the sheet)
cp $OUT/rollback_T3.0_old/base_canvas.png $E/seed7_3.0s_PREVIOUS_canvas.png
(cd $D && env S3=intunnel,structmatch T=3.0 node tools/screen4/layer_diag.cjs $D $OUT/new_T3.0 > $OUT/new_T3.0.log 2>&1); cp $OUT/new_T3.0/base_canvas.png $E/seed7_3.0s_NEW_canvas.png; cp $OUT/new_T3.0/base_page.png $E/seed7_3.0s_NEW_page_with_HUD.png
cp $OUT/accepted_T3.0_old/base_canvas.png $E/seed7_3.0s_ACCEPTED_canvas.png

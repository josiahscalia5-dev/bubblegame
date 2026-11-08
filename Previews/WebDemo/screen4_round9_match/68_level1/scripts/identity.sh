#!/usr/bin/env bash
# Identity proofs for ?s3=...,level1 (8 November 2026): layer_diag.cjs base canvas renders (seed 7, 768 x 1536) of the same
# moments by the bundle BEFORE level1 (in a scratch copy of WebDemo whose other files are links to this checkout's) and by this
# checkout's bundle; pixels that differ. 0 means identical.
#   bash identity.sh <repo> <scratch> <old bundle> <its index.html>
R="$1"; SP="$2"; D=$R/WebDemo; E=$R/Previews/WebDemo/screen4_round9_match/68_level1/proofs; OUT=$SP/identity68; mkdir -p $E $OUT
O=$SP/webdemo_before; mkdir -p $O; for f in $D/*; do b=$(basename $f); [ "$b" = game.bundle.js ] || [ "$b" = index.html ] || ln -sfn $f $O/$b; done; cp "$3" $O/game.bundle.js; cp "$4" $O/index.html
: > $E/identity.txt
run() {   # label old_s3 new_s3 moment
  L="$1"; SO="$2"; SN="$3"; M="$4"; if [ "$M" = start ]; then EX="NOTAP=1"; else EX="T=${M#T}"; fi
  (cd $D && env S3="$SO" $EX node tools/screen4/layer_diag.cjs $O $OUT/${L}_${M}_old > $OUT/${L}_${M}_old.log 2>&1)
  (cd $D && env S3="$SN" $EX node tools/screen4/layer_diag.cjs $D $OUT/${L}_${M}_new > $OUT/${L}_${M}_new.log 2>&1)
  ~/.bubblewash-tools/visual/bin/python - "$OUT/${L}_${M}_old/base_canvas.png" "$OUT/${L}_${M}_new/base_canvas.png" "$L $M" "$(md5sum < $O/game.bundle.js | cut -c1-8) ?s3=$SO" "$(md5sum < $D/game.bundle.js | cut -c1-8) ?s3=$SN" <<'PY' | tee -a $E/identity.txt
import sys, numpy as np; from PIL import Image
a, b = (np.asarray(Image.open(p).convert('RGBA')).astype(int) for p in sys.argv[1:3])
print(f'{sys.argv[3]}: {int((np.abs(a - b).sum(-1) > 0).sum())} pixels differ ({sys.argv[4]} vs {sys.argv[5]})')
PY
}
run accepted intunnel intunnel start; run accepted intunnel intunnel T1.0; run accepted intunnel intunnel T3.0
run normal , , start; run normal , , T1.0
run candidate intunnel,structmatch intunnel,structmatch start; run candidate intunnel,structmatch intunnel,structmatch T1.0; run candidate intunnel,structmatch intunnel,structmatch T3.0
run noswim2 intunnel,noswim2 intunnel,noswim2 T1.0; run blend intunnel,blend intunnel,blend T1.0
# level1 against the candidate it is built on (expected: Tap to Start the same; differences once she swims)
run level1_vs_candidate intunnel,structmatch intunnel,structmatch,level1 start; run level1_vs_candidate intunnel,structmatch intunnel,structmatch,level1 T3.0

#!/usr/bin/env bash
# pair.sh <label> <old s3> <new s3> <start|T1.0|T2.0>: one moment rendered by the old bundle (old s3) and the new bundle (new s3)
SP=/tmp/claude-0/-home-user-bubblegame/4fd798d9-8469-584c-9cb4-d91fe93a1905/scratchpad/acc; L="$1"; SO="$2"; SN="$3"; M="$4"
if [ "$M" = start ]; then EXTRA="NOTAP=1"; else EXTRA="T=${M#T}"; fi
cd /home/user/bubblegame/WebDemo
env S3="$SO" $EXTRA node tools/screen4/layer_diag.cjs $SP/old $SP/r/${L}_${M}_old > $SP/r/${L}_${M}_old.log 2>&1
env S3="$SN" $EXTRA node tools/screen4/layer_diag.cjs $SP/new $SP/r/${L}_${M}_new > $SP/r/${L}_${M}_new.log 2>&1
~/.bubblewash-tools/visual/bin/python -I - "$SP/r/${L}_${M}_old/base_canvas.png" "$SP/r/${L}_${M}_new/base_canvas.png" "$L $M: old ?s3=$SO vs new ?s3=$SN" <<'PY'
import sys, numpy as np; from PIL import Image
try:
    a, b = (np.asarray(Image.open(p).convert('RGBA')).astype(int) for p in sys.argv[1:3])
    print(f'{sys.argv[3]}: {a.shape[1]} x {a.shape[0]}, {int((np.abs(a - b).sum(-1) > 0).sum())} pixels differ')
except Exception as e: print(f'{sys.argv[3]}: RENDER FAILED ({e})')
PY

#!/usr/bin/env bash
# Identity proof: one moment rendered by the OLD bundle (R9's 7402397a, served from a scratch copy of WebDemo) and by the NEW
# bundle, the same seed and frame (layer_diag.cjs base renders): identity.sh <label> <s3 or ','> <start|T1.0>
L="$1"; S="$2"; M="$3"; R=/workspace/bubblegame; E=$R/Previews/WebDemo/screen4_round9_match/53_swim/identity; D=$R/WebDemo
OLD=/tmp/claude-0/-workspace-bubblegame/62b942a4-aa69-5385-baf7-492a86a446ba/scratchpad/webdemo_old
source $R/Tools/bw_tools_env.sh > /dev/null 2>&1; mkdir -p $E
if [ "$M" = start ]; then EXTRA="NOTAP=1"; else EXTRA="T=${M#T}"; fi
(cd $D && env S3="$S" $EXTRA node tools/screen4/layer_diag.cjs $OLD $E/${L}_${M}_old > $E/${L}_${M}_old.log 2>&1)
(cd $D && env S3="$S" $EXTRA node tools/screen4/layer_diag.cjs $D $E/${L}_${M}_new > $E/${L}_${M}_new.log 2>&1)
~/.bubblewash-tools/visual/bin/python - "$E/${L}_${M}_old/base_canvas.png" "$E/${L}_${M}_new/base_canvas.png" "$L $M" <<'PY'
import sys, numpy as np; from PIL import Image
a, b = (np.asarray(Image.open(p).convert('RGBA')).astype(int) for p in sys.argv[1:3])
n = int((np.abs(a - b).sum(-1) > 0).sum())
print(f'{sys.argv[3]}: {a.shape[1]} x {a.shape[0]} canvas, {n} pixels differ (old bundle 7402397a vs new)')
PY

#!/usr/bin/env bash
# Identity proof (53_swim/scripts/identity.sh adapted): one moment rendered by the COMMITTED bundle (ea0c833c, a scratch copy
# of WebDemo) and by this worktree's REBUILT bundle, the same seed and frame (layer_diag.cjs base renders):
#   identity.sh <label> <s3 or ','> <start|T1.0|T2.0>
L="$1"; S="$2"; M="$3"
R=/home/user/bubblegame/.claude/worktrees/agent-a19467485d7ab6a56; E=$R/Previews/WebDemo/screen4_round9_match/59_blend/proofs/identity; D=$R/WebDemo
SP=/tmp/claude-0/-home-user-bubblegame/4fd798d9-8469-584c-9cb4-d91fe93a1905/scratchpad/identity; OLD=/tmp/claude-0/-home-user-bubblegame/4fd798d9-8469-584c-9cb4-d91fe93a1905/scratchpad/webdemo_old
source $R/Tools/bw_tools_env.sh > /dev/null 2>&1; mkdir -p $E $SP
if [ "$M" = start ]; then EXTRA="NOTAP=1"; else EXTRA="T=${M#T}"; fi
(cd $D && env S3="$S" $EXTRA node tools/screen4/layer_diag.cjs $OLD $SP/${L}_${M}_old > $SP/${L}_${M}_old.log 2>&1)
(cd $D && env S3="$S" $EXTRA node tools/screen4/layer_diag.cjs $D $SP/${L}_${M}_new > $SP/${L}_${M}_new.log 2>&1)
~/.bubblewash-tools/visual/bin/python - "$SP/${L}_${M}_old/base_canvas.png" "$SP/${L}_${M}_new/base_canvas.png" "$L $M" "$(md5sum < $OLD/game.bundle.js | cut -c1-8)" "$(md5sum < $D/game.bundle.js | cut -c1-8)" <<'PY' | tee -a $E/identity.txt
import sys, numpy as np; from PIL import Image
a, b = (np.asarray(Image.open(p).convert('RGBA')).astype(int) for p in sys.argv[1:3])
n = int((np.abs(a - b).sum(-1) > 0).sum())
print(f'{sys.argv[3]}: {a.shape[1]} x {a.shape[0]} canvas, {n} pixels differ (committed bundle {sys.argv[4]} vs rebuilt {sys.argv[5]})')
PY

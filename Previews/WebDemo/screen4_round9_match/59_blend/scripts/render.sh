#!/usr/bin/env bash
# One moment (53_swim/scripts/render.sh adapted: layer_diag.cjs base render, seed 7, no steering, 768 x 1536 canvas):
#   render.sh <label> <s3 or ','> <start|T1.0|T2.0> [old|new]
# start = Tap to Start (game clock 3.517 s); T1.0 / T2.0 = that long after the tap. old = the committed bundle (ea0c833c,
# a scratch copy of WebDemo), new = this worktree's rebuilt WebDemo.
L="$1"; S="$2"; M="$3"; WHICH="${4:-new}"
R=/home/user/bubblegame/.claude/worktrees/agent-a19467485d7ab6a56; E=$R/Previews/WebDemo/screen4_round9_match/59_blend; D=$R/WebDemo
OLD=/tmp/claude-0/-home-user-bubblegame/4fd798d9-8469-584c-9cb4-d91fe93a1905/scratchpad/webdemo_old
source $R/Tools/bw_tools_env.sh > /dev/null 2>&1; mkdir -p $E/frames
ROOT=$D; [ "$WHICH" = old ] && ROOT=$OLD
if [ "$M" = start ]; then EXTRA="NOTAP=1"; else EXTRA="T=${M#T}"; fi
OUT=${5:-$E/frames/${L}_$M}
(cd $D && env S3="$S" $EXTRA node tools/screen4/layer_diag.cjs $ROOT $OUT > $OUT.log 2>&1)
echo "$L $M ($WHICH): $(tail -n 1 $OUT.log)"

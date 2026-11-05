#!/usr/bin/env bash
# mf_shots.sh <demo dir> <out dir> <switch> [<switch> ...] : raw-canvas frames at Tap to Start, 2.85, 3.0 and 4.2 s (seed 7)
DEMO="$1"; OUT="$2"; shift 2; mkdir -p "$OUT"
TOOL=/home/user/bubblegame/WebDemo/tools/models/game_eval.cjs
for sw in "$@"; do name="${sw//,/+}"
  S3="$sw" TIMES=2.85,3.0,4.2 EVAL='d.mascotState.z' SHOT="$OUT/${name}_%.png" node "$TOOL" "$DEMO" > "$OUT/${name}.log" 2>&1 || echo "$name FAILED"
  echo "$(date -u +%H:%M) $name done"
done

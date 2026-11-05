#!/usr/bin/env bash
# identity_shots.sh <demo dir> <out dir> : raw-canvas frames (tools/models/game_eval.cjs SHOT, seed 7, 538 x 1076) of the
# normal game and every older Screen 4 switch, at Tap to Start, 2.85 s and 4.2 s, for the pixel-identity proof.
DEMO="$1"; OUT="$2"; mkdir -p "$OUT"
TOOL="$(cd "$(dirname "$0")/../../../../.." && pwd)/WebDemo/tools/models/game_eval.cjs"
for sw in "" hero round7 round6 round6,rich round5 round4 liquid liquid,nofoam splash splash,nofoam; do
  name="${sw:-normal}"; name="${name//,/+}"
  S3="$sw" TIMES=2.85,4.2 EVAL='d.mascotState.z' SHOT="$OUT/${name}_%.png" node "$TOOL" "$DEMO" > "$OUT/${name}.log" 2>&1 || echo "$name FAILED"
  echo "$(date -u +%H:%M) $name done"
done

#!/usr/bin/env bash
# identity frames for the normal game, every older switch and match (seed 7, raw canvas, Tap to Start, 2.85 s, 4.2 s)
DEMO="$1"; OUT="$2"; mkdir -p "$OUT"
TOOL=/home/user/bubblegame/WebDemo/tools/models/game_eval.cjs
for sw in "" hero round7 round6 round6,rich round5 round4 liquid liquid,nofoam splash splash,nofoam match match,nofoam; do
  name="${sw:-normal}"; name="${name//,/+}"
  S3="$sw" TIMES=2.85,4.2 EVAL='d.mascotState.z' SHOT="$OUT/${name}_%.png" node "$TOOL" "$DEMO" > "$OUT/${name}.log" 2>&1 || echo "$name FAILED"
  echo "$(date -u +%H:%M) $name done"
done

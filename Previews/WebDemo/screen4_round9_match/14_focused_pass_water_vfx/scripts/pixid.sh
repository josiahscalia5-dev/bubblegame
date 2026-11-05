#!/bin/bash
# Pixel identity runs: the raw 3D canvas (tools/models/game_eval.cjs SHOT, seed 7) at Tap to Start and 2.85 s for the normal
# game, ?s3=splash and ?s3=liquid, with the baseline bundle (a mirror of WebDemo/ serving it) and with this pass's bundle.
#   bash pixid.sh <WebDemo (abs)> <baseline mirror (abs)> <out dir (abs)>
DEMO="$1"; BASE="$2"; OUT="$3"
mkdir -p "$OUT"
export NODE_PATH=/opt/node22/lib/node_modules
for s in normal splash liquid; do
  if [ "$s" = normal ]; then s3=""; else s3="$s"; fi
  for which in base now; do
    if [ "$which" = base ]; then root="$BASE"; else root="$DEMO"; fi
    flock /tmp/bw_browser.lock env S3="$s3" TIMES=2.85 EVAL='1' SHOT="$OUT/${s}_${which}_%.png" node "$DEMO/tools/models/game_eval.cjs" "$root" > "$OUT/${s}_${which}.log" 2>&1
    echo "$s $which done: $(ls "$OUT" | grep -c "^${s}_${which}_")"
  done
done

#!/usr/bin/env bash
# page_id.sh <demo dir> <out dir> <switch|none> ... : page frames WITH the interface (liquid_shots.cjs, DPR 1) at Tap to Start and 3.0 s
DEMO="$1"; OUT="$2"; shift 2; mkdir -p "$OUT"
for sw in "$@"; do s="$sw"; [ "$sw" = none ] && s=""; name="${sw//,/+}"
  S3="$s" TIMES=0,3.0 DPR=1 LABEL="$name" node /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/23_step2_interface/scripts/page_shots_static.cjs "$DEMO" "$OUT" > "$OUT/$name.log" 2>&1 || echo "$name FAILED"
  echo "$(date -u +%H:%M) $name done"
done

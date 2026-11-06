#!/usr/bin/env bash
# Step 6 frame runs (seed 7, 3.0 s, no steering) via WebDemo/tools/screen4/layer_diag.cjs.
#   runs.sh <WebDemo> <out dir> <label> [ENV=...]...   e.g. runs.sh /home/user/bw-step6/WebDemo out calib TUNE=... ROUTE_RINGS=...
D="$1"; O="$2"; L="$3"; shift 3
source /home/user/bubblegame/Tools/bw_tools_env.sh
mkdir -p "$O"
(cd "$D" && env S3=focus "$@" node tools/screen4/layer_diag.cjs "$D" "$O/$L" ${ABL:-} > "$O/$L.log" 2>&1)
echo "$L: $(tail -n1 "$O/$L.log")"

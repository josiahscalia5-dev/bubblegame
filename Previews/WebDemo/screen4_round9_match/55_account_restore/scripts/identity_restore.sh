#!/usr/bin/env bash
# Account-restoration identity proof (seventeenth session, 6 November 2026). Diagnostic only: changes no game file.
# For each moment it renders the SAME seeded frame (layer_diag.cjs base render: seed 7, no steering, 768 x 1536 canvas)
#   A: the COMMITTED accepted bundle (WebDemo/game.bundle.js, md5 5bb24e28), served from the repository's WebDemo;
#   B: a bundle REBUILT here from the current source (a scratch copy of WebDemo, see README.md);
# and counts differing pixels A vs B, and A vs the frame the previous account's machine saved for the same bundle
# (53_swim/identity/<label>_<moment>_new/base_canvas.png, bundle 5bb24e28).
#   identity_restore.sh <rebuilt WebDemo copy>
set -u
R="$(cd "$(dirname "$0")/../../../../.." && pwd)"; D=$R/WebDemo; B="$1"
E=$R/Previews/WebDemo/screen4_round9_match/55_account_restore/identity
P=$R/Previews/WebDemo/screen4_round9_match/53_swim/identity
PY=~/.bubblewash-tools/visual/bin/python
mkdir -p "$E"
run() {   # <label> <s3 or ','> <start|T1.0>
  local L="$1" S="$2" M="$3" EXTRA
  if [ "$M" = start ]; then EXTRA="NOTAP=1"; else EXTRA="T=${M#T}"; fi
  (cd "$D" && env S3="$S" $EXTRA node tools/screen4/layer_diag.cjs "$D" "$E/${L}_${M}_committed" > "$E/${L}_${M}_committed.log" 2>&1)
  (cd "$D" && env S3="$S" $EXTRA node tools/screen4/layer_diag.cjs "$B" "$E/${L}_${M}_rebuilt" > "$E/${L}_${M}_rebuilt.log" 2>&1)
  "$PY" - "$E/${L}_${M}_committed/base_canvas.png" "$E/${L}_${M}_rebuilt/base_canvas.png" \
    "$P/${L}_${M}_new/base_canvas.png" "$E/${L}_${M}_committed/base_again_canvas.png" "$L $M" <<'PY'
import sys, os, numpy as np; from PIL import Image
def load(p): return np.asarray(Image.open(p).convert('RGBA')).astype(int)
def diff(a, b): return int((np.abs(a - b).sum(-1) > 0).sum()) if a.shape == b.shape else f'size {a.shape} vs {b.shape}'
a, b = load(sys.argv[1]), load(sys.argv[2])
prev = diff(a, load(sys.argv[3])) if os.path.exists(sys.argv[3]) else 'no saved frame'
again = diff(a, load(sys.argv[4])) if os.path.exists(sys.argv[4]) else 'n/a'
print(f'{sys.argv[5]:<24} {a.shape[1]}x{a.shape[0]}  committed vs rebuilt: {diff(a, b)} px | committed vs previous machine: {prev} px | committed re-render: {again} px')
PY
  grep -h -E 'console|error' "$E/${L}_${M}_committed.log" | head -2 | sed 's/^/    log: /'
}
run accepted_intunnel intunnel start
run accepted_intunnel intunnel T1.0
run normal_game , T1.0
run R9 intunnel,water9 T1.0

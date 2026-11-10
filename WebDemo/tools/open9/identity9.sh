#!/usr/bin/env bash
# open9 (session d742a298): IDENTITY PROOF for everything that must not change when `open9` is NOT in the switch list.
#   1. the live game's raw canvas (tools/journey/identity.sh): Classic Screen 4, the plain launch's game, the Screen 6 candidate;
#   2. the OPENING itself, frame by frame with a fixed clock (tools/open9/flow9.cjs, the opening's 3D canvas, the page's UI hidden):
#      the real plain launch (no ?s3=) and the previous opening candidate (the Screen 6 candidate + seq7), before their hand-over.
# The OLD build is a commit's game.bundle.js + index.html over the same models; the NEW build is the working tree's.
#   bash WebDemo/tools/open9/identity9.sh <old-commit> <out-dir>
set -u; cd "$(dirname "$0")/../../.." || exit 1
OLDC="$1"; OUT="$2"; mkdir -p "$OUT"
bash WebDemo/tools/journey/identity.sh "$OLDC" "$OUT/game" > "$OUT/game_identity.log" 2>&1
CAND7=intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3,six2,s56,coin6,hero6,water6,brush6,arch56,env6,tank6,fin6,hero7,seq7
: > "$OUT/opening_identity.txt"
run() { L="$1"; S="$2"; T="$3"
  for B in old new; do D="$OUT/game/old"; [ $B = new ] && D="$PWD/WebDemo"; mkdir -p "$OUT/$B.$L"
    (cd WebDemo && S3="$S" TIMES="$T" STEP=0.05 UI=0 VW=432 VH=768 flock /tmp/bw_browser.lock node tools/open9/flow9.cjs "$D" "$OUT/$B.$L" > "$OUT/$B.$L/run.json" 2> "$OUT/$B.$L/err.txt"); done
  ~/.bubblewash-tools/visual/bin/python - "$OUT" "$L" "$S" <<'PY' | tee -a "$OUT/opening_identity.txt"
import sys, glob, os, json, numpy as np
from PIL import Image
out, L, S = sys.argv[1:4]
fs = sorted(glob.glob(f'{out}/old.{L}/t_*.png'))
if not fs: print(f'{L}: NO FRAMES (see {out}/old.{L}/err.txt)')
for f in fs:
    g = f.replace(f'/old.{L}/', f'/new.{L}/')
    if not os.path.exists(g): print(f'{L} {os.path.basename(f)}: MISSING in the new build'); continue
    a, b = (np.asarray(Image.open(p).convert('RGBA')).astype(int) for p in (f, g))
    print(f'{L} {os.path.basename(f)}: {int((np.abs(a - b).sum(-1) > 0).sum())} pixels differ of {a.shape[0] * a.shape[1]} (?s3={S or "(none: the plain launch)"})')
for B in ('old', 'new'):
    try: r = json.load(open(f'{out}/{B}.{L}/flow9_report.json')); print(f'  {B}: hand-over {r["opening"]["hand"]} s, end {r["opening"]["end"]} s, console errors {len(r["errors"])}')
    except Exception as e: print(f'  {B}: no report ({e})')
PY
}
run plain_opening "" -1,1.2,2.4,4.2,5.0,6.8,8.0,8.8
run seq7_opening "$CAND7" 5.0,8.0,9.4
cat "$OUT/game/identity.txt" | tee -a "$OUT/opening_identity.txt"
echo "old bundle $(md5sum < "$OUT/game/old/game.bundle.js" | cut -c1-8) ($OLDC), new bundle $(md5sum < WebDemo/game.bundle.js | cut -c1-8)" | tee -a "$OUT/opening_identity.txt"

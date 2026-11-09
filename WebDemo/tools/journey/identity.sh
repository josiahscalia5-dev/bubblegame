#!/usr/bin/env bash
# (session 8da775c4) Identity proof: the raw WebGL canvas of the OLD build (a git commit's bundle) against the working tree's build for switch
# lists that must not change (the plain launch without the Home screen, the Screen 6 candidate, Classic Screen 4). Seeded, no steering.
#   bash WebDemo/tools/journey/identity.sh <old-commit> <out-dir> [VW VH]
set -u; cd "$(dirname "$0")/../../.." || exit 1
OLDC="$1"; OUT="$2"; VW="${3:-432}"; VH="${4:-768}"; mkdir -p "$OUT/old"
for f in WebDemo/*; do b=$(basename "$f"); case "$b" in game.bundle.js|index.html) ;; *) ln -sfn "$PWD/$f" "$OUT/old/$b";; esac; done
git show "$OLDC:WebDemo/game.bundle.js" > "$OUT/old/game.bundle.js"; git show "$OLDC:WebDemo/index.html" > "$OUT/old/index.html"
PLAIN=intunnel,structmatch,level1,tripo1,tripo2,scene07,six,tripo3,six2,s56
CAND=$PLAIN,coin6,hero6,water6,brush6,arch56,env6,tank6,fin6,hero7
: > "$OUT/identity.txt"
run() { L="$1"; S="$2"; T="$3"
  for B in old new; do D="$OUT/old"; [ $B = new ] && D="$PWD/WebDemo"; mkdir -p "$OUT/$B.$L"
    (cd WebDemo && S3="$S" TS="$T" LABEL="$L" VW=$VW VH=$VH flock /tmp/bw_browser.lock node tools/journey/jrun.cjs "$D" tools/journey/p_canvas.cjs "$OUT/$B.$L" > "$OUT/$B.$L/run.json" 2> "$OUT/$B.$L/err.txt"); done
  ~/.bubblewash-tools/visual/bin/python - "$OUT" "$L" "$S" <<'PY' | tee -a "$OUT/identity.txt"
import sys, glob, os, numpy as np
from PIL import Image
out, L, S = sys.argv[1:4]
for f in sorted(glob.glob(f'{out}/old.{L}/*.png')):
    g = f.replace(f'/old.{L}/', f'/new.{L}/')
    a, b = (np.asarray(Image.open(p).convert('RGBA')).astype(int) for p in (f, g))
    print(f'{L} {os.path.basename(f)}: {int((np.abs(a - b).sum(-1) > 0).sum())} pixels differ of {a.shape[0] * a.shape[1]} (?s3={S})')
PY
}
run classic intunnel 3
run plain "$PLAIN" 3,12
run candidate "$CAND" 3,30
echo "old bundle $(md5sum < "$OUT/old/game.bundle.js" | cut -c1-8) ($OLDC), new bundle $(md5sum < WebDemo/game.bundle.js | cut -c1-8), canvas ${VW}x${VH}" | tee -a "$OUT/identity.txt"

#!/usr/bin/env bash
# Evidence captures for Checkpoint A (one browser at a time): page captures with the HUD (s3_shot.cjs, seed 7, 538 x 1076
# stage), canvas renders at the original's framing (layer_diag.cjs) for the measurements, then the gameplay proofs.
#   bash evidence.sh <worktree> <scratch>
R="$1"; SP="$2"; D=$R/WebDemo; E=$R/Previews/WebDemo/screen4_round9_match/63_structmatch_A
cd $D
shot() { SETTLE=900 S3="$1" TIMES="$2" node tools/screen3/s3_shot.cjs "$D" "$3" > "$3.log" 2>&1; echo "s3_shot $1 [$2]: $(tail -1 $3.log)"; }
shot intunnel,structmatch 0,0.25,0.5,0.75,1,2,3 $E/frames_new
shot intunnel 0 $E/frames_accepted_rebuilt
shot intunnel,structmatch,nowater 0,1 $E/frames_nowater
shot intunnel,structmatch,nohousing 0,1,2 $E/frames_nohousing
shot intunnel,structmatch,hero2,tunnel2,props2,hud2 0 $E/frames_optin_all
for M in start T1.0 T2.0; do
  if [ $M = start ]; then EX="NOTAP=1"; else EX="T=${M#T}"; fi
  env S3=intunnel,structmatch $EX node tools/screen4/layer_diag.cjs $D $SP/identity/structmatch_${M}_new > $SP/identity/structmatch_${M}_new.log 2>&1; echo "layer_diag structmatch $M: exit $?"
done
~/.bubblewash-tools/visual/bin/python - $R/Previews/WebDemo/screen4_round9_match/62_opening_mandate_audit/frames_accepted/t0.png $E/frames_accepted_rebuilt/t0.png <<'PY' | tee $E/proofs/identity_page_t0.txt
import sys, numpy as np; from PIL import Image
a, b = (np.asarray(Image.open(p).convert('RGB')).astype(int) for p in sys.argv[1:3])
print(f'accepted ?s3=intunnel Tap to Start PAGE capture with the HUD (s3_shot.cjs, {a.shape[1]} x {a.shape[0]}): frames_accepted/t0.png (bundle 38466b67) vs this build: {int((np.abs(a - b).sum(-1) > 0).sum())} pixels differ')
PY
bash $E/scripts/gameplay.sh $R

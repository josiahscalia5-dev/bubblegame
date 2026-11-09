#!/usr/bin/env bash
# Every browser job of the proof, one after another (one headless browser at a time): the candidate's 768 x 1536 renders,
# the identity proofs (committed bundle 38466b67 vs this worktree's rebuild), the gameplay tests.
S=/home/user/bubblegame/.claude/worktrees/agent-a5ba6876e8752066d/Previews/WebDemo/screen4_round9_match/60_fidelity/scripts
for m in start T1.0 T2.0; do bash $S/render.sh fidelity intunnel,fidelity $m new; done
rm -f $S/../proofs/identity/identity.txt
bash $S/identity_all.sh a
bash $S/identity_all.sh b
bash $S/gameplay.sh s3_func intunnel,fidelity fidelity
bash $S/gameplay.sh r2_func intunnel,fidelity fidelity
bash $S/gameplay.sh trace intunnel,fidelity fidelity
bash $S/record_clip.sh clip_fidelity intunnel,fidelity new
echo CHAIN DONE

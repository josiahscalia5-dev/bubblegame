#!/usr/bin/env bash
# ORIGINAL | previous (the committed bundle's ?s3=intunnel, the identity renders) | NEW ?s3=intunnel,blend at the original's
# own framing (layer_diag.cjs 768 x 1536 base renders), start, +1 s and +2 s
E=/home/user/bubblegame/.claude/worktrees/agent-a5ba6876e8752066d/Previews/WebDemo/screen4_round9_match/60_fidelity
ID=/tmp/claude-0/-home-user-bubblegame/4fd798d9-8469-584c-9cb4-d91fe93a1905/scratchpad/identity
P=$HOME/.bubblewash-tools/visual/bin/python
for m in start T1.0 T2.0; do
  mkdir -p "$E/frames/accepted_$m"
  cp "$ID/intunnel_${m}_old/base_canvas.png" "$E/frames/accepted_$m/base_canvas.png"
  "$P" "$E/scripts/sheet3.py" "$E/sheets/framing768_ORIGINAL_accepted_fidelity_$m.jpg" \
    "ACCEPTED intunnel $m=$E/frames/accepted_$m/base_canvas.png" "NEW intunnel,fidelity $m=$E/frames/fidelity_$m/base_canvas.png"
done

#!/bin/bash
# Final checks, one browser at a time (shared lock).
W=/home/user/bubblegame/.claude/worktrees/agent-a76d8d522689c2f66
T=$W/.wvtmp
EV=$W/Previews/WebDemo/screen4_round9_match/07_water_vfx_gate_fixes
mkdir -p $T/pix $EV/moves
cd $W/WebDemo
for S in normal splash liquid; do
  if [ "$S" = normal ]; then SV=""; else SV="$S"; fi
  S3="$SV" TIMES=2.85 EVAL='d.mascotState.z' SHOT=$T/pix/${S}_base_%.png flock /tmp/bw_browser.lock node tools/models/game_eval.cjs $T/basedemo > $T/pix/${S}_base.log 2>&1
  S3="$SV" TIMES=2.85 EVAL='d.mascotState.z' SHOT=$T/pix/${S}_now_%.png flock /tmp/bw_browser.lock node tools/models/game_eval.cjs $W/WebDemo > $T/pix/${S}_now.log 2>&1
  echo "pix $S done"
done
S3=match flock /tmp/bw_browser.lock node tools/screen3/s3_func.cjs $W/WebDemo > $EV/gameplay_checks_match_s3_func.txt 2>&1
echo "s3_func done"
S3=match DPR=1.5 flock /tmp/bw_browser.lock node tools/screen4/liquid_moves.cjs $W/WebDemo $EV/moves > $EV/moves/liquid_moves_match.txt 2>&1
echo "moves done"
MESHES=mwTunnelBubbles,heroBubbles S3=match TIMES=3.0 flock /tmp/bw_browser.lock node $EV/scripts/bubble_probe.cjs $W/WebDemo $T/probe_now > $T/probe_now.log 2>&1
MESHES=mwTunnelBubbles,heroBubbles S3=match TIMES=3.0 flock /tmp/bw_browser.lock node $EV/scripts/bubble_probe.cjs $T/basedemo $T/probe_before > $T/probe_before.log 2>&1
echo "probes done"

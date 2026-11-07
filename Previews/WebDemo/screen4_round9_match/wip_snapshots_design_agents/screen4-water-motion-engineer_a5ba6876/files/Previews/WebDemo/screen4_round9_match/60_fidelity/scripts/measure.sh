#!/usr/bin/env bash
# measure.sh <label> <frame.png> [previous.png]: silhouette profile, contact band and zone water of one 768 x 1536 frame,
# and (with a previous frame) a zoom ORIGINAL | previous | this of her area to the scratchpad (zoom_<label>.png)
R=/home/user/bubblegame/.claude/worktrees/agent-a5ba6876e8752066d; S=$R/Previews/WebDemo/screen4_round9_match/60_fidelity/scripts
SP=/tmp/claude-0/-home-user-bubblegame/4fd798d9-8469-584c-9cb4-d91fe93a1905/scratchpad
P=$HOME/.bubblewash-tools/visual/bin/python
"$P" "$S/profile.py" "$1=$2"
"$P" "$S/contact_band.py" "$1=$2" | tail -n 1
"$P" "$S/zone_water.py" "$1=$2" | tail -n 1
[ -n "$3" ] && "$P" "$SP/py/zoom.py" "$SP/zoom_$1.png" 140 1020 620 1420 "$3" "$2"
exit 0

#!/bin/bash
W=/home/user/bubblegame/.claude/worktrees/agent-a76d8d522689c2f66
T=$W/.wvtmp
cd $W/WebDemo
S3=match TIMES=2.85,3.0,3.1 DPR=1.5 CANVAS=1 COST=1 flock /tmp/bw_browser.lock node tools/screen4/liquid_shots.cjs $W/WebDemo $T/fin2 > $T/fin2.log 2>&1
echo "frames done"
bash $T/checks.sh

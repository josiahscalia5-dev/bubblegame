#!/usr/bin/env bash
# The identity proofs, in two chains (two browsers at most): committed bundle ea0c833c vs this worktree's rebuilt bundle.
S=/home/user/bubblegame/.claude/worktrees/agent-a5ba6876e8752066d/Previews/WebDemo/screen4_round9_match/60_fidelity/scripts/identity.sh
if [ "$1" = a ]; then
  bash "$S" intunnel intunnel start; bash "$S" intunnel intunnel T1.0; bash "$S" intunnel intunnel T2.0; bash "$S" noswim2 intunnel,noswim2 T1.0
else
  bash "$S" water9 intunnel,water9 T1.0; bash "$S" normal , start; bash "$S" normal , T1.0
fi

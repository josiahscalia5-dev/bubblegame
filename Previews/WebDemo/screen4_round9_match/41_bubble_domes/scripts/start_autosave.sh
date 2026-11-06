#!/usr/bin/env bash
cd /workspace/bubblegame
source Tools/bw_tools_env.sh >/dev/null 2>&1
export CLAUDE_SESSION_URL=https://claude.ai/code/session_01L8bvJeZc9rVMuCUG45nhjU
export BW_AGENT_TRANSCRIPTS=ChatHistory/2026-11-06_fourteenth_session_design_agent_transcripts.md
export BW_AGENT_TITLE="Fourteenth session (6 November): Screen 4 breakthrough pass, design agents"
export BW_WIP_DIR=Previews/WebDemo/screen4_round9_match/wip_snapshots_design_agents
setsid nohup bash Tools/autosave.sh /root/.claude/projects/-workspace-bubblegame/9add4357-64e4-5c80-a01a-8b2e091ae619.jsonl \
  ChatHistory/2026-11-06_fourteenth_session_screen4_breakthrough.md \
  "Fourteenth session (6 November): Screen 4 breakthrough pass" 5 288 > /tmp/claude-0/-workspace-bubblegame/9add4357-64e4-5c80-a01a-8b2e091ae619/scratchpad/autosave.log 2>&1 < /dev/null & disown

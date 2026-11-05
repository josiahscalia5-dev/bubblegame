#!/usr/bin/env bash
# Auto-save for the cloud sessions: every few minutes, export the latest chat history, the design agents' transcripts and
# a snapshot of each agent's unfinished work, then commit and push everything on the work branch (never merged anywhere)
# with Tools/save_now.sh, which checks that GitHub really has the commit.
# Started by Claude at the user's request ("save everything every 5 minutes, including the design agents, what they built").
#
#   [BW_AGENT_TRANSCRIPTS=<agents.md>] [BW_AGENT_TITLE="<title>"] [BW_WIP_DIR=<folder>] \
#     Tools/autosave.sh <session.jsonl> <chat-history.md> "<title>" [minutes=5] [rounds=23]
#
# The session log is ~/.claude/projects/<project>/<session-id>.jsonl; the agents' logs are in the folder of the same name
# without .jsonl. Each round:
#   1. the chat history (Tools/export_chat_history.py) into <chat-history.md>;
#   2. with BW_AGENT_TRANSCRIPTS set: every design agent's brief, steps and report (Tools/export_agent_transcripts.py);
#   3. with BW_WIP_DIR set: each agent worktree's unfinished work, a patch plus full copies of the files it changed or
#      made (Tools/snapshot_agent_worktrees.py), into <folder>/<agent>_<id>/;
#   4. Tools/save_now.sh: commit, push, and check GitHub has it.
# Set CLAUDE_SESSION_URL to put the session link in each commit. A cloud session stops its own background jobs after 30
# minutes to 2 hours, so start it DETACHED for a whole session (CLAUDE.md, Safety): setsid nohup bash Tools/autosave.sh ...
# 5 288 > <log> 2>&1 < /dev/null & disown   (288 rounds of 5 minutes = 24 hours). Claude starts it again if it is gone. Each round's save report goes to
# standard output. A round is skipped while another git command or a merge is in progress, and tried again next round.
set -u
LOG="$1"; OUT="$2"; TITLE="$3"; MINUTES="${4:-5}"; ROUNDS="${5:-23}"
SESSION_DIR="${LOG%.jsonl}"
cd "$(dirname "$0")/.." || exit 1
for ((i = 1; i <= ROUNDS; i++)); do
  echo "--- round $i of $ROUNDS"
  python3 -I Tools/export_chat_history.py "$LOG" "$OUT" "$TITLE" > /dev/null 2>&1 || echo "$(date -u +%H:%M) chat export failed"
  if [ -n "${BW_AGENT_TRANSCRIPTS:-}" ] && [ -d "$SESSION_DIR/subagents" ]; then
    python3 -I Tools/export_agent_transcripts.py "$SESSION_DIR" "$BW_AGENT_TRANSCRIPTS" "${BW_AGENT_TITLE:-Design agent transcripts}" \
      > /dev/null 2>&1 || echo "$(date -u +%H:%M) agent transcript export failed"
  fi
  if [ -n "${BW_WIP_DIR:-}" ]; then
    python3 -I Tools/snapshot_agent_worktrees.py "$SESSION_DIR" "$BW_WIP_DIR" 2>&1 | tail -1 \
      || echo "$(date -u +%H:%M) agent work snapshot failed"
  fi
  bash Tools/save_now.sh "Auto-save $(date -u '+%Y-%m-%d %H:%M') UTC: latest work in progress, chat history and design agents" \
    "Automatic save at the user's request (every ${MINUTES} minutes): the chat history, the design agents' transcripts and a snapshot of each agent's unfinished work. Work branch only; nothing is merged."
  if [ "$i" -lt "$ROUNDS" ]; then sleep $((MINUTES * 60)); fi
done
echo "$(date -u +%H:%M) finished all $ROUNDS rounds; start it again to keep saving"
exit 0

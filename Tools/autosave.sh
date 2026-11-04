#!/usr/bin/env bash
# Auto-save for the cloud sessions: every few minutes, export the latest chat history, then commit and push everything on
# the work branch (never merged anywhere) with Tools/save_now.sh, which checks that GitHub really has the commit.
# Started by Claude at the user's request ("save everything every 5 minutes").
#
#   Tools/autosave.sh <session.jsonl> <chat-history.md> "<title>" [minutes=5] [rounds=23]
#
# The session log is ~/.claude/projects/<project>/<session-id>.jsonl. Set CLAUDE_SESSION_URL to put the session link in
# each commit. Run it in the background; a cloud session stops background jobs after 2 hours, so 23 rounds of 5 minutes
# fit, and Claude starts it again after that. Each round's save report (branch, commit, push verified or failed, files)
# goes to standard output. A round is skipped while another git command is running, and tried again next round.
set -u
LOG="$1"; OUT="$2"; TITLE="$3"; MINUTES="${4:-5}"; ROUNDS="${5:-23}"
cd "$(dirname "$0")/.." || exit 1
for ((i = 1; i <= ROUNDS; i++)); do
  echo "--- round $i of $ROUNDS"
  python3 -I Tools/export_chat_history.py "$LOG" "$OUT" "$TITLE" > /dev/null 2>&1 || echo "$(date -u +%H:%M) chat export failed"
  bash Tools/save_now.sh "Auto-save $(date -u '+%Y-%m-%d %H:%M') UTC: latest work in progress and chat history" \
    "Automatic save at the user's request (every ${MINUTES} minutes). Work branch only; nothing is merged."
  if [ "$i" -lt "$ROUNDS" ]; then sleep $((MINUTES * 60)); fi
done
echo "$(date -u +%H:%M) finished all $ROUNDS rounds; start it again to keep saving"
exit 0

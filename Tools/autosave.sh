#!/usr/bin/env bash
# Auto-save for the cloud sessions: every few minutes, export the latest chat history and commit and push everything on the
# test branch (never merged anywhere). Started by Claude at the user's request ("save everything every 5 minutes").
#
#   Tools/autosave.sh <session.jsonl> <chat-history.md> "<title>" [minutes=5] [rounds=24]
#
# Each round: export the chat history (Tools/export_chat_history.py), then, if anything changed, commit all files and push
# the current branch to GitHub (retrying on network errors) and check that GitHub has the commit. A round is skipped while
# another git command is running (an index.lock is present), and tried again next round.
set -u
LOG="$1"; OUT="$2"; TITLE="$3"; MINUTES="${4:-5}"; ROUNDS="${5:-24}"
cd "$(dirname "$0")/.." || exit 1
BRANCH="$(git rev-parse --abbrev-ref HEAD)"
for ((i = 1; i <= ROUNDS; i++)); do
  if [ -e .git/index.lock ]; then echo "$(date -u +%H:%M) round $i: git busy, skipped"; sleep $((MINUTES * 60)); continue; fi
  python3 -I Tools/export_chat_history.py "$LOG" "$OUT" "$TITLE" > /dev/null 2>&1 || echo "$(date -u +%H:%M) chat export failed"
  git add -A
  if git diff --cached --quiet; then
    echo "$(date -u +%H:%M) round $i: nothing new"
  else
    git commit -q -m "Auto-save $(date -u '+%Y-%m-%d %H:%M') UTC: latest work in progress and chat history" \
      -m "Automatic save at the user's request (every ${MINUTES} minutes). Test branch only; nothing is merged." \
      -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01SVUGRGfFMnfN4cKHbac5AG" || true
    echo "$(date -u +%H:%M) round $i: committed $(git rev-parse --short HEAD)"
  fi
  # push whenever GitHub is behind (also catches commits made by hand between rounds)
  if [ "$(git ls-remote origin "refs/heads/$BRANCH" 2>/dev/null | cut -f1)" != "$(git rev-parse HEAD)" ]; then
    for wait in 0 2 4 8 16; do
      sleep "$wait"
      if git push -q -u origin "$BRANCH" 2>/dev/null; then break; fi
    done
    [ "$(git ls-remote origin "refs/heads/$BRANCH" | cut -f1)" = "$(git rev-parse HEAD)" ] && echo "$(date -u +%H:%M) round $i: pushed, GitHub has $(git rev-parse --short HEAD)" || echo "$(date -u +%H:%M) round $i: push FAILED"
  fi
  [ "$i" -lt "$ROUNDS" ] && sleep $((MINUTES * 60))
done

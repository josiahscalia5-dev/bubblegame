#!/usr/bin/env bash
# Saves the whole project and this session's chat history to GitHub every few minutes, on the current branch.
# Runs on its own in the background (no Claude usage), until the session's container stops.
#
#   AUTOSAVE_SESSION=<session link> Tools/autosave.sh <session.jsonl> <ChatHistory/out.md> "<chat title>" [minutes=5] [log]
#
# The session log is ~/.claude/projects/<project>/<session-id>.jsonl. AUTOSAVE_SESSION, if set, is added to each
# commit message as its Claude-Session line.
#
# Each round: re-exports the chat history (Tools/export_chat_history.py), stages everything git does not ignore,
# leaves out any file over 95 MB (GitHub refuses files over 100 MB), commits only if something changed, and pushes
# (retrying up to 4 times, 2/4/8/16 s apart, on a network failure). It waits while another git command is running.
set -u
JSONL=$1 CHAT=$2 TITLE=$3 MINUTES=${4:-5} LOG=${5:-/dev/null}
cd "$(dirname "$0")/.." || exit 1
BRANCH=$(git rev-parse --abbrev-ref HEAD)
say() { echo "$(date -u '+%Y-%m-%d %H:%M:%S UTC') $*" >> "$LOG"; }
say "autosave started on $BRANCH, every $MINUTES min"
while true; do
  python3 -I Tools/export_chat_history.py "$JSONL" "$CHAT" "$TITLE" > /dev/null 2>> "$LOG" || say "chat export failed"
  for _ in 1 2 3 4 5 6; do [ -e .git/index.lock ] && sleep 10; done
  if [ -e .git/index.lock ]; then say "git busy, trying next round"; sleep $((MINUTES * 60)); continue; fi
  git add -A 2>> "$LOG"
  git diff --cached --name-only -z | while IFS= read -r -d '' f; do
    if [ -f "$f" ] && [ "$(stat -c%s "$f")" -gt 95000000 ]; then git reset -q -- "$f"; say "left out (over 95 MB): $f"; fi
  done
  if git diff --cached --quiet; then
    say "nothing new"
  else
    n=$(git diff --cached --name-only | wc -l)
    trailer="Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
    [ -n "${AUTOSAVE_SESSION:-}" ] && trailer="$trailer
Claude-Session: $AUTOSAVE_SESSION"
    git commit -q -m "Autosave: project and chat history ($(date -u '+%H:%M') UTC, $n files)" -m "Saved automatically every $MINUTES minutes (Tools/autosave.sh)." -m "$trailer" 2>> "$LOG"
    ok=0
    for wait in 0 2 4 8 16; do
      sleep "$wait"
      if git push -q -u origin "$BRANCH" 2>> "$LOG"; then ok=1; break; fi
    done
    if [ $ok = 1 ]; then say "saved and pushed $(git rev-parse --short HEAD) ($n files)"; else say "commit $(git rev-parse --short HEAD) made, push failed; will retry next round"; fi
  fi
  # a commit from an earlier round whose push failed
  if [ -n "$(git log --oneline "origin/$BRANCH..HEAD" 2>/dev/null)" ]; then git push -q -u origin "$BRANCH" 2>> "$LOG" && say "pushed earlier commits"; fi
  sleep $((MINUTES * 60))
done

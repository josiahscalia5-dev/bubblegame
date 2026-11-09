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
# (8 November, the user's preservation mandate) the autosave saves only the branch it was started on (BW_AUTOSAVE_BRANCH, else the
# branch checked out at its start): if the working copy is switched to another branch (for example the other Claude account's), the
# round is skipped and says so, so this session's work never lands on another session's branch by accident
START_BRANCH="${BW_AUTOSAVE_BRANCH:-$(git branch --show-current)}"
echo "$(date -u +%H:%M) autosave for branch $START_BRANCH, every $MINUTES minutes, $ROUNDS rounds"
for ((i = 1; i <= ROUNDS; i++)); do
  echo "--- round $i of $ROUNDS"
  if [ "$(git branch --show-current)" != "$START_BRANCH" ]; then
    echo "$(date -u +%H:%M) round skipped: the working copy is on '$(git branch --show-current)', not '$START_BRANCH' (this autosave saves only $START_BRANCH)"
    if [ "$i" -lt "$ROUNDS" ]; then sleep $((MINUTES * 60)); fi; continue
  fi
  python3 -I Tools/export_chat_history.py "$LOG" "$OUT" "$TITLE" > /dev/null 2>&1 || echo "$(date -u +%H:%M) chat export failed"
  if [ -n "${BW_AGENT_TRANSCRIPTS:-}" ] && [ -d "$SESSION_DIR/subagents" ]; then
    python3 -I Tools/export_agent_transcripts.py "$SESSION_DIR" "$BW_AGENT_TRANSCRIPTS" "${BW_AGENT_TITLE:-Design agent transcripts}" \
      > /dev/null 2>&1 || echo "$(date -u +%H:%M) agent transcript export failed"
  fi
  if [ -n "${BW_WIP_DIR:-}" ]; then
    python3 -I Tools/snapshot_agent_worktrees.py "$SESSION_DIR" "$BW_WIP_DIR" 2>&1 | tail -1 \
      || echo "$(date -u +%H:%M) agent work snapshot failed"
  fi
  # (session ac4e3449) the parallel specialist lanes: each lane's unfinished CODE is committed as a checkpoint and pushed to its own branch
  # (Tools/lanes.sh, registry Tools/lanes.json), so parallel work is never left only in a worktree
  [ -f Tools/lanes.json ] && bash Tools/lanes.sh save "autosave $(date -u '+%H:%M') UTC" 2>&1 | sed "s/^/$(date -u +%H:%M) /" || true
  bash Tools/save_now.sh "Auto-save $(date -u '+%Y-%m-%d %H:%M') UTC: latest work in progress, chat history and design agents" \
    "Automatic save at the user's request (every ${MINUTES} minutes): the chat history, the design agents' transcripts and a snapshot of each agent's unfinished work. Work branch only; nothing is merged."
  # (8 November, session 57091b57) BW_PARENT_BRANCH: the branch this one continues (another session may still be writing it). Report only,
  # never merge it here: a merge would change files under a running build, recording or edit. Fetching moves only origin/<parent>.
  if [ -n "${BW_PARENT_BRANCH:-}" ] && [ "$BW_PARENT_BRANCH" != "$START_BRANCH" ]; then
    if git fetch -q origin "$BW_PARENT_BRANCH" 2>/dev/null; then
      behind="$(git rev-list --count "HEAD..origin/$BW_PARENT_BRANCH" 2>/dev/null || echo '?')"
      if [ "$behind" = "0" ]; then echo "Parent:    $BW_PARENT_BRANCH (GitHub $(git rev-parse --short origin/$BW_PARENT_BRANCH)) is fully merged into $START_BRANCH"
      else echo "Parent:    $BW_PARENT_BRANCH (GitHub $(git rev-parse --short origin/$BW_PARENT_BRANCH)) has $behind commit(s) not yet in $START_BRANCH; merge by hand: git merge --no-edit origin/$BW_PARENT_BRANCH"; fi
    else echo "Parent:    could not fetch $BW_PARENT_BRANCH this round"; fi
  fi
  if [ "$i" -lt "$ROUNDS" ]; then sleep $((MINUTES * 60)); fi
done
echo "$(date -u +%H:%M) finished all $ROUNDS rounds; start it again to keep saving"
exit 0

#!/bin/bash
# SessionStart hook (the user's approval of 6 November 2026): restart the existing 5-minute autosave (Tools/autosave.sh)
# after a cloud environment restart or a session resume, ONLY if it is not already running. It installs nothing, never
# switches branches (and does nothing on main / master or a detached HEAD), commits nothing itself, never touches the game:
# it only starts the same detached autosave that CLAUDE.md describes (its chat export redacts keys).
set -uo pipefail
[ "${CLAUDE_CODE_REMOTE:-}" = "true" ] || exit 0          # cloud sessions only
cd "${CLAUDE_PROJECT_DIR:-.}" || exit 0
[ -f Tools/autosave.sh ] || exit 0
input="$(cat 2>/dev/null || true)"
field() { printf '%s' "$input" | python3 -I -c "import json,sys
try: print(json.load(sys.stdin).get('$1') or '')
except Exception: print('')" 2>/dev/null; }
sid="$(field session_id)"; log="$(field transcript_path)"
[ -n "$sid" ] && [ -n "$log" ] || exit 0
branch="$(git branch --show-current 2>/dev/null || true)"
case "$branch" in ""|main|master) exit 0 ;; esac          # never on the default branch or a detached HEAD
exec 9> /tmp/bw-autosave-hook.lock; flock -n 9 || exit 0   # one hook at a time
if pgrep -f "bash Tools/autosave.sh" > /dev/null; then exit 0; fi   # already saving: nothing to do
# this session's file names (Tools/autosave_sessions.json maps a session to them; otherwise a name from its id)
read -r chat agents title url < <(python3 -I - "$sid" <<'PY'
import json, sys, datetime
sid = sys.argv[1]
try: m = json.load(open('Tools/autosave_sessions.json')).get(sid, {})
except Exception: m = {}
d = datetime.datetime.now(datetime.timezone.utc).strftime('%Y-%m-%d')
chat = m.get('chat') or f'ChatHistory/{d}_session_{sid[:8]}.md'
agents = m.get('agents') or chat.replace('.md', '_design_agent_transcripts.md')
title = (m.get('title') or f'Session {sid[:8]}').replace(' ', ' ')
print(chat, agents, title, m.get('url') or '-')
PY
)
[ -n "${chat:-}" ] || exit 0
title="${title//$' '/ }"
[ "$url" = "-" ] && url=""
mkdir -p "${HOME}/.bubblewash-autosave"
CLAUDE_SESSION_URL="$url" BW_AGENT_TRANSCRIPTS="$agents" BW_AGENT_TITLE="$title, design agents" \
  BW_WIP_DIR=Previews/WebDemo/screen4_round9_match/wip_snapshots_design_agents \
  setsid nohup bash Tools/autosave.sh "$log" "$chat" "$title" 5 288 > "${HOME}/.bubblewash-autosave/autosave_${sid:0:8}.log" 2>&1 < /dev/null 9>&- &
disown 2>/dev/null || true
echo "Autosave restarted (every 5 minutes, branch $branch, chat history $chat)."
exit 0

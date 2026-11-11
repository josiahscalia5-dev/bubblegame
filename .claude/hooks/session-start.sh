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
# (9 November 2026, session 6ddc157f, the user's standing requirement) the read-only development-environment preflight, every session start,
# on any branch, before the autosave logic below (which is unchanged): branch, active game, agents, skill, plugin, MCP builds, tools, Tripo,
# autosave. It installs nothing and stores no key; its summary is printed for Claude, the full report goes to ~/.bubblewash-autosave/.
[ -f Tools/session_preflight.sh ] && timeout 40 bash Tools/session_preflight.sh "$sid" 2>/dev/null || true
# (9 November 2026, session 3849f5c8) the parallax-threejs plugin ships its Spector server without the build (vendor/spector), and Claude Code
# creates the plugin's folder only at session start (that session: hook 17:07:21.8, plugin folder 17:07:22, plugin spector spawned 17:07:29.4).
# A detached background job waits up to 90 s for the folder and links the setup's Spector build into it, so the plugin's `spector` can start.
# It only creates a symlink (never overwrites an existing vendor/spector), installs nothing and does not delay the session.
if [ -f "$HOME/.bubblewash-tools/spector/mcp/dist/index.js" ]; then
  ( for _ in $(seq 1 180); do
      for pj in "$HOME"/.claude/plugins/synced/*/*/.claude-plugin/plugin.json; do
        [ -f "$pj" ] && grep -q '"parallax-threejs"' "$pj" || continue
        pr="$(dirname "$(dirname "$pj")")"; [ -e "$pr/vendor/spector" ] || ln -s "$HOME/.bubblewash-tools/spector" "$pr/vendor/spector" 2>/dev/null
        exit 0
      done; sleep 0.5
    done ) > /dev/null 2>&1 < /dev/null &
  disown 2>/dev/null || true
fi
branch="$(git branch --show-current 2>/dev/null || true)"
case "$branch" in ""|main|master) exit 0 ;; esac          # never on the default branch or a detached HEAD
exec 9> /tmp/bw-autosave-hook.lock; flock -n 9 || exit 0   # one hook at a time
if pgrep -f "bash Tools/autosave.sh" > /dev/null; then exit 0; fi   # already saving: nothing to do
# this session's file names (Tools/autosave_sessions.json maps a session to them; otherwise a name from its id)
read -r chat agents title url parent < <(python3 -I - "$sid" <<'PY'
import json, sys, datetime
sid = sys.argv[1]
try: m = json.load(open('Tools/autosave_sessions.json')).get(sid, {})
except Exception: m = {}
d = datetime.datetime.now(datetime.timezone.utc).strftime('%Y-%m-%d')
chat = m.get('chat') or f'ChatHistory/{d}_session_{sid[:8]}.md'
agents = m.get('agents') or chat.replace('.md', '_design_agent_transcripts.md')
title = (m.get('title') or f'Session {sid[:8]}').replace(' ', ' ')
print(chat, agents, title, m.get('url') or '-', m.get('parent') or '-')
PY
)
[ -n "${chat:-}" ] || exit 0
title="${title//$' '/ }"
[ "$url" = "-" ] && url=""
parent="${parent:--}"; [ "$parent" = "-" ] && parent=""
mkdir -p "${HOME}/.bubblewash-autosave"
# pinned to the branch checked out now (the autosave never saves another branch); the parent branch is only reported, never merged
BW_AUTOSAVE_BRANCH="$branch" BW_PARENT_BRANCH="$parent" CLAUDE_SESSION_URL="$url" BW_AGENT_TRANSCRIPTS="$agents" BW_AGENT_TITLE="$title, design agents" \
  BW_WIP_DIR=Previews/WebDemo/screen4_round9_match/wip_snapshots_design_agents \
  setsid nohup bash Tools/autosave.sh "$log" "$chat" "$title" 5 288 > "${HOME}/.bubblewash-autosave/autosave_${sid:0:8}.log" 2>&1 < /dev/null 9>&- &
disown 2>/dev/null || true
echo "Autosave restarted (every 5 minutes, branch $branch, chat history $chat)."
exit 0

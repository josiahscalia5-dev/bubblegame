#!/usr/bin/env bash
# Bubble Wash Kingdom: the development-environment PREFLIGHT run at every Claude session start (the user's standing requirement of
# 9 November 2026, session 6ddc157f; called by .claude/hooks/session-start.sh, also by hand:  bash Tools/session_preflight.sh).
# READ-ONLY and lightweight (a few seconds; network only for an optional `git ls-remote` and the free `tripo balance`, each with a short
# timeout): it installs nothing, starts no autosave, stores no key. The one thing it may fix is idempotent and local: the symlink of the
# project's Spector build into the parallax-threejs plugin folder (the same link Tools/cloud_env_setup.sh makes).
# It prints a short summary (a SessionStart hook's output reaches Claude's context) and writes the full report to
# ~/.bubblewash-autosave/preflight_<id>.txt. Every line is OK, WARN, MISSING or NEEDS USER. What a shell cannot see (whether Claude's
# MCP servers actually connected, whether the Agent tool lists the agents) is left for Claude to check live: see CLAUDE.md "STANDING PROCEDURE".
set -uo pipefail
cd "$(dirname "$0")/.." || exit 0
WORK=claude/bubble-wash-account-transfer-52t7ym          # the user's development branch (CLAUDE.md)
ROLLBACK=claude/bubble-wash-rollback-before-tripo3-default
T="${BUBBLEWASH_TOOLS:-$HOME/.bubblewash-tools}"
ID="${1:-manual}"; OUTD="$HOME/.bubblewash-autosave"; mkdir -p "$OUTD"; REP="$OUTD/preflight_${ID:0:8}.txt"
ok=0; warn=0; miss=0; user=0; LINES=()
say() { LINES+=("$1  $2"); case "$1" in OK) ok=$((ok+1));; WARN) warn=$((warn+1));; MISSING) miss=$((miss+1));; "NEEDS USER") user=$((user+1));; esac; }
have() { command -v "$1" > /dev/null 2>&1 || [ -x "$T/node/node_modules/.bin/$1" ]; }
[ -f "$T/activate.sh" ] && . "$T/activate.sh" 2>/dev/null

# --- Git: branch and the user's work branch
br="$(git branch --show-current 2>/dev/null)"
remote="$(timeout 10 git ls-remote origin "refs/heads/$WORK" 2>/dev/null | cut -c1-8)"
if [ "$br" = "$WORK" ]; then say OK "branch $br (GitHub head ${remote:-unreachable})"
elif [ -n "$remote" ] && git merge-base --is-ancestor "$remote" HEAD 2>/dev/null; then say WARN "on '$br', which contains $WORK ($remote): save to $WORK (CLAUDE.md)"
else say WARN "on '$br'; the user's work branch is $WORK (GitHub head ${remote:-unreachable}): check before working"; fi
[ -n "$(timeout 10 git ls-remote origin "refs/heads/$ROLLBACK" 2>/dev/null)" ] && say OK "rollback branch $ROLLBACK present" || say WARN "rollback branch $ROLLBACK not found on GitHub"

# --- the ACTIVE game: the plain launch must be the six-scene tripo3 version, and the page must ask for the bundle that is built
if grep -q "__BW_DEFAULT_GAME__ = 'six+tripo3'" WebDemo/index.html 2>/dev/null; then say OK "plain launch = six-scene game + tripo3 (WebDemo/index.html)"; else say MISSING "WebDemo/index.html does not set the six+tripo3 default (rebuild: cd WebDemo && node build.mjs)"; fi
v="$(grep -o 'game.bundle.js?v=[0-9a-f]*' WebDemo/index.html 2>/dev/null | cut -d= -f2)"; m="$(md5sum < WebDemo/game.bundle.js 2>/dev/null | cut -c1-8)"
[ -n "$v" ] && [ "$v" = "$m" ] && say OK "bundle $m matches the page's version stamp (no stale bundle)" || say WARN "page asks for bundle '${v:-none}', built bundle is $m: rebuild (node build.mjs)"
for f in girl_v2_rigged washer_tripo_hj748 door_tripo_oit748_gold gear_v2_tripo housing_tripo_821; do [ -s "WebDemo/models/opening/$f.glb" ] || say MISSING "model WebDemo/models/opening/$f.glb"; done
[ -d WebDemo/node_modules/three ] && say OK "WebDemo dependencies installed" || say WARN "WebDemo/node_modules missing: cd WebDemo && npm ci"

# --- project agents, skill, hooks (they load from the repository)
for a in game-art-director gameplay-visual-testing lighting-visual-matching water-vfx-engineer screen4-water-motion-engineer; do
  grep -q "^name: $a" ".claude/agents/$a.md" 2>/dev/null || say MISSING "project agent $a (.claude/agents/$a.md)"; done
[ "$(ls .claude/agents/*.md 2>/dev/null | wc -l)" -ge 5 ] && say OK "5 project agents present (.claude/agents)"
[ -f .claude/skills/bubble-wash-screen-matcher/SKILL.md ] && say OK "skill bubble-wash-screen-matcher" || say MISSING "skill bubble-wash-screen-matcher"

# --- the parallax-threejs plugin (account-level: it cannot come from Git)
pj="$(grep -l '"name": "parallax-threejs"' "$HOME"/.claude/plugins/synced/*/*/.claude-plugin/plugin.json 2>/dev/null | head -1)"
if [ -n "$pj" ]; then pr="$(dirname "$(dirname "$pj")")"; ver="$(grep -o '"version": "[^"]*"' "$pj" | head -1 | cut -d'"' -f4)"
  say OK "parallax-threejs plugin $ver synced ($(ls "$pr/agents" 2>/dev/null | wc -l) agents)"
  if [ ! -e "$pr/vendor/spector" ] && [ -f "$T/spector/mcp/dist/index.js" ]; then ln -s "$T/spector" "$pr/vendor/spector" 2>/dev/null && say WARN "linked Spector into the plugin now: its spector server connects after /mcp reconnect"; fi
  [ -f "$pr/vendor/spector/mcp/dist/index.js" ] && say OK "plugin Spector build linked" || say WARN "plugin Spector build missing (bash Tools/cloud_env_setup.sh)"
  ls -d "$HOME"/.npm/_npx/*/node_modules/threejs-devtools-mcp > /dev/null 2>&1 && say OK "threejs-devtools-mcp cached (starts fast)" || say WARN "threejs-devtools-mcp not cached: its first start can time out (/mcp reconnect, or run Tools/cloud_env_setup.sh)"
else say "NEEDS USER" "parallax-threejs plugin not found: claude.ai -> Customize / plugins -> enable parallax-threejs, then start a NEW session"; fi
[ -f "$T/spector/mcp/dist/index.js" ] && say OK "project Spector MCP build (.mcp.json server 'spector')" || say MISSING "project Spector MCP build: bash Tools/cloud_env_setup.sh"

# --- tools (presence only; versions and smoke tests: bash Tools/restore_session.sh)
for t in node npm blender ffmpeg convert git-lfs deno gltf-transform gltfpack tripo; do have "$t" || say MISSING "tool $t"; done
[ -x "$T/visual/bin/python" ] && say OK "Python visual venv (OpenCV, scikit-image)" || say MISSING "Python visual venv: bash Tools/cloud_env_setup.sh"
[ -d "$T/metrics/lib" ] && ls "$T"/metrics/lib/python*/site-packages/torch > /dev/null 2>&1 && say OK "Python metrics venv (PyTorch, LPIPS, Optuna)" || say WARN "metrics venv (PyTorch/LPIPS) incomplete: bash Tools/cloud_env_setup.sh (optional)"
ls -d /opt/pw-browsers/chromium* > /dev/null 2>&1 && say OK "Chromium for Playwright (/opt/pw-browsers)" || say WARN "pre-installed Chromium not found"
nmiss=0; for t in node npm blender ffmpeg convert git-lfs deno gltf-transform gltfpack tripo; do have "$t" || nmiss=$((nmiss+1)); done; [ $nmiss -eq 0 ] && say OK "tools on PATH: node npm blender ffmpeg imagemagick git-lfs deno gltf-transform gltfpack tripo"

# --- Tripo (free call; the key is the environment's network secret for openapi.tripo3d.ai)
if have tripo; then b="$(TRIPO_API_KEY=tsk_proxy-injected timeout 12 tripo balance 2>&1 | tail -1)"
  case "$b" in *balance*) say OK "Tripo API reachable: $b (free call, no credits spent)";; *) say "NEEDS USER" "Tripo balance failed ('${b:0:80}'): the network secret for openapi.tripo3d.ai (TOOLS_AND_PLUGINS_RESTORE.md section 1)";; esac; fi

# --- autosave (started by the same hook right after this)
n="$(pgrep -fc 'bash Tools/autosave.sh' 2>/dev/null || echo 0)"; [ "$n" -le 1 ] && say OK "autosave processes: $n (the hook starts one if 0)" || say WARN "autosave processes: $n (expected 1)"

{ echo "Bubble Wash Kingdom preflight $(date -u +%Y-%m-%dT%H:%MZ) session ${ID}"; printf '%s\n' "${LINES[@]}"; } > "$REP"
echo "BUBBLE WASH PREFLIGHT: $ok OK, $warn WARN, $miss MISSING, $user NEEDS USER (report: $REP)"
printf '%s\n' "${LINES[@]}" | grep -E '^(WARN|MISSING|NEEDS USER)' | head -12
echo "STANDING PROCEDURE (CLAUDE.md): before any specialist task, check live: ToolSearch 'mcp__plugin_parallax-threejs' and 'mcp__spector', and that the Agent tool lists the 5 project agents + 3 parallax agents; report anything missing to the user at once."
exit 0

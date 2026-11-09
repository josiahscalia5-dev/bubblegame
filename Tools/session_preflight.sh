#!/usr/bin/env bash
# Bubble Wash Kingdom: the development-environment PREFLIGHT run at every Claude session start (the user's standing requirement of
# 9 November 2026, sessions 6ddc157f and ac4e3449; called by .claude/hooks/session-start.sh, also by hand:  bash Tools/session_preflight.sh).
# READ-ONLY and lightweight (a few seconds; network only for `git ls-remote` and the free `tripo balance`, each with a short timeout): it
# installs nothing, starts no autosave, stores no key, prints no secret. The one thing it may fix is idempotent and local: the symlink of the
# project's Spector build into the parallax-threejs plugin folder (the same link Tools/cloud_env_setup.sh makes).
# Status labels (the user's vocabulary, session ac4e3449): ACTIVE AND TESTED (the shell exercised it just now), CONFIGURED BUT NOT LIVE-TESTED
# (present; only Claude can prove it live: MCP tools, agents), PARTIALLY WORKING, NOT CONNECTED, NOT INSTALLED, NEEDS USER ACTION, OPTIONAL.
# A shell cannot call an MCP tool or launch an agent: the LIVE CHECKS block at the end tells Claude exactly what to call.
# Full report: ~/.bubblewash-autosave/preflight_<id>.txt
set -uo pipefail
cd "$(dirname "$0")/.." || exit 0
WORK=claude/bubble-wash-account-transfer-52t7ym          # the user's development branch (CLAUDE.md)
ROLLBACKS="claude/bubble-wash-rollback-before-s56-default claude/bubble-wash-rollback-before-tripo3-default claude/bubble-wash-account-switch-e1nndb"
T="${BUBBLEWASH_TOOLS:-$HOME/.bubblewash-tools}"
ID="${1:-manual}"; OUTD="$HOME/.bubblewash-autosave"; mkdir -p "$OUTD"; REP="$OUTD/preflight_${ID:0:8}.txt"
declare -A N; LINES=()
say() { LINES+=("$1 | $2"); N["$1"]=$(( ${N["$1"]:-0} + 1 )); }
A="ACTIVE AND TESTED"; C="CONFIGURED BUT NOT LIVE-TESTED"; P="PARTIALLY WORKING"; NC="NOT CONNECTED"; NI="NOT INSTALLED"; U="NEEDS USER ACTION"; O="OPTIONAL"
have() { command -v "$1" > /dev/null 2>&1 || [ -x "$T/node/node_modules/.bin/$1" ]; }
[ -f "$T/activate.sh" ] && . "$T/activate.sh" 2>/dev/null

# --- GITHUB: branch, remote, unpushed / uncommitted work, rollback branches, specialist lanes
br="$(git branch --show-current 2>/dev/null)"
remote="$(timeout 10 git ls-remote origin "refs/heads/$WORK" 2>/dev/null | cut -c1-40)"
if [ -z "$remote" ]; then say "$NC" "GitHub: could not reach origin/$WORK (GitHub connection: TOOLS_AND_PLUGINS_RESTORE.md section 1)"
elif [ "$br" = "$WORK" ]; then say "$A" "GitHub: on $br, GitHub head ${remote:0:8}"
elif git merge-base --is-ancestor "${remote:0:40}" HEAD 2>/dev/null; then say "$P" "GitHub: on '$br', which contains $WORK (${remote:0:8}): fast-forward $WORK to it, check it out, save there (CLAUDE.md)"
else say "$U" "GitHub: on '$br'; the work branch $WORK (GitHub ${remote:0:8}) is not contained: do not develop here, check out $WORK"; fi
if [ -n "$remote" ] && git cat-file -e "${remote}^{commit}" 2>/dev/null; then
  ahead="$(git rev-list --count "${remote}..HEAD" 2>/dev/null)"; behind="$(git rev-list --count "HEAD..${remote}" 2>/dev/null)"
  [ "${ahead:-0}" = 0 ] && [ "${behind:-0}" = 0 ] && say "$A" "GitHub: local HEAD = GitHub head (nothing unpushed)" || say "$P" "GitHub: local is $ahead ahead / $behind behind GitHub (push or pull before working)"
fi
dirty="$(git status --porcelain 2>/dev/null | grep -vc '^??')"; [ "${dirty:-0}" -gt 0 ] && say "$P" "uncommitted changes in $dirty tracked files (the autosave commits them within 5 minutes)"
for r in $ROLLBACKS; do [ -n "$(timeout 10 git ls-remote origin "refs/heads/$r" 2>/dev/null)" ] && say "$A" "rollback branch $r on GitHub" || say "$P" "rollback branch $r not found on GitHub"; done
if [ -f Tools/lanes.json ]; then nl=0; ng=0; while read -r name b; do nl=$((nl+1)); [ -n "$(timeout 10 git ls-remote origin "refs/heads/$b" 2>/dev/null)" ] && ng=$((ng+1)); done < <(python3 -I -c "import json; [print(k, v['branch']) for k, v in json.load(open('Tools/lanes.json'))['lanes'].items() if v.get('branch')]" 2>/dev/null)
  [ "$ng" = "$nl" ] && say "$A" "specialist lanes: $ng/$nl branches on GitHub (bash Tools/lanes.sh status; recover: bash Tools/lanes.sh create)" || say "$P" "specialist lanes: only $ng/$nl branches on GitHub (PARALLEL_LANES.md)"; fi

# --- GAME: the default launch, the bundle, the models, the approved references
def="$(grep -o "__BW_DEFAULT_GAME__ = '[^']*'" WebDemo/index.html 2>/dev/null | cut -d"'" -f2)"
case "$def" in six2+s56) say "$A" "plain launch = the six approved scenes (six2) into the Scene 5/6 tunnel (s56) (WebDemo/index.html)";;
  "") say "$NI" "WebDemo/index.html sets no default game (cd WebDemo && node build.mjs)";;
  *) say "$P" "plain launch = '$def' (expected six2+s56 since session ac4e3449; rollback branch claude/bubble-wash-rollback-before-s56-default)";; esac
v="$(grep -o 'game.bundle.js?v=[0-9a-f]*' WebDemo/index.html 2>/dev/null | cut -d= -f2)"; m="$(md5sum < WebDemo/game.bundle.js 2>/dev/null | cut -c1-8)"
[ -n "$v" ] && [ "$v" = "$m" ] && say "$A" "bundle $m matches the page's version stamp (no stale bundle)" || say "$P" "page asks for bundle '${v:-none}', built bundle is $m: rebuild (cd WebDemo && node build.mjs)"
mm=0; for f in WebDemo/models/opening/{girl_v2_rigged,washer_tripo_hj748,door_tripo_oit748_gold,gear_v2_tripo,housing_tripo_821}.glb WebDemo/models/{mascot,l1_enemy_v2_tripo,coin_v2_tripo,coin_v2_tripo_lo,sock_v2_tripo,layout}.*; do [ -s "$f" ] || { mm=$((mm+1)); say "$NI" "model $f missing"; }; done
[ "$mm" = 0 ] && say "$A" "essential models present (girl, washer, door, gear, housing, mascot, enemy, coin, sock, layout)"
nr=$(ls Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/0[1-6]_*.png 2>/dev/null | wc -l); [ "$nr" = 6 ] && say "$A" "the six approved portrait references present" || say "$NI" "approved references: $nr/6 in Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user"
[ -d WebDemo/node_modules/three ] && say "$A" "WebDemo dependencies installed (three $(node -e "console.log(require('./WebDemo/node_modules/three/package.json').version)" 2>/dev/null))" || say "$NI" "WebDemo/node_modules missing: cd WebDemo && npm ci"

# --- AI AGENTS and SKILLS (they load from the repository; launching one is Claude's live check)
na=0; for a in game-art-director gameplay-visual-testing lighting-visual-matching water-vfx-engineer screen4-water-motion-engineer; do
  grep -q "^name: $a" ".claude/agents/$a.md" 2>/dev/null && na=$((na+1)) || say "$NI" "project agent $a (.claude/agents/$a.md)"; done
say "$C" "$na/5 project agents defined in .claude/agents (live test = launch one with a small task)"
[ -f .claude/skills/bubble-wash-screen-matcher/SKILL.md ] && say "$C" "skill bubble-wash-screen-matcher (.claude/skills)" || say "$NI" "skill bubble-wash-screen-matcher"

# --- PLUGINS and MCP (account-level: they cannot come from Git)
pj="$(grep -l '"name": "parallax-threejs"' "$HOME"/.claude/plugins/synced/*/*/.claude-plugin/plugin.json 2>/dev/null | head -1)"
if [ -n "$pj" ]; then pr="$(dirname "$(dirname "$pj")")"; ver="$(grep -o '"version": "[^"]*"' "$pj" | head -1 | cut -d'"' -f4)"
  say "$C" "parallax-threejs plugin $ver synced ($(ls "$pr/agents" 2>/dev/null | wc -l) agents: scenario-author, shader-reviewer, visual-debugger; MCP: chrome-devtools, playwright, threejs-devtools, spector)"
  if [ ! -e "$pr/vendor/spector" ] && [ -f "$T/spector/mcp/dist/index.js" ]; then ln -s "$T/spector" "$pr/vendor/spector" 2>/dev/null && say "$P" "linked Spector into the plugin now: its spector server connects after /mcp reconnect"; fi
  [ -f "$pr/vendor/spector/mcp/dist/index.js" ] || say "$P" "plugin Spector build missing (bash Tools/cloud_env_setup.sh)"
  ls -d "$HOME"/.npm/_npx/*/node_modules/threejs-devtools-mcp > /dev/null 2>&1 || say "$O" "threejs-devtools-mcp not cached: its first start can time out (/mcp reconnect)"
else say "$U" "parallax-threejs plugin not found: claude.ai -> Customize / plugins -> enable parallax-threejs, then start a NEW session"; fi
[ -f "$T/spector/mcp/dist/index.js" ] && grep -q '"spector"' .mcp.json 2>/dev/null && say "$C" "project Spector MCP server (.mcp.json 'spector', build in ~/.bubblewash-tools)" || say "$NI" "project Spector MCP build: bash Tools/cloud_env_setup.sh"

# --- TOOLS
miss=""; for t in node npm blender ffmpeg convert git-lfs deno gltf-transform gltfpack tripo; do have "$t" || miss="$miss $t"; done
[ -z "$miss" ] && say "$A" "tools on PATH: node npm blender ffmpeg imagemagick git-lfs deno gltf-transform gltfpack tripo" || say "$NI" "tools missing:$miss (bash Tools/cloud_env_setup.sh installs them once)"
[ -x "$T/visual/bin/python" ] && say "$A" "Python visual venv (OpenCV, scikit-image)" || say "$NI" "Python visual venv: bash Tools/cloud_env_setup.sh"
ls "$T"/metrics/lib/python*/site-packages/torch > /dev/null 2>&1 && say "$A" "Python metrics venv (PyTorch, LPIPS, Optuna)" || say "$O" "metrics venv (PyTorch/LPIPS/Optuna) not installed: bash Tools/cloud_env_setup.sh"
ls -d /opt/pw-browsers/chromium* > /dev/null 2>&1 && say "$A" "Chromium for Playwright (/opt/pw-browsers)" || say "$NI" "pre-installed Chromium not found"

# --- TRIPO (free call; the key is the environment's network secret for openapi.tripo3d.ai, never in the repository)
if have tripo; then b="$(TRIPO_API_KEY=tsk_proxy-injected timeout 12 tripo balance 2>&1 | tail -1)"
  case "$b" in *balance*) say "$A" "Tripo API (protected network secret): $b (free call, no credits spent)";;
    *) say "$U" "Tripo balance failed ('${b:0:60}'): add the network secret for openapi.tripo3d.ai in the environment settings (TOOLS_AND_PLUGINS_RESTORE.md section 1)";; esac
else say "$NI" "tripo CLI: bash Tools/cloud_env_setup.sh"; fi

# --- AUTOSAVE (started by the same hook right after this; one process only)
n="$(pgrep -fc 'bash Tools/autosave.sh' 2>/dev/null)"; n="${n:-0}"
[ "$n" -le 1 ] && say "$A" "autosave processes: $n (the hook starts exactly one if 0; it also checkpoints and pushes every specialist lane)" || say "$P" "autosave processes: $n (expected 1: pkill -f 'bash Tools/autosave.sh' and restart one)"

{ echo "Bubble Wash Kingdom preflight $(date -u +%Y-%m-%dT%H:%MZ) session ${ID}"; printf '%s\n' "${LINES[@]}"; } > "$REP"
sum=""; for k in "$A" "$C" "$P" "$NC" "$NI" "$U" "$O"; do [ -n "${N[$k]:-}" ] && sum="$sum${N[$k]} $k, "; done
echo "BUBBLE WASH PREFLIGHT: ${sum%, } (report: $REP)"
printf '%s\n' "${LINES[@]}" | grep -E "^($P|$NC|$NI|$U) " | head -12
cat <<'EOF'
LIVE CHECKS FOR CLAUDE (a shell cannot do these; CLAUDE.md STANDING PROCEDURE, cheap, before any specialist task):
  1. ToolSearch "select:mcp__plugin_parallax-threejs_chrome-devtools-mcp__list_pages,mcp__plugin_parallax-threejs_threejs-devtools-mcp__bridge_status,mcp__spector__list_canvases" and CALL each once
     (list_pages; bridge_status; spector needs load_url first). Listed but failing = NOT CONNECTED: the user types /mcp and reconnects it.
  2. The Agent tool must list game-art-director, gameplay-visual-testing, lighting-visual-matching, water-vfx-engineer, screen4-water-motion-engineer,
     parallax-threejs:scenario-author / shader-reviewer / visual-debugger. Launch an agent only for real work (its first task is its live test).
  3. Report anything NOT CONNECTED / NEEDS USER ACTION to the user at once, with the fix; never call a capability working without a live call.
EOF
exit 0

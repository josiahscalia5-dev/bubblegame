#!/usr/bin/env bash
# One-shot restore check for a NEW Claude account or session (session f70c9bd1, 8 November 2026). Lightweight: independent checks run in
# parallel, no browsers, no installs unless the tool folder is missing, no Tripo spending (balance is a free call). It prints what works and
# exactly what the user must reconnect. Usage (from the repository root):   bash Tools/restore_session.sh
# Then continue START_HERE_NEXT_CLAUDE_ACCOUNT.md -> SIX_SCENE_IMPLEMENTATION_STATUS.md (the user's six-scene direction).
set -u
cd "$(dirname "$0")/.." || exit 1
WORK=claude/bubble-wash-account-transfer-52t7ym   # (session bb87ba9f: the newest working branch; rollback checkpoint: claude/bubble-wash-account-switch-e1nndb at 0aa21621)
T=$(mktemp -d)
# (9 November 2026, session f28099bc) run the idempotent setup whenever an ESSENTIAL tool is missing, not only when the whole folder is: at that
# session's start the folder existed but the environment's setup had been cut off inside the PyTorch download, so the Tripo CLI, glTF tools,
# the game's npm packages and the Spector build were missing. The setup skips what is installed (about 10 s when complete).
need=""; [ -d "$HOME/.bubblewash-tools" ] || need="tool folder"
for c in tripo gltf-transform gltfpack; do [ -x "$HOME/.bubblewash-tools/node/node_modules/.bin/$c" ] || need="$need $c"; done
[ -f "$HOME/.bubblewash-tools/spector/mcp/dist/index.js" ] || need="$need spector-build"
[ -d WebDemo/node_modules ] || need="$need WebDemo/node_modules"
[ -n "$need" ] && { echo "== missing:$need -> running Tools/cloud_env_setup.sh (idempotent; essential tools first, the optional PyTorch last)"; bash Tools/cloud_env_setup.sh > "$T/setup.log" 2>&1 || echo "   setup reported a failed step: see $T/setup.log"; }
source Tools/bw_tools_env.sh > /dev/null 2>&1

( echo "== Git"
  git fetch -q origin 2>/dev/null
  echo "  checked-out branch: $(git branch --show-current)   (the work branch: $WORK)"
  echo "  local HEAD $(git rev-parse --short HEAD), GitHub $WORK $(git rev-parse --short origin/$WORK 2>/dev/null)"
  echo "  newest remote branches:"; git branch -r --sort=-committerdate | head -4 | sed 's/^/   /'
  [ -n "$(git status --porcelain)" ] && echo "  NOTE: uncommitted changes present" || echo "  working tree clean" ) > "$T/1" 2>&1 &
( echo "== Tools (versions)"
  echo "  blender: $(blender -b --python-expr 'import bpy; print(bpy.app.version_string)' 2>/dev/null | grep -E '^[0-9]' | head -1)"
  echo "  tripo CLI: $(tripo --version 2>&1 | head -1)   gltf-transform: $(gltf-transform --version 2>&1 | tail -1)   vite: $(vite --version 2>&1 | head -1 | cut -d' ' -f1)"
  echo "  deno: $(deno --version 2>&1 | head -1 | cut -d' ' -f2)   node: $(node --version)   playwright: $(node -e "console.log(require('playwright/package.json').version)" 2>&1)"
  echo "  metrics python: $("$HOME/.bubblewash-tools/metrics/bin/python" -c 'import cv2, skimage, torch, lpips, optuna; print("cv2", cv2.__version__, "torch", torch.__version__, "lpips+optuna ok")' 2>&1 | tail -1)"
  echo "  ffmpeg: $(ffmpeg -version 2>&1 | head -1 | cut -d' ' -f3)   imagemagick: $(convert -version 2>&1 | head -1 | cut -d' ' -f3)   git-lfs: $(git lfs version 2>&1 | cut -d' ' -f1)" ) > "$T/2" 2>&1 &
( echo "== Build and restore check (Tools/verify_restore.sh --build)"
  [ -d WebDemo/node_modules ] || (cd WebDemo && npm ci --silent > /dev/null 2>&1)
  bash Tools/verify_restore.sh --build 2>&1 | grep -E 'FAIL|Summary' | sed 's/^/  /' ) > "$T/3" 2>&1 &
( echo "== Project agents, skill, hooks, MCP config (load automatically from the repository)"
  for a in .claude/agents/*.md; do echo "  agent: $(basename "$a" .md)"; done
  [ -f .claude/skills/bubble-wash-screen-matcher/SKILL.md ] && echo "  skill: bubble-wash-screen-matcher"
  grep -q session-start .claude/settings.json && echo "  SessionStart hook registered (starts ONE autosave)"
  grep -q '"spector"' .mcp.json && echo "  .mcp.json: project Spector server (built into ~/.bubblewash-tools/spector by the setup script)"
  echo "== Models (Tools/check_models.cjs: real GLB, not LFS pointers, not truncated, Khronos validator 0 errors)"; echo "  $(node Tools/check_models.cjs 2>&1 | tail -1)"
  echo "== MCP servers (startable from this machine; the live call is Claude's)"
  pj=$(ls "$HOME"/.claude/plugins/synced/*/*/.claude-plugin/plugin.json 2>/dev/null | xargs grep -l '"parallax-threejs"' 2>/dev/null | head -1)
  [ -n "$pj" ] && echo "  parallax-threejs plugin synced: $(grep -o '"version": *"[^"]*"' "$pj" | head -1)" || echo "  parallax-threejs plugin NOT synced in this session (claude.ai -> Customize / plugins -> enable it, then a NEW session)"
  ls -d "$HOME"/.npm/_npx/*/node_modules/threejs-devtools-mcp > /dev/null 2>&1 && echo "  threejs-devtools-mcp cached (if it timed out at start: /mcp -> reconnect)" || echo "  threejs-devtools-mcp NOT cached (bash Tools/cloud_env_setup.sh, then /mcp -> reconnect)"
  sp=$( (printf '%s\n' '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"restore","version":"1"}}}' '{"jsonrpc":"2.0","method":"notifications/initialized"}' '{"jsonrpc":"2.0","id":2,"method":"tools/list"}'; sleep 5) | timeout 25 node "$HOME/.bubblewash-tools/spector/mcp/dist/index.js" 2>/dev/null | grep -o '"name":"capture_frame"' | head -1)
  [ -n "$sp" ] && echo "  Spector MCP server starts and lists capture_frame (if Claude shows it failed: /mcp -> reconnect spector; live proof: Tools/spector_live.cjs)" || echo "  Spector MCP server does NOT start (bash Tools/cloud_env_setup.sh)"
  echo "== Autosave"; n=$(ps -eo cmd | grep -c '[a]utosave.sh'); echo "  autosave processes: $n (expected 1)"
  tail -1 "$HOME/.bubblewash-autosave/save_history.log" 2>/dev/null | sed 's/^/  last: /'
  echo "== Specialist lanes (PARALLEL_LANES.md; recover any missing worktree: bash Tools/lanes.sh create)"; bash Tools/lanes.sh status 2>&1 | sed 's/^/  /'
  echo "== Tripo (free calls only)"; echo "  $(TRIPO_API_KEY=tsk_proxy-injected tripo balance 2>&1 | tail -1)" ) > "$T/4" 2>&1 &
wait
cat "$T/1" "$T/2" "$T/3" "$T/4"
cat <<'EOF'
== In this Claude session, check (no command): ToolSearch "mcp__plugin_parallax-threejs" (chrome-devtools, playwright, threejs-devtools) and
   "mcp__spector" (project server). The Agent tool must list: game-art-director, gameplay-visual-testing, lighting-visual-matching,
   water-vfx-engineer, screen4-water-motion-engineer (+ parallax-threejs:scenario-author / shader-reviewer / visual-debugger, which get no
   browser tools: a known plugin defect).
== MANUAL, per account (cannot travel through Git; never put a key in the repository):
   1. GitHub connected on claude.ai and the Claude GitHub App installed on josiahscalia5-dev/bubblegame.
   2. The parallax-threejs plugin enabled (claude.ai, Customize / plugins, Anthropic Directory), then START A NEW SESSION.
   3. The cloud environment: limited network, package registries and MCP servers allowed, hosts download.blender.org, download.pytorch.org,
      openapi-dl.data.tripo3d.com; setup script: if [ -f bubblegame/Tools/cloud_env_setup.sh ]; then bash bubblegame/Tools/cloud_env_setup.sh; fi
   4. The Tripo key as a network SECRET for host openapi.tripo3d.ai (Authorization: Bearer), in the environment's settings.
   If any check above failed, fix only that item.
EOF
rm -rf "$T"

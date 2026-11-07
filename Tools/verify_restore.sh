#!/usr/bin/env bash
# Read-only restore check for a new Claude session or account (7 November 2026, seventeenth session).
# It installs NOTHING, changes NO file in the repository, and never commits or pushes. It reports what is present.
#
#   bash Tools/verify_restore.sh            # quick checks (seconds)
#   bash Tools/verify_restore.sh --build    # also rebuilds the accepted bundle's own source in a scratch folder
#                                           # (needs WebDemo/node_modules: `cd WebDemo && npm install`) and compares
#
# What it cannot check from a shell (do these in Claude itself, see CLAUDE_ACCOUNT_TRANSFER_HANDOFF.md section 9):
# the parallax-threejs plugin and its MCP servers (ToolSearch for the tool names), and the agents listed by Claude.
set -u
cd "$(dirname "$0")/.." || exit 1
ok=0; bad=0; warn=0
pass() { printf '  PASS  %s\n' "$*"; ok=$((ok + 1)); }
fail() { printf '  FAIL  %s\n' "$*"; bad=$((bad + 1)); }
note() { printf '  NOTE  %s\n' "$*"; warn=$((warn + 1)); }

WORK_BRANCH=ccr-10503be1-pnv5vq
ACCEPTED_BUNDLE_MD5=5bb24e2828a6f2ef17146252c69b413a          # ?s3=intunnel and the normal game (accepted build)
SWIM2_BUNDLE_MD5=1199348a80352be29327134230a1b6a1            # the same + ?s3=intunnel,swim2 behind its flag (7 November, user-approved)
BLEND_BUNDLE_MD5=38466b676bd36b05568023b5240818dd            # the accepted ?s3=intunnel (swim2) + ?s3=intunnel,blend behind its flag (7 November; accepted frames 0 px: 59_blend/proofs/)
STRUCT_BUNDLE_MD5=452f9568b76767a960645bbd538e18a2           # the accepted ?s3=intunnel + ?s3=intunnel,structmatch behind its flag (7 November, session 398ed88c; accepted frames 0 px: 64_final_pass/proofs/)
ACCEPTED_SWIM2_MD5=ea0c833c45667e1894fbdc2cc98a28dd          # ?s3=intunnel INCLUDES swim2 (7 November, accepted; rollback ?s3=intunnel,noswim2 / 920531d)
ACCEPTED_INDEX_MD5=cb40534c45b7c50ff95194088db5a79c
ACCEPTED_ARTIFACT_MD5=1bc90e0da16ba552b0141158c52bc75f
ORIGINAL=Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg
ORIGINAL_SHA256=b30dc6a1794213be663b38d709c41994f9b90fbdff1606eb034310c4cab8ff16

echo "== Git"
br="$(git branch --show-current)"
[ "$br" = "$WORK_BRANCH" ] && pass "on the work branch $br" || fail "on branch '$br', expected $WORK_BRANCH (git checkout $WORK_BRANCH)"
git fetch -q origin "$WORK_BRANCH" 2>/dev/null
lh="$(git rev-parse HEAD)"; rh="$(git rev-parse "origin/$WORK_BRANCH" 2>/dev/null || echo none)"
if [ "$lh" = "$rh" ]; then pass "local head ${lh:0:7} = GitHub's $WORK_BRANCH"
elif git merge-base --is-ancestor "$lh" "$rh" 2>/dev/null; then note "GitHub is ahead (${rh:0:7}); run: git pull --ff-only origin $WORK_BRANCH"
elif git merge-base --is-ancestor "$rh" "$lh" 2>/dev/null; then note "local is ahead of GitHub (${lh:0:7} vs ${rh:0:7}); run: bash Tools/save_now.sh \"<message>\""
else fail "local ${lh:0:7} and GitHub ${rh:0:7} have diverged: do NOT force-push; ask the user"; fi
n="$(git status --porcelain | wc -l)"; [ "$n" = 0 ] && pass "working tree clean" || note "$n uncommitted change(s) (the autosave saves them every 5 minutes)"
for h in CLAUDE.md HANDOFF.md CLAUDE_ACCOUNT_TRANSFER_HANDOFF.md START_HERE_NEW_CLAUDE_ACCOUNT.md SAVE_BEFORE_ACCOUNT_SWITCH.md; do
  [ -f "$h" ] && pass "handoff file $h" || fail "handoff file $h missing"
done

echo "== The accepted game (must be unchanged)"
m() { md5sum < "$1" 2>/dev/null | cut -c1-32; }
bm="$(m WebDemo/game.bundle.js)"
if [ "$bm" = "$STRUCT_BUNDLE_MD5" ]; then pass "WebDemo/game.bundle.js md5 $STRUCT_BUNDLE_MD5 (the accepted Screen 4 + ?s3=intunnel,structmatch behind its flag; accepted frames 0 px: 64_final_pass/proofs/)"
elif [ "$bm" = "$ACCEPTED_BUNDLE_MD5" ]; then pass "WebDemo/game.bundle.js md5 $ACCEPTED_BUNDLE_MD5 (the accepted bundle)"
elif [ "$bm" = "$ACCEPTED_SWIM2_MD5" ]; then pass "WebDemo/game.bundle.js md5 $ACCEPTED_SWIM2_MD5 (the accepted Screen 4: ?s3=intunnel includes swim2; 58_swim2_accepted/)"
elif [ "$bm" = "$BLEND_BUNDLE_MD5" ]; then pass "WebDemo/game.bundle.js md5 $BLEND_BUNDLE_MD5 (the accepted Screen 4 + ?s3=intunnel,blend behind its flag; accepted frames 0 px: 59_blend/proofs/)"
elif [ "$bm" = "$SWIM2_BUNDLE_MD5" ]; then pass "WebDemo/game.bundle.js md5 $SWIM2_BUNDLE_MD5 (accepted + ?s3=intunnel,swim2 behind its flag; accepted frames 0 px different: 57_swim2/proofs/)"
else fail "WebDemo/game.bundle.js md5 $bm, expected $STRUCT_BUNDLE_MD5, $BLEND_BUNDLE_MD5, $ACCEPTED_SWIM2_MD5, $SWIM2_BUNDLE_MD5 or $ACCEPTED_BUNDLE_MD5: the accepted bundle changed"; fi
[ "$(m WebDemo/index.html)" = "$ACCEPTED_INDEX_MD5" ] && pass "WebDemo/index.html unchanged" || fail "WebDemo/index.html changed"
[ "$(m WebDemo/artifact.html)" = "$ACCEPTED_ARTIFACT_MD5" ] && pass "WebDemo/artifact.html unchanged" || fail "WebDemo/artifact.html changed"
pin="$(python3 -c "import json;d=json.load(open('WebDemo/package.json'));print(d['devDependencies']['three'],d['devDependencies']['esbuild'])")"
[ "$pin" = "0.170.0 0.24.0" ] && pass "package.json pins three 0.170.0 and esbuild 0.24.0" || fail "package.json pins changed: $pin"
if [ -f WebDemo/node_modules/three/package.json ]; then
  v="$(python3 -c "import json;print(json.load(open('WebDemo/node_modules/three/package.json'))['version'])")"
  [ "$v" = 0.170.0 ] && pass "installed three $v" || fail "installed three $v (expected 0.170.0: run cd WebDemo && npm install)"
else note "WebDemo/node_modules missing (the setup script installs it, or: cd WebDemo && npm install)"; fi

echo "== The ONLY visual target"
s="$(sha256sum "$ORIGINAL" 2>/dev/null | cut -d' ' -f1)"
[ "$s" = "$ORIGINAL_SHA256" ] && pass "ORIGINAL approved Screen 4 present, sha256 matches ($ORIGINAL)" || fail "ORIGINAL approved Screen 4 missing or changed"

echo "== Project agents, skill, hook (travel with the repository)"
for a in screen4-water-motion-engineer water-vfx-engineer lighting-visual-matching game-art-director gameplay-visual-testing; do
  f=.claude/agents/$a.md
  if [ -f "$f" ] && [ "$(head -1 "$f")" = "---" ] && grep -q "^name: $a\$" "$f"; then pass "agent $a ($f)"; else fail "agent $a missing or its settings block is not the first line ($f)"; fi
done
[ -f .claude/skills/bubble-wash-screen-matcher/SKILL.md ] && pass "skill bubble-wash-screen-matcher" || fail "skill bubble-wash-screen-matcher missing"
grep -q session-start.sh .claude/settings.json 2>/dev/null && [ -x .claude/hooks/session-start.sh ] && pass "SessionStart autosave hook registered" || fail "SessionStart hook missing"

echo "== Development tools (outside the repository; installed by Tools/cloud_env_setup.sh)"
T="${BUBBLEWASH_TOOLS:-$HOME/.bubblewash-tools}"
if [ -d "$T" ]; then
  "$T/visual/bin/python" -c "import cv2" 2>/dev/null && pass "visual Python (OpenCV $("$T/visual/bin/python" -c 'import cv2;print(cv2.__version__)'))" || fail "visual Python / OpenCV"
  "$T/metrics/bin/python" -c "import torch, lpips, optuna" 2>/dev/null && pass "metrics Python (PyTorch, LPIPS, Optuna)" || note "metrics Python (PyTorch, LPIPS, Optuna) missing"
  blender --version 2>/dev/null | grep -q 'Blender 5.2.3' && pass "Blender 5.2.3" || note "Blender 5.2.3 missing"
  [ -x "$T/node/node_modules/.bin/vite" ] && pass "node tools (Vite, glTF Transform, Tripo CLI)" || note "node tools missing"
else
  fail "$T missing: run  bash Tools/cloud_env_setup.sh  (or start a session on the 'bubblegame' environment, whose setup script runs it)"
fi
node -e "require('playwright')" 2>/dev/null && pass "Playwright $(node -e "console.log(require('playwright/package.json').version)")" || note "Playwright not found by node"

echo "== Autosave"
if pgrep -f "bash Tools/autosave.sh" > /dev/null; then pass "5-minute autosave running"; else note "autosave not running (CLAUDE.md, Safety: start it; the SessionStart hook starts it on a cloud session start)"; fi

if [ "${1:-}" = "--build" ]; then
  echo "== Reproducible build (scratch folder; the repository is not touched)"
  if [ ! -d WebDemo/node_modules/esbuild ]; then fail "needs WebDemo/node_modules (cd WebDemo && npm install)"; else
    B="$(git log -1 --format=%h -- WebDemo/game.bundle.js)"; tmp="$(mktemp -d)"
    git archive "$B" WebDemo | tar -C "$tmp" -xf - --strip-components=1
    ln -s "$PWD/WebDemo/node_modules" "$tmp/node_modules"
    (cd "$tmp" && rm -f game.bundle.js && node build.mjs > /dev/null 2>&1)
    r="$(m "$tmp/game.bundle.js")"
    [ "$r" = "$(git show "$B:WebDemo/game.bundle.js" | md5sum | cut -c1-32)" ] && pass "the bundle's own source ($B) rebuilds byte-identically ($r)" \
      || fail "rebuild of $B gives $r, not the committed bundle"
    rm -rf "$tmp"
  fi
fi

echo
echo "Summary: $ok passed, $warn notes, $bad failed."
[ "$bad" = 0 ]

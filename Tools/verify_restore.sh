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

# The work branch: this session's own branch (each cloud session gets one); the development line it must contain is
# DEV_LINE (merged into it with a normal merge, never force-pushed). Override with BW_WORK_BRANCH=<branch>.
WORK_BRANCH="${BW_WORK_BRANCH:-$(git -C "$(dirname "$0")/.." branch --show-current)}"
DEV_LINE=ccr-76d4bc77-rqhl8o
LEVEL1_BUNDLE_MD5=992bd37776941daee153a944a60c818c          # + ?s3=...,home,level1 behind its flags (8 November, session dbccb9a3; accepted frames 0 px: 68_level1/)
GIRL2_BUNDLE_MD5=92bd9272a90407a75b64198e5a4c343b           # + the course culled and the rigged Tripo girl (ccr-76d4bc77-rqhl8o 890167c..7e5dd68; 0 px: 68_level1/proofs/)
MATCH6_BUNDLE_MD5=b5f69217                                  # (first 8) + match6, her rear silhouette (session 8140e507; 0 px: 69_match6/proofs/identity.txt)
WET_BUNDLE_MD5=a62848a060079f447f2c86173aae2d97             # + level1's wet chamber and port, match6 opt-in (session 8140e507; 70_level1_wet/proofs/identity.txt)
FLOW_BUNDLE_MD5=8363541c3cff0474bc2bbc3cdcf97732            # + level1's 10-beat flow, match6 opt-in (session b0abcf95, branch ccr-50c66592-kcnqoy; 71_level1_flow/proofs/identity.txt)
SCENE07C_BUNDLE_MD5=a359dad4963be8e248bd44e4b241ef3c         # + scene07 pass 16 v5 (final bundle of session f70c9bd1; accepted, normal, home, level1 0 px vs 6579f556: 77_scene07_pass15_upper/proofs/identity_a359dad4.txt)
SCENE07B_BUNDLE_MD5=6579f556e0104ac0d9531e72631d4293         # + scene07 pass 13b opt-in (session ce30359f, ccr-8cd911d8-0m96gr 6b719c7; accepted, normal, home, level1 0 px vs d2a666bd: 75_scene07_pass9_shell/proofs/identity_6579f556.txt; added by session f70c9bd1)
SCENE07_BUNDLE_MD5=d2a666bd70926c4a1360dc08d02ecc41          # + tripo1, tripo2, scene07 pass 8 opt-in (session 57091b57, ccr-b67aeffb-d94mmq 4c7868eb; accepted, normal, home, level1 0 px: 74_scene07_avoid_enemies/proofs/identity.txt; added by session ce30359f)
ACTIVE6_BUNDLE_MD5=45f21c4aef0e2510403d7fa074176ecd           # THE ACTIVE GAME (9 November, session 6ddc157f, the user's decision): the plain launch = six + tripo3 (index.html default); old switches 0 px: Previews/WebDemo/six_scenes/07_active_game_plain_launch_6ddc157f/
ACTIVE6_INDEX_MD5=dd151b1792d2e6511b593457f0d200c0 ACTIVE6_ARTIFACT_MD5=0d0e07b434b81dcb12c1d97bf2aa830b   # (their pages: the six + tripo3 default and the bundle's version stamp)
ACCEPTED_BUNDLE_MD5=5bb24e2828a6f2ef17146252c69b413a          # ?s3=intunnel and the normal game (accepted build)
SWIM2_BUNDLE_MD5=1199348a80352be29327134230a1b6a1            # the same + ?s3=intunnel,swim2 behind its flag (7 November, user-approved)
BLEND_BUNDLE_MD5=38466b676bd36b05568023b5240818dd            # the accepted ?s3=intunnel (swim2) + ?s3=intunnel,blend behind its flag (7 November; accepted frames 0 px: 59_blend/proofs/)
STRUCT_BUNDLE_MD5=2e9ce682108b959d79e26cb5d6da080e           # + swim3 and match4 (66_match4/proofs/)
STRUCT_OLD_MD5=452f9568b76767a960645bbd538e18a2           # the accepted ?s3=intunnel + ?s3=intunnel,structmatch behind its flag (7 November, session 398ed88c; accepted frames 0 px: 64_final_pass/proofs/)
ACCEPTED_SWIM2_MD5=ea0c833c45667e1894fbdc2cc98a28dd          # ?s3=intunnel INCLUDES swim2 (7 November, accepted; rollback ?s3=intunnel,noswim2 / 920531d)
ACCEPTED_INDEX_MD5=cb40534c45b7c50ff95194088db5a79c
ACCEPTED_ARTIFACT_MD5=1bc90e0da16ba552b0141158c52bc75f
ORIGINAL=Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg
ORIGINAL_SHA256=b30dc6a1794213be663b38d709c41994f9b90fbdff1606eb034310c4cab8ff16

echo "== Git"
br="$(git branch --show-current)"
[ -n "$br" ] && [ "$br" = "$WORK_BRANCH" ] && pass "on the work branch $br" || fail "on branch '$br', expected $WORK_BRANCH (git checkout $WORK_BRANCH)"
git fetch -q origin "$DEV_LINE" 2>/dev/null
if git merge-base --is-ancestor "origin/$DEV_LINE" HEAD 2>/dev/null; then pass "the development line $DEV_LINE is merged into $br"
else note "GitHub's $DEV_LINE has commits not in $br: git merge --no-edit origin/$DEV_LINE (a normal merge; never force-push)"; fi
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
if [ "$bm" = "$SCENE07C_BUNDLE_MD5" ]; then pass "WebDemo/game.bundle.js md5 $bm (scene07 pass 16 v5 opt-in; accepted frames 0 px: 77_scene07_pass15_upper/proofs/identity_a359dad4.txt)"
elif [ "$bm" = "$ACTIVE6_BUNDLE_MD5" ]; then pass "WebDemo/game.bundle.js md5 $bm (THE ACTIVE GAME: plain launch = six + tripo3; accepted, normal, home, level1 0 px: six_scenes/07_active_game_plain_launch_6ddc157f/)"
elif [ "$bm" = "$SCENE07B_BUNDLE_MD5" ]; then pass "WebDemo/game.bundle.js md5 $bm (scene07 pass 13b opt-in; accepted frames 0 px: 75_scene07_pass9_shell/proofs/identity_6579f556.txt)"
elif [ "$bm" = "$SCENE07_BUNDLE_MD5" ]; then pass "WebDemo/game.bundle.js md5 $bm (tripo1, tripo2, scene07 pass 8 opt-in on the flow build; accepted frames 0 px: 74_scene07_avoid_enemies/proofs/identity.txt)"
elif [ "$bm" = "$FLOW_BUNDLE_MD5" ]; then pass "WebDemo/game.bundle.js md5 $bm (level1 flow, the 10-beat Level 1, on top of wet + port; match6 opt-in; 71_level1_flow/)"
elif [ "$bm" = "$WET_BUNDLE_MD5" ]; then pass "WebDemo/game.bundle.js md5 $bm (level1 wet + port on the ccr build, match6 opt-in; 70_level1_wet/)"
elif [ "${bm:0:8}" = "$MATCH6_BUNDLE_MD5" ]; then pass "WebDemo/game.bundle.js md5 $bm (match6 on the ccr build: accepted, normal and ,nomatch6 0 px; 69_match6/)"
elif [ "$bm" = "$GIRL2_BUNDLE_MD5" ]; then pass "WebDemo/game.bundle.js md5 $bm (ccr-76d4bc77-rqhl8o: the culled course and the Tripo girl; 68_level1/)"
elif [ "$bm" = "$LEVEL1_BUNDLE_MD5" ]; then pass "WebDemo/game.bundle.js md5 $LEVEL1_BUNDLE_MD5 (the level1 build: accepted ?s3=intunnel, the candidate and the normal game 0 px; 68_level1/)"
elif [ "$bm" = "$STRUCT_BUNDLE_MD5" ]; then pass "WebDemo/game.bundle.js md5 $STRUCT_BUNDLE_MD5 (the accepted Screen 4 + ?s3=intunnel,structmatch behind its flag; accepted frames 0 px: 64_final_pass/proofs/)"
elif [ "$bm" = "$ACCEPTED_BUNDLE_MD5" ]; then pass "WebDemo/game.bundle.js md5 $ACCEPTED_BUNDLE_MD5 (the accepted bundle)"
elif [ "$bm" = "$ACCEPTED_SWIM2_MD5" ]; then pass "WebDemo/game.bundle.js md5 $ACCEPTED_SWIM2_MD5 (the accepted Screen 4: ?s3=intunnel includes swim2; 58_swim2_accepted/)"
elif [ "$bm" = "$BLEND_BUNDLE_MD5" ]; then pass "WebDemo/game.bundle.js md5 $BLEND_BUNDLE_MD5 (the accepted Screen 4 + ?s3=intunnel,blend behind its flag; accepted frames 0 px: 59_blend/proofs/)"
elif [ "$bm" = "$SWIM2_BUNDLE_MD5" ]; then pass "WebDemo/game.bundle.js md5 $SWIM2_BUNDLE_MD5 (accepted + ?s3=intunnel,swim2 behind its flag; accepted frames 0 px different: 57_swim2/proofs/)"
else   # (session ac4e3449) the bundle list above is history; the real requirement is that the committed bundle IS its committed source:
  # build the source in a scratch copy and compare (the accepted ?s3=intunnel staying 0 px is proven per pass by the identity script)
  RB="$(mktemp -d)"; cp -r WebDemo/src WebDemo/build.mjs WebDemo/package.json "$RB/" 2>/dev/null; ln -s "$(pwd)/WebDemo/node_modules" "$RB/node_modules"
  for f in models textures ui; do [ -e "WebDemo/$f" ] && ln -s "$(pwd)/WebDemo/$f" "$RB/$f"; done
  (cd "$RB" && node build.mjs > /dev/null 2>&1); rb="$(m "$RB/game.bundle.js")"; rm -rf "$RB"
  [ -n "$rb" ] && [ "$rb" = "$bm" ] && pass "WebDemo/game.bundle.js md5 $bm = a fresh build of the committed source (reproducible; the active game: $(grep -o "__BW_DEFAULT_GAME__ = '[^']*'" WebDemo/index.html | cut -d"'" -f2))" \
    || fail "WebDemo/game.bundle.js md5 $bm, but a fresh build of WebDemo/src gives ${rb:-nothing}: rebuild (cd WebDemo && node build.mjs) and commit the bundle with its source"
fi
grep -q "game.bundle.js?v=$(echo "$bm" | cut -c1-8)" WebDemo/index.html && pass "WebDemo/index.html asks for this bundle (version stamp ${bm:0:8})" || fail "WebDemo/index.html does not ask for bundle ${bm:0:8}: rebuild (cd WebDemo && node build.mjs)"
[ -s WebDemo/artifact.html ] && pass "WebDemo/artifact.html present (built with the page)" || fail "WebDemo/artifact.html missing: rebuild"
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

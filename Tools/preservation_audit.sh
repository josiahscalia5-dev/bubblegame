#!/usr/bin/env bash
# Preservation audit (8 November 2026, session b0abcf95, the user's preservation mandate): checks what GITHUB really has on a branch
# (the remote ref after a fetch, not the local copy): the five design agents, the skill, hook, settings, MCP file, setup and save
# scripts, handoffs, the six Tripo GLBs against their manifest's sha256, the rigged girl, the approved references, the game's
# sources and bundle; then large files / LFS, files only in this container, and a credential scan of the branch. Read-only; free.
#   bash Tools/preservation_audit.sh [branch]      (default: the checked-out branch)
set -u; cd "$(dirname "$0")/.." || exit 1
B="${1:-$(git branch --show-current)}"; git fetch -q origin "$B" 2>/dev/null; R="origin/$B"; SHA=$(git rev-parse "$R"); ok=0; bad=0
chk() { if git cat-file -e "$R:$1" 2>/dev/null; then echo "  ON GITHUB   $1${2:+  ($2)}"; ok=$((ok+1)); else echo "  MISSING     $1"; bad=$((bad+1)); fi; }
same() { [ "$(git rev-parse "$R:$1" 2>/dev/null)" = "$(git hash-object "$1" 2>/dev/null)" ] && echo "identical to the local file" || echo "DIFFERS from the local file"; }
echo "Repository https://github.com/josiahscalia5-dev/bubblegame  branch $B  GitHub head $SHA  ($(git log -1 --format='%ad' --date=format:'%Y-%m-%d %H:%M UTC' "$R"))"
echo "== Design agents, skill, hook, settings, MCP"
for a in game-art-director gameplay-visual-testing lighting-visual-matching water-vfx-engineer screen4-water-motion-engineer; do chk ".claude/agents/$a.md" "$(same .claude/agents/$a.md), $(git cat-file -s "$R:.claude/agents/$a.md" 2>/dev/null) bytes"; done
chk .claude/skills/bubble-wash-screen-matcher/SKILL.md "$(same .claude/skills/bubble-wash-screen-matcher/SKILL.md)"; chk .claude/settings.json "SessionStart hook"; chk .claude/hooks/session-start.sh; chk .mcp.json "empty on purpose: the MCP servers come from the parallax-threejs plugin"
echo "== Setup, save and verification scripts"
for f in Tools/cloud_env_setup.sh Tools/bw_tools_env.sh Tools/verify_restore.sh Tools/save_now.sh Tools/save_guard.py Tools/tripo_job.sh Design/TripoDeliveries/TRIPO_JOBS_LOG.md Tools/autosave.sh Tools/autosave_sessions.json Tools/export_chat_history.py Tools/DEV_TOOLS.md Tools/preservation_audit.sh WebDemo/package.json WebDemo/package-lock.json WebDemo/build.mjs; do chk "$f"; done
echo "== Handoffs"
for f in CLAUDE.md HANDOFF_FOR_NEW_CLAUDE_ACCOUNT.md SESSION_FILE_RESERVATIONS.md SAVE_BEFORE_ACCOUNT_SWITCH.md START_HERE_NEW_CLAUDE_ACCOUNT.md RESTORATION_REPORT_2026-11-08_session_8140e507.md; do chk "$f"; done
echo "== The six Tripo GLBs (sha256 of GitHub's copy against the manifest)"
M=Design/TripoDeliveries/2026-11-08_Six_Assets_from_user
git show "$R:$M/Bubble_Wash_Tripo_GLB_Manifest.json" > /tmp/bw_manifest.json 2>/dev/null
python3 -I - "$R" "$M" <<'PY' && ok=$((ok+6))
import json, subprocess, hashlib, sys
R, M = sys.argv[1:3]
for e in json.load(open('/tmp/bw_manifest.json')):
    try: data = subprocess.run(['git', 'cat-file', 'blob', f"{R}:{M}/{e['file']}"], capture_output=True, check=True).stdout
    except subprocess.CalledProcessError: print(f"  MISSING     {M}/{e['file']}"); continue
    h = hashlib.sha256(data).hexdigest()
    print(f"  {'VERIFIED   ' if h == e['sha256'] else 'SHA DIFFERS'}  {e['file']}  ({len(data):,} bytes, sha256 {h[:16]}...)")
PY
chk WebDemo/models/opening/girl_rigged.glb "the rigged Tripo girl used in the opening"
echo "== Approved references"
O=Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg
chk "$O" "sha256 $(git cat-file blob "$R:$O" 2>/dev/null | sha256sum | cut -c1-16) (expected b30dc6a1794213be)"
chk Design/ApprovedScreens/00_ORIGINAL_COMPLETE_12_SCREEN_BOARD.jpg "the original 12-screen board"
chk Design/ReferencePacks/2026-11-07_First_Two_Screens_Girl_Laundry_from_user/11109.jpg "the girl and laundry reference"
for i in 01_washer_entry 02_rescue_goal 03_jump_to_side_paths 04_drop_to_lower_paths 05_spinning_brushes 06_collect_coins_and_gems 07_avoid_enemies 08_enter_bubble_kingdom 09_rescue_progress 10_level_complete; do chk "Design/ReferencePacks/2026-11-08_Approved_References_FRESH_Match_Prompt_from_user/original_crops/$i.png"; done
echo "== The game"
for f in WebDemo/index.html WebDemo/src/game.js WebDemo/src/level1.js WebDemo/src/level1_flow.js WebDemo/src/opening3d.js WebDemo/src/world.js WebDemo/src/tunnel_s4_struct.js WebDemo/src/tunnel_s4_bt.js; do chk "$f"; done   # (match6: inside tunnel_s4_struct.js, opt-in flag in tunnel_s4_bt.js)
chk WebDemo/game.bundle.js "md5 $(git cat-file blob "$R:WebDemo/game.bundle.js" | md5sum | cut -c1-8)"
echo "== Large files and Git LFS"
echo "  LFS rules in .gitattributes: $(git show "$R:.gitattributes" 2>/dev/null | grep -c 'filter=lfs')"
git ls-tree -r -l "$R" | sort -k4 -n -r | head -3 | awk '{printf "  largest: %6.1f MB  %s\n", $4/1048576, substr($0, index($0,$5))}'
echo "  files over 50 MB (GitHub warns) / 100 MB (GitHub refuses): $(git ls-tree -r -l "$R" | awk '$4>52428800' | wc -l) / $(git ls-tree -r -l "$R" | awk '$4>104857600' | wc -l)"
echo "== Only in this container (not in Git)"
echo "  untracked, not ignored: $(git status --porcelain | grep -c '^??')   uncommitted changes: $(git status --porcelain | grep -vc '^??')"
git status --porcelain --ignored | grep '^!!' | sed 's/^!! /  ignored on purpose: /' | head -8
echo "== Credential scan of GitHub's branch (key and token patterns; the proxy placeholder tsk_proxy-injected is not a key)"
hits=$(git grep -I -l -E 'tsk_[A-Za-z0-9_-]{20,}|gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,}|sk-ant-[A-Za-z0-9_-]{20,}|AKIA[0-9A-Z]{16}|xox[baprs]-[A-Za-z0-9-]{10,}|-----BEGIN [A-Z ]*PRIVATE KEY-----' "$R" 2>/dev/null | sed "s|^$R:||")
[ -z "$hits" ] && echo "  no key or token pattern found in any text file" || { echo "  POSSIBLE CREDENTIALS IN:"; echo "$hits" | sed 's/^/    /'; }
echo "== Summary: $ok present, $bad missing"

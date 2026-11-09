#!/usr/bin/env bash
# Parallel specialist lanes (session ac4e3449, 9 November 2026; the user's coordinator + specialists mandate).
# Each lane = a SPARSE git worktree (WebDemo/, Tools/, .claude/, the approved reference packs; NOT the 5.6 GB Previews/) on its own branch,
# with WebDemo/node_modules shared from the main checkout by a symlink that is never committed. The registry is Tools/lanes.json
# (owner agent, owned files, branch, task). Usage (from the repository root):
#   bash Tools/lanes.sh create            # create every lane in lanes.json that does not exist yet (idempotent)
#   bash Tools/lanes.sh save [msg]        # commit each lane's unfinished work as a checkpoint and push its branch (never force) - the autosave calls this
#   bash Tools/lanes.sh status            # branch, last commit, local vs GitHub, uncommitted files per lane
# Lanes live in $BW_LANES_DIR (default: the folder next to the repository, <repo>_lanes/<lane>). Recovery on another account: the branch on
# GitHub has the lane's last pushed checkpoint; `git worktree add` it again (create does) and continue (see PARALLEL_LANES.md).
set -u
cd "$(dirname "$0")/.." || exit 1
REPO="$(pwd)"; LANES_DIR="${BW_LANES_DIR:-${REPO}_lanes}"; REG=Tools/lanes.json
SPARSE="WebDemo Tools .claude Design/ReferencePacks/2026-11-09_Scenes5_6_Approved_Visual_Reference_Pack_from_user Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user Design/ReferencePacks/2026-11-09_Scene5_Scene6_Full_Kit_from_user Design/ReferencePacks/Six_Scene_New_Direction"
lanes() { python3 -I -c "import json,sys; [print(k, v['branch']) for k, v in json.load(open(sys.argv[1]))['lanes'].items() if v.get('branch')]" "$REG"; }
cmd="${1:-status}"; shift || true
case "$cmd" in
  create)
    base="${1:-HEAD}"
    lanes | while read -r name branch; do
      dir="$LANES_DIR/$name"
      if [ -d "$dir/.git" ] || [ -f "$dir/.git" ]; then echo "lane $name: exists ($dir)"; continue; fi
      mkdir -p "$LANES_DIR"
      if git ls-remote --exit-code --heads origin "$branch" > /dev/null 2>&1; then git fetch -q origin "$branch" && git worktree add -q --no-checkout "$dir" -B "$branch" "origin/$branch"
      else git worktree add -q --no-checkout "$dir" -b "$branch" "$base"; fi
      ( cd "$dir" && git sparse-checkout init --cone > /dev/null 2>&1 && git sparse-checkout set $SPARSE > /dev/null 2>&1 && git checkout -q "$branch" )
      [ -d "$REPO/WebDemo/node_modules" ] && ln -sfn "$REPO/WebDemo/node_modules" "$dir/WebDemo/node_modules"
      ( cd "$dir" && git push -q -u origin "$branch" 2>&1 | grep -v '^remote:' ) ; echo "lane $name: created at $dir on $branch ($(git -C "$dir" rev-parse --short HEAD))"
    done ;;
  save)
    msg="${1:-lane checkpoint}"
    lanes | while read -r name branch; do
      dir="$LANES_DIR/$name"; [ -e "$dir/.git" ] || continue
      ( cd "$dir" || exit 0
        [ "$(git branch --show-current)" = "$branch" ] || { echo "lane $name: not on $branch, skipped"; exit 0; }
        git add -A -- . ':!WebDemo/node_modules' > /dev/null 2>&1
        if ! git diff --cached --quiet; then
          # never commit secrets: refuse a checkpoint whose diff looks like it holds a key
          if git diff --cached | grep -Eq '(tsk_[A-Za-z0-9]{20,}|ghp_[A-Za-z0-9]{20,}|sk-[A-Za-z0-9]{20,})'; then echo "lane $name: possible secret in the diff, NOT committed"; git reset -q; exit 0; fi
          git commit -q -m "Lane $name checkpoint (unfinished specialist work, autosaved): $msg

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>" && echo "lane $name: committed $(git rev-parse --short HEAD)"
        fi
        if [ "$(git rev-parse HEAD)" != "$(git rev-parse "origin/$branch" 2>/dev/null)" ]; then
          if git push -q origin "$branch" 2>/dev/null; then echo "lane $name: pushed $(git rev-parse --short HEAD) VERIFIED=$( [ "$(git ls-remote origin "refs/heads/$branch" | cut -c1-40)" = "$(git rev-parse HEAD)" ] && echo yes || echo NO)"
          else echo "lane $name: PUSH FAILED (will retry next round)"; fi
        fi ) ;
    done ;;
  status)
    lanes | while read -r name branch; do
      dir="$LANES_DIR/$name"
      if [ -e "$dir/.git" ]; then echo "lane $name: $branch @ $(git -C "$dir" log -1 --format='%h %ci %s' | cut -c1-90); GitHub $(git ls-remote origin "refs/heads/$branch" | cut -c1-8); uncommitted: $(git -C "$dir" status --porcelain | grep -v node_modules | wc -l)"
      else echo "lane $name: no local worktree; GitHub $branch = $(git ls-remote origin "refs/heads/$branch" | cut -c1-8) (bash Tools/lanes.sh create)"; fi
    done ;;
  *) echo "usage: lanes.sh create|save|status"; exit 2 ;;
esac

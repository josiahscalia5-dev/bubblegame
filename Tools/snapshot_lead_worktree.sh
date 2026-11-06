#!/usr/bin/env bash
# Companion to Tools/autosave.sh (the user's standing request: save EVERYTHING every 5 minutes). The lead's own test
# worktree (outside the repository, e.g. /home/user/bw-step6) is not seen by the autosave, so every few minutes this
# copies its unfinished work INTO the repository: changes.patch (git diff against its base commit), full copies of every
# changed or new file, and a README with the base commit and time. The autosave then commits and pushes it.
#   setsid nohup bash Tools/snapshot_lead_worktree.sh <worktree> <dest dir in the repo> [minutes=5] [rounds=288] > <log> 2>&1 < /dev/null & disown
set -u
WT="$1"; DEST="$2"; MIN="${3:-5}"; ROUNDS="${4:-288}"
cd "$(dirname "$0")/.." || exit 1
for ((i = 1; i <= ROUNDS; i++)); do
  if [ -d "$WT/.git" ] || [ -f "$WT/.git" ]; then
    tmp="$DEST.tmp"; rm -rf "$tmp"; mkdir -p "$tmp/files"
    base="$(git -C "$WT" rev-parse HEAD)"
    git -C "$WT" diff --binary HEAD > "$tmp/changes.patch"
    { git -C "$WT" diff --name-only HEAD; git -C "$WT" ls-files --others --exclude-standard; } | sort -u | while read -r f; do
      [ -f "$WT/$f" ] && mkdir -p "$tmp/files/$(dirname "$f")" && cp "$WT/$f" "$tmp/files/$f"
    done
    n=$(find "$tmp/files" -type f | wc -l)
    printf '# Lead worktree snapshot\n\n- Worktree: `%s`\n- Base commit: `%s`\n- Taken: %s\n- Changed or new files: %s (full copies in `files/`; `changes.patch` applies on the base commit)\n' \
      "$WT" "$base" "$(date -u '+%Y-%m-%d %H:%M UTC')" "$n" > "$tmp/README.md"
    rm -rf "$DEST"; mv "$tmp" "$DEST"
    echo "$(date -u +%H:%M) snapshot: $n files"
  else
    echo "$(date -u +%H:%M) worktree $WT not found"
  fi
  [ "$i" -lt "$ROUNDS" ] && sleep $((MIN * 60))
done

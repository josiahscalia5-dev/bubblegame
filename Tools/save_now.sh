#!/usr/bin/env bash
# Save everything to GitHub now, and prove it: commit all changes on the current branch, push with retries, then ask
# GitHub which commit the branch points at. Used by hand after each finished task and by Tools/autosave.sh every round.
#
#   Tools/save_now.sh "<commit subject>" ["<commit body>"]
#
# Prints a save report: branch, commit hash, whether GitHub really has that commit (checked with git ls-remote, not
# assumed from the push's exit code), and the files saved. Exit code 0 only when GitHub has the commit.
# Set CLAUDE_SESSION_URL to add the session link to the commit message. No keys are read or written.
set -u
cd "$(dirname "$0")/.." || exit 1
SUBJECT="${1:-Save: latest work in progress}"; BODY="${2:-}"
BRANCH="$(git rev-parse --abbrev-ref HEAD)"
NOW="$(date -u '+%Y-%m-%d %H:%M UTC')"

if [ -e .git/index.lock ]; then echo "$NOW save skipped: another git command is running (index.lock)"; exit 3; fi
# Never commit halfway through a merge, rebase or cherry-pick (it would save conflict markers); the next round saves it.
if [ -e .git/MERGE_HEAD ] || [ -e .git/CHERRY_PICK_HEAD ] || [ -d .git/rebase-merge ] || [ -d .git/rebase-apply ] \
   || [ -n "$(git diff --name-only --diff-filter=U 2>/dev/null)" ]; then
  echo "$NOW save skipped: a merge, rebase or cherry-pick is in progress"; exit 5
fi
case "$BRANCH" in main|master|HEAD) echo "$NOW save refused: on '$BRANCH'; saves go to a ccr-* work branch only"; exit 4 ;; esac

before_remote="$(git ls-remote origin "refs/heads/$BRANCH" 2>/dev/null | cut -f1)"
git add -A
# (8 November, the user's preservation mandate) Tools/save_guard.py: a file with a credential pattern is never committed, and a media
# file changed in the last 30 s (a recording or an encode still writing) waits for the next round; both stay on disk, unstaged
held=""
if [ -f Tools/save_guard.py ]; then
  while read -r why f; do [ -n "$f" ] || continue; git reset -q -- "$f"; held="$held
  $why  $f"; done < <(python3 -I Tools/save_guard.py 2>/dev/null)
fi
if git diff --cached --quiet; then
  committed="no (nothing new since the last commit)"
else
  trailer="Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
  [ -n "${CLAUDE_SESSION_URL:-}" ] && trailer="$trailer
Claude-Session: $CLAUDE_SESSION_URL"
  if [ -n "$BODY" ]; then git commit -q -m "$SUBJECT" -m "$BODY" -m "$trailer"; else git commit -q -m "$SUBJECT" -m "$trailer"; fi
  committed="yes"
fi
HEAD_SHA="$(git rev-parse HEAD)"

remote="$before_remote"
if [ "$remote" != "$HEAD_SHA" ]; then
  for wait in 0 2 4 8 16; do
    sleep "$wait"
    git push -q -u origin "$BRANCH" 2>/dev/null && break
  done
  remote="$(git ls-remote origin "refs/heads/$BRANCH" 2>/dev/null | cut -f1)"
  # (7 November, the user's request) Another Claude session pushed to this branch first, so the push was rejected: fetch
  # and merge GitHub's commits with a normal merge (never a rebase, never a force-push; each session's chat files differ,
  # so it is normally clean), then push again. A conflicting merge is undone and reported; nothing is lost either way.
  if [ "$remote" != "$HEAD_SHA" ] && [ -n "$remote" ] && ! git merge-base --is-ancestor "$remote" "$HEAD_SHA" 2>/dev/null; then
    if git pull -q --no-rebase --no-edit origin "$BRANCH" > /dev/null 2>&1; then
      merged="yes: GitHub had newer commits from another session, merged in with a normal merge"
      HEAD_SHA="$(git rev-parse HEAD)"
      for wait in 0 2 4 8; do sleep "$wait"; git push -q -u origin "$BRANCH" 2>/dev/null && break; done
      remote="$(git ls-remote origin "refs/heads/$BRANCH" 2>/dev/null | cut -f1)"
    else
      git merge --abort > /dev/null 2>&1
      merged="NO: GitHub's newer commits conflict with this session's; the merge was undone (local work kept). Fix by hand: CLAUDE_ACCOUNT_TRANSFER_HANDOFF.md section 10.3"
    fi
  fi
fi

# Files this save carries to GitHub: everything between what GitHub had before and now.
if [ -n "$before_remote" ] && git cat-file -e "$before_remote^{commit}" 2>/dev/null; then
  files="$(git diff --name-status "$before_remote" "$HEAD_SHA")"
else
  files="$(git show --name-status --format= "$HEAD_SHA")"
fi

echo "=== Save report, $NOW ==="
echo "Branch:    $BRANCH"
echo "Commit:    $HEAD_SHA  ($(git log -1 --format=%s "$HEAD_SHA"))"
echo "Committed: $committed"
[ -n "${merged:-}" ] && echo "Merged:    $merged"
if [ "$remote" = "$HEAD_SHA" ]; then
  echo "Push:      VERIFIED, GitHub's $BRANCH is at ${HEAD_SHA:0:7}"
else
  echo "Push:      FAILED, GitHub's $BRANCH is at ${remote:-nothing}; local is ${HEAD_SHA:0:7}"
fi
# (9 November 2026, session f28099bc; updated session d847dce2: the user's PRIMARY branch is now claude/bubble-wash-restore-transfer-kc4ecl,
# and claude/bubble-wash-account-transfer-52t7ym is historical only): when this session works on another branch (a harness ccr-* branch) that
# CONTAINS the user's branch, fast-forward the user's branch to the same verified commit. A plain push (never --force): if the user's branch has
# commits this one lacks, GitHub refuses it and nothing changes.
# (9 November 2026, session 3849f5c8: the user named claude/bubble-wash-restore-tamzio as the transfer branch; it equals kc4ecl, so BOTH are
# fast-forwarded, each only when it is an ancestor of the verified commit.)
for USER_BRANCH in ${BW_USER_BRANCH:-claude/bubble-wash-transfer-screen6-to82gp claude/bubble-wash-restore-tamzio claude/bubble-wash-restore-transfer-kc4ecl}; do   # (session 8da775c4: to82gp, the user's ACTIVE development branch, first)
if [ "$remote" = "$HEAD_SHA" ] && [ "$BRANCH" != "$USER_BRANCH" ]; then
  ub="$(git ls-remote origin "refs/heads/$USER_BRANCH" 2>/dev/null | cut -f1)"
  if [ -n "$ub" ] && [ "$ub" != "$HEAD_SHA" ] && git merge-base --is-ancestor "$ub" "$HEAD_SHA" 2>/dev/null; then
    git push -q origin "$HEAD_SHA:refs/heads/$USER_BRANCH" 2>/dev/null
    [ "$(git ls-remote origin "refs/heads/$USER_BRANCH" 2>/dev/null | cut -f1)" = "$HEAD_SHA" ] && echo "User branch: VERIFIED, GitHub's $USER_BRANCH fast-forwarded to ${HEAD_SHA:0:7}" \
      || echo "User branch: $USER_BRANCH NOT updated (push refused or failed; it stays at ${ub:0:7})"
  elif [ "$ub" = "$HEAD_SHA" ]; then echo "User branch: $USER_BRANCH already at ${HEAD_SHA:0:7}"
  elif [ -n "$ub" ]; then echo "User branch: $USER_BRANCH has commits this branch lacks: NOT touched (merge it here first)"; fi
fi
done
if [ -n "$files" ]; then
  echo "Files saved ($(printf '%s\n' "$files" | wc -l)):"; printf '%s\n' "$files" | sed 's/^/  /' | head -60
else
  echo "Files saved: none new (GitHub already had everything)"
fi
if [ -n "$held" ]; then echo "Held back (not saved this round):$held"; echo "  (SECRET = a key or token pattern: remove it from the file; BUSY = still being written: the next round saves it; LARGE = over 95 MB, GitHub refuses 100 MB: use Git LFS or make it smaller)"; fi
# one line per round in the container's save history (the durable record is GitHub's own commit list)
mkdir -p "$HOME/.bubblewash-autosave" && echo "$NOW branch=$BRANCH commit=$HEAD_SHA committed=${committed%% *} github=$([ "$remote" = "$HEAD_SHA" ] && echo VERIFIED || echo FAILED:${remote:-none})$([ -n "$held" ] && echo " held=$(printf '%s' "$held" | grep -c .)")" >> "$HOME/.bubblewash-autosave/save_history.log"
[ "$remote" = "$HEAD_SHA" ]

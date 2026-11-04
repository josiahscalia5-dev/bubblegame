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
case "$BRANCH" in main|master|HEAD) echo "$NOW save refused: on '$BRANCH'; saves go to a ccr-* work branch only"; exit 4 ;; esac

before_remote="$(git ls-remote origin "refs/heads/$BRANCH" 2>/dev/null | cut -f1)"
git add -A
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
if [ "$remote" = "$HEAD_SHA" ]; then
  echo "Push:      VERIFIED, GitHub's $BRANCH is at ${HEAD_SHA:0:7}"
else
  echo "Push:      FAILED, GitHub's $BRANCH is at ${remote:-nothing}; local is ${HEAD_SHA:0:7}"
fi
if [ -n "$files" ]; then
  echo "Files saved ($(printf '%s\n' "$files" | wc -l)):"; printf '%s\n' "$files" | sed 's/^/  /' | head -60
else
  echo "Files saved: none new (GitHub already had everything)"
fi
[ "$remote" = "$HEAD_SHA" ]

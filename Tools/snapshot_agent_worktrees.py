"""Snapshot every design agent's unfinished work into the repository, so it reaches GitHub with the next save.

Usage: python3 -I Tools/snapshot_agent_worktrees.py <session-dir> <out-root>

The agents edit in their own git worktrees (.claude/worktrees/agent-<id>/, ignored by the repository, never pushed). For
each worktree, this writes <out-root>/<agent type>_<id>/, replacing the previous snapshot of that agent:
  - changes.patch: everything it changed against the commit it started from (its own commits and its uncommitted edits),
    as a readable git diff (binary files such as textures and images are only named there; they are in files/);
  - files/: a full copy of every file it changed or created (new evidence included), at the same paths: copied over a
    checkout of the starting commit, it restores the agent's work exactly;
  - README.md: the agent, its worktree branch, its starting commit, its own commits, the time, and the file list.
The rebuilt game.bundle.js is left out (it is rebuilt from the source with `cd WebDemo && node build.mjs`), and so is any
single file over 25 MB. Read-only for the worktrees: nothing in them is staged, committed or changed.
<session-dir> is ~/.claude/projects/<project>/<session-id>/; its subagents/*.meta.json name each worktree's agent.
"""
import glob
import json
import os
import shutil
import subprocess
import sys
import time

src, out_root = sys.argv[1], sys.argv[2]
REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MAX_BYTES = 25 * 1024 * 1024
SKIP = {"WebDemo/game.bundle.js"}


def git(wt, *args, binary=False):
    r = subprocess.run(["git", "-C", wt, *args], capture_output=True)
    return r.stdout if binary else r.stdout.decode("utf-8", "replace")


main_branch = git(REPO, "rev-parse", "--abbrev-ref", "HEAD").strip()
agents = {}
for m in glob.glob(os.path.join(src, "subagents", "agent-*.meta.json")):
    try:
        meta = json.load(open(m))
    except (OSError, ValueError):
        continue
    if meta.get("worktreePath"):
        agents[os.path.realpath(meta["worktreePath"])] = meta

os.makedirs(out_root, exist_ok=True)
done = []
for wt in sorted(glob.glob(os.path.join(REPO, ".claude", "worktrees", "*"))):
    if not os.path.isdir(wt) or not git(wt, "rev-parse", "--git-dir").strip():
        continue
    meta = agents.get(os.path.realpath(wt), {})
    name = f"{meta.get('agentType', 'agent')}_{os.path.basename(wt).replace('agent-', '')[:8]}"
    base = git(wt, "merge-base", "HEAD", main_branch).strip()
    if not base:
        continue
    changed = [p for p in git(wt, "diff", "--name-only", base).splitlines() if p and p not in SKIP]
    untracked = [p for p in git(wt, "ls-files", "--others", "--exclude-standard").splitlines() if p and p not in SKIP]
    dest = os.path.join(out_root, name)
    if not changed and not untracked:
        continue
    tmp = dest + ".tmp"
    shutil.rmtree(tmp, ignore_errors=True)
    os.makedirs(os.path.join(tmp, "files"))
    with open(os.path.join(tmp, "changes.patch"), "wb") as f:
        f.write(git(wt, "diff", base, "--", ".", *[f":!{s}" for s in SKIP], binary=True))
    copied, skipped = [], []
    for p in sorted(set(changed + untracked)):
        fp = os.path.join(wt, p)
        if not os.path.isfile(fp):
            copied.append(f"{p} (deleted)")
            continue
        if os.path.getsize(fp) > MAX_BYTES:
            skipped.append(p)
            continue
        os.makedirs(os.path.dirname(os.path.join(tmp, "files", p)), exist_ok=True)
        shutil.copy2(fp, os.path.join(tmp, "files", p))
        copied.append(p + ("" if p in changed else " (new)"))
    commits = git(wt, "log", "--format=%h %s", f"{base}..HEAD").strip()
    with open(os.path.join(tmp, "README.md"), "w") as f:
        f.write(f"# Work-in-progress snapshot: {meta.get('agentType', 'agent')} ({meta.get('description', '')})\n\n")
        f.write(f"- **Taken:** {time.strftime('%Y-%m-%d %H:%M UTC', time.gmtime())}, by `Tools/snapshot_agent_worktrees.py` "
                "during the automatic save. Unfinished work: it is not in the playable game until the lead merges it.\n")
        f.write(f"- **Worktree branch:** `{git(wt, 'rev-parse', '--abbrev-ref', 'HEAD').strip()}` (local only), "
                f"started from `{base[:7]}`.\n")
        f.write("- **Its own commits so far:** " + (("\n" + "\n".join(f"  - `{c}`" for c in commits.splitlines())) if commits else "none yet") + "\n")
        f.write("- **To restore it:** copy `files/` over a checkout of the starting commit, then `cd WebDemo && node build.mjs`. "
                "`changes.patch` is the same change as a readable diff.\n\n")
        f.write(f"## Files ({len(copied)}; full copies in `files/`)\n\n" + "\n".join(f"- `{c}`" for c in copied) + "\n")
        if skipped:
            f.write("\nLeft out (over 25 MB): " + ", ".join(f"`{s}`" for s in skipped) + "\n")
    shutil.rmtree(dest, ignore_errors=True)
    os.rename(tmp, dest)
    done.append(f"{name}: {len(copied)} files")
print("snapshots: " + ("; ".join(done) if done else "no agent worktree with changes"))

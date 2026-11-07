# Start here: continuing Bubble Wash Kingdom on another Claude account

You keep ONE project on GitHub and switch between two Claude accounts. The project, its rules, its five AI agents, its
skill, its scripts and all evidence are in the repository. The plugin and the cloud environment belong to each account,
so check them once per account. The full details are in `CLAUDE_ACCOUNT_TRANSFER_HANDOFF.md`.

**Repository:** https://github.com/josiahscalia5-dev/bubblegame
**Branch:** `ccr-10503be1-pnv5vq`

## The easy way (7 November): three things only you can do, Claude does the rest

1. **Sign in to GitHub on claude.ai** (only you can sign in): https://claude.ai/connect-github, with access to
   `josiahscalia5-dev/bubblegame`.
2. **Start a new Claude Code session** with that repository (any cloud environment is fine the first time).
3. **Paste the continuation message** from section 13 of `CLAUDE_ACCOUNT_TRANSFER_HANDOFF.md` as your first message, then
   click **Approve** on the cards Claude shows you: it creates the `bubblegame` cloud environment, offers the
   parallax-threejs plugin, installs the tools, starts the 5-minute autosave and checks everything. If the plugin card
   appears, approve it and start one more new session afterwards (plugins load when a session starts).

## One-time setup per account by hand (only if you prefer; skip what is already done)

1. **GitHub:**
   - On claude.ai, connect GitHub: https://claude.ai/connect-github.
   - Give it access to `josiahscalia5-dev/bubblegame`.
2. **Plugin:**
   - In claude.ai's plugin directory, turn on **parallax-threejs**.
   - Leave other plugins off. Spector is skipped on purpose.
3. **Cloud environment named `bubblegame`:**
   - Open a Claude Code session and click the cloud environment menu in its title bar, then add an environment.
   - **Network:** Limited, with **package managers** and **MCP servers** switched on.
   - **Allowed hosts:** `download.blender.org` and `download.pytorch.org`.
   - **Repository:** `josiahscalia5-dev/bubblegame`.
   - **Setup script:** paste the lines below (7 November version: it never blocks a session from starting).
   - No environment variables and no secrets are needed.
   - Or simply ask Claude to create it: you will see an approval card.

```
#!/bin/bash
# Bubble Wash Kingdom dev tools (Blender, OpenCV, PyTorch/LPIPS, Optuna, glTF tools, Vite, Tripo CLI, game npm deps).
# Runs the repository's own Tools/cloud_env_setup.sh, which skips what is installed. Only when the checkout has it (the
# default branch does not); a failed step is reported in the log and never stops the session from starting.
if [ -f bubblegame/Tools/cloud_env_setup.sh ]; then
  bash bubblegame/Tools/cloud_env_setup.sh || echo "Bubble Wash setup: a step failed (above); run bash Tools/verify_restore.sh"
fi
```

**Current state:** (the latest: section 0 of `CLAUDE_ACCOUNT_TRANSFER_HANDOFF.md`)
- **The account of the eighteenth session (7 November):** its `bubblegame` environment was created at about 00:40 UTC
  (`env_016qrkLt8s9RU8tVo9qEp8qo`), with the script above.
- **This (second) account:** got its `bubblegame` environment and the plugin on 6 November, about 23:37 UTC.
- **The other account (the one the sixteenth session used):** had both as of 6 November 22:50 UTC
  (`ACCOUNT_SWITCH_HANDOFF.md`, sections 7-8).

Where both exist, go straight to step 4. Claude's check in step 6 confirms them.

## Every time you switch

4. **Start a NEW Claude Code session:** pick the **`bubblegame`** environment and the **bubblegame** repository.
5. **Paste the continuation prompt:** it is in section 13 of `CLAUDE_ACCOUNT_TRANSFER_HANDOFF.md`, ready to paste as is.
6. **Wait for Claude's report:** what works, what is missing, and what to click. Approve only what you want.

## If something is missing

| you see | do this |
|---|---|
| Claude cannot see the repository or push | Reconnect GitHub (step 1); make sure the Claude GitHub App is installed on the repository |
| `~/.bubblewash-tools missing` | The session is not on the `bubblegame` environment: start a new session on it, or let Claude run `bash Tools/cloud_env_setup.sh` |
| No `chrome-devtools-mcp` / `threejs-devtools-mcp` / `playwright-mcp` tools | Turn on parallax-threejs (step 2), then start a NEW session |
| An agent is missing from Claude's list | Make sure the session is on branch `ccr-10503be1-pnv5vq`, then start a new session |
| `Push: FAILED` in a save report | The other account's session pushed at the same time: ask Claude to `git pull --no-rebase` and save again (never force-push) |

**One-line health check** (Claude runs it): `bash Tools/verify_restore.sh --build`. It changes nothing and must end with
`0 failed`.

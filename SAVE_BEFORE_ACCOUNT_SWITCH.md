# Save before an account switch (a reusable checklist)

Use this when a Claude account is running low on usage. Ask Claude: **"Run SAVE_BEFORE_ACCOUNT_SWITCH.md now."** It takes a
few minutes, and nothing in the game changes.

## For Claude, in order

1. **Stop starting new work.** No new experiments, builds or agents. Let running agents finish if they can.
2. **Collect background work:**
   - each finished agent's report goes into its evidence folder (`Previews/WebDemo/<round folder>/`);
   - for an agent still running, save what it has so far: the autosave snapshots worktrees into
     `wip_snapshots_design_agents/`;
   - copy any scratch scripts it needs from the scratchpad into the evidence folder (text only).
   - Never discard unfinished work silently: list it in the handoff.
3. **Check the accepted game is untouched:** run `bash Tools/verify_restore.sh`.
   - The accepted bundle's md5 must be `5bb24e2828a6f2ef17146252c69b413a`, unless the user approved a new accepted build:
     then update the md5 in `Tools/verify_restore.sh` and the handoff.
   - `git diff --stat <last checkpoint> HEAD -- WebDemo/` must list only changes the user approved. Experiments stay
     behind their `?s3=` flags.
4. **Update the handoff:**
   - **`HANDOFF.md`:** a new top section (what was done, what is unfinished, the newest decisions).
   - **`CLAUDE_ACCOUNT_TRANSFER_HANDOFF.md`:** sections 3 (checkpoint), 4-5 (status), 10 (open problems and background
     tasks), 12 (next task).
   - **`CLAUDE.md`:** only if the user gave a new standing rule.
5. **Save and prove it:**
   - `bash Tools/save_now.sh "Account switch: <what was saved>"`: the report must say **`Push: VERIFIED`**.
   - Then: `git fetch origin ccr-10503be1-pnv5vq && git rev-parse HEAD origin/ccr-10503be1-pnv5vq` (both the same).
6. **Tell the user:**
   - the branch and the pushed commit SHA;
   - that the accepted build is unchanged, with the check that proved it;
   - what is unfinished or failing, never marked as passed;
   - that the continuation prompt is section 13 of `CLAUDE_ACCOUNT_TRANSFER_HANDOFF.md`.

## Never

- force-push, rebase, reset or delete a branch;
- merge an experiment into the accepted build;
- commit passwords, API keys, tokens or cookies (the chat exporter redacts keys; the repository is public);
- spend Tripo credits without asking.

## Good to know

- The autosave keeps committing the chat history every 5 minutes after the final save. That is fine: the branch head
  just moves on.
- If the old account's session is still alive, its autosave may try to push to the same branch. A rejected push is
  harmless; the new session merges with `git pull --no-rebase` if its own push is rejected.

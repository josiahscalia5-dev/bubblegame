# Backup verification (8 November 2026, session bb87ba9f, emergency account-transfer backup)

| Item | Result | Evidence |
|---|---|---|
| REPOSITORY | https://github.com/josiahscalia5-dev/bubblegame | |
| WORKING BRANCH | `claude/bubble-wash-account-transfer-52t7ym` | contains all of `claude/bubble-wash-account-switch-e1nndb` (ancestor check) |
| CODE CHECKPOINT (six-scene first build) | `27eae34988f969908cbdef775820343243c1bdec` | `save_now.sh`: Push VERIFIED (git ls-remote) |
| BACKUP COMMIT (docs, references, captures) | `e51f5029e2649268bd17ae1c3fe250bea8d2394f` | `save_now.sh`: Push VERIFIED; `git fetch` + `git cat-file -e` of 35 required files in GitHub's copy: 0 missing |
| ROLLBACK CHECKPOINT (last playable build before the six-scene work) | `claude/bubble-wash-account-switch-e1nndb` at `0aa216213188b...` (`0aa21621`) | pushed and verified earlier this session |
| Later commits | the 5-minute autosave keeps adding chat-history / WIP commits on the working branch; `git ls-remote origin claude/bubble-wash-account-transfer-52t7ym` gives the head | `~/.bubblewash-autosave/save_history.log` (`github=VERIFIED` every round) |
| On GitHub (checked in GitHub's copy) | the seven handoff documents (this one in the next save), `CLAUDE.md`, `.mcp.json`, `.claude/` (5 agents, skill, hook, settings), the `Tools/` setup / save / verify scripts, `WebDemo/` sources + bundle + package manifests, 29 GLBs in `WebDemo/models/`, the user's 6 Tripo GLBs + `rig/rig_girl.py`, 20 six-scene reference files, the six-scene captures | `git ls-tree` / `git cat-file` on `origin/claude/bubble-wash-account-transfer-52t7ym` |
| Git LFS | not used (0 LFS files; no file over 50 MB): every GLB / PNG is a real binary in Git (`girl_rigged.glb` starts with `glTF` in GitHub's copy) | `git lfs ls-files` = 0 |
| node_modules | not committed on purpose (`npm ci` from `WebDemo/package-lock.json`) | |
| Secrets | none in the repository (keys only as the environment's network secret) | `Tools/preservation_audit.sh` checks credential patterns |
| AUTOSAVE | WORKING: one `Tools/autosave.sh` process, pinned to the working branch (`BW_AUTOSAVE_BRANCH`), every round `github=VERIFIED`; restarted by the SessionStart hook in a new session; this session registered in `Tools/autosave_sessions.json`. The backup does not depend on this session: everything above is on GitHub | `ps`, `/proc/<pid>/environ`, save history |
| RESTORE TEST (clean clone) | see below | |

## Clean-clone restore test
A fresh `git clone --depth 1 -b claude/bubble-wash-account-transfer-52t7ym` from GitHub into an empty folder (code checkpoint `27eae349`), then the
model files' magic bytes, `npm ci`, `node build.mjs` and a comparison of the rebuilt bundle with the committed one.
**RESTORE TEST: PASS** (8 Nov ~00:10 UTC). A FULL clone of this repository (about 6 GB: the evidence images) exceeded the cloud session's disk
allowance (the first attempt filled it and was deleted), so the test used a fresh BLOBLESS SPARSE clone from GitHub (`git clone --filter=blob:none
--depth 1 -b claude/bubble-wash-account-transfer-52t7ym` + `git sparse-checkout set WebDemo .claude Tools Design/TripoDeliveries/2026-11-08_Six_Assets_from_user
Design/ReferencePacks/Six_Scene_New_Direction`): clone head `d2a2ff194ea8df26547ce636df6a65cec3a02e54` in 6 s, 119 MB checked out; all seven handoff
documents, `CLAUDE.md`, `.mcp.json` and the five agents present; every GLB checked starts with `glTF` (real binaries); 20 six-scene references;
`npm ci` exit 0; `node build.mjs` exit 0; **the rebuilt bundle is IDENTICAL to the committed one** (`76581f46`).
Tip for the next account: the cloud session clones the repository itself; for a manual second copy use the same blobless sparse clone.

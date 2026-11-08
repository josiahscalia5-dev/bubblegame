# Session file reservations (8 November 2026, the user's choice "Split by files", about 03:00 UTC; updated 10:40 UTC and 12:50 UTC)

Two Claude sessions work on the SAME game. To avoid conflicting edits, each session edits only its own files.
Neither session resets, overwrites or force-pushes either branch.

## UPDATE 8 November, about 14:45 UTC: session `57091b57` (the user's other account), branch `ccr-b67aeffb-d94mmq`
Checked at its start (14:18 UTC): session `b0abcf95` is STILL LIVE on `ccr-50c66592-kcnqoy` (its autosave pushed `fc57eba2` at 14:17:45,
Level 1 route frames from its running jobs). So this session never writes `ccr-50c66592-kcnqoy`: it works on its own branch
`ccr-b67aeffb-d94mmq`, which contains all of `ccr-50c66592-kcnqoy` up to `fc57eba2` (normal merge `24ca897b`); its autosave reports each
round whether `ccr-50c66592-kcnqoy` has commits not merged here yet (merge by hand, normal merges only). Edited by this session:
- the save system: `Tools/autosave.sh` (the parent-branch report), `Tools/save_now.sh` (one message), `Tools/save_guard.py` (files over
  95 MB held back), `.claude/hooks/session-start.sh` (pins the branch, passes the parent), `Tools/autosave_sessions.json` (its entry);
- new only: `WebDemo/src/tripo_l1.js` (`tripo1`, opt-in), `WebDemo/tools/tripo/`, `WebDemo/models/l1_enemy_tripo.glb`,
  `Design/TripoDeliveries/2026-11-08_session_57091b57_Level1_assets/`, `Previews/WebDemo/screen4_round9_match/72_tripo1_enemy/`;
- `WebDemo/src/game.js`: ONE import line and ONE call after `buildLevel1(...)`, both inert without `tripo1`.
- `WebDemo/src/opening3d.js`: ONE import line and ONE call after the laundry is built, both inert without `tripo2`; new
  `WebDemo/src/opening_tripo.js`, `WebDemo/models/opening/basket_tripo.glb`, `towels_tripo.glb`; `WebDemo/tools/level1/o3d_shots.cjs`:
  an optional `WAIT` (off by default); `Tools/tripo_job.sh`, `Design/TripoDeliveries/TRIPO_JOBS_LOG.md`.
It does NOT edit `level1.js`, `level1_flow.js`, `world.js` (session `b0abcf95`'s roof2 / finale2 / flow work); `opening3d.js` only as above.
On merging `ccr-50c66592-kcnqoy` again: keep both sides of `game.js`; rebuild `game.bundle.js` (never hand-merge it).

## UPDATE 8 November, about 12:50 UTC: session `b0abcf95` (the user's new account), branch `ccr-50c66592-kcnqoy`
The user moved to another Claude account and asked this session to continue from the latest work and to build the 10-beat Level 1
gameplay (`Design/ReferencePacks/2026-11-08_Level1_Blueprint_and_Strict_Prompt_from_user/`), and: "If another Claude session is
still actively working on this branch, do not make competing changes ... create a separate working branch." Checked first: session
`8140e507`'s container was still pushing to `claude/bubble-wash-kingdom-continue-z9nmm1` at 12:06 UTC (and later), but only its
chat history and proof logs (no game source since `af2e7dd`, 11:52 UTC). So this session works on its OWN branch `ccr-50c66592-kcnqoy`
(it merged `origin/claude/bubble-wash-kingdom-continue-z9nmm1` with normal merges; `ccr-76d4bc77-rqhl8o` is an ancestor) and never
writes `claude/bubble-wash-kingdom-continue-z9nmm1` or `ccr-76d4bc77-rqhl8o`. Edited by this session, at the user's direction:
`WebDemo/src/level1.js` (everything new gated on `FLOW`), `WebDemo/src/game.js` (hooks gated on `level1.flow`), `WebDemo/src/world.js`
(`HOOK`, null unless flow), new `WebDemo/src/level1_flow.js`, new `WebDemo/tools/level1/flow_routes.cjs` and `record_flow.cjs`,
`Previews/WebDemo/screen4_round9_match/71_level1_flow/`. **If session `8140e507` resumes, it must merge `origin/ccr-50c66592-kcnqoy`
BEFORE touching `level1.js`, `game.js` or `world.js`.** `match6` stays opt-in (not merged into the default look).

## UPDATE 8 November, about 10:40 UTC: the user's choice "Take both over"
The user gave this session (`8140e507`) `WebDemo/src/level1.js` and `WebDemo/src/opening3d.js` (and with them
`WebDemo/models/opening/` and `WebDemo/tools/level1/`) for the Level 1 mandate (continuous water from the washer to the castle;
the opening's fixes). Checked before any edit: the old session's last message (02:56 UTC) says nothing was left uncommitted; its
last change to these files is `890167c`; `level1.js`, `opening3d.js`, `game.js`, `track.js` and `models/opening/` are
byte-identical on `ccr-76d4bc77-rqhl8o` (`7e5dd685`) and on this session's branch. This session works on its own branch and
offers the result as a pull request into `ccr-76d4bc77-rqhl8o`; it never writes that branch. If the old session resumes, it must
merge this session's branch BEFORE touching either file. `match6` (her silhouette) stays a candidate (opt-in), not merged into the
default look, until the user approves it.

## Session `dbccb9a3` (the old session), branch `ccr-76d4bc77-rqhl8o`
Owned (until 10:40 UTC) the cartoon girl, her animation, the laundry basket, the laundry toss, the washer-entry sequence and
mobile performance:
- `WebDemo/src/opening3d.js`, `WebDemo/src/level1.js` (the user named these two): MOVED to session `8140e507` (above)
- `WebDemo/models/opening/` (the rigged Tripo girl and the other opening models), `WebDemo/tools/level1/`: MOVED with them
- `Previews/WebDemo/screen4_round9_match/68_level1/`, `Design/TripoDeliveries/`

## Session `8140e507` (this session), branch `claude/bubble-wash-kingdom-continue-z9nmm1`
Owns the ORIGINAL CLASSIC Screen 4 look: the mascot's rear silhouette, the saturated blue water, the metal washer-tunnel housing,
the brushes, the lighting and the premium finish. RESERVED for editing by this session only:
- `WebDemo/src/tunnel_s4_struct.js` (the mascot's fur and outline, the housing, the tunnel grade, the swell grade)
- `WebDemo/src/tunnel_s4_bt.js`: ONLY the `STRUCT_PARTS` flag list (one new flag per pass; nothing else in the file)
- new files only: `WebDemo/src/tunnel_s4_match6.js` (if needed), `WebDemo/tools/screen4_match6/`,
  `Previews/WebDemo/screen4_round9_match/69_match6/`, `RESTORATION_REPORT_2026-11-08_session_8140e507.md`, this file
- `Tools/verify_restore.sh` (its branch and bundle checks only)

## Shared files: coordinate, never edit in parallel
- `WebDemo/src/game.js`, `WebDemo/src/opening.js`, `WebDemo/src/screens12.js`, `WebDemo/src/track.js`: this session does NOT edit
  them. If a correction needs one, the change is described to the user for the owner to make.
- `WebDemo/game.bundle.js` (built from the sources): both sessions commit it. On a merge, the sources are merged and the bundle is
  REBUILT (`cd WebDemo && node build.mjs`), never hand-merged.
- `CLAUDE.md`, `HANDOFF_FOR_NEW_CLAUDE_ACCOUNT.md`, `HANDOFF.md`: this session adds its state in its own new files (above) and
  leaves these to the old session until the user says the parallel work is over.

## Merging
This session merges `origin/ccr-76d4bc77-rqhl8o` into its own branch with a normal merge after checking for conflicts (expected:
only the bundle, rebuilt). The old session's branch is never written by this session.

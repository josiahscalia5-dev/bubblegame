# Session file reservations (8 November 2026, the user's choice "Split by files", about 03:00 UTC; updated 10:40 UTC)

Two Claude sessions work on the SAME game. To avoid conflicting edits, each session edits only its own files.
Neither session resets, overwrites or force-pushes either branch.

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

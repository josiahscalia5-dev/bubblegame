# Session file reservations (8 November 2026, the user's choice "Split by files", about 03:00 UTC)

Two Claude sessions work on the SAME game at the same time. To avoid conflicting edits, each session edits only its own files.
Neither session resets, overwrites or force-pushes either branch.

## Session `dbccb9a3` (the old session), branch `ccr-76d4bc77-rqhl8o`
Owns the cartoon girl, her animation, the laundry basket, the laundry toss, the washer-entry sequence and mobile performance:
- `WebDemo/src/opening3d.js`, `WebDemo/src/level1.js` (the user named these two)
- `WebDemo/models/opening/` (the rigged Tripo girl and the other opening models), `WebDemo/tools/level1/`
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

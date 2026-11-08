# Level 1 continuous water: `?s3=...,level1` sub-switches `wet` and `port` (8 November 2026, session `8140e507`)

The user's Level 1 mandate (8 November, with the master prompt, the acceptance checklist and five annotated boards): "once the pink
fluffy character enters the washing machine, the character remains in continuous saturated blue water throughout the full level ...
The castle must be reached through the same connected watery laundry-machine world", no dry road, no walls / ceiling / water / tunnel
disappearing or visibly disconnected; the Tripo girl, the toss, the washer entry, the controls, the collectibles and the approved Classic
Screen 4 preserved. The user gave this session `level1.js` and `opening3d.js` (`SESSION_FILE_RESERVATIONS.md`, after checking the old
session left nothing uncommitted). Both sub-switches are on by default under `level1`; **rollback: `,nowet` and `,noport`** draw the
previous level1 and opening exactly. NOT accepted by the user yet. `match6` (her silhouette) is NOT part of this: it is opt-in
(`,match6`), a candidate, by the user's order.

Build: bundle **a62848a0** (commit `6b5d46fd`), on top of `ccr-76d4bc77-rqhl8o` `7e5dd685` (bundle 92bd9272), on branch
`claude/bubble-wash-kingdom-continue-z9nmm1`. Full app: `index.html?s3=intunnel,structmatch,home,level1`.

## What every transition looked like before (`sheets/00_every_transition_OLD_NEW_24_moments.jpg`, top row; seed 7, 412 x 915, autopilot)
1. **The hand-off out of the Screen 4 drum (about 37-44 m, 14.2-14.45 s of the recording): she and her water VANISHED for 6 frames
   (0.3 s)** behind a full-screen painted vortex, then the course's tube appeared with a hard cut. Cause: game.js puts two planes at
   the drum's far end (its glowing heart; `exitLight`, one repainted by tunnel_s4.js as an OPAQUE 16 m vortex); without level1 the
   run loops before the camera reaches them, with level1 the camera crosses them while she is already past.
2. **The course's water was single-sided**: at the camera's grazing angle its far wave faces leaning away were culled, so the far water
   showed the pale tunnel floor through it (pale patches, thin stripes; the far water looked washed out rather than blue).
3. **The golden gate (270 m) opened onto an open-sky Bubble Kingdom: a narrow water strip on an elevated lavender slide with white rails,
   pillars and an underside, grass islands, open sky: the dry-road look.** Level Complete came on that slide.

## The change (`WebDemo/src/level1.js`, `WebDemo/src/opening3d.js`)
- **`wet`**: the drum tunnel goes on past the gate and widens (266-292 m, radius 2.55 -> 5.6 m) into one wet washer chamber: the same
  wall (lavender perforated metal over the top, cobalt water ribbons on the walls; its patterns keep the drum's scale), the silver /
  gold / violet hoops on through it every 8 m (scaled), six decorative spinning fluffy brushes at its water's edge (never in her
  lanes), bubbles, one continuous full-width water to the chamber's walls, double-sided (deep blue to the end), a bigger finish arch
  on the water, and an end wall (360 m) of lavender metal with a glowing gold portal, its lights and crown, and two waterfalls; the
  castle and islands stand in a lagoon BEYOND the portal (the sky shows only through it). No rails, pillars, slide or open sky.
  Level Complete comes at the finish (340 m) while she floats in the chamber, the castle framed by the portal ahead. The drum's
  far-end light planes now shrink away (30.5-35.5 m) before she reaches them, so she is never hidden at the hand-off.
- **`port`** (the user's board 01: "a real hollow circular porthole with the blue interior visible"): in the opening, the washer's
  inside water starts at its far end while waiting and floods in as the toss begins (it showed a flat near edge in the porthole), the
  foam a few small pale-aqua bits at the lower left instead of a white mass, the vortex's near walls a deeper cobalt.
- Gameplay code is untouched: her lanes, speed, jumps, hit tests, collectibles, hearts, power-ups, the finish trigger and the
  progress bar are the same code; the chamber is drawn only.

## Results (filled from `proofs/`; all on the frozen final build a62848a0)
- **Identity** (`proofs/identity.txt`, `scripts/identity.sh`, layer_diag.cjs canvases 768 x 1536, seed 7): **0 pixels differ in every
  check**: the accepted `?s3=intunnel` (start, 3 s), the normal game (1 s) and the candidate `?s3=intunnel,structmatch` (start, 3 s)
  against `ccr`'s build 92bd9272; `,match6` against match6's own build b5f69217 (start, 3 s: the candidate kept exactly); level1 with
  `,nowet,noport` against the previous level1 (start, 3 s: the rollback is exact); the new level1's Tap to Start against the previous.
- **The route** (`proofs/route_old_new_24_moments.md`, `frames/old_ccr_92bd9272/`, `frames/new_final/`, `sheets/00_...`): at all 24
  moments of the same autopiloted run (Tap to Start to 50 s), her place along the course, the section, the coins, the GEMS, the socks
  (6 by the end) and the hearts (5) are the same, and Level Complete comes at the same moment (341.7 m, between 46 and 48 s). (An
  earlier build of this pass collected one coin earlier and missed the gem at 18 s, found by the independent review: the chamber's extra
  objects advanced the course's private random sequence, which sets the coins' and gems' bob phases. Fixed at the root: the wet-only
  objects are made on their own sequence and the previous build's own pieces are still made and thrown away.)
- **Gameplay tests** (`proofs/`, `motion/`, `scripts/tests.sh`): the seeded motion trace (swipes and a jump) 152 frames x 17 gameplay and
  camera fields, candidate against level1: **0 differences**; `s3_func` exit 0 for both (the candidate's output identical to the `ccr`
  build's; with level1 only draw counts differ: more water triangles, 2 fewer calls at 41 m where the drum's end planes have shrunk);
  `r2_func`'s hearts test passes (5 knocks to 0, restart to "5 Full"), then its harness hangs at a same-page reload as in the old session's
  own runs; so pause / Bubble Blast / Turbo Spin were checked on a fresh page (`proofs/abilities_probe_level1.txt`): pause shows its
  panel and freezes time, runs after Resume; Bubble Blast 3 -> 2; Turbo Spin 3 -> 2 at speed 8.45; 0 errors.
- **Draw calls and triangles** (`proofs/cost_old.txt`, `proofs/cost_new.txt`, cost_probe.cjs, the same run and moments, 412 x 915):

  | moment | previous level1 | new |
  |---|---|---|
  | Tap to Start | 222 / 2.76 M | 222 / 2.82 M (finer water mesh) |
  | +3, +8, +20 s | 167, 119, 105 | the same calls (+0.06-0.08 M triangles) |
  | +30 s (217 m) | 179 / 1.88 M | 120 / 1.79 M |
  | in the chamber (+38, +42, +46 s) | 141, 117, 91 / 1.71-1.65 M (the open slide) | 154, 156, 132 / 2.34, 2.40, 2.15 M |
  (Measured on the final build a62848a0.) Every moment stays under the level's own Tap to Start peak (222 / 2.82 M); in an earlier
  measurement of this pass the highest late value was 190 calls at +32 s, as the whole chamber begins to be drawn.
  Real phone frame rates were not measured here (software rendering).
- **The opening** (`sheets/01_...`, `02_...`, `03_...`; the girl probe's numbers in `../../ccr_branch_verification_2026-11-08/`): the rigged
  girl, her blinks, the basket, the toss, the mascot through the porthole and the camera into the water are unchanged in timing and
  motion; the porthole shows the blue spiral (port).
- **The full recording**: `videos/` (see below).

## Remaining (candid)
- The opening's girl, basket and composition are the rigged Tripo girl as the old session left them (her scale and framing differ from the
  approved art: she is cut by the left edge; not changed in this pass).
- The porthole is closer to the approved art (no white foam mass, a cobalt spiral) but still paler and less luminous than its deep vortex.
- The castle is the game's own castle model; the chamber is code-built (no new Tripo assets, nothing spent).
- The independent review (gameplay-visual-testing, read-only) also noted, and these were fixed before the final build: a flat pink
  finish ribbon across the chamber (hidden; the arch stays), a hard cobalt edge of the course water at the hand-off (its first metres now
  take the drum's turquoise) and a sharper step between the deep course water and her lighter surf (lighter just ahead of her). Still
  open from it: at 22 s a flat pale-lavender band at the bottom during a soap-bar jump, and at 26 s faint far shapes (both in the previous
  build too); the lagoon seen through the portal reads pale lilac-cyan.
- The user's 10-beat gameplay mandate (functional branching side paths, a drop to a lower path, patrolling enemies) is NOT built: the
  course is one path (the soap bars are jumps on it, "the drop" is a slope on it). It is the next task.
- Real phone frame rates were not measured (software rendering here); draw calls and triangles are counted.

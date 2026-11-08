# Level 1 continuous water: `?s3=...,level1` sub-switches `wet` and `port` (8 November 2026, session `8140e507`)

The user's Level 1 mandate (8 November, with the master prompt, the acceptance checklist and five annotated boards): "once the pink
fluffy character enters the washing machine, the character remains in continuous saturated blue water throughout the full level ...
The castle must be reached through the same connected watery laundry-machine world", no dry road, no walls / ceiling / water / tunnel
disappearing or visibly disconnected; the Tripo girl, the toss, the washer entry, the controls, the collectibles and the approved Classic
Screen 4 preserved. The user gave this session `level1.js` and `opening3d.js` (`SESSION_FILE_RESERVATIONS.md`, after checking the old
session left nothing uncommitted). Both sub-switches are on by default under `level1`; **rollback: `,nowet` and `,noport`** draw the
previous level1 and opening exactly. NOT accepted by the user yet. `match6` (her silhouette) is NOT part of this: it is opt-in
(`,match6`), a candidate, by the user's order.

Build: bundle **2f5e7987** (commit `debab7e`), on top of `ccr-76d4bc77-rqhl8o` `7e5dd685` (bundle 92bd9272), on branch
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

## Results (filled from `proofs/`)
RESULTS_PLACEHOLDER

## Remaining (candid)
- The opening's girl, basket and composition are the rigged Tripo girl as the old session left them (her scale and framing differ from the
  approved art: she is cut by the left edge; not changed in this pass).
- The porthole is closer to the approved art (no white foam mass, a cobalt spiral) but still paler and less luminous than its deep vortex.
- The castle is the game's own castle model; the chamber is code-built (no new Tripo assets, nothing spent).
- One coin near 7 s is collected that was not before: the coins' bob phases come from the course's private random sequence, which the
  chamber's extra objects advance; every coin, gem and sock is in the same place and her route, hearts and socks are identical.
- Real phone frame rates were not measured (software rendering here); draw calls and triangles are counted.

# Phone preview, 5 November 2026, 14:25 UTC (work in progress, not merged)

The real game on an emulated Pixel 7 (Playwright's device profile: 412 x 915 CSS px at 2.625 DPR), `?s3=match`, seed 7,
Tap to Start and then 3.0 s of game time, with the whole phone screen and HUD (`scripts/phone_shot.cjs`):
- SAVED: the merged Round 9 build `2a6ab30`;
- Tunnel & Lighting LIVE: its worktree's build at 14:22 UTC;
- Water & VFX LIVE: its worktree's build at 14:17 UTC.

All three loaded with no console errors.

## What the phone shows that the 538 x 1076 captures do not (`scripts/phone_probe.cjs`)

- **Side margins:** the game stage is 364 x 839 CSS px at x = 24, inside the 412 px-wide screen. The page's side padding,
  `body { padding-left/right: max(16px, safe-area) }` in `index.html`, shows the dark night background in a margin about
  6% wide on each side. This is the shared page layout, the same for every version.
- **A taller view:** the stage's aspect is 0.434, against the original's 0.5. The game keeps the horizontal field and
  widens the vertical one (`game.js`, `camera.fov` for aspect < 0.5). So on a phone:
  - the tunnel sits lower;
  - more of the lavender housing shows above the rim;
  - a pale strip shows under the mission bar.

  None of it is in the original's 1:2 framing.

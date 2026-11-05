# Water & VFX, focused correction pass on `?s3=focus` (5 November 2026, ninth session)

Target: the ORIGINAL APPROVED Screen 4 only (`Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`).
Base: `71f7fa7` (Tunnel & Lighting's camera committed). Every frame: real gameplay, seed 7, 3.0 s after the tap, DPR 1.5
(`tools/screen4/liquid_shots.cjs`), measured with the Art Director's scripts unchanged (`scripts/measure.py`, which runs
`16_art_director_focus_review/scripts`' character_water, zones, streaks and bubbles on any frame). Running notes with every
try and rejected tune: `NOTES.md`.

## Commits (worktree; the lead merges them)

| commit | step |
|---|---|
| `d615259` | 1a: broken splash water round her (the 18:56 work restored, the side crests' white cap broken into pieces, white crest arcs on the swell's face) |
| `4ae6099` | 1b: the blue pillows beside her taken out (four side lumps) |
| `d903650` | 1c: fine spray (no rain dashes) and irregular broken crest arcs |
| `eacb3f4` | 2: the floor ahead as the original's pale blue-white water |
| `5dac0d8` | 3: fewer, chunkier, turned white streaks among the bands |
| `b5fb9d3` | 4: the tunnel's bubbles off its centre |

## Files

- `final/full_orig_before_final.png`: original / before (`71f7fa7`) / final, whole frame.
- `final/round_her_orig_before_final.png`, `final/round_her_zoom_orig_before_final.png`: the water round her, enlarged.
- `final/floor_ahead_orig_before_final.png`: the floor ahead, behind her, enlarged.
- `final/tunnel_orig_before_final.png`: the tunnel's rings, streaks and bubbles.
- `final/measure_final.txt`: all numbers (original, before, final). `frames/`: each step's frames and measures.
- `checks/`: pixel identity (`pixel_identity_md5.txt`), `s3_func_focus.json`, the Pixel 7 frames
  (`pixel7_lower_before_final.png`), the water reacting to a swerve, a jump and a landing (`moves_swerve_air_landing.png`).
- `scripts/`: `measure.py`, `crops.py`, `hide_diff.py`, `whitemap.py` (white pieces by size), `tbcount.py` (what
  `mwTunnelBubbles` draws, from a hide probe), `lavmap.py` (where the floor's lavender is).

## Items: verified / partly / not

| item | target (the AD's) | original | before | final | status |
|---|---|---|---|---|---|
| 1. water round her: white | 15-22%, crests, spray, glints | 27.7% | 6.0% | 16.8% | verified |
| largest white piece | none over about 2,500 px | 10,247 | 1,449 | 1,390 (a bubble's glint) | verified |
| white in pieces <= 400 px | at least half | 13% | 78% | 38% | not (the crest arcs are 400-1,400 px pieces) |
| vivid blue | 15-22% | 12.9% | 47.6% | 16.1% | verified |
| texture | >= 5.2 | 5.47 | 5.03 | 5.41 | verified |
| L* left / right | 78-82 both | 79.3 / 82.6 | 71.9 / 74.8 | 79.5 / 80.7 | verified |
| lavender | <= 5% | 16.9% | 0.2% | 0.2% | verified |
| pink width 0.02 H above her lowest point | <= 0.20 W | 0.20 | 0.27 | 0.25 | partly (tries that reached 0.18-0.21 put blobs on her fur or sank her; NOTES.md) |
| no water above y 0.82 in front of her centre | | | | her base at 0.849 | verified |
| no smooth water edge > 0.1 W across her | | | | small teeth along it; in front her visible base is where the water's surface meets her body | partly |
| no white or lavender cushion, no curtain, not sunk | the user's rule | | | blue water with broken crests, spray, glints and small bubbles; her base at 0.849 (original 0.859) | verified by eye |
| 2. floor ahead: L* | 80-84 | 83.5 | 71.8 | 79.4 | partly (0.6 short) |
| white | 20-27% as broken crests | 26.9% | 6.9% | 22.1% | verified |
| lavender | <= 5% | 3.6% | 10.7% | 10.9% | not mine: the brushes' pink hazard glow on the floor (it stays with the floor forced fully pale; NOTES.md) |
| median | near #aad7f4 | #aad7f4 | #7eb0e5 | #a7cdf2 | verified |
| 3. flying streaks | about 220, chunkier, some hooked or turned | | 560 | 220, half width 2-4 cm, bend 0.3-2.2, turned up to 35 degrees | verified |
| ring zone pieces per 10k / p90 area / along the tangent (includes the walls' flecks) | | 3.2 / 1,160 / 28% | 13.2 / 159 / 74% | 11.2 / 260 / 56% | partly |
| 4. bubbles within 0.2 W of the centre | about 10 | 10 (Hough) | my layer: 28.0% of the disc drawn | 12.3% of the disc, 2.4% within 0.12 W; about 8-10 small bubbles by eye | verified for my layer; the Hough count (116 -> 105) is mostly other layers (87 with mine hidden) |

## Checks

- **Pixel identity:** `?s3=match` at 3.0 s, `71f7fa7`'s bundle against the final bundle: canvas md5 `e52d4ea3...` both,
  page md5 `3f520851...` both (0 differing pixels); the normal game's canvas md5 `5e3c00c4...` both. Every change is gated on
  `FOCUS_ON` (settings in `FOCUS.water`; new shader pieces generated only under focus).
- **Gameplay (`S3=focus node tools/screen3/s3_func.cjs`):** swipes change lanes (1 -> 0 -> 2), swipe up jumps (air true), the
  ride into the tunnel collects 12 coins, 1 gem and 2 socks, the keyboard start works, no console errors. In the tunnel:
  136 draw calls, 1.07 M triangles (no new draw calls; fewer instances: 8 lumps, 60 bubbles and 340 streaks fewer).
- **The water reacts** (`tools/screen4/liquid_moves.cjs`): it piles up on her side in a swerve, sprays under her in the
  air, splashes round her on landing.
- **Pixel 7 (412 x 839):** the same broken, sparkling blue water round her, her base on top of it (`checks/`).

## What still differs from the original

- Round her the original's water is a mass of bubble domes with thick white outlines and lavender-blue insides (white 28%,
  87% of it in large pieces). Under the user's rule (no white or lavender cushion) ours is blue water with broken white crest
  arcs: less white, smaller pieces, no lavender.
- Her pink is 0.25 W wide just above her lowest point (original 0.20): the original's bubble domes overlap her lower sides.
- The floor ahead is 4 L* darker than the original's near-white water, and its streaks are more regular.
- The spray's round droplets are drawn 2:1 tall by the shared spray shader (`tunnel_r7_hero_water.js`, not my file); made
  fine so they read as specks.
- The centre's circle-like clutter is mostly the walls' drops and texture (Tunnel & Lighting's), not the bubbles.

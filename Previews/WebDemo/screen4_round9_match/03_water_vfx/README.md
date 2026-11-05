# Round 9, step 3: Water & VFX, `?s3=match` (5 November 2026)

- **Authority:** the ORIGINAL approved Screen 4,
  `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`. The user's precision kit
  (`Design/ReferencePacks/2026-11-05_Classic_Screen4_Precision_Kit/`, crops 03 and 06) was used for close-ups of it.
- **Material references:**
  - Reference 5, for the channel's water: the floor draws Tunnel & Lighting's map of it.
  - Reference 3, for the look of the water round the character. Nothing is copied from it: the water is procedural
    geometry and shading.
- **Frames:** real gameplay, seed 7, `tools/screen4/liquid_shots.cjs`, DPR 1.5, HUD on. The starting point is
  `f042ab5`, the Tunnel & Lighting checkpoint.
- **Measurements:**
  - the Art Director's scripts (`../01_art_director/scripts/`), output in `measured_ad_scripts.txt`;
  - `tools/screen4/liquid_shares.py`, output in `measured_liquid_shares.txt`.
  - No similarity percentage is claimed anywhere.

## Files

| file | what |
|---|---|
| `approved_vs_splash_vs_matchTL_vs_match_3.00s.png` | **The checkpoint**, all panels at portrait height 1536: ORIGINAL, splash 3.0 s, match 3.0 s before this step (Tunnel & Lighting), match 3.0 s now. |
| `approved_vs_matchTL_vs_match_{2.85,3.10}s.jpg` | The same comparison at 2.85 s and 3.1 s. |
| `match_{2.85,3.00,3.10}s_fullres.png` | The frames themselves. |
| `crop_water_round_character_approved_vs_TL_vs_now.jpg`, `crop_floor_centre_approved_vs_TL_vs_now.jpg` | Close-ups: the original, before, now. |
| `clip_match_2.4-3.6s_swerve_jump.mp4` / `.webp` | A short running clip: canvas only, no HUD, 15 fps, 2.4 to 3.6 s, with a swerve left at 3.05 s and a jump at 3.3 s. |
| `moves/` | `liquid_moves.cjs` with `S3=match`: a swerve, in the air, just landed. |
| `match_nofoam_3.00s_canvas.jpg` | `?s3=match,nofoam`: the 3D canvas, no console errors. |
| `pixel_identity_vs_f042ab5.txt` | The normal game, `splash` and `liquid` against the starting bundle. |
| `gameplay_checks_match_s3_func.json` | `S3=match tools/screen3/s3_func.cjs`. |
| `capture_info_cost.json` | Draw calls and triangles per frame at the three times. |
| `diagnostic/` | See below. |

The `diagnostic/` folder:
- the floor drawn in red (where the floor actually is);
- the swell in green and the lobes in red;
- the hide probe of the centre;
- the floor-ahead lavender pixels;
- the water bank through the iterations.

## Five verdicts at 3.0 s

Each verdict gives the approved value, then before (the Tunnel & Lighting frame), then now.

| | verdict | evidence |
|---|---|---|
| **(a) cobalt and cyan distribution** | **partly** | **Floor ahead** (y .58-.68, x .30-.75, the sock's box x > .62 left out, because the purple sock counts as lavender): lavender 1.7 / 23.8 / **9.7%**, azure 18.2 / 16.3 / **25.7%**, median #abd8f2 / #72a4f0 / **#85baf0**, white 27.1 / 7.8 / **10.5%**. In the Art Director's own box, sock included, lavender is 3.0 / 32.4 / **18.9%** (target 5% or less: not met). **Round the character, electric blue:** left of the body 29.0 / 10.2 / **22.5%**; right of the body 14.6 / 3.1 / **8.1%** (target 12% or more: not met); in the foam bank 12.2 / 0.6 / **8.9%**, saturated blue 14.0 / 5.1 / **10.8%**. The walls are unchanged (Tunnel & Lighting's): cyan 6.9%, deep cobalt 0.7%. |
| **(b) luminous swirling water detail** | **partly, visibly better on the floor** | The floor now draws the walls' Reference 5 water at the same screen place, with the same two-phase flow. The ring arcs and Reference 5's lower flowing water carry into the channel, and wall, floor and swell read as one body. There is no seam at the wall junction at 3.0 s (`crop_floor_centre_*`). Fine texture on the floor ahead (hp5): 0.086 / 0.116 / **0.104**. **The centre is unchanged:** lavender 11 / 46 / **46%**, warm 47 / 18 / **18%**. The hide probe (`diagnostic/centre_hide_probe_*`) shows the centre is drawn by **`heroWalls`** (Tunnel & Lighting), not by the floor: hiding `lqFloor` leaves the centre as it is, while hiding the walls removes the lilac swirl. The red floor frame shows the floor ends at y 0.56, under the centre. Likely cause: the drum turns, so far wall points get a screen radius worked out in their own track frame that does not match where they really appear on screen. They pick up the map's lilac mid-vortex instead of its warm core; the map itself is 74% warm for rw < 0.06. |
| **(c) tunnel housing and camera depth** | **not this step** | Unchanged: the rim, walls and camera are Tunnel & Lighting's, and the upper-wall measures are identical to theirs. |
| **(d) opaque or flat water round the character** | **mostly fixed** | **Waterline** (lowest pink, median over x .3-.7): 0.836 / 0.855 / **0.824**. It is irregular now: lobes rise to about 0.80 on the left, and the front is level with the approved. **Under the body:** violet (the fur seen through the water) 36.8 / 5.7 / **40.3%**; median #b6a2f2 / #f4b5e6 / **#b6a1f3**; bare pink 16.1 / 39.5 / **4.1%**; white 14.2 / 14.1 / **6.6%**. **Foam bank:** white 20.3 / 24.7 / **15.9%** (target 18-24%: a little under). **Right of the body:** white 30.6 / 57.5 / **32.4%**; the right coin's face is clear apart from a few droplets. **White blobs of 20 px or more beside the body:** 13 / 68 / **50** (target 30 or fewer: not met). **Texture under the body:** 0.112 / 0.096 / **0.071** (target 0.10 or more: not met, smoother than the approved). **Kept:** lower-third white **8.5%** (16.9% or less); contact strip white **9.5%** (19% or less); the water reacts to a swerve, a jump and a landing (`moves/`, the clip). |
| **(e) object positions and scale** | **not this step** | Unchanged (Tunnel & Lighting's), except that the right coin's face is now clear of spray. |

2.85 s and 3.1 s (`measured_ad_scripts.txt`):
- Under the body, violet is 41.2% at 2.85 s and 56.2% at 3.1 s.
- The waterline is 0.821 at 2.85 s and 0.818 at 3.1 s.
- Right of the body at 2.85 s: electric blue 31.2%, white 16.3%.

## What changed

**1. One continuous body of water** (`matchFloorDecl` and `matchFloorApply`, inserted into the floor of
`tunnel_r8_liquid.js`):
- Under `match`, the floor ribbon (`lqFloor`) is shaded with Tunnel & Lighting's derived map: Reference 5 graded to the
  original.
  - It uses their layout: the angle round the vanishing point and the log of the screen radius.
  - It uses their Water2 two-phase colour flow, their scrolling relief and streak maps, their glint tint and core tint,
    their lift and saturation compensation, and `mtUndisplay`.
  - Where the floor meets the walls, it is exactly the walls' colour.
- On top, there is the floor's own moving water:
  - the Round 8 liquid's wave facets, lit toward the glow and shaded away from it;
  - cobalt in the wave troughs and caustics;
  - glints toward the glow and the key light.
  - All of it fades out far away, where the map's own detail is finer.
- The map's pastel lilac is pulled toward pale blue on the floor (away from the warm core).
- Within about 2.4 m of the character, the pale cyan streams turn toward vivid electric blue, as the approved has
  beside the body.
- The Round 8 floor stays as the fallback until the textures arrive.

**2. The water round the character.** The settings are in `MATCH_WATER` and are handed to
`MATCH.splash`, `MATCH.liquid` and `MATCH.heroWater` before those files merge them.
- **The swell (`heroSwell`), reshaped:**
  - New crest heights, solved from the match camera at 3.0 s (hero probe).
  - Seven irregular lobes. The tops are at about 0.80 (left side), 0.80 (left front), 0.825 (front), 0.81 (right front)
    and 0.81 (right side), so the waterline is no longer straight.
- **The swell, reshaded** (`matchSwellGLSL`):
  - near the crest it is see-through glossy blue (opacity 0.38 in front of the body, 0.6 beside it), so the fur shows
    violet;
  - lower down it is the floor's derived water (one body), softened;
  - a glassy rim at grazing angles, and the key light's specular points;
  - a crisp white crest broken into bubbly pieces: thin in front of the body, wider beside it.
- **The bank's foam lumps (`spLumps`) became glossy translucent water lobes** (`matchLumpGLSL`):
  - fewer, larger and flatter;
  - see-through blue in front of the body and more solid blue beside it;
  - a soap-film tint at the outline;
  - crisp white rim pieces, cap pieces and bubbly flecks, and a specular point;
  - no depth write, so they stay see-through.
- **The curling sheets (`spCurls`):** six short curved splashes curling over, two in front toward the camera and two on
  each side (lower on the right). They are saturated turquoise water with a crisp white lip, instead of tall glass fins.
- **Less white spray:**
  - droplets: 900 small ones became 180 larger ones, and the right-hand ones fly lower;
  - fewer flecks on the floor;
  - fewer, bigger clusters of clear bubbles on the waterline;
  - the old spray sheets fainter;
  - the lacy apron on the floor at about half.
- The lobes, curls, droplets and swell keep their reactions to moves: they pile up on the side the character swerves to,
  slump in the air and are thrown up on landing.

**Code:**
- `WebDemo/src/tunnel_r9_match_water.js` (this step's file);
- `WebDemo/src/tunnel_r8_liquid.js`: the gated floor and swell pieces;
- `WebDemo/src/tunnel_r8_splash.js`:
  - the import (it also makes this file's settings reach `MATCH` before the merges);
  - the lumps' depth write is `!MATCH_ON`;
  - the gated lump piece.
- Every insertion is `${MATCH_ON ? piece() : ''}`. No texture or random number is created outside `match`.

## Checks

- **Pixel identity** (`pixel_identity_vs_f042ab5.txt`): the raw canvas (`game_eval.cjs` SHOT, seed 7) at Tap to Start
  and at 2.85 s is **identical** to the starting bundle for the normal game, `splash` and `liquid`: 0 differing pixels.
- **Gameplay** (`S3=match s3_func.cjs`):
  - lanes 1, then 0, then 2, and the jump;
  - in the tunnel, **12 coins and 2 socks**;
  - no console errors;
  - tunnel cost **135 draw calls, 1.079 M triangles** (before: 135 and 1.095 M).
  - The whole hero frame at 3.0 s: 208 draw calls, 1.42 M triangles (`capture_info_cost.json`).
- **Moves** (`moves/`): the swerve, the jump and the landing; no console errors.
- **`match,nofoam`:** renders, with no console errors.
- **Shader cost:** under `match`, the floor fragment computes the Round 8 liquid and then the derived map, about 7 more
  texture reads per floor pixel.
- No new render passes, no Tripo, no plugins.
- Capture runs: about 20 iterations at 3.0 s, plus 2 debug frames and 2 hide probes, plus the final, identity, gameplay,
  moves and clip runs.

## What still differs from the original

- **The foreground bank is smoother and cleaner than the approved's.**
  - The approved is denser with white bubbly sparkle and big glossy bubble lobes. Ours: white 15.9% against 20.3%;
    texture 0.071 against 0.112 under the body.
  - Ours is still a little pale: pale blue 31.6% against 26.4% in the bank, and 34% against 20.5% under the body.
  - In the game, the HUD's two buttons cover most of the lower bank, which the approved shows.
- **The floor ahead is darker and less white** than the approved's cyan-white: median #85baf0 against #abd8f2, white
  10.5% against 27.1%. 9.7% lavender remains beside the sock.
- **Right of the body, electric blue** is 8.1% against 14.6%. Too many separate white shapes remain beside the body (50
  against 13).
- **The centre** is still 46% lavender and 18% warm (approved 11% and 47%). It comes from the walls (see verdict b).
  This is for Tunnel & Lighting. A likely fix: work out the walls' screen radius from the fragment's real screen
  position, round the projected vanishing point, rather than from its track-frame position.
- **Star sparkles:** the pink four-point stars on the character in the jump frame are the game's spin effect, and the
  stars on the walls are Tunnel & Lighting's map glints. Neither is part of this step; the user dislikes generic star
  sparkles.

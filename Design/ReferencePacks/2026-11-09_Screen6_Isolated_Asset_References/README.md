# Screen 6: isolated asset references for image-to-3D (session ddf175f2, 9 November 2026)

Cut from the EXACT approved Screen 6 (`Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/06_Swim_Collect_Avoid_Enemies.png`)
by `WebDemo/tools/env6/isolate_refs.py` (OpenCV GrabCut with hand-placed hints; the lamp and pipe keyed by their brass colour). Each asset is
alone on a plain light background: no water, coins, enemies, mascot, bubbles or interface. Upscaled 2.5x. `*_alpha.png` = the same cut with
transparency; `*_rawcrop.png` = the untouched crop of the approved image; `00_refs_sheet.png` = all five, raw above, isolated below.
The roller brush is cut off by the approved frame's left edge, so its visible half is MIRRORED about its axis (the brush is round).

## Short asset inventory (what already exists vs what the approved Screen 6 needs)
| Approved element | Existing model (user's Tripo uploads unless noted) | Verdict | Generation needed? |
|---|---|---|---|
| Large cobalt gear, upper right | `BubbleWash_Tripo_blue_jt_tiny` (LODs in `mobile/`, in game under `arch56`) | close match | **No** |
| Gold elbow pipes | `BubbleWash_Tripo_gold_jj_tiny` | good match | **No** (reuse for every pipe run) |
| Pink housing with gold paw medallion, chamber, pipe | `BubbleWash_Tripo_911_tiny`, `912_tiny` | right parts, too violet: colour shift in code | **No** |
| Glass chamber in gold frame | `913 914` | good, needs a glowing core | **No** |
| Violet machinery cluster | `BubbleWash_Tripo_Machinery_tiny` | secondary | No |
| **Roller brush machine** (gold top drum, pink bell with gold stars, gold band, 4 bristle tiers) | none (Meshy WashingRoller = wrong band order; brush_p2 = a ball) | missing (procedural in lane brush6) | **YES: 01** |
| **Tall glowing glass tank** (gold cap with rings, bright pink-white core, gold base) | 913_914 has a pipe frame, not this silhouette | missing | **YES: 02** |
| **Pink star drum housing** (two gold stars, gold rail on top) | none (procedural `moduleStar`) | missing | **YES: 03** |
| **Lavender control box** (screen with glowing bulbs, panel with yellow / teal lights) | Machinery_tiny is flat violet, no lit screen | missing | optional: 04 |
| **Overhead brass lamp + gold pipe** | gold_jj pipe exists; the lamp does not | missing (lamp) | optional: 05 |

Tripo cost (free dry run, 9 November 18:45 UTC): **120 credits per model** (image-to-model, P2, detailed PBR texture). 01-03 = 360 credits;
all five = 600. Last recorded balance 1,060. Nothing is generated without the user's approval; this environment has no Tripo key saved yet
(the API answers 401), so the key must be added (secure form, network secret for `openapi.tripo3d.ai`) before Claude can run a job.

## Ready-to-paste generation prompts (Tripo or Ludo.ai: image-to-3D with the PNG, plus this text where a prompt is accepted)
Common to all: *stylized glossy cartoon mobile-game prop, Bubble Wash Kingdom laundry-machine world, hot pink #E8459F and polished gold
#FFC24A, smooth clean surfaces, game-ready, single object, centered, no background, no characters, no text.*

1. `01_roller_brush_machine.png`: "A tall vertical rotating car-wash style laundry roller brush machine. Top: a short polished gold cylinder
   cap with rivets. Below it a glossy hot-pink dome bell with small gold four-point star studs, then a thick gold rim band. Hanging below,
   four separate flared skirts of dense soft bristles stacked like tiers: hot pink on top, then white-lavender, then royal blue, then pale
   sky blue at the bottom; each tier wider than the one above, bristle tips fluffy and slightly ragged. Radially symmetric, about 1:2.2
   width to height."
2. `02_glowing_glass_tank.png`: "A tall cylindrical glass tank filled with glowing violet-magenta liquid and a bright pink-white light at
   its core, small bubbles inside. Thick polished gold cap on top with two raised rings and rivets, a gold elbow pipe connector on the cap,
   a gold riveted base ring. Translucent glass, emissive glow."
3. `03_pink_star_drum_housing.png`: "A short wide glossy hot-pink cylindrical drum housing with a lavender-silver riveted top rim, two big
   puffy yellow-gold five-point stars on its front, and a small polished gold railing on top. Cartoon machine part."
4. `04_control_box_glowing_screen.png`: "A small lavender-purple metal control box with rounded corners: an upper screen with a row of
   glowing white-blue lights and two big glowing white-violet round bulbs like eyes, and a lower panel with two round glowing lights,
   one turquoise and one yellow. Gold rivets."
5. `05_overhead_brass_lamp_and_pipe.png`: "A ceiling-mounted polished brass industrial lamp with a hot glowing white-gold bulb under a
   ribbed brass shade, connected to a thick curved brass pipe with banded riveted joints that bends away and down. Steampunk-cartoon."

## How the generated models go into the game (after approval)
`Tools/tripo_job.sh <name> make <png> -p texture_quality=detailed -p pbr=true -o Design/TripoDeliveries/<folder>/` (free dry run first,
one lead session, logged in `Design/TripoDeliveries/TRIPO_JOBS_LOG.md`), then mobile LODs with gltfpack `-si` (as `mobile/optimize_mobile.sh`;
gltf-transform `simplify` smears Tripo textures at UV seams), Khronos validation, then placed in `s56_arch.js` / `s56_brush6.js` behind the
Screen 6 candidate switches and judged against the approved image at u 206.

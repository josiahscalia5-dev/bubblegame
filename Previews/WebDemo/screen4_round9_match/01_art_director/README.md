# Round 9 art match, step 1: the Art Director's five largest mismatches (5 November 2026)

- **Authority:** the ORIGINAL approved Screen 4 only,
  `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg` (767 x 1536).
- **Game frames:** `?s3=splash` (Round 8 pass 2), real gameplay, seed 7, 807 x 1602, HUD on:
  `Previews/WebDemo/screen4_round8_splash/splash_{2.85,3.00,3.10}s_fullres.png`.
- **Main comparison: 3.0 s,** the user's primary checkpoint. Every target below is for 3.0 s.
- **Method:**
  - Both images were resized to 538 x 1076 and sorted into the Art Director's HSV classes (`hero_shares.py`).
  - All positions are fractions of the frame (x/W, y/H). "W" sizes are fractions of the width.
  - Scripts: `scripts/`. Raw output: `measured_all.txt`. World points: `probe_3.0s/` (`hero_probe.cjs` with
    `PICKS`, current camera).
  - Positions marked "read" were read off gridded zoom crops (`scripts/zoomgrid.py`); the others are computed.
  - No similarity percentage is claimed anywhere.
- **Images:**
  - `approved_vs_3.00s_annotated.png`: the full-resolution side by side, with the five mismatches boxed and numbered.
    Dashed lines mark the approved levels.
  - `crops_approved_vs_3.00s.jpg`: crops of the rim, the walls and core, the floor, the water round the hero, and
    the sock with the right coin.

## Which time matches

**The composition itself is closest at 2.85 s:**
- the rim top is at 0.225 (approved 0.215-0.228);
- the mouth top is at 0.29 (approved 0.29);
- the left brush frames the shot.

**At 3.0 s the camera is 0.95 m further along the path.** The probe puts the camera at track u -5.85 at 2.85 s and
-4.90 at 3.0 s. Everything the hero scene stages before the drum's mouth (rim, collar, brushes, bubbles, coins,
sock) is therefore about 25% closer and looks too big and too high. 3.1 s goes further the same way: the rim is off
screen, the left brush is gone, and the sock is 0.29 W wide.

| composition | approved | **3.0 s** | 2.85 s | 3.1 s |
|---|---|---|---|---|
| vanishing point (x, y) (`vp2.py`) | 0.528, 0.532 | **0.540, 0.512** | 0.526, 0.506 | 0.555, 0.500 |
| mouth top: where the blue starts at x 0.53 (profile) | 0.29 | **0.245** | 0.29 | 0.20 |
| mouth top above the vanishing point | 0.242 H | **0.267 H (+10%)** | 0.216 H (-11%) | 0.30 H |
| rim top at the centre | 0.215-0.228 | **about 0.155, under the HUD** | 0.225 | off screen |
| pink body: x range / top / waterline (`char.py`) | 0.212-0.732 / 0.694 / 0.836 | 0.238-0.768 / 0.680 / 0.830 | 0.242-0.766 / 0.682 / 0.830 | 0.245-0.762 / 0.662 / 0.824 |

The character is already right in size and place. Keep it.

## The five mismatches (one per area, in the user's order; sub-points biggest first)

### 1. Tunnel shape, depth and camera: the drum is framed about 1 m too close, and it reads shallow

**What is wrong:** at 3.0 s the mouth is 10% too large and 0.02 H too high, the rim has slid under the HUD, and the
tunnel shows only 5-7 broad ring bands where the approved shows 7-10 narrower ones. It reads as a short pipe, not a
deep funnel.

| measure (`rings.py`, upper / left / right sector) | approved | 3.0 s |
|---|---|---|
| bright ring bands, r 0.03 W to the mouth | 8 / 10 / 7 | 5 / 7 / 6 |
| mean spacing between bands, in ln r | 0.35 / 0.20 / 0.22 | 0.43 / 0.34 / 0.43 |
| vanishing point y | 0.532 | 0.512 |
| mouth radius (the top above the vanishing point) | 0.48 W | 0.53 W |

**Target at 3.0 s:**
- **Vanishing point** at (0.53 ±0.01, 0.53 ±0.01).
  - Pitch the hero camera up about 1.2-1.5 degrees (raise the look target). At 72 degrees of vertical field of view,
    1 degree is about 0.012 H.
  - The pitch moves the character down about 0.015 H, to a top of about 0.695 and a waterline of about 0.845. The
    approved has 0.694 and 0.836, so that is acceptable.
- **Mouth top** at y 0.29 ±0.01 at x 0.52, which is 0.24 H above the vanishing point.
  - After the pitch, the tube's own mouth lands at about 0.26.
  - Close the last 0.03 H with the inner violet bevel and navy lip from area 5, which narrows the visible opening at
    the top. The tube and the route stay as they are.
- **Hero staging +0.95 m along the path** (rim, collar and face, the two framing brushes, the hero bubbles, the
  hero-placed collectibles), so that 3.0 s frames what 2.85 s frames now. World-space points are in the table under
  area 4.
- **Depth:** 8-10 bright bands per sector. That means `HERO.vortex.perLog` 3.0 -> about 4.5 (ln spacing about 0.22),
  with band widths jittered ±35%.

**Owner:** Tunnel & Lighting (`tunnel_r9_match.js` -> `MATCH.hero`: `camera`, `rim.u`, `r7.deco`, `bubbles`,
`layout`, `vortex.perLog`).

**Gameplay risk:**
- The camera is visual only, but a new pitch applies to the whole hero run. Recheck 3.3 s and 4.2 s (the way in and
  the drum interior), and check that all three lanes stay readable.
- For the moves of collectibles, see area 4.

### 2. The swirling wall and floor water: a blue pipe with white caps, not glossy swirling water

**What is wrong:**
- The walls are regular, high-contrast blue and white bands. The approved's cyan and turquoise streak reflections,
  its pastel rainbow glints and its warm core are almost missing.
- The floor ahead of the hero reflects lavender and pink instead of cyan-white.

| region (`walls.py`; objects masked out) | approved | 3.0 s |
|---|---|---|
| **upper wall** (r .12-.45 W, 30-150 degrees): azure, i.e. cyan and turquoise | **13.3%** | **2.2%** |
| upper wall: white + pale blue | 20.0% | 35.6% |
| upper wall: warm or pastel tints (pink, peach, mint) | 6.4% warm, 11.1% other | 0.0% warm, 0.8% other |
| upper wall: electric blue / deep cobalt | 43.0% / 3.9% | 47.7% / 5.4% |
| upper wall: mean saturation | 0.58 | 0.51 |
| colour of the wall glints (`palette.py`, brightest 2%) | tinted `#cae0ff` | pure white `#f0eefb` |
| azure body / bright azure | `#2fb2f5` / `#77d8ff` | `#55bbf6` / `#79caf9` |
| **ring regularity**: brightness step between bands | 0.17-0.20 | **0.25-0.35** |
| brightness variation along one ring (how broken and swirled it is) | 0.12-0.17 | 0.08-0.14 |
| spread of band spacing (coefficient of variation) | 0.54-0.66 | 0.31 (left) to 0.59 |
| mid vortex (r .08-.20): azure / lavender | 9.0% / 12.1% | 1.8% / 15.3% |
| **centre** (r < .06): warm / lavender / white | **47% / 11% / 37%** | **11% / 46% / 18%** |
| centre median colour | `#f1d7db` (warm white) | `#dcc4f8` (lavender) |
| **floor ahead** (y .58-.68, x .30-.75): lavender | **3.0%** | **30.5%** |
| floor ahead: azure / pale blue / white | 15.9 / 28.7 / 30.5% | 2.9 / 19.2 / 16.9% |
| floor ahead median colour | `#aed7f3` | `#97a9f2` |

**In words:**
- **Rings:** today's rings are evenly spaced and about 1.5 times as contrasty as the approved's, and smoother along
  their length. That is the "neon ring" look. The approved's bands vary in width and colour (blue, cyan, pastel
  peach, pink and mint), and are broken by streaks and droplets.
- **Floor:** the approved floor continues the curved ring arcs, with cyan-white glints. Ours is flat horizontal
  streaks with a lavender and pink reflection band.

**Target at 3.0 s:**
- **Upper wall:**
  - azure at least 10%, as irregular cyan streaks and reflections running along the swirl, body `#2fb2f5`,
    highlights `#77d8ff`;
  - white at most 10% and pale blue at most 13%;
  - warm and pastel tints 5-10%, as broken glints on 2-3 of the bands;
  - mean saturation at least 0.56;
  - glints tinted `#cae0ff`, not pure white.
- **Rings:** brightness step between bands 0.17-0.22, variation along a ring at least 0.12, spacing spread at least
  0.5 on every side.
- **Mid vortex:** azure at least 7%, lavender at most 12%.
- **Centre** (r < .06): warm at least 35% (peach-gold `#f1d7db` to `#ffec87`), lavender at most 15%. The small warm
  glow stays at the centre.
- **Floor ahead:**
  - lavender at most 5%, azure at least 12%, white 25-30% as broken glints;
  - median close to `#aed7f3`;
  - the ring arcs carried onto the floor.

**Owners:**
- Tunnel & Lighting: walls, rings, centre and glow (the wall shading in `tunnel_r8_liquid.js` / `tunnel_r7_hero.js`,
  set through `tunnel_r9_match.js`).
- Water & VFX: the floor material and its glow reflection (`lqFloor`, through `tunnel_r9_match_water.js`).

**Gameplay risk:** none. This is shading only, with no extra render pass.

**Keep:**
- the Round 8 blue: upper-wall electric blue 43-48% and deep cobalt 4-6% (approved 43% / 4%). Do not lighten the
  wall to get the cyan; replace white and pale blue with cyan instead;
- no bloom, haze or pale wash.

### 3. The water round the hero: a smooth pale swell with white mist, not glossy bubbly surf

**What is wrong:** at 3.0 s the body sits on a smooth, pale-lilac glassy swell with a clean wavy top edge, flanked by
soft white mist and hundreds of tiny flecks. The approved sinks the lower body into a sculpted bank of glossy bubble
crests, with saturated blue between them and the pink fur glowing violet through the water.

**Which of the user's failure looks the 3.0 s frame shows:**
- **Smooth, plastic-looking water mound: YES.** This is the main one: the swell under and round the body.
- **Opaque white blanket: PARTLY.** Right of the body and in the lower corners: soft, low-texture white with little
  blue between.
- **Flat blue floor: PARTLY.** The floor ahead is flat streaks tinted lavender (area 2).
- **Solid V-shaped collar: NO.** The waterline is level at 0.823-0.840 (`wl.py`), as the approved's is (0.81-0.86,
  tilting down to the right).
- Large irregular glossy waves at the sides and front: absent. Pink fur visible through the water: weak.

| region (`bank.py`, `contact.py`; HUD buttons masked out) | approved | 3.0 s |
|---|---|---|
| foam bank (y .80-.875, all x): white | 20.3% | **35.8%** |
| foam bank: saturated blue (hue 180-240, saturation at least 0.45) / electric blue | 14.0% / 12.2% | **5.0% / 2.9%** |
| foam bank: mean saturation / bright highlights (value > .95, saturation < .15) | 0.40 / 18.6% | 0.27 / 34.8% |
| foam bank: mid-scale texture (high-pass 5 px) | 0.095 | 0.074 |
| under the body (x .33-.67, y .835-.875): violet, the fur seen through water | **36.8%** | **15.1%** |
| under the body: texture / mean saturation / median colour | 0.112 / 0.40 / `#b6a2f2` | 0.077 / 0.27 / `#dcbef3` |
| right of the body (x > .74, y .70-.835): white / electric blue | 30.6% / 14.6% | **51.7%** / 1.7% |
| band y .70-.835: white blobs at least 20 px / all white blobs | 13 / 23 | 55 / 260 |

**Target at 3.0 s:**
- **Under the body:**
  - break the swell's smooth sheet into 3-5 rounded, glossy crest lobes that rise up the sides of the body to
    0.80-0.82, higher on the left, as approved;
  - each lobe gets a white rim and specular point, with a see-through blue or violet body;
  - violet at least 30%, texture at least 0.10, saturation at least 0.37, white at most 15%.
- **Foam bank:**
  - white 18-24%, saturated blue at least 12% and electric blue at least 10% showing between the crests;
  - saturation at least 0.36, highlights at most 22%, texture at least 0.09.
- **Right of the body:** white at most 32%, electric blue at least 12%. The right-hand bank must not hide the right
  coin's face (area 4).
- **Flecks:** fewer and larger white shapes (at most 30 blobs of 20 px or more, and at most 60 in all, in the band),
  plus round droplets and 2-3 clear soap bubbles (the approved's lower-left bubble: x 0.00-0.14, y 0.71-0.78).

**Owner:** Water & VFX (`tunnel_r9_match_water.js`: the swell, `spLumps`, `spCurls`, `heroSplash`).

**Gameplay risk:** none, as long as it stays visual only. It must still react to a swerve, a jump and a landing.

**Keep:**
- the splash pass's blue-first balance: lower-third white at most 16.9% (`liquid_shares.py`), contact-strip white at
  most 19%;
- the waterline at 0.83-0.84;
- the turquoise water left of the body (azure 23% there now).

### 4. Coins, gem, socks, bubbles and brushes: too big, cut by the edges, and crowding the centre

**What is wrong:** at 3.0 s the sock and the left coins are 1.5-1.8 times the approved size and cut by the frame
edge. The right coin is hidden behind the spray, and three coins, a sock and a gem pile onto the vanishing point. The
left brush has left the frame, while the right one is 2.5 times too big.

| object | approved box (x0-x1, y0-y1) | 3.0 s box | target at 3.0 s |
|---|---|---|---|
| big right sock (read) | 0.648-0.838, 0.555-0.665 (0.19 W x 0.11 H) | 0.651-0.930, 0.560-0.736 (0.28 x 0.18) | the approved box: about 0.66 times the size, centre (0.743, 0.61) |
| big left coin | 0.085-0.301, 0.544-0.660 (0.216 W) | 0.005-0.21 cut by the edge, 0.545-0.73 (0.185 H) | the approved box, centre (0.193, 0.602) |
| upper-left coin | 0.087-0.213, 0.441-0.499 (0.125 W) | 0.02-0.225, 0.478-0.575 (0.205 W) | 0.125 W; y as high as can still be reached (about 0.50, see the risks) |
| centre coin | 0.468-0.571, 0.529-0.579 (0.103 W) | 0.455-0.58, 0.535-0.597 (0.125 W), plus 2 coins, a sock and a gem behind it | 0.103 W, and nothing else within 0.08 W of the vanishing point |
| big right coin | 0.778-0.996, 0.671-0.800 (0.218 W), face fully visible | 0.78-1.0, 0.70-0.83, behind spray | the approved box, face clear, a few droplets only |
| gem | 0.271-0.374, 0.489-0.529 (0.103 W) | 0.223-0.340, 0.491-0.543 (0.116 W) | 0.103 W, centre x 0.32 |
| left brush (`brush.py`) | x 0.01-0.20, y 0.233-0.415 (2.0% of the frame) | 0.01-0.08, 0.15-0.34 (0.8%) | the approved box |
| right brush | 0.786-0.99, 0.393-0.611 (1.6%) | 0.796-0.99, 0.334-0.687 (4.1%) | the approved box, not hiding the vortex |
| big bubble (read) | 0.65-0.86, 0.285-0.36 (0.21 W) | 0.66-0.90, 0.215-0.335, plus a ghost dome with a flat cut edge (0.70-0.95, 0.205-0.32) | the approved box; remove the clipped ghost |
| small bubbles (read) | 2-3 over the centre; the rest round the rings and periphery | 12-15 in a column over the centre (x .33-.62, y .33-.60) | at most 3 within 0.12 W of the vanishing point |

**Coin material** (`coinlook.py`): the approved coins are shinier and more dimensional.

| | approved | 3.0 s |
|---|---|---|
| hue | 46 | 39-41 |
| brightness range | 0.34-0.42 | 0.18-0.21 |
| highlight | lemon `#fff188` | `#fcca84` |
| shade | `#d67c02` | `#d19300` |

Target: hue about 46 (yellow gold), brightness range at least 0.35, highlights `#fff188` to `#fff78f`, shade
`#d67c02`, and a luminous embossed paw.

**World-space targets** (`probe_3.0s/`, the current camera; the track frame u is metres from the drum's mouth, x
toward screen-left, h above the water; `layout` metres = u + 3.9). Re-run `PICKS` after any camera change.

| object | now | target |
|---|---|---|
| rim (`HERO.rim.u`) | u -2.1 | about -1.1, same radius |
| sock (`firstSock`) | u -1.65, x -0.68, h 0.97 | u -0.70, same lane and height, visual scale x0.85 |
| right coin | u -2.4, x -0.90, h 0.45 | u -1.7, x -0.87, h 0.51 |
| big left coin | u -1.95, x 0.98, h 1.02 | u -1.15, x 0.88, h 1.05 |
| centre coin | u 3.4, x 0.13, h 0.99 | already in place; scale only |
| gem (`extraGem`) | x 1.23 | x 1.03; keep h 1.45 |
| far coins, far sock, far gem | 3 middle-lane coins at layout 12-14 m, a sock at u 8.2, a gem at u 10.7 | outside 0.08 W of the vanishing point at 3.0 s: further along or off-centre, same counts |
| left brush (`r7.deco[0]`) | layout 1.15 m | about 2.1 m |
| right brush (`r7.deco[1]`) | layout 2.6 m, scale 1.05 | about 3.55 m, scale about 0.8 |
| big bubble (`bubbles[0]`) | u -1.75 | about -0.8 |
| coin size (`coinScale`) | 1.3 | about 1.0-1.05 (visual only) |

**Owner:** Tunnel & Lighting (`MATCH.hero.layout`, `coinScale`, `r7.deco`, `bubbles`, and the sock's visual scale).

**Gameplay risk:**
- Coins, socks and the gem are real pickups on lanes. Moving them +0.7 to +0.95 m along the path makes each pickup
  about 0.1 s later. The lanes must stay the same, or stay fractional and within reach.
- `s3_func.cjs` must still report 12 coins and 2 socks.
- **The upper-left coin cannot go higher.** The jump's top is about 1.55 m (base 0.42 plus 6.2² / (2 x 17), from
  `world.js`), and reaching the approved y 0.47 would need h 1.84-1.89. Keep h at most 1.5 and accept y about
  0.50-0.52.
- Visual scale must not change pickup radii (`coinScale` is visual only, per its comment).
- After the moves, check that the right brush (radius 1.98) does not cut the shortened collar, and that no bubble
  crosses the collar, the face or the camera's near plane.

### 5. The gold-and-lavender washer rim: hidden under the HUD, thin, with a flat pale collar

**What is wrong:** at 3.0 s the rim is a thin orange band at y 0.155-0.20, visible only beyond the HUD at the far
left and right, with a 0.07 H flat pale-lavender collar below it. The approved shows a thick, bevelled gold and mauve
rim right across the frame at 0.215-0.28, then a saturated violet bevel and a navy ring, with the blue directly
beneath.

| measure (`rim.py`, `frame.py`, `prof.py` column at x 0.53) | approved | 3.0 s |
|---|---|---|
| rim band: top centre / at x 0.85 / at x 0.95 | 0.215-0.245 / 0.237-0.270 / 0.263-0.282 | about 0.15 (hidden) / 0.164-0.178 / 0.177-0.197 |
| rim thickness | 0.03 H (top) to 0.04 H (right) | 0.015-0.02 H |
| gold colour | `#eea98b`, gold only on the upper right and upper left, mauve across the top | `#d49f71` all round, maroon underside |
| visible warm rim pixels | 1.12% of the frame | 0.50% |
| band inside the rim | violet bevel `#6e62d3` (hue 246, saturation .53, value .83), 0.245-0.28, with a lilac line `#868af6` at 0.28, then a navy ring at 0.29-0.30 | flat lavender `#9f95e6` (saturation .35, value .90), 0.175-0.245 |
| flat, untextured lavender: top band / whole frame | 18.6% / 3.9% | **52.0% / 14.4%** |
| all lavender, y .17-.835 | 19.4% | 28.7% |

**Target at 3.0 s:**
- **Rim position:**
  - outer edge at y 0.213 at x 0.5; band 0.215-0.245 at the top;
  - 0.22-0.26 at x 0.75 and 0.237-0.27 at x 0.85;
  - it leaves the right edge at y 0.26-0.30 and the left at about x 0.10, y 0.27, behind the left brush;
  - on screen a circle of about 0.61 W round the vanishing point. Today it is about 0.70 W, too big.
- **Rim look:**
  - gold `#eea98b` with highlights `#f6d0a0` to `#fff0c8` on the upper right (x 0.70-0.95);
  - mauve-lavender `#b7a8de` across the top centre;
  - no maroon underside.
- **Inside the rim:** replace the flat collar with a violet bevel `#6e62d3`, 0.035 H, a lilac highlight line, and a
  navy ring `#0e58d0` of 0.01 H. Blue from 0.29-0.30.
- **Lavender:** flat lavender at most 6% of the frame, all lavender at most 21%. The housing above the rim is
  lavender-grey, `#a190c0` to `#7e74b8`.

**Owner:** Tunnel & Lighting (`MATCH.hero.rim`, `porthole`, `collar`).

**Gameplay risk:** none, it is decorative. Moving the rim and face to u about -1.1 shortens the collar; see the
brush and bubble checks under area 4.

## What must be kept (do not regress)

- **The Round 8 blue water:**
  - the upper wall's electric blue (43-48%) and deep cobalt (4-6%);
  - the turquoise floor and side water;
  - no white blanket, bloom or haze as a substitute.
- **The splash pass's blue-first balance:** lower-third white at most 16.9%, contact strip at most 19%, and splashes
  that react to moves.
- **The character's size and place** (body 0.52-0.53 W, centre x about 0.49, top 0.68-0.70, waterline 0.83-0.84) and
  the gem's place.
- **The fluffy shell-fur brushes,** the HUD, and all gameplay: lanes, jump, spin, pickups, hearts, pause, Bubble
  Blast, Turbo Spin, the sock mission.
- **New work goes in `?s3=match` only;** `splash` and everything older stay pixel-identical.

## Brief: how 2.85 s and 3.1 s differ

- **2.85 s:**
  - the rim and the mouth sit at the approved heights;
  - the right coin is visible but 0.28 W (1.28 times the approved);
  - the sock is 1.27 times too tall;
  - more fur shows through the water (violet 30% under the body);
  - the wall's cyan is still only 2.7%, and the centre is still lavender.
- **3.1 s:**
  - the rim is off screen and the collar fills the top (42% lavender);
  - the left brush is gone, the left coin is cut (x 0-0.17), and the sock is 0.29 W;
  - the mouth's top is at about 0.20.

# Round 8: real animated water for the Screen 4 hero scene (`?s3=liquid`), 5 November 2026

**Authority:** the user's ORIGINAL APPROVED Screen 4,
`Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`. The two water-look
references sent with this request (`Design/ReferencePacks/2026-11-05_Water_Look_References/`) guided the water only.

- **Open it:** `WebDemo/index.html?s3=liquid` (everything `hero` does, plus the new water) and
  `WebDemo/index.html?s3=liquid,nofoam` (the same with the foam layer off: no white crest caps, flecks, foam streaks,
  splash strokes or splash particles, only the liquid). Hero moment: **2.85 s** after the tap, as in `?s3=hero`.
- **Code:** `WebDemo/src/tunnel_r8_liquid.js` (new). Hooks elsewhere, each inert without `liquid`:
  - `screen3_models.js`, `tunnel_r6.js`, `tunnel_r7_hero.js`: `|| LIST.includes('liquid')` on the hero switch;
  - `tunnel_r7_hero.js`: one `buildLiquid(...)` call at the end of `buildHero`.
- **Checkpoint:** `f1fb2fc` ("Round 8 liquid checkpoint 1", the direction the user called a real improvement); this
  commit is the finished pass on top of it.

## Why a custom ShaderMaterial, not three.js Water or Water2

three.js r170's own water objects were checked (`examples/jsm/objects/Water.js`, `Water2.js`):

- `Water.js` renders the whole scene again from a mirrored camera into a 512 render target every frame.
- `Water2.js` adds a Reflector and a Refractor: two more scene renders a frame.
- Both need a flat plane. This water curves (it climbs, banks and turns with the drum) and here it also lines the tube's
  walls, so a planar mirror cannot reflect it, and the extra passes are too heavy for phones.

So the water is one custom `ShaderMaterial` model with an **analytic environment** (no extra render pass). From Water2
it borrows the **flow-map method** (`Water2.js`, the `flowMapOffset0/1` and `halfCycle` code): two normal-map samples
whose offsets along the flow run half a cycle apart, crossfaded by `abs(halfCycle - offset0) / halfCycle`. That gives
continuous flow with no stretching, at no render cost.

## What was built

One liquid model (`lqShade`) shades every water surface the camera sees, so floor, walls, collar and the water round
the character read as ONE body of water:

1. **Wave texture:** a tileable 256 x 256 RGBA `DataTexture` generated once at load (private random numbers): wave
   normal (RG), wave height with ridged crests, the "wave facets" (B), a caustic web (A). Two layers at two scales
   (1.5 x 0.9 m and 0.5 x 0.34 m), each sampled twice for the flow map, scroll toward the rider with a swirl.
2. **Colour by depth:** cobalt (`#1747cc`, `#0b36b0`) in wave troughs, ring troughs and far away; the azure body
   (`#2e95f1`) on the walls; saturated turquoise (`#14b4f2`, `#1ec8f5`) on the floor; lit-through cyan
   (`#5ec7f9`, `#79eefc`) on crests and thin water. Facets turned toward the light ahead are lit, the others shaded.
3. **Reflections and highlights:**
   - fresnel reflection of an analytic environment: a small warm white-gold centre, cyan and electric-blue rings, cobalt
     walls, the lavender washer behind;
   - true-white sun-glint specular from the glowing centre (it draws a broken glint path down the floor toward the
     core), a key light's glints, twinkling pinpoints on ripple crests;
   - moving cyan caustic light on the walls, strongest near the waterline.
4. **The floor** (`lqFloor`): a ribbon mesh along the track frame (`TR.frame`), from 12 m before the drum's mouth to
   6 m past the drum's end, 3 m wide each side before the mouth and 1.5 m in the drum (it runs on under the walls).
   - It sits on the game's own water height (crown, hills, the drum's swells and waves), with the slide's spill raised
     to one pool in front of the washer.
   - The water the character moves: a V wake that swings out as it swerves (`mascot.x`, `mascot.xv`), a ring pushed
     out round it, rings thrown out on landing (`mascot.air`), and the game's own splash rings (`uRipples`).
   - The brushes' pink lane warnings (a gameplay cue of the drum's water) are kept, softer, as a glow under the water.
     The hero scene's whirlpool floor had painted over them.
   - It fades in over the slide's water from 13 to 9 m before the mouth. Once in, the drum's old sheet is not drawn and
     the slide's sheet discards under it (no double shading).
5. **The walls** (`heroWalls`) and the collar's water: the hero scene's concentric screen-space ring layout (the
   approved composition) is kept, but each ring is a band of moving water.
   - Each band has a crest and a trough that tilt its normal, so it catches the light like a wave.
   - Two spiral arms turn round the tube; the waves flow round and along it.
   - Cobalt troughs and cyan-lit crests; fresnel, glints and caustics as above.
   - Floor and walls meet as one liquid: the floor's normal turns toward the wall's near the waterline, and both use
     the same ring phase and colours there.
6. **The character's contact** (`heroSwell`): its geometry is reused with a new crest line, shaded with the SAME
   model.
   - Crest heights were solved from the hero camera at 2.85 s, so the waterline is LEVEL across the body at 0.822 of
     the height (0.836 at the edges). This is the Art Director's measure of the approved waterline; the hero scene had a
     V shape.
   - The water is translucent in a thin band below the crest, so the pink fur shows through VIOLET, as in the
     approved close-up. It is solid deeper down, and its foot fades into the floor.
7. **Coins, socks and the gem in the water:** the six collectibles nearest ahead are passed each frame as a uniform
   array. Each gives a warm gold reflection streak in the water under it (lilac-white for the socks and the gem),
   broken by the ripples, and glints on the ripples round it.
8. **Foam: a separate layer, compiled out by `nofoam`.** Everything in it is semi-transparent, with the blue showing
   between.
   - Round the character:
     - broken, lacy white crests along the waterline;
     - translucent spray sheets either side (`lqSpraySheets`), streaked and breaking into droplets at the top, leaning
       outward, the biggest just right of the body. They pile up on the side the character swerves to, are thrown up on
       landing and shrink in the air;
     - clusters of clear soap bubbles on the waterline (`lqWaterlineBubbles`);
     - `heroSplash`'s droplets, now translucent.
   - On the floor: thin broken white crests, sparse flecks, streaks along the wake, lace where the floor meets the walls.
   - On the walls: white splash STROKES as broken accents along the spirals, with droplets thrown off them
     (reference 2).
   - With `nofoam`, the spray sheets and waterline bubbles are not built. `heroSplash`, round5's droplets and the game's
     spray particles are hidden while the liquid is up.
9. **Grade:** under `liquid` only, the hero grade's vignette colour is a cobalt (`#2a5fe0`) instead of `#5a6fd8`, which
   pulled light cyan toward lavender round the edges. The bright centre is a little smaller and warmer (peach-gold).
   Bloom, haze and exposure are unchanged; nothing is brightened to compensate.

All colours are sRGB hex converted with `THREE.Color` (linear light), as in the hero scene. Only private random numbers
are used; the game's seeded `Math.random` sequence is untouched (same mascot path and state as `hero`; see below).

## Evidence (all real gameplay, seed 7, the 538 x 1076 game area at 1.5x, HUD on)

| file | what |
|---|---|
| `approved_vs_liquid_nofoam_vs_liquid_2.85s.jpg`, `_3.00s.jpg`, `_3.10s.jpg` | the approved Screen 4, `liquid,nofoam`, `liquid`, full resolution |
| `approved_vs_hero_before_vs_liquid_2.85s.jpg` | approved, the hero scene before (06b9805), `liquid,nofoam`, `liquid` |
| `liquid_nofoam_{2.85,3.00,3.10}s_fullres.png`, `liquid_{2.85,3.00,3.10}s_fullres.png` | the frames themselves (807 x 1602) |
| `measured_liquid_shares.txt`, `measured_art_director_regions.txt` | the raw measurements below |
| `pixel_identity_vs_06b9805.txt` | the pixel-identity proof (below) |
| `moves_swerve_left_2.85s.png`, `moves_in_the_air_3.32s.png`, `moves_just_landed_3.72s.png`, `moves_state.json` | the water reacting to a swerve, a jump and a landing |

Captured with `WebDemo/tools/screen4/liquid_shots.cjs` (new: page and raw canvas at each time, optional tune file,
draw-call count) and `liquid_moves.cjs` (new: a swerve, a jump, a landing); measured with `WebDemo/tools/screen4/liquid_shares.py` (new: the Art Director's colour classes in the
lower third and the full frame) and the Art Director's `regions.py`.

## Measured (honest numbers)

The colour classes are the Art Director's HSV classes (`hero_shares.py`). "Lower third" is the frame below 2/3 of its
height, HUD included in both the approved picture and the game. Shares are of all pixels (pink and gold count
separately).

**The user's rule, white in the lower third must not exceed the approved:** approved **16.9%**.

| frame | lower third: white | pale blue | azure + electric + cobalt (saturated blue) | full frame: white | saturated blue | saturation (full) |
|---|---|---|---|---|---|---|
| approved | **16.9%** | 17.1% | 27.5% | 14.3% | 34.1% | 0.49 |
| hero before, 2.85 s | 11.4% | 17.8% | 45.5% | 11.9% | 39.2% | 0.48 |
| `liquid,nofoam` 2.85 s | 4.4% | 10.0% | 44.9% | 7.3% | 44.3% | 0.55 |
| `liquid,nofoam` 3.0 s | 8.5% | 13.6% | 36.5% | 9.1% | 37.9% | 0.51 |
| `liquid,nofoam` 3.1 s | 10.1% | 13.6% | 35.1% | 8.6% | 39.4% | 0.52 |
| `liquid` 2.85 s | 6.0% | 13.5% | 40.9% | 8.9% | 41.0% | 0.52 |
| `liquid` 3.0 s | 10.2% | 15.8% | 33.6% | 11.3% | 34.5% | 0.48 |
| `liquid` 3.1 s | 11.4% | 16.7% | 31.5% | 10.6% | 35.4% | 0.49 |

White in the lower third stays under the approved's in every frame, with and without foam. (The lower third's
"deep cobalt", about 11% in every game frame, is mostly the HUD's navy buttons.)

**The Art Director's regions** (`regions.py`; shares of the water, with pink and gold objects left out):

| region | approved | hero before (2.85 / 3.0 / 3.1) | `liquid,nofoam` (2.85 / 3.0 / 3.1) | `liquid` (2.85 / 3.0 / 3.1) |
|---|---|---|---|---|
| contact strip (y .78-.88, x .33-.67): violet (lavender class) | 49% | 2 / 3 / 1% | 59 / 51 / 48% | 33 / 32 / 35% |
| contact strip: white (target 20% or less) | 19% | 50 / 48 / 43% | 2 / 15 / 12% | 10 / 20 / 16% |
| band beside and under the character (y .667-.825): white | 35% | 16 / 19 / 25% | 2 / 11 / 17% | 5 / 12 / 19% |
| same band: azure + electric blue | 24% | 43 / 38 / 34% | 70 / 46 / 34% | 51 / 34 / 25% |
| upper wall (r .22-.45): saturation | 0.64 | 0.49 / 0.51 / 0.51 | 0.64 / 0.62 / 0.60 | 0.57 / 0.55 / 0.53 |
| upper wall: electric blue | 34% | 43 / 54 / 57% | 60 / 68 / 65% | 55 / 60 / 57% |
| walls left and right: deep cobalt | 6% | 1 / 0 / 0% | 3 / 1 / 2% | 3 / 1 / 1% |
| centre (r < .08): white / lavender | 28% / 31% | 38-44% / 44-46% | 13-17% / 19-24% | 13-17% / 19-23% |

The user's acceptance test, at 2.85, 3.0 and 3.1 s:
- the area round and under the pink character now reads as blue water. In `nofoam`, 70% of the band beside and under
  it is saturated azure or electric blue at 2.85 s, against 43% before;
- the character is half sunk, seen through translucent water (violet fur, as approved);
- no white floor and no opaque foam blanket: white in the contact strip fell from 43-50% to 2-15% (`nofoam`) and
  10-20% (`liquid`, with the translucent spray, crests and bubbles), against the approved's 19%.

## Pixel identity

The committed `06b9805` bundle was put aside before any change. The test is `WebDemo/tools/models/game_eval.cjs` with
`SHOT`: raw 3D canvas frames, seed 7, real taps and game time. It was run on that bundle and on this commit's bundle (the
final one, md5 `05ba504c...`), at Tap to Start, 2.85 s and 4.2 s, and every pixel was compared:

| switch | Tap to Start | 2.85 s | 4.2 s |
|---|---|---|---|
| normal game (no switch) | identical | identical | identical |
| `hero` | identical | identical | identical |
| `round7` | identical | identical | identical |
| `round6` | identical | identical | identical |
| `round6,rich` | identical | identical | identical |
| `round5` | identical | identical | identical |
| `round4` | identical | identical | identical |

All 21 pairs have 0 differing pixels (`pixel_identity_vs_06b9805.txt`). The mascot's track position at each time is
also the same in both builds.

**Gameplay** (`WebDemo/tools/screen3/s3_func.cjs`: settings, Tap to Start, real pointer swipes left and right, the jump,
the ride into the tunnel, keyboard start): `liquid` and `liquid,nofoam` give exactly the same states as `hero` at every
step. That covers lanes 1 to 0 to 2, the jump, z 20.561 in the tunnel, 12 coins and 2 socks collected. There are no
console errors. Collision, lanes, collectibles and the seeded `Math.random` are untouched.

**Reacting to moves:** `WebDemo/tools/screen4/liquid_moves.cjs` saves gameplay frames after a swerve to the left lane,
in the air after a jump, and just after landing (`moves_*.png`).

## Performance

Counted with a WebGL draw-call and triangle counter over one rendered frame: `s3_func.cjs` at Tap to Start and in the
tunnel (z 20.56), and `liquid_shots.cjs COST=1` at the hero moment.

| frame | `hero` | `liquid,nofoam` | `liquid` |
|---|---|---|---|
| Tap to Start: draw calls / triangles | 230 / 1,271,947 | 230 / 1,271,947 | 230 / 1,271,947 |
| hero moment 2.85 s: draw calls / triangles | 206 / 1,361,892 | 202 / 1,368,820 | 207 / 1,375,496 |
| in the tunnel (z 20.56): draw calls / triangles | 133 / 1,058,591 | 129 / 1,065,519 | 134 / 1,072,195 |
| textures in memory (2.85 s) | 40 | 41 | 41 |
| shader programs (2.85 s) | 62 | 60 | 64 |
| software frame time, 2.85 s (SwiftShader, relative only) | 1660 ms | 1830 ms (+10%) | 1862 ms (+12%) |

- **Added objects:**
  - the floor ribbon: 1 draw call, 20,592 triangles;
  - foam only: the spray sheets, 1 draw call, 12 triangles; the waterline bubbles, 1 draw call, about 5,300
    triangles.
- **Replaced objects:** the drum's own water sheet (1 draw call, about 8,900 triangles) is not drawn once the liquid is
  in. Round6's bow wave sheets are hidden, and with `nofoam` the splash particles too. The walls, the collar, the swell
  and the glow are restyled with no new draw calls.
- **Texture:** one 256 x 256 RGBA texture, mipmapped (about 340 KB on the GPU), generated in JavaScript at load.
- **No extra render passes:** no mirror, no refraction target, no depth pre-pass.
- **Shader cost:**
  - the floor and wall shaders use 4 flow-map samples of the texture, one more for the swirl's wobble, and a few for
    caustics and splash strokes (about 11 on the walls);
  - analytic lighting, and a 6-step loop over the nearest collectibles;
  - no per-pixel fbm noise. The hero whirlpool's shader they replace ran 3 fbm and a voronoi per pixel.
  - The extra ~10% of software frame time is mostly the walls' shading.
  - If phones need it, the first things to cut are the collectible loop on the walls (it matters only near the
    waterline) and the walls' second reflection layer.

## What still differs from the approved picture

Honest list, judged side by side with the approved picture at full resolution:

1. **The foreground splash.** The approved lower fifth is a thick, sculpted bank of white splash and bubbles, about 35%
   white in the band beside the character. `liquid` keeps white low (5-19%), as the user asked: blue first, translucent
   white on top. Its splash is broken crests, flat translucent spray sheets, droplets and small bubbles, with no
   sculpted 3D splash crowns or curling water sheets. Those are the next step if more foam is wanted.
2. **The rings.** The approved vortex has many narrow rings with iridescent pastel highlights and dense white sparkle
   splashes. Ours are fewer, broader bands of glossy water with broken white strokes, and the bands are wider apart.
   Deep cobalt between the bands is still scarcer than approved: 1-3% of the side walls against 6%.
3. **The core.** The approved core is warm (peach and gold, about 27% of the centre). Ours is now a small peach-gold glow
   in saturated blue. White and lavender in the centre fell from 40% and 45% to 15% and 20%, but the core is still
   cooler and smaller than the approved.
4. **The floor ahead.** Between the character and the mouth, the floor is mostly hidden by the character and the coins
   at this camera. The glint path toward the core shows only in the gaps.
   - The brushes' pink lane warnings now show again on the drum's water, softened to a glow under the water. The hero
     floor had hidden them. They are a gameplay cue; the approved picture has none. Hide them again only if the user
     prefers the picture to the cue.
5. **Coin reflections.** The warm gold streaks are drawn on the water under each coin, but at the hero moment the big
   coins sit over the swell's face or the HUD, so the streaks are small. The approved's warm glints are larger and more
   numerous.
6. **At 3.0 and 3.1 s** the camera is inside the collar. Its lavender top arc fills more of the top of the screen
   (lavender 17-18% of the frame against 12% approved); that is the hero scene's architecture, unchanged here.
7. **Not measured on a phone.** All numbers are from software rendering (SwiftShader), so the frame times below are
   only relative.

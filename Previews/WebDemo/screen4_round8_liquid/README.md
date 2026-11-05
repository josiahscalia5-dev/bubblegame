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
8. **Foam: a separate layer, compiled out by `nofoam`.**
   - Thin broken white crests, sparse flecks, streaks along the wake, lace where the floor meets the walls.
   - White splash STROKES as broken accents along the spirals, with droplets thrown off them (reference 2).
   - A thin broken white crest on the swell.
   - `heroSplash`'s droplets round the character, now translucent (blue shows through).
   - With `nofoam`, `heroSplash`, round5's droplets and the game's spray particles are hidden while the liquid is up.
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

Captured with `WebDemo/tools/screen4/liquid_shots.cjs` (new: page and raw canvas at each time, optional tune file and
draw-call count); measured with `WebDemo/tools/screen4/liquid_shares.py` (new: the Art Director's colour classes in the
lower third and the full frame) and the Art Director's `regions.py`.

## Measured (honest numbers)

PLACEHOLDER_MEASURED

## Pixel identity

PLACEHOLDER_IDENTITY

## Performance

PLACEHOLDER_PERF

## What still differs from the approved picture

PLACEHOLDER_DIFFERS

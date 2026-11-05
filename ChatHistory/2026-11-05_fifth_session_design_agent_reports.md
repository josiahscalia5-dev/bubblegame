# Design agents' reports, 5 November 2026 (fifth session, branch `ccr-b41bbe83-3fbhkr`)

The four project agents' work in this session, newest last. Their full step-by-step transcripts are in
`2026-11-05_fifth_session_design_agent_transcripts.md`. The one authority throughout is the ORIGINAL CLASSIC APPROVED
Screen 4: `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`.

## 0. Round 8 pass 2, `?s3=splash`

- **Who:** the lead, in the main session, without agents. The agents started earlier hit the 5-hour usage limit, so the
  pass was rebuilt from the saved Round 8 water.
- **Evidence:** `Previews/WebDemo/screen4_round8_splash/`.

## 1. Game Art Director, first run (stopped)

- **Started:** for the user's first art-match request.
- **Stopped:** when the user asked to see the finished splash pass and its video first. It changed nothing; its partial
  probe output was not kept.

## 2. Game Art Director: the five largest mismatches at 3.0 s

**Report:** `Previews/WebDemo/screen4_round9_match/01_art_director/README.md`, with an annotated side by side, crops,
measuring scripts and the probe's world positions.

**Found, against the original:**
1. **Tunnel:** framed about 1 m too close, and shallow (5-7 bands against 7-10).
2. **Walls:** a blue pipe with white caps.
   - cyan 2.2% against 13.3% of the upper wall, and the rings 1.5 times too contrasty and evenly spaced;
   - a lavender centre (46% against 11%) and a lavender floor (31% against 3%).
3. **Water round the hero:** a smooth plastic-looking swell with white mist.
   - fur visible through the water 15% against 37%;
   - white blobs: 55 against 13.
4. **Objects:** the sock and the left coins 1.5-1.8 times too big; objects piled on the vanishing point; the left brush
   out of frame and the right one 2.5 times too big.
5. **Rim:** hidden under the HUD, too thin, with a flat pale collar (flat lavender 14.4% against 3.9%).

## 3. Tunnel & Lighting specialist: wall-material checkpoint

**Commit `25a65ab`, merged as `f042ab5`.** Evidence: `Previews/WebDemo/screen4_round9_match/02_tunnel_lighting/`.

**What it built:**
- **Walls and collar:** the user's Reference 5 water vortex, unwrapped round its own centre so there is no seam, and
  graded zone by zone to the original's own tunnel colours (`WebDemo/tools/screen4/derive_ref5_water.py`,
  `WebDemo/textures/screen4/`). It flows with a flow-map crossfade, a swirl and glossy light on derived normals.
- **First attempt, dropped:** a texture unwrapped from the original itself had patch seams and repeated rows once its
  props were filled in.
- **Rim:** colours sampled from the original, with its violet bevel, lilac line and navy ring.
- **Camera and staging:** pitched up 1.5 degrees; the hero staging moved +0.95 m; objects resized and moved to the Art
  Director's boxes.
- **A bug it found and fixed:** a texture created at load in every mode had shifted three.js's texture ids, which come
  from the game's seeded `Math.random`.

**Its verdicts at 3.0 s:**

| area | verdict | key numbers |
|---|---|---|
| (a) cobalt/cyan colour | partly | cyan 6.9% against 13.3%; deep cobalt 0.7% against 3.9% |
| (b) swirling water detail | partly, visibly better | |
| (c) housing and camera depth | mostly fixed | the centre still lavender |
| (d) water round the character | not addressed | the next stage |
| (e) object positions and scale | mostly fixed | the left brush too tall; the gem slightly low and big |

**Checks:**
- pixel identity of the normal game, `splash` and `liquid` at Tap to Start and 2.85 s;
- `s3_func` with `match`: 12 coins, 2 socks, no console errors.

**Lead's follow-up, commit `9b7527d`:**
- the left brush made the original's round pom-pom: 2.1% of the frame against 2.0%;
- Reference 5's four-point star glints removed from the wall texture (a grey-level opening);
- the relief maps set to repeat at Reference 5's period (2.99947).

## 4. Water & VFX specialist: continuous water and the waves round the character

**Commit `15acbc8` (finished 13:16 UTC), merged as `2a6ab30`.** Evidence and full report:
`Previews/WebDemo/screen4_round9_match/03_water_vfx/README.md`.

- **Started from:** `f042ab5`.
- **Brief:**
  - one continuous body of water from the walls into the channel under the character;
  - large, irregular, glossy, translucent turquoise waves round the pink character, with broken white crests, droplets,
    spray and clear bubbles, and the fur showing violet through the water (Reference 3; the precision kit's crops `03`
    and `06`);
  - the waterline back to the original's 0.836;
  - no white blanket, plastic mound or stiff collar.

**What it built** (`WebDemo/src/tunnel_r9_match_water.js`, with gated pieces in `tunnel_r8_liquid.js` and
`tunnel_r8_splash.js`):
- **One continuous body of water:** the floor (`lqFloor`) draws Tunnel & Lighting's Reference 5 map at the same screen
  place and flow as the walls, with the Round 8 liquid's waves, caustics and glints on top. Where the floor meets the
  walls it is exactly the walls' colour. The map's lilac is pulled toward pale blue on the floor, and the streams turn
  vivid electric blue near the character.
- **The swell:** seven irregular lobes; see-through glossy blue near the crest so the fur shows violet; the floor's water
  lower down; a crisp white crest broken into bubbly pieces.
- **The bank:** the foam lumps became glossy translucent water lobes with crisp white rim pieces and a soap-film outline.
- **Six short curling splashes:** two in front, two on each side, saturated turquoise with a white lip.
- **Less white spray:** 900 small droplets became 180 larger ones; fewer flecks and bubble clusters.
- The water still reacts to a swerve, a jump and a landing.

**Its verdicts at 3.0 s (approved / before / now):**

| area | verdict | key numbers |
|---|---|---|
| (a) cobalt/cyan colour | partly | floor ahead lavender 1.7 / 23.8 / 9.7% (sock left out); azure 18.2 / 16.3 / 25.7%; right of the body electric blue 14.6 / 3.1 / 8.1% |
| (b) swirling water detail | partly, visibly better on the floor | wall, floor and swell read as one body, no seam; the centre unchanged (lavender 46%, warm 18%), drawn by `heroWalls` |
| (c) housing and camera depth | not this step | |
| (d) water round the character | mostly fixed | waterline 0.836 / 0.855 / 0.824, irregular; violet under the body 36.8 / 5.7 / 40.3%; bare pink 16.1 / 39.5 / 4.1% |
| (e) object positions and scale | not this step | the right coin's face now clear of spray |

**Checks:** the normal game, `splash` and `liquid` pixel-identical to `f042ab5` (0 differing pixels); `s3_func` with
`match`: lanes 1/0/2, jump, 12 coins, 2 socks, no console errors, 135 draw calls in the tunnel.

**What still differs:** the foreground bank is smoother and cleaner than the original's (white 15.9% against 20.3%;
texture 0.071 against 0.112); the floor ahead is darker and less white; too many separate white shapes beside the body
(50 against 13); the centre's lilac, which comes from the walls (for Tunnel & Lighting).

## 5. The merge (lead, `2a6ab30`) and its check in the sixth session

- The only conflict was `game.bundle.js`, which both sides rebuilt; the source merged cleanly and the bundle was rebuilt.
- **Sixth session, branch `ccr-4aef2c77-0cdeu2`:** rebuilding from the merged source gives a bundle byte-identical to
  the committed one (md5 `ba0c7f6c...`). The merged 3.0 s frame has both sides: the Water & VFX water and the lead's
  brush and glint fixes. Frames and the comparison: `Previews/WebDemo/screen4_round9_match/04_merged/`.

## Next (planned)

1. The Art Director acts as a quality gate on six areas (housing and framing, deep blue tunnel, light and reflections,
   character immersion, foreground waves, object size and placement).
2. One focused Tunnel & Lighting pass on what it finds: the centre's lilac (`heroWalls`' screen radius), less lavender
   round the opening, a more immersive opening, cobalt contrast, the sock and the lower-right coin.
3. Final comparisons at 2.85, 3.0 and 3.1 s, pixel identity, gameplay checks, and a gameplay video.

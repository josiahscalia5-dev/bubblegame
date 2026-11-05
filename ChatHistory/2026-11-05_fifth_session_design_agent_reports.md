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

## 4. Water & VFX specialist: continuous water and the waves round the character (still working when saved)

- **Started from:** `f042ab5`.
- **Brief:**
  - one continuous body of water from the walls into the channel under the character;
  - large, irregular, glossy, translucent turquoise waves round the pink character, with broken white crests, droplets,
    spray and clear bubbles, and the fur showing violet through the water (Reference 3; the precision kit's crops `03`
    and `06`);
  - the waterline back to the original's 0.836;
  - no white blanket, plastic mound or stiff collar.
- **Its unfinished work, saved for safety:** `Previews/WebDemo/screen4_round9_match/03_water_vfx_wip_snapshot/`. It is
  not in the game bundle.

## Next (planned)

1. Merge the Water & VFX stage after checks.
2. The Art Director acts as a quality gate on six areas (housing and framing, deep blue tunnel, light and reflections,
   character immersion, foreground waves, object size and placement).
3. One focused Tunnel & Lighting pass on what it finds: less lavender round the opening, a more immersive opening, cobalt
   contrast, the sock and the lower-right coin.
4. Final comparisons at 2.85, 3.0 and 3.1 s, and a gameplay video.

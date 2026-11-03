# Screen 3: roller candidates No. 1 and No. 2 (test, 3 November 2026)

**Status: test only, nothing merged, nothing installed by default.** The candidates load only when the page is opened with `?roller=1` or `?roller=2`, in branch `ccr-68cd26f5-4t8etp`. Your working game (`ccr-590365bd-e5p8xt`, `b75f88c`) is untouched. No existing model file changed.

Evidence (real screenshots and recordings of the running browser game): [`Previews/WebDemo/roller_candidates/`](../Previews/WebDemo/roller_candidates). The models: [`Design/MeshyDeliveries/CompactRollers/`](MeshyDeliveries/CompactRollers).

## 1. The brushes in the opening view, before touching anything

Measured in the running game, projected onto the Tap to Start screen (538 × 1076):

| Element | Original game | Test version (before the candidates) | Approved Screen 3 |
|---|---|---|---|
| Meshy giant side machinery, lower left | on screen, x 0–154 | larger and lower, x 0–136, y 367–710; 1.22 m from the lanes | one big brush at the lower left |
| Meshy roller copy, high on the left beside the portal | on screen, x 9–147, y 347–484 | **hidden** (still built and turning; `?classic` shows it) | nothing there; the castle towers |
| Meshy roller copy, right of the slide | on screen, x 391–538, **end-on**: its yellow axle and blue cap face the camera | **turned upright**, showing its fluffy side, behind the big bubble | soft pink fluff behind a big bubble, beside gold machinery |
| Two Meshy roller copies in the tunnel (Screen 4) | far inside the drum | unchanged | — |

So the roller facing the wrong way was the right-hand one, and the extra one near the tunnel was the upper-left one. Both were already corrected with scene transforms in the test version, using your existing assets. The candidates were therefore tried only in the **right-hand slot**, replacing that one roller copy, so the brush count does not go up. They were never added beside it, and never two at once.

## 2. The two models

See `03_models_inspected.png`. Rendered in three.js, the game's own renderer, with each model's own textures.

- **No. 1 (preferred):** a thick, barrel-shaped drum, 0.55 of its length across.
  - Mottled pink, lavender and blue bristles.
  - A royal-blue hub ring at each end, and chunky gold support brackets with feet.
- **No. 2:** a narrow cylinder, 0.41 of its length across.
  - Spiky magenta bristles.
  - Blue end caps with a pink star in a gold ring, and a gold bar across each cap.
  - No support brackets.
- **Bristle quality:** both are mesh bristles with **no normal map**.
  - Close up, No. 1's bristles are flat triangular flakes; No. 2's are sharp crystal-like shards (more angular).
  - At the distance of the opening view (about 8 m) the facets mostly blur into a fluffy texture. No. 1 reads softer, No. 2 reads spikier.
  - The 2048 px JPEG textures show no visible compression damage at game size.

## 3. Placement in the opening (`01_opening_candidates.png`, `02_right_slot_closeups.png`)

- **Same slot, angle and length for both:** 2.7 m long, turned 50° so its side and one hub show. Same camera and moment, and the same water, foam and bubbles.
  - From the opening camera its lower part is hidden behind the gold wheel, as in the approved image. It leaves the screen at the right as the run starts.
- **Clear of the ride:** nearest point 1.54 m (No. 1) and 1.47 m (No. 2) from the slide's middle; the mascot's body reaches 1.10 m. A guard moves it outward if it would ever come closer than 1.18 m.
- **Result:**
  - Both now show a pink fluffy roller with a blue hub behind the big bubble, which is closer to the approved right side than the current roller copy (a pink column with a yellow-and-blue cap).
  - **No. 1 matches better.** Its thicker body and mottled pink-lavender bristles read as soft fluff, and its blue hub ring and gold bracket tie it to the gold machinery.
  - No. 2's star cap faces the camera like a badge, and its spikes look harder.
  - The gain is real but **moderate**: the slot is half behind the big bubble and the gold wheel, as in the approved image.
- **Left slot trial (`05_left_slot_trial.png`):** I also tried No. 1 in place of the Meshy side machinery (hidden for that test only).
  - Even at 3.8 m long it reads small and pink. The approved left brush is a big royal-blue tufted face.
  - The side machinery stays on the left.

## 4. Can it spin? (`04_spin_test.png`)

- **No. 1:** the drum is a separate piece from the +Z bracket and the −Z bracket's foot, but the **−Z bracket's plate and arms are welded onto the drum** (182 gold triangles).
  - Spinning the drum turns that gold plate with it.
  - I tried keeping the drum's gold triangles still, using the model's own metal map. It left torn gold fragments turning, so I dropped it.
- **No. 2:** one single welded piece. Spinning it turns its gold bars and caps too.
- **So in the test both candidates stand still.** I did not fake a pivot or spin the support structure. The game's own roller copies keep spinning as before.
- **To make No. 1 spin properly**, ask Meshy for the drum and the two brackets as separate parts. The exact list is in the [CompactRollers README](MeshyDeliveries/CompactRollers/README.md).

## 5. Performance

- **Draw calls:** unchanged at Tap to Start (321; 320 with No. 2).
- **Triangles:** slightly fewer (1.893 M with No. 1, against 1.914 M), because each candidate replaces a 36k-triangle roller copy with a 15k (No. 1) or 13k (No. 2) one.
- **Texture memory: +42.7 MB on the graphics card** for either candidate (two 2048 px maps).
  - This is the one real cost on phones, where texture memory is tight.
  - Before integrating, a 1024 px web copy (about 10.7 MB, quarter the memory) should be made with `WebDemo/tools/optimize.mjs`. Your delivered file stays as it is.
- **Download:** +4.9 MB (No. 1) or +3.3 MB (No. 2).
- **Frame rate on a real phone:** not measured. This machine has no graphics card; it renders in software.

## 6. Gameplay and tunnel

- **Gameplay:** with No. 1 and with No. 2, a seeded run (390 frames, 13 s: slide, portal, tunnel, loop) is identical to the original in every frame. Position, lane, speed, jumps, camera, coins, gems, socks and laps all match.
- **Tunnel:** with No. 1, tunnel frames (5.5–9.5 s) are pixel-identical to the original, with the mascot presentation off and both run at the same time.
- **Recording:** `roller1_gameplay.mp4` shows No. 1 at the start, the run down the slide and into the tunnel, socks and coins collected.

## 7. Recommendation

- **No. 1**, in the right-hand slot only, replacing the turned roller copy there, with no extra rollers.
- **Its direction and position fit the approved composition:** fluffy side and blue hub toward the camera, behind the big bubble, beside the gold wheel.
- **Before integrating, two steps:**
  1. Decide whether a still roller is fine for the opening, or wait for the separated Meshy parts so it can spin.
  2. Make the 1024 px web copy for phones.
- **Not suitable as the big left brush.** The approved left brush's blue tufted face is a different object. The Meshy prompt for it is in `Design/SCREEN3_OPENING_MATCH.md`.
- **Not perfect:** up close the bristles are faceted flakes, not soft strands, because the model has no normal map.

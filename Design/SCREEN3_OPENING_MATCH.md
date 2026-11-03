# Screen 3 opening: matching the approved artwork (test version, 3 November 2026)

**Status: test version for your review. Not merged.** It lives on branch `ccr-68cd26f5-4t8etp`. Your working game is untouched on branch `ccr-590365bd-e5p8xt` (commit `b75f88c`), and that commit is also tagged locally as `backup/before-screen3-opening-match`.

Evidence (real screenshots and a recording from the running browser game, no mockups): [`Previews/WebDemo/opening_match/`](../Previews/WebDemo/opening_match).

## 1. What was compared

- Visual target: `BWK_01_APPROVED_Screen3.png` (the approved Screen 3).
- Baseline: the latest gameplay video (`10814.mp4`). It is byte-identical to `Previews/WebDemo/bubblewash_screen3_gameplay.mp4`, the recording of commit `b75f88c`.
- Both re-rendered at the same 1:2 portrait stage (538 × 1076), then compared on a 50 px grid and in close-ups.

## 2. Visual-difference checklist

| # | Approved Screen 3 | Original game | Test version |
|---|---|---|---|
| 1 | Mascot surrounded by energetic water, thick white foam and splash around its lower body | Smooth, clean water; almost no foam at the body | Bubbly white froth hugging the body (foam blobs, small glossy bubbles), bubble-lace foam and brighter turquoise water around it, curling side splashes, spray off the slide walls, whitewater along both slide edges, flow streaks. It follows the mascot and trails back when it runs. |
| 2 | Large glossy iridescent bubbles at the foreground edges, medium ones by the brushes, small ones toward the entrance | A few rainbow-ring bubbles | Glossy thin-film bubbles at three depths: pink, cyan, violet and gold reflections, a window highlight, gentle drift and wobble, small ones rising. The right side is kept uncluttered. |
| 3 | One big brush at the left edge; the right side shows pink fluff behind a big bubble; nothing beside the portal | A second roller beside the portal (upper left), and the right roller shows its yellow axle end | See section 3. The extra roller is hidden, the right roller is turned, and the left machinery is larger. |
| 4 | Round gold washer-door ring, dark violet band, concentric glowing rings | A pastel "rainbow archway" (the castle's funnel and the drum's lip) | A polished gold door rim with bolts, a dark violet door seal with glowing cyan rings in its folds and a cyan inner edge. A lavender wall facing covers the pastel funnel, so the gold ring sits in the wall as in the approved image. |
| 5 | Slide edges read as crystal-blue water | Pearly lavender flume walls | Glassy aqua flume walls (same geometry). |
| 6 | Rich, not washed out | Some pale, overbright areas | An opening-only grade: vibrance for pale pastels, highlights brought down slightly, deeper mid-darks. It fades out before the camera reaches the portal, so the tunnel is graded exactly as before. |
| 7 | Mascot a little more upright, spiky strands, water droplets | Wider and smoother | The same Meshy mascot drawn about 7 % taller and 5 % narrower, with crisper strands and droplets on its tips. Its mesh, controller, collider and ride height are unchanged. |
| 8 | HUD, "Let's go!" banner, "Tap to Start" panel | Already matching | Unchanged. |
| 9 | Camera framing | Measured: mascot size and place, ring size (178 px against 170 px), banner and panel already within a few percent | Unchanged, so the start transition into the gameplay camera is exactly the original. |

## 2b. Soap suds around the mascot (second round, from your approved close-up)

Compared with your close-up of the approved mascot: `Previews/WebDemo/opening_match/07_soap_suds_closeup.png`.

- **Suds against the lower body:** 20 rounded, translucent bubbles sitting on the water at the mascot's lower edge.
  - Two staggered rows, so not one straight line: nine bigger ones against the body at varied heights, overlapping, and eleven smaller ones further out.
  - Each has its own soft blue, lavender or pink tint, a milky film toward the edge, a bright white rim and a window highlight.
  - They follow the body, stream back a little and re-form when it runs, and part when it jumps.
- **Tiny sparkle bubbles:** 64 small ones caught in the foam, out to both sides.
- **White foam sweeping out around both sides**, curling as it goes. The side froth no longer covers the suds.
- **The water around the mascot:** a bolder interconnected bubble web across the slide, glowing cyan inside the web near the mascot, and a deeper cyan-blue.
  - Measured against the approved close-up: the water left of the mascot now averages hue 214° and brightness 0.97, against the approved 213° and 0.95. The original was 227°, more violet.
- **Sitting on the water you see:** foam and suds sit on the visible water, including the raised water the shader draws around the mascot, so they never sink into it.
- **The floating air bubbles part around the mascot** when it runs through them, instead of drifting across its body.
- **Remaining differences:**
  - The approved suds are a little bigger and more opaque.
  - The approved white foam is sharper, splash-shaped lines, where ours is softer lumps.
  - The small round droplets in the lane-change frame are the game's own original lane-change spray, which I did not change.
- **Cost:** two more instanced draws; no new models.

## 3. The rollers (your questions)

Your two new Meshy roller candidates were tested separately: see [`SCREEN3_ROLLER_CANDIDATES.md`](SCREEN3_ROLLER_CANDIDATES.md).

- **Which roller faced the wrong way:** the one on the **right** of the slide (the second Screen 3 copy of the Meshy washing roller).
  - It stood with its long axis pointing at the camera, so you saw its end: the yellow axle stub, the blue cap and a ring of pink fringe.
  - In the approved image the right side shows the soft pink side of a brush, behind the big bubble.
  - In the test version its long axis stands nearly upright, so the fluffy side faces you. It is slightly smaller and further back, behind the big bubble.
  - It still spins about its own long axis, with the same model and the same pivot.
- **The extra roller near the tunnel:** the other Screen 3 roller copy, high on the left beside the portal.
  - The approved image has no brush there; that spot holds the castle towers. It also made the opening busier.
  - It is **hidden** in the test version. Nothing was deleted: it is still built and still turning, and `?classic` shows it.
- **The left brush:** the Meshy giant side machinery, as before. It is now larger and lower at the left edge, like the approved brush.
  - It gets fine fibre detail on its bristles and a glossier gold.
  - Its nearest point stays **1.22 m** from the slide's middle; the mascot's body reaches 1.10 m. A guard in the code moves it outward if it would ever come closer than 1.18 m.
- Nothing new was added on the sides. The rollers have no gameplay role in the browser game (no collision), and none of the tunnel's own rollers was touched.

## 4. Asset inventory

**Meshy models already in the project and used here (none modified; every `.glb` is byte-for-byte unchanged):**

| Model | Where | What the test version does with it |
|---|---|---|
| Castle portal (`castle.glb`) | the castle | Unchanged. A separate wall facing covers its pastel funnel. |
| Washer tunnel drum (`drum.glb`) | the tunnel | Unchanged. The tunnel renders pixel-identical. |
| Pink mascot (`mascot.glb`) | the player | Same mesh; drawn slightly more upright, with crisper fur. |
| Washing roller (`roller.glb`, from `WashingRoller/`) | 2 copies at Screen 3, plus the tunnel's rollers | Screen 3: one hidden, one turned (section 3). Tunnel copies unchanged. |
| Giant side machinery (`machinery.glb`, from `SideMachinery/`) | left edge | Larger, lower and clear of the lanes; fibre detail and glossier gold on its own material copy. |
| Water tower, gear wheel, golden pipe, crown (`EntranceDecor/`) | entrance | Unchanged. |
| Gem, lost sock | collectibles | Unchanged. |
| Duck helper (`DuckHelper/`) | not in the scene | This is the approved image's yellow figure on the water. You asked for it to be removed on 2–3 November, so it is **not** brought back. Say if you want it back. |
| Tunnel interior liner (`TunnelInterior/`) | not in the scene | Disabled at your request on 3 November; untouched. |

**Built in code for this round (no Meshy model needed):** the gold washer-door rim, bolts, violet seal, glowing rings and wall facing; the foam, splashes and soap bubbles; the slide water's foam and highlights; the flume finish.

**What only needed repositioning:** the side machinery (larger and lower), the right roller (turned) and the extra roller (hidden).

**Missing models: none is required for this test version.** If you want to go further, these differences come from the assets themselves:

1. *Optional:* **the approved left brush's face.** The approved brush has a deep royal-blue tufted face with a dark-blue metal rim and a thick pink-and-white fluffy band. The Meshy side machinery's face is a blue, white and pink "flower" with a pink star. To match it exactly, a model like this would be needed:
   > `BubbleWash_Giant_Side_Brush_EndView` — "giant cartoon washing-machine roller brush seen from its end, deep royal-blue densely tufted bristle face with a glossy dark-blue metal rim and a gold hub ring, wrapped in a thick soft pink-and-white fluffy bristle band, chunky gold bracket on the back, glossy fairy-tale style matching a pink-lavender-gold castle, one object, centred, face toward +Z, flat back, about 30–50k triangles".
   - Only worth the credits if the current machinery's face is not close enough for you.
2. Nothing else is needed. The water, foam, bubbles and lighting are all done in the game, as you asked.

## 5. What could not be matched, and why

- **The deep "vortex" inside the portal.** The approved image looks down a long, straight, concentric tube. The real tunnel starts climbing and turning left about 5 m in (the ride's banked climb), so from the start camera you see the rising water, not a long straight bore.
  - Matching it would mean changing the tunnel's path, or painting a 2D vortex over it. You ruled both out, so the test version shows the real tunnel through the new door.
- **Coin colour.** The coins read orange-gold where the approved ones are yellow-gold. They are protected collectibles, so their material is unchanged. It can be tinted if you want.
- **Approved foam density.** The approved image has even more white water across the whole slide width. The test version keeps more blue showing, so the slide and the coin route stay readable. It can be pushed further.
- **Castle top.** It is still brighter and whiter than the approved pink-lavender towers (it is the Meshy castle's own texture under the existing colour grade).

## 6. Tests run (headless Chromium, software WebGL; not on a real phone)

- **Gameplay, frame by frame:** the recording's input script was played with a fixed random seed on both builds, recording 390 frames (13 s, including the loop back to the slide).
  - Every frame is identical: position, height, lane, speed, jumps, camera position and tilt, coins, gems, socks and laps.
  - Both runs end with 12 coins, 2 gems, 3 socks and 1 lap.
  - This works because the cosmetic layer is built with its own random-number generator. three.js draws a random number for every object it creates, and the coins' bobbing phases come from the same sequence, so without this the coin timing would have shifted.
- **Tunnel pixels:** same seed, same inputs, the page's CSS animations frozen (they run on the wall clock), 10 moments from 0.5 s to 9.5 s.
  - `?classic` matches the original: 0 differing pixels at every moment.
  - The test version with the mascot presentation off: 0 differing pixels at every tunnel moment (5.5–9.5 s).
  - The full test version: inside the tunnel, only the mascot's own pixels differ (5–8 % of the screen; the mascot is all of that).
- **Clearance:** side machinery 1.22 m, right roller about 1.9 m from the slide's middle; the mascot reaches 1.10 m.
  - The door rim, seal and rings are 2.2 m or more from the tunnel axis; the mascot reaches about 1.8 m there, and the camera is held within 1.61 m.
  - The wall facing's opening is 2.95 m.
- **Load:** at Tap to Start, 321 draw calls and 1.91 M triangles, against 302 and 1.89 M (+6 % calls, +1.5 % triangles). In the tunnel, 128 against 125 calls.
  - The page's own safeguard (dropping bloom, then resolution, if the frame rate stays low) is unchanged.
  - Frame rate on a real phone was **not** measured; this machine has no GPU.
- **Phone layout (390 × 844):** HUD, banner and panels in exactly the same places as the original; nothing overlapping or cut off.
- No console errors or warnings in any run.

## 7. How to review and switch

- **Play the test version:** `cd WebDemo && python3 -m http.server`, then open `index.html`.
- **See the original opening in the same build:** open `index.html?classic`.
- **Turn off single parts (for checks):** set `window.__BW_OPENING_OFF__ = ['foam', 'bubbles', 'brushes', 'portal', 'slide', 'mascot', 'light']` (any subset) before the page loads.
- **Everything is in one file, `WebDemo/src/opening.js`.** The hooks into the existing code are additive and inert when the layer is off:
  - `game.js`: build and update calls, and the inputs the layer needs.
  - `shaders.js`: one uniform each on the slide water, the colour grade and the fur, all 0 by default.
- **To approve:** the branch can be merged into your working branch. **To reject:** delete the branch, or `git checkout ccr-590365bd-e5p8xt`. The original is untouched either way.

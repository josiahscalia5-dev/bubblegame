# Screen 4: translucent bubble domes at her base (`?s3=intunnel,domes`; 6 November 2026, fourteenth session): REJECTED

**Outcome: both controlled candidates rejected by the art director and reverted under the user's rule.** The domes are
NOT part of `?s3=intunnel`; the code stays behind its own `domes` flag as a record. The in-tunnel start is kept
(`../40_intunnel_start/`).

- **The target:** the ORIGINAL approved Screen 4 only.
- **Before:** `?s3=intunnel`, the in-tunnel start (`../40_intunnel_start/`, commit `6febe04`). **After:** `?s3=intunnel,domes`
  (also `bt,domes`).
- **Why:** the region comparison of the accepted build (`../40_intunnel_start/regions_baseline/`) ranked two regions as the
  largest perceptual differences:

  | region | LPIPS | lavender: game / original |
  |---|---|---|
  | foreground water | 0.652 | 0.6 % / 6.5 % |
  | character and water contact | 0.592 | 0.3 % / 6.5 % |

  The original has glossy lavender-blue soap domes along her base. They narrow her silhouette into bubbles, where ours is
  cut by a straight waterline.
- **Not the rejected candidates:** the water is NOT lowered (step 8's waterline stays), and there is no white shader froth.

## The change

- **The domes** (`WebDemo/src/tunnel_s4_domes.js`, new):
  - 8 instanced spheres, one draw call, built by `tunnel_r8_liquid.js`'s `waterlineFoam` with its `crest()`;
  - they ride in her water frame (the swell's uniforms), so they move with her swerves, jumps and landings and hide with
    the swell;
  - each is centred just below the crest, so the swell's depth hides its lower part and it reads as a dome on the water.
- **The material:**
  - a lavender soap film, lighter at the top, the water's aqua at the foot, with a faint thin-film shimmer at the rim;
  - two of the eight are light aqua water domes;
  - a white highlight arc upper left, a glint, and a second small glint low right;
  - its colours are written as the screen's and passed through the game's inverse display transform (`mwUndisp`).
- **Colours sampled from the original at her base** (y 1220-1340, x 120-680):
  - lavender is 20 % of that zone: `#a295ee` 34 %, `#b9b6f2` 27 %, `#dcd2fa` 26 %, `#8879db` 14 %;
  - its aqua: `#a6d1f5`, `#c6e6fa`, `#87b9ed`.
- **Places and sizes** (`tunnel_s4_bt.js` `DOMES.list`): from the original's domes there, about 30-65 px radius on screen,
  0.07-0.15 m at the swell's front.
- **The look was chosen with Optuna:** 12 trials on the real game (`WebDemo/tools/screen4/optuna_domes.py`; `optuna/`,
  `trials.json`, each trial's frame).
  - Four parameters: dome size, body opacity, lavender depth, highlight strength.
  - The score: the LPIPS, a*b* histogram and lavender-share distances of the two regions.
  - LPIPS hardly moved across the trials (0.567-0.595 round her base, 0.641-0.647 for the water), so it could not tell
    these looks apart. The choice was made by eye among the best-scored:
    - **trial 8, chosen:** size x 1.106, body alpha 0.733, lavender `#8d7fdf`, highlight 0.912; lavender round her base
      6.7 %, the original's 6.5 %;
    - trial 11: bigger domes that hid her base;
    - trial 4: paler domes.
  - The first build (trial 0: x 1.0, alpha 0.42) was too small and faint, glassy pale circles.
- **Proof:** the built start screen is 0 pixels from trial 8.

## The reviews (the read-only art director agent, against the original only)

- **Candidate 1** (trial 8, `frames/`): about the same, not yet closer.
  - Better: the domes are in the original's places, and the lavender at her base went from 0.3 % to 15 % (the original 21 %).
  - Worse: milky, nearly opaque balloons hiding her fur (visible pink 29 -> 17 %, the original 29), no bright rims, the big
    centre dome reading as a sticker, an even row of pale beads while moving.
- **Candidate 2** (`cand2/`): the advice applied.
  - The changes: body alpha 0.73 -> 0.38 (clear violet-tinted centres), near-white Fresnel rims, the centre dome 30 %
    smaller, the lavender deepened at each foot.
  - The verdict: not clearly closer than the build without domes, revert. Only the lavender improved; the domes read as
    clear soap bubbles, a different element from the original's saturated violet domes merged into a white splash bank.

  | the art director's base band, y 0.80-0.90, x 0.25-0.75 | saturation | contrast | white | pink | lavender |
  |---|---|---|---|---|---|
  | original | 0.45 | 0.18 | 13.4 % | 28.8 % | 18.1 % |
  | previous (`bt`) | 0.39 | 0.11 | 11.3 % | 25.9 % | 0.6 % |
  | candidate 1 | 0.34 | 0.09 | 7.1 % | 14.4 % | 26.4 % |
  | candidate 2 | 0.36 | 0.10 | 10.3 % | 19.9 % | 9.0 % |

- **Sheets:** `sheets/` (candidate 1), `cand2/sheets/` (candidate 2).

## Why it did not work, and a different technique

- Bubbles alone are not what the original has at her base. Its domes are part of a sculpted white-and-lavender splash bank
  with curling crests up her sides, saturated violet, with bright white highlights. A row of separate spheres on a flat face
  reads as an added element, whether milky or clear.
- **What is left there** (the art director's top remaining difference):
  - the foreground and her base are a flatter pale sheet with regular white dashes;
  - white in the foreground is 8 % against the original's 17 %, behind her 16 % against 28 %;
  - the layers: `tunnel_r9_match_water.js` (the swell face) and `tunnel_r8_splash.js` (`spCurls`, `spLumps`).
- **Proposed instead (not started; for the user's decision):** a sculpted splash-bank MESH round her base, modelled in
  Blender from the original's silhouette there. Merged lobes with curling crests rising up her sides, a saturated
  violet-to-aqua translucent material and white crest highlights. One piece of geometry riding the swell, replacing the
  flat face's look there (not lowering it). This changes geometry, not shader numbers, and is what the original draws.


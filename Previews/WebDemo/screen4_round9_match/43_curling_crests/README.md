# Screen 4: curling water crests round her (`?s3=intunnel,crest`; 6 November 2026): REJECTED, reverted

- **The user's approval** (about 16:25 UTC): ONE controlled experiment with real curling water-crest geometry round the
  pink character, reusing the existing curling splash sheets. It is not to replace the accepted water unless it is visibly
  closer to the ORIGINAL. The in-tunnel start stays.
- **The geometry reused:** `spCurls` (`tunnel_r8_splash.js`): thin real 3D sheets rising from the swell's crest, leaning
  out and curling over, with a broken white lip and streaks running up them, animated by the flow, her swerves and
  landings. Only their placement, size and colours changed (`tunnel_s4_bt.js` `CREST`). Nothing else.

## The two controlled candidates

- **C1** (`c1/`):
  - pairs rising beside her lower body out to the lower corners, two small ones at the front contact;
  - the original's cobalt and cyan with white lips.
  - The result: they curled toward the camera, which rides above and behind her, so they showed only as edge-on slivers
    (the pixel diff, `crest_diff`: about 24,000 px in thin strips).
- **C2** (`c2/`, the tune in `c2/tune.json`): taller sheets standing up, facing the camera, curling only at the top.
  - Screen Matcher (`tools/screen4/compare_s4.py`, `screen_matcher/`):

    | | original | accepted | C2 |
    |---|---|---|---|
    | pale milky blue | 11.8 % | 17.1 % | 18.7 % |
    | white | 20.6 % | 18.6 % | 19.3 % |
    | right side colour difference | | 2.2 | 3.9 |
    | mean colour difference | | 11.9 | 12.0 |

  - The art director: not meaningfully closer, revert. "Pale, frosted, vertically streaked fins standing beside her ... no
    visible curl and no bright white lip. The original has nothing like this at her sides: its water there is low,
    bright-white broken crests, spray and bubbles hugging her base."
- **Sheets:** `sheets/01_FULLRES_original_accepted_candidate.jpg`, `02_closeup_water_contact.jpg`,
  `03_moving_accepted_vs_candidate.jpg` (the crests follow her while moving; they are still fins).

## Reverted

- `crest` is NOT part of `?s3=intunnel`; its code stays behind its own flag as a record.
- **Proof:**
  - `?s3=intunnel`'s start on the final bundle `99d9bc10` is 0 pixels from the tested frame;
  - the normal game and `focus` are identical to step 8 (`identity_spotcheck_99d9bc10.txt`).

## What this, and the earlier water candidates, show

The original's water at her base is LOW: bright-white broken crests, fine spray and small bubbles hugging her base, over
saturated blue. Every structure added there so far (domes, lobe banks, a lobe-drawing face, standing crests) read as an
added object beside her, not as that water. The difference is in the fine, bright, broken white detail sitting ON the blue
right at her base. Our base has pale milky blue there (17 % against the original's 12 %) and flat white dashes.

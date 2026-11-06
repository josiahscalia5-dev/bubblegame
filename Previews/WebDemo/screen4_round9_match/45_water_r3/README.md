# Screen 4 water R3 and R3c (`?s3=intunnel,water3`), 6 November 2026, fourteenth session; NOT approved by the user

- **The target:** the ORIGINAL approved Screen 4 only.
- **The user's brief (about 18:25 UTC):** R2 (`44_water_material/`) looked visibly closer, but the original still has richer
  saturated cobalt water, sharper sparkling detail and less smearing. Correct those in the EXISTING water material, texture
  sampling, transparency and bloom; no new water object, no redesign.
- **Status:** experimental only. The accepted `?s3=intunnel` is unchanged (0 pixels; proof in `../47_water_r5/README.md`).
  The user reviewed R3c at about 17:49 UTC: better colour and no mirrored artefact, but still "too soft, stretched and pale"
  round her. Followed by R4 (`../46_water_r4/`) and R5 (`../47_water_r5/`).

## The diagnosis of R2 (`diag/band_r2_diagnosis.md`, same-frame ablations `diag/ablations.json`)

In the band at her base (shares of the band, the original in brackets):

| R2 change | icy pale blue | saturated blue | white |
|---|---|---|---|
| as rendered | 32.4 % | 14.8 % | 21.2 % |
| bloom off | 32.6 | 15.8 | 19.1 |
| overlays hidden | 33.4 | 14.2 | 19.5 |
| face extras and distortion off | 30.5 | 16.9 | 19.9 |
| the original | 27.5 | 19.6 | 18.6 |

- The face's own extras (sparkle dots, white rim pieces, bubble rings, the grazing sheen) and the flow distortion cost about
  2 points of saturated blue; bloom about 1; the floor and the overlays nothing.
- **The smear is not missing detail but streaks:** the strip under her is where the original has her fur, which the texture
  fills by inpainting, drawing streaks toward each hole's middle.

## The candidates

- **R3:** the texture's holes filled by MIRRORING the original's water about each hole's edge (`derive_water_map.py --fill
  reflect`), plus the corrections below. **Rejected** by the art director: a hard seam on the mirror line, a mirrored blotch,
  a kaleidoscope symmetry (`r3/`, Screen Matcher `r3/screen_matcher/`).
- **R3b, a translated-patch fill:** changed nothing, because `derive_water_map.py` saved its picture before the patch step
  ran. The bug was found and fixed in R4.
- **R3c (the `water3` switch as built):** R2's own texture with R3's other corrections:
  - the face's extras off where the texture shows (a few twinkles kept: sparkle 0.2, rim and rings 0);
  - the distortion almost off (wobble 0.012 -> 0.004);
  - the texture's colours lifted a little against the bloom's haze (saturation x 1.1 round its luminance, a 1.06 power on
    the mid-tones).

## R3c measured (`r3c/`, `final/`)

- **Band at her base:** icy pale blue 28.6 %, saturated 18.5, mid blue 11.3, white 18.4, lavender 17.0, mean saturation
  0.35; the original 27.5 / 19.6 / 11.4 / 18.6 / 15.3 / 0.35.
- **LPIPS (`region_compare.py`, lower is closer):**
  - foreground water: R2 0.589 -> R3c 0.576;
  - character and contact: 0.568 -> 0.555.
- **Sheets:** `sheets/01_FULLRES_original_accepted_new.jpg`, `02_closeup_water_x1.4.jpg`, `03_moving_accepted_vs_new.jpg`.
- **Gameplay:** `gameplay/s3_func_water3.txt`, `gameplay/r2_func_water3.txt`.
- **Videos:** only R2's (`videos/`). R3c's recording was stopped when R4 replaced it.

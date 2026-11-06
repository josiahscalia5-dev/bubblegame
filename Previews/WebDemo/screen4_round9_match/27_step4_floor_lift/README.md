# Step 4 (`?s3=focus` only): the floor's pale lift OFF (6 November 2026, about 02:00 UTC)

- **The user's approval (6 November):** "YES — proceed with the first correction, but do not consider the water finished."
  - The review image: `Design/ReferencePacks/2026-11-06_Step4_Approval_from_user/water_floor_evidence_review.png`.
- **Authority:** the ORIGINAL approved Screen 4 only.
- **Diagnosis behind it:** `../26_layer_diagnosis/README.md`.

## The change (one value)

- `WebDemo/src/tunnel_r9_focus.js`: `MATCH_WATER.floorFx.lift` 0.55 → **0**.
- That setting mixed every floor pixel 55% toward one pale blue, #b6dcf6 (`focusFloorGLSL` in `tunnel_r9_match_water.js`).
  #b6dcf6 was the original's MEDIAN on the floor ahead. The median of white splash and cobalt water is exactly that pale
  blue, so the mix flattened the two-tone water into one mid-tone.
- `WebDemo/game.bundle.js` rebuilt:
  - before: md5 `2619938c...`, which the unchanged source rebuilds byte-identically;
  - after: md5 `73ed2a8b...`;
  - the bundle differs in that one value only (`lift:.55` → `lift:0` inside the `focus` settings).
- **Not changed:**
  - the pink character, the walls, the tunnel, the swell round her, the collectibles and the interface;
  - steps 2 and 3;
  - every other switch;
  - the tenth session's "pass 4a" warning-stripe colour (`hazard: #c4f2ff`), which stays as it was in the build.
- **Rollback:** set `lift` back to 0.55 and rebuild, or revert this commit. The rollback point is its parent commit.

## Tests (all passed)

| test | result | file |
|---|---|---|
| the step reproduces the diagnosis's test V1 (`floorFx.lift` 0 as a test tune) | 0 differing pixels | — |
| identity: the normal game, the ten older switches, `match`, `match,nofoam` (41 raw-canvas frames, the same set as step 3's proof) | all 41 identical, 0 differing pixels | `identity_proof_step4.txt`, `scripts/identity.sh` |
| the pink character drawn alone, before against after | 0 differing pixels in the whole frame | `character_unchanged_proof.txt`, `character_solo/` |
| gameplay `s3_func` (`focus`) | lanes 1 → 0 → 2, jump, 12 coins, 1 gem, 2 socks, keyboard start, no console errors; identical to step 3 (draw calls 230 / 136, the same triangles) | `gameplay_s3_func_focus.txt` |
| gameplay `r2_func` (`focus`) | hearts (5 knocks, back to "5 Full"), pause, Bubble Blast (and empty), Turbo Spin, no console errors; the report identical to step 3's | `gameplay_r2_func_focus.txt` |
| Pixel 7 (412 x 839), before and after | captured, no console errors | `pixel7_before_3.00s.png`, `pixel7_after_3.00s.png` |

- In the full frame, pixels inside her outline change only where the floor shows between her fur strands; drawn alone,
  she is identical.

## Measured

- Seed 7, 3.0 s, no steering, the game's camera, the 3D canvas at 767 x 1536.
- `measured.json`, `measured.md`; the definitions are in `WebDemo/tools/screen4/layer_metrics.py`.
- No overall similarity percentage is claimed.

| floor ahead (the user's box 3) | original | before | after |
|---|---|---|---|
| saturated blue | 18.0 % | 11.5 % | **28.2 %** |
| pale blue | 34.5 % | 74.5 % | **53.9 %** |
| white | 32.0 % | 9.0 % | 9.9 % |
| fine texture (detail) | 3.41 | 2.29 | **3.09** |
| L* mean; p5-p95 | 84.7; 66.0-98.7 | 81.4; 69.7-95.9 | 78.8; 62.3-96.1 |

- **Front splash (box 4):** saturated blue 16.3 → 23.1 %, pale blue 64.2 → 57.1 %, detail 3.64 → 4.07.
- **Walls, core and front water:** unchanged, within 0.1 point.

## Not finished (the user's words: "do not consider the water finished")

- The original's chunky white splash on the floor ahead: 32 % white there against 9.9 %.
- The floor still shows the smooth derived texture and the procedural white "commas" (`04_zoom_floor_ahead_2x.jpg`).
- The walls' texture, the tunnel's bubble veil and the core's lavender: investigated in `../28_next_investigation/`, not
  changed.

## Images

- `01_original_vs_before_vs_after_3.00s_767x1536.jpg`: each panel 767 x 1536, 1:1.
- `02_regions_original_vs_before_vs_after.jpg`: the user's regions boxed.
- `03_colour_classes_original_vs_before_vs_after.jpg`: each pixel by colour class.
  - saturated blue: blue;
  - pale blue: light blue;
  - periwinkle: violet-blue;
  - lavender: lilac;
  - white: white;
  - objects: black.
- `04_zoom_floor_ahead_2x.jpg` and `05_zoom_front_splash_2x.jpg`.
- `06_pixel7_original_vs_before_vs_after.jpg`.
- `after_3.0s/`: the raw frame and the census of the after build.

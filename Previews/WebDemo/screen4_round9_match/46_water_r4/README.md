# Screen 4 water R4, `?s3=intunnel,water4` (6 November 2026, fourteenth session): THE CURRENT WATER CANDIDATE, not merged

- **The user's brief (17:49 UTC, the R3c review kit):** the water round her is "too soft, stretched and pale ... Fix the
  actual texture-mapping, distortion, transparency, sampling or bloom problem."
- **The diagnosis:** `diag/diagnosis.md` (layer isolation of the same frame; `diag/R3c_layers/`, `diag/R4_layers/`,
  `diag/ablations_*.json`).
  - The soft, vertically stretched, pale water under her is the TEXTURE's own content: 64 % of R2 / R3c's texture was
    Telea-inpainted holes (her body, the coins, both bottom corners for the buttons), drawn as a lavender-white blur and
    long vertical streaks.
  - The face draws the texture opaque and exact (0.98 x its brightness); overlays and bloom cost about 0.015 each of the
    light-dark spread.
- **The change (R4 = R3c with ONLY the texture changed):** `textures/screen4/foreground_water_original_r4.png`
  (`tools/screen4/derive_water_map.py --fill exemplar`): the buttons masked by their own outline, the holes filled with
  15 px exemplar patches of the original's own water (filled share 64.1 -> 51.6 %). The patch fill's ordering bug fixed.
- **Measured (supporting only; `regions/regions.md`, `region_compare.py`):** foreground water LPIPS at the start R3c
  0.576 -> R4 0.556, contact 0.555 -> 0.547; at +1 s 0.652 -> 0.644. Band (`../44_water_material/diag/band.py`): R4 icy
  29.5 / saturated 18.6 / mid 10.7 / white 20.4 / lavender 13.0 % (original 27.5 / 19.6 / 11.4 / 18.6 / 15.3).
- **The art director (18:18 UTC):** slightly closer than R3c, clearly closer than the accepted build in shape and colour,
  not yet in contrast. The streaks and the violet blob are gone; a pale lavender-white mottle under her centre remains.
  "Make R4 the water candidate in place of R3c."
- **Sheets:** `sheets/01_FULLRES_original_accepted_R4.jpg`, `01b_...R3c_R4.jpg`, `02_closeup_water_x1.4.jpg`,
  `03_moving_1s_2s.jpg`. Frames: `final/start|T1.0|T2.0/`.
- **Proof (fifteenth session):** R4 rendered again on bundle `3b0c8e17` is 0 differing pixels from `final/start`
  (`../48_water_r6/identity/`).
- **Next after R4:** R5 (`../47_water_r5/`, rejected) and R6 (`../48_water_r6/`).

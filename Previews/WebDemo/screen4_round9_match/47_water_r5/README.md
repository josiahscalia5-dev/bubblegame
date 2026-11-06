# Screen 4 water R5, `?s3=intunnel,water5` (6 November 2026, fourteenth session): REJECTED, kept behind its flag

- **The change:** R4 (`../46_water_r4/`) with ONLY the texture's registration corrected: it lands 22 px lower
  (`WATER5.shift`, `WebDemo/src/tunnel_s4_bt.js`).
- **Why:** the texture is pinned to her water frame through the camera at the first render (t 3.017 s). At the compared
  start frame (t 3.517 s) her swell has risen and the camera dropped, so R4 draws the original's water about 22 px too high
  (`../46_water_r4/diag/diagnosis.md`, section 4). On the face alone (no bloom, no grade) against the original's own pixels:
  NCC 0.203 as drawn in R4, 0.954 in R5.
- **Measured (supporting only; `regions/regions.md`, `band.md`):** foreground water LPIPS at the start R4 0.556 -> R5 0.530;
  but moving +1 s 0.644 -> 0.665, +2 s 0.632. Band white at the start R4 20.4 -> R5 23.4 % (original 18.6), +2 s 43.2 %.
- **The art director (18:28 UTC): rejected.**
  - R5 against R4: about the same at the start, worse moving.
  - In the original the lavender domes rise in front of her lower body and overlap it. Registered to the screen, they
    land about 20 px below her body edge, because she sits higher in the game (body ends about y 1245) than in the original
    (about 1330). She then rests on a pale band: the filled hole where the original has her body, plus its white fur halo.
  - Recommendation: keep R4; refill the body hole from the original's saturated cobalt-and-white water after widening it
    12-15 px (that is R6, `../48_water_r6/`); then register the texture to her base, not to the screen.
- **Sheets:** `sheets/01_FULLRES_original_accepted_R5.jpg`, `01b_...`, `02_closeup_water_x1.4.jpg`,
  `02b_closeup_original_R3c_R5_x1.6.jpg`, `03_moving_1s_2s.jpg`, `04_moving_closeup_R3c_R4_R5.jpg`.
- **Videos:** not recorded (the session hit its usage limit; R5 was rejected before they were needed).

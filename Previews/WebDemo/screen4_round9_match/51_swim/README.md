# Screen 4 R9, `?s3=intunnel,water9` (6 November 2026, fifteenth session): the swimming test; not merged

- **The user's brief (about 20:30 UTC; `Design/ReferencePacks/2026-11-06_Screen4_Swim_Brief_from_user/`):** make her look
  as if swimming through the tunnel. The wide white-blue patch that appears behind her lower body when she lands should go,
  so the tunnel's blue water shows behind her. She should leave clear blue water where she was after a swipe, her lower fur
  dipping gently into the surface, the original's rounded blue water and lavender domes kept where the water touches her.
  No wake, spray, particles or anything trailing; visual only. Compare ORIGINAL | R7 | candidate at the start, +1 s and +2 s
  (seed 7, no steering), plus one left-right swipe and jump-and-landing clip. If it is not clearly more natural, keep R7.
- **The patch, checked in `heroSwell` first:** it is the swell itself, a crest ring 0.95 m out to each side of her (her body
  is about 0.52 m), 0.4-0.7 m tall, with a 0.3 m outer face. It rides with her and since water2 carries the original's
  foamy foreground water. In a jump it slumps (`air` 0.55) and the tunnel's blue water shows; on landing it returns.
- **Try A (`try_a/`, rejected):** the swell's opacity faded beyond 0.62 m round her. Her lower body then showed as a tall
  pink block down to the buttons: the swell is the water mound she sits in, and the floor's water is that far below her.
- **R9 (`try_b/`, the candidate) = R8 + only this:** the swell keeps its shape and opacity, so she stays dipped in it. But
  outside a band just below her contact edge (0.06-0.18 m below the crest) and within her width (0.55-0.8 m sideways), it
  takes the tunnel's own water at that place (`mwFloor`, `tunnel_r9_match_water.js`, made to continue the floor). So beside,
  behind and below her it reads as the tunnel's blue water; the original's water and domes stay only where it touches her.
  Nothing added; geometry, controls, jump, camera, tunnel and HUD untouched (`WATER9` in `tunnel_s4_bt.js`, the colour in
  `tunnel_s4_water2.js`).
- **Band at her base** (icy / saturated / mid / white / lavender %): start R7 31.4 / 19.3 / 12.0 / 19.6 / 10.0 -> R9 26.3 /
  37.2 / 11.8 / 11.3 / 8.2; +1 s R7 31.9 / 15.6 / 12.6 / 22.2 / 10.4 -> R9 27.6 / 32.4 / 11.5 / 14.1 / 9.3 (original 27.5 /
  19.6 / 11.4 / 18.6 / 15.3). R9 is bluer and less white than the original there, as the user asked.
- **Sheets:** `sheets/00_FULLRES_ORIGINAL_R7_R9_start.jpg`, `_plus1s.jpg`, `_plus2s.jpg`; `sheets/02_closeup_water_x1.6.jpg`,
  `03_moving_closeup_x1.4.jpg`.
- **The clip** (`scripts/record_clip.sh`, Pixel 7 screen, seed 7: Tap to Start 2.0 s, swipe left 3.0 s, right 3.9 s, jump
  4.8 s, the landing at frame 165): `videos/clip_R7.mp4`, `videos/clip_R9.mp4`, side by side `videos/clip_compare_R7_R9.mp4`,
  key moments `videos/clip_key_moments_R7_R9.jpg`. Every frame's position, lane, height and landing is identical in both.

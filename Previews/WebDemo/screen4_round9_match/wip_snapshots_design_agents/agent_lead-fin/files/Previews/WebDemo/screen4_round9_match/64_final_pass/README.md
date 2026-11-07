# Screen 4 final pass: `?s3=intunnel,structmatch` (7 November 2026, session `398ed88c`)

The user's FINAL mandate (about 15:15 UTC; `Design/ReferencePacks/2026-11-07_Final_Screen4_Reference_Pack_from_user/`) and
the washer-interior clarification (about 16:00 UTC; `Design/ReferencePacks/2026-11-07_Washer_Interior_Continuity_from_user/`),
built on the ACCEPTED `?s3=intunnel` (it stays the game). It continues the old account's `screen4-water-motion-engineer`
(`afb9a081`, stopped at 15:19 UTC on that account's 5-hour limit; its snapshot
`wip_snapshots_design_agents/screen4-water-motion-engineer_afb9a081/` restored over `8343381`, built and continued; its own
Checkpoint A evidence is `63_structmatch_A/`). One focused pass, no art-director review (the user's instruction). Bundle md5
`452f9568` (`WebDemo/game.bundle.js`); `index.html` byte-identical to the committed page.

## What changed (all behind the flag; code `WebDemo/src/tunnel_s4_struct.js`, flags `STRUCT_PARTS` in `tunnel_s4_bt.js`)

1. **Her (priority 1), `hero` (off: `,nohero`).** Screen 3's 0.95 / 1.07 / 0.95 stretch and its droplet flecks (the pale
   square flecks) off; her crown reshaped once at load into a smooth round arc (the engineer's `structCrown`); the fur graded
   toward the ORIGINAL's magenta under the white point; drawn 5 % larger round her centre and 0.07 m higher in the water
   (drawn only); the gap between her legs closed by a fur-shaded fill. Her silhouette box at Tap to Start
   (`proofs/her_silhouette_box.txt`, `scripts/her_box.py`: the largest pink blob in y .60-.93, x .15-.85 of the page):
   ORIGINAL 0.513 wide x 0.167 tall; ACCEPTED 0.480 x 0.162; NEW 0.517 x 0.164 (at +1 s 0.520 x 0.156, +2 s 0.520 x 0.162).
2. **The water round her (priority 2), `swell` (off: `,noswellgrade`).** Measured on the page at Tap to Start (y .70-.92),
   the accepted water's blue already has the ORIGINAL's saturation and value (median 0.42-0.46 / 0.96) and close to its white
   share (13-15 % against 18 %), but a greener hue (205 against 207-212) and less depth. So the accepted surf (it flows with
   her travel: swim2) is kept and its blue graded: hue turned 8 degrees toward the ORIGINAL's azure, saturation x 1.3, its
   darker parts deeper (x 0.7); its white foam untouched. **Tried and NOT used:** the engineer's water-space mounds, in three
   versions (tall separate forms; low wide merged waves; taller wide waves with saturated colour): all read as ice or gumdrops
   next to the ORIGINAL's surf, so by the user's rule ("If any new visual effect looks worse than the accepted version, do
   not force it") they are opt-in only (`,mounds`).
3. **Swimming (priority 3).** Her motion is the accepted swim2 motion (bob, lean on steering, squash on landing; the water
   at her flows with her travel; spray capped at 12 px), now with her larger, higher, rounder body. No new motion system.
4. **The washer's metal through the whole run (priority 4 and the clarification), `housing` (off: `,nohousing`).** The
   tunnel's own upper wall (`heroWalls`, round 4's lining tube along the whole drum) drawn as the washer drum's metal:
   lavender over the top, periwinkle then deep violet down the sides, deeper purple nearest the camera, a silver sheen arc
   and a pink reflection, raised ribs every 3.2 m with silver and gold-peach edges and rivets, broad brushed streaks; ribs,
   rivets and streaks are fixed to the drum and stream past. It covers the upper half and the sides from the camera to
   4.6-5.7 m ahead, the same distance all round, so its edge is a curved arc round the tunnel's centre as the ACCEPTED rim's;
   there it gives way to the blue tunnel through a soft lavender glow (no ring floats in front of the camera). It fades in
   after the tap, so Tap to Start is the accepted frame. Earlier settings that failed: 5.0-6.3 m with the sides shortened (the
   engineer's snapshot: a flat perforated ceiling, the user's "too much metal"), 4.3-5.3 m (only a strip under the HUD).
5. **Everything else (priority 5):** unchanged (proofs below).

## Evidence (`sheets/`; page captures with the HUD, `s3_shot.cjs`, seed 7, 538 x 1076; the same build and moments for both)

- `01_TAP_TO_START_ORIGINAL_ACCEPTED_NEW.jpg`
- `02_PLUS1S_PLUS2S.jpg`, `03_PLUS3S_PLUS5S.jpg`
- `04_LATER_PLUS4S_PLUS8S_PLUS14S_near_route_end.jpg` (the route loops just before the drum's end, about 30 m: `loopRun`
  in `game.js`; +4 s and +14 s are its last metres)
- `05_closeup_washer_lining_y08-55_...jpg`, `06_closeup_lining_ACCEPTED_vs_NEW_...jpg`
- `07_closeup_water_round_her_y60-95_...jpg`
- `videos/swim_steer_coins_new.mp4` and `videos/swim_steer_coins_accepted.mp4`: real gameplay at a Pixel 7's screen (412 x
  839 at 2x, seed 7, 9 s, 30 frames per game-second), real pointer input: Tap to Start at 2.0 s, swipes left 2.8 s, right
  3.6 s and 4.3 s, left 5.0 s, up (jump) 5.9 s, left 6.9 s, right 7.8 s; coins collected along the way (the HUD counts them).
  `videos/track_*.json`: the game state every frame.
- Frames: `frames_new/`, `frames_accepted/` (0, 1, 2, 3, 4, 5, 8, 14 s).

## Proofs

- **Identity** (`proofs/identity.txt`, `scripts/identity_all.sh`; `layer_diag.cjs` canvas renders, 768 x 1536): the
  committed accepted bundle `38466b67` against this build `452f9568`: **0 pixels differ** for `?s3=intunnel` at the start,
  +1 s and +2 s, `intunnel,noswim2`, `intunnel,blend`, `intunnel,water9` (+1 s) and the normal game (start, +1 s).
- **Gameplay** (`scripts/gameplay.sh`): `r2_func` (VW=135 VH=270) identical; `s3_func` differs only in the switch list and
  one draw call (+952 triangles: the fill between her legs); the motion trace (swipe, swipe, jump): **0 differences in 152
  frames x 17 fields** (t, phase, x, xv, lane, air, yAbs, surf, speed, hearts, coins, gems, socks, knocks, bumps, z, cam).
  The HUD at every captured moment shows the same coins, gems, socks and hearts for ACCEPTED and NEW.
- No console errors or warnings in any capture.

## Judgement (candid; no similarity percentage is claimed)

- Her: clearly rounder, broader and more magenta; her box now matches the ORIGINAL's within about 1 % of the frame.
- The lining: the top of the tunnel stays recognisably silver / lavender / purple washer metal through the whole run, in a
  curved arc round the blue tunnel. It is softer than the accepted rim (no gold ring), by design.
- The water: richer and bluer than the accepted surf, the same shapes. Its shapes still differ from the ORIGINAL's (fewer
  round bubbly forms and lavender glass blobs at her lower left); procedural mounds did not reach them.
- Swimming: the accepted motion, unchanged.

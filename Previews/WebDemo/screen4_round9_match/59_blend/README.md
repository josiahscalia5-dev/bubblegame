# Screen 4 candidate `?s3=intunnel,blend` (7 November 2026): NOT merged, for the user's review

**Analysis.** Seed 7, no steering, at the ORIGINAL's framing (767 x 1536). Measured with `scripts/profile.py`,
`contact_band.py` and `zone_water.py` on the pink mask of `pink_silhouette.py`; all values are px of the frame unless marked.
"Previous" is the accepted `?s3=intunnel` (bundle ea0c833c).

| measure | ORIGINAL | previous start / +1 s | NEW start / +1 s |
|---|---|---|---|
| her visible height (crown to lowest pink row) | 258 | 246 / 232 | 273 / 256 |
| crown width 20 / 40 / 60 px below her top | 151 / 209 / 241 | 87 / 164 / 193 | 98 / 173 / 206 |
| her centre above the middle waterline | about 64 (circle fit) | about 15 | about 60 |
| pink area | 57,802 | 53,289 / 47,905 | 61,442 / 56,181 |
| 4-64 px under her: lavender / pale / white / turquoise % | 41 / 29 / 20 / 1 | 0.4 / 52 / 17 / 4 | 9 / 64 / 20 / 0 |
| foreground: lavender / pale / white / cobalt % | 11 / 31 / 22 / 2.9 | 0.5 / 42 / 19 / 1.3 | 3.1 / 44 / 21 / 2.0 |
| landing (trace row 107): drawn drop / her height above the swell base | none | 59 px / 0.27 m | 0 px / 0.40 m |
| streaming past her, contact strip, 2.1-2.95 s (`flow_metric.py`) | | 343 px/s against a 167 wobble | 310 px/s against a 162 wobble |

In the ORIGINAL her round body sits on the water with her centre well above it. In the previous build the crest was level
with her centre, so only a narrow-topped, flat upper half showed.

**The change** (`WebDemo/src/tunnel_s4_blend.js`; visual only, gated on `BLEND_ON`; swim2 stays on):
1. Her drawn body: the vertical stretch x 0.88 about her centre, for a rounder crown. She is drawn 5 cm higher along the
   path's up, and the fur's light centre follows her.
2. The water: the heroSwell crest x 0.84, plus two rounded domes, a higher one at her front-left and a broad low one at
   her front-right. The mesh, footprint and draw call are unchanged.
3. The contact: a lavender tint along her waterline in front of her body, with the white pieces kept white. No foam,
   bubbles or white added.
4. The landing: the one-frame 17 cm drop is not drawn. A damped dip of at most 5 cm replaces it, and the swell follows it.

Tried and left out: deepening the lower face (it turned the white pieces pale).

**Files:**
- `tunnel_s4_blend.js` (new).
- `tunnel_s4_bt.js`: `BLEND_ON`, and the SWIM2_ON line as briefed.
- Hooks in `game.js`, `tunnel_r7_hero_water.js` and `tunnel_r9_match_water.js`.
- `game.bundle.js` rebuilt, md5 `38466b67`.

**Evidence:**
- `sheets/pixel7_{1_start,2_moving_plus1s,3_swipe_left,4_swipe_right,5_jump,6_landing}.jpg`, from the Pixel 7 clips (frames in
  `frames/pixel7/`).
- `sheets/framing768_ORIGINAL_previous_blend_{start,T1.0,T2.0}.jpg` (frames in `frames/`).
- `videos/clip_compare_ORIGINAL_previous_blend.mp4` (7 s).

**Proofs** (`proofs/`):
- (a) `identity/identity.txt`: ea0c833c against 38466b67 is **0 px** for `intunnel` (start, +1 s, +2 s), `intunnel,noswim2`
  (+1 s), `intunnel,water9` (+1 s) and the normal game (start, +1 s).
- (b) `s3_func`: only the switch list differs. `r2_func` (VW=135 VH=270): byte-identical (`r2_func_compare.txt`).
- (c) `motion_trace_gameplay.txt`: 152 frames x 17 fields (gameplay plus the camera), 0 differences. The clips' HUD coin count
  is 1-2 apart; that is recorder frame timing (`53_swim/gameplay/coin_timing_check.md`).

**Judgement (mine; no art director run, as briefed).** Closer to the ORIGINAL at the start, while moving and above all at
landing: her round body shows above the water with her arms clear, the water is a lower rounded band with a front-left
dome, and she is no longer swallowed after the jump.

**Still different:**
- her waterline is a fairly even line, not distinct glassy domes;
- the lavender under her is weaker than the ORIGINAL's (9 % against 41 %) and reads pale periwinkle;
- the lower face is still pale blue;
- she stands 15 px taller above the water at the start;
- the jump is still the game's somersault.

# Screen 4 candidate `?s3=intunnel,blend` (7 November 2026): NOT merged, for the user's review

**Analysis** (seed 7, no steering; the ORIGINAL's framing, 767 x 1536; `scripts/profile.py`, `contact_band.py`, `zone_water.py`,
the pink mask of `pink_silhouette.py`; px of the frame). Previous = the accepted `?s3=intunnel` (bundle ea0c833c).

| measure | ORIGINAL | previous start / +1 s | NEW start / +1 s |
|---|---|---|---|
| her visible height (crown to lowest pink row) | 258 | 246 / 232 | 273 / 256 |
| crown width 20 / 40 / 60 px below her top (roundness) | 151 / 209 / 241 | 87 / 164 / 193 | 98 / 173 / 206 |
| height / widest (arms included, 372 / 364 / 364) | 0.69 | 0.68 / 0.63 | 0.75 / 0.70 |
| her centre above the middle waterline | about 64 (circle fit) | about 15 | about 60 |
| pink area | 57,802 | 53,289 / 47,905 | 61,442 / 56,181 |
| water 4-64 px under her: lavender / pale / white / turquoise % | 41 / 29 / 20 / 1 | 0.4 / 52 / 17 / 4 | 9 / 64 / 20 / 0 |
| foreground zone: lavender / pale / white / cobalt % | 11 / 31 / 22 / 2.9 | 0.5 / 42 / 19 / 1.3 | 3.1 / 44 / 21 / 2.0 |
| landing (trace row 107): drawn drop / above the swell base | none | 59 px / 0.27 m | 0 px / 0.40 m |
| water streaming past her, contact strip, 2.1-2.95 s (`flow_metric.py`) | | 343 px/s vs 167 wobble | 310 px/s vs 162 wobble |

In short: in the ORIGINAL her round body sits on the water with her centre well above it. In the previous build the
crest of the water was level with her centre, so only her upper half showed: a narrow-topped, flat dome.

**The change** (`WebDemo/src/tunnel_s4_blend.js`; all of it visual only, gated on `BLEND_ON`; swim2 stays on):
1. Her drawn body: the vertical stretch x 0.88, about her centre, gives a rounder crown (0.95 / 1.07 / 0.95 becomes about
   0.95 / 0.94 / 0.95). She is drawn 5 cm higher along the path's up, and the fur's light centre follows her.
2. The water round her lower body: the heroSwell crest x 0.84, plus two rounded water domes, a higher one at her front-left
   and a broad low one at her front-right (the ORIGINAL's). The mesh, footprint and draw call are unchanged.
3. Colour at the contact: a lavender tint on the face along her waterline in front of her body (her pink seen through the
   water); the face's white pieces stay white. No foam, bubbles or white added.
4. Landing: the one-frame 17 cm drop is not drawn. In its place a damped dip and resurface (at most 5 cm), and the swell
   sinks with that drawn dip.

Tried and left out: a deepening of the lower face (it turned the white pieces pale). The runtime trials (live DevTools) are
in this session's notes only.

**Files:** `WebDemo/src/tunnel_s4_blend.js` (new); `tunnel_s4_bt.js` (`BLEND_ON`, and the SWIM2_ON line as briefed);
hooks in `game.js` (import, `blendPose` after the squash, `blendFurCentre`), `tunnel_r7_hero_water.js` (`blendSwell` before
the build; the swell's dip reads her drawn height), `tunnel_r9_match_water.js` (`blendSwellGLSL`). `game.bundle.js` was rebuilt
(md5 `38466b67`).

**Evidence:**
- `sheets/pixel7_{1_start,2_moving_plus1s,3_swipe_left,4_swipe_right,5_jump,6_landing}.jpg`: ORIGINAL | previous | NEW, from the
  Pixel 7 clips. The full-resolution frames are in `frames/pixel7/`.
- `sheets/framing768_ORIGINAL_previous_blend_{start,T1.0,T2.0}.jpg`, with `frames/{previous,blendB}_*/base_canvas.png`.
- `videos/clip_compare_ORIGINAL_previous_blend.mp4` (7 s, two swipes and a jump), `clip_key_moments_previous_blend.jpg`,
  `clip_previous.mp4`, `clip_blend.mp4`.

**Proofs** (`proofs/`):
- (a) `identity/identity.txt`: committed ea0c833c against rebuilt 38466b67. `intunnel` (start, +1 s, +2 s),
  `intunnel,noswim2` (+1 s), `intunnel,water9` (+1 s) and the normal game (start, +1 s): all **0 px**.
- (b) `s3_func_blend.txt` against `58_swim2_accepted/gameplay/s3_func_intunnel_accepted_swim2.txt`: only the switch list
  differs (`s3_func_compare.txt`). Gameplay fields, hidden layers and draw calls are equal. `r2_func_blend.txt` (VW=135
  VH=270) is **byte-identical** to the accepted report (`r2_func_compare.txt`).
- (c) `motion_trace_gameplay.txt`: 152 frames x 17 fields (the 16 gameplay fields plus the camera), **0 differences**.
  The clips' HUD coin count is 1-2 apart; that is the recorder's frame timing (`53_swim/gameplay/coin_timing_check.md`).

**Judgement (mine; no art director run, as briefed).** Closer to the ORIGINAL at the start, while moving and above all at
the landing:
- her round body shows above the water, with her arms clear of it;
- the water is a lower, rounded band round her lower body, with a dome at her front-left;
- she is no longer swallowed for 0.3 s after the jump.

What still differs:
- her waterline is still a fairly even line, where the ORIGINAL has distinct glassy domes;
- the lavender under her is weaker than the ORIGINAL's (9 % against 41 %), and the band reads pale periwinkle rather than
  clear violet domes with dark cores;
- the face lower down is still the pale blue of the previous build;
- she is 15 px taller above the water than the ORIGINAL at the start;
- the jump is still the game's back somersault.

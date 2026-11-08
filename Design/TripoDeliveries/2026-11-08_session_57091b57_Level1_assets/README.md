# Tripo Level 1 assets (8 November 2026, session 57091b57, branch `ccr-b67aeffb-d94mmq`)

Made under the user's standing Tripo authorization of 8 November ("use my available Tripo credits ... without asking me every
time"; no purchases, no automatic recharge, no subscription change). Every input is a crop of the ORIGINAL approved 12-screen
board (`Design/ReferencePacks/2026-11-08_Approved_References_FRESH_Match_Prompt_from_user/00_ORIGINAL_APPROVED_FULL_BOARD.png`),
enlarged with Lanczos; nothing was generated from text, and no generated image was used as a reference.

## Credits

| | |
|---|---|
| Before (free `tripo balance`, 14:24 UTC) | 640 credits, 0 frozen |
| Jobs | 2 x image-to-model, Tripo P2 (`P2-20260801`), `texture_quality=detailed`, `pbr=true`: 120 credits each (the dry run's estimate and the task records' `credits_consumed`) |
| After (14:30 UTC) | **400 credits**, 0 frozen |

## Why these two (chosen by comparing the board with the current game, `00_board_crops_vs_current_game_before.jpg`)

- Existing models first (`00_existing_models_castle_sock_brushes.png`): `WebDemo/models/sock.glb` already matches the board's socks
  (white, purple-striped cuff, face): KEPT, no job. `castle.glb` is a pink and gold gateway with towers, close to board panel 09's golden
  arch but not the board's Bubble Wash Kingdom castle (panels 01, 02, 08). The brushes' difference from board 05 is mainly their size and
  placement (code), not the model. The grime ball (board 07 / panel 09) is code-built (a faceted ball with box eyebrows) and reads as a dot.

## Results

| Job | Input | Task | Result | Decision |
|---|---|---|---|---|
| Enemy (board panel 09's grime ball) | `inputs/enemy_board_p09_x12.png` (the ball's circle on white, sha256 `eaf82b29...`) | `f53f85e8-8636-4b8e-9f87-cd6127924fd6` | `enemy/tripo_enemy_raw.glb` (sha256 `f03903fb...`, 6.4 MB, 4,903 triangles, 3 x 4096 textures, glTF Validator 0 errors): a glossy cobalt ball with the board's angry pink eyes, dark brows and pink mouth shape. Its base colour already matches the board's ball (mean RGB 39 77 156 against the board's 33 71 155, hue 219 against 222 degrees), so it was NOT recoloured | **CANDIDATE** (opt-in `?s3=...,level1,tripo1`), waiting for the user |
| Castle (board panel 02, the Select Level card) | `inputs/castle_board_p02_x5.png` (sha256 `3bb0d961...`) | `82a3ebae-7f93-4fea-a608-a6f39eddaf88` | `castle/tripo_castle_raw.glb` (sha256 `430eeb91...`): a flat painted card on a base plate, not a castle (`01_tripo_raw_vs_board_inputs.jpg`) | **REJECTED**; kept only as the record. `castle.glb` stays |

The castle failed because the crop is a painted scene that fills the frame to its edges: Tripo had no silhouette to separate. Background
removal (rembg 2.0.87, models `isnet-general-use` and `u2net`) could not separate it either (`03_castle_background_removal_failed.jpg`),
so no second castle job was started. **What would make a castle job reliable:** a larger, clean view of the board's castle (for example
the original Home-screen art without the logo, or the castle alone), then one job from it.

## The enemy prepared for the game: `WebDemo/models/l1_enemy_tripo.glb` (sha256 `62ea51ce...`, 429 KB)

`WebDemo/tools/tripo/glb_textures.cjs` (dump / pack with glTF Transform's core): the colour texture reduced to 1024 px (JPEG 90), the
normal and metal / roughness maps to 512 px; the model turned -90 degrees about +Y so its face points +Z like the game's own looks.
Geometry unchanged (4,903 triangles). glTF Validator: 0 errors, 1 warning (tangents generated at runtime, harmless).
`02_enemy_prepared_for_game.png` (front, three-quarter, side). Contact sheets: `WebDemo/tools/tripo/glb_sheet.cjs`.

In the game: `WebDemo/src/tripo_l1.js` (looks only; hit boxes, lanes, patrols, pops untouched). Evidence and proofs:
`Previews/WebDemo/screen4_round9_match/72_tripo1_enemy/README.md`.

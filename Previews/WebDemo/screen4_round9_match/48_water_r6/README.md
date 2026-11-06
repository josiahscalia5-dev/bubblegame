# Screen 4 water R6 (`?s3=intunnel,water6`), 6 November 2026, fifteenth session; refined by R7 (`../49_water_r7/`)

- **The target:** the ORIGINAL approved Screen 4 only.
- **The user's brief (about 19:20 UTC):** make measurable progress on the foreground water round the pink character now:
  darker, sharper, more rounded, more naturally structured, meeting her cleanly with an irregular flowing edge (no hard
  horizontal cut, no jagged white zigzag, no separate foam cushion). Fix it at the source with the existing tools; no new
  objects; one focused, reversible correction, at most one evidence-based refinement; keep the accepted build.
- **Status:** a test switch only, not merged. The accepted `?s3=intunnel` and R5 are unchanged: 0 differing pixels
  (`../49_water_r7/identity_proof_raw.txt`).

## The diagnosis (R5's start frame, same-frame layer ablations; `diag/`)

1. **The contact edge** (`diag/edge_check.md`, `scripts/edge_check.py`).
   - In front of her, the water face's (`heroSwell`) top edge is its own geometric crest (`swellFront`), 10-60 px HIGHER
     on her body than the original's lobe line, in every column but one.
   - Under it, the face draws its texture opaque over the patch where the original has her body (exemplar-filled, the
     mottled lavender-white band).
   - Her model goes on, fully lit, behind the face, to about y 1381 (`diag/behind.jpg`). So cutting the face back cannot
     open a gap.
2. **The paleness** (`diag/zones_start.md`, `scripts/zones.py`).
   - The face's own colour already matches the original: the bottom water with the face alone is 55.9 % saturated blue,
     against the original's 53.5 %.
   - What washes it out is the opening's soap suds and foam bubbles (`opening.js`, `openingLook`, drawn round her in the
     in-tunnel start): 36.6 % with them, 48.5 % without.
   - Her splash lumps, curls and waterline bubbles change it by 1-2 points; bloom by about 2-4.

## The change (one correction: the existing water face shows the original's water at its true edge)

- **The face cut where the original draws her body.** `WebDemo/tools/screen4/derive_water_contact.py` takes her outline
  from the original (the pink component, her darkest magenta fur included, holes filled, dilated 1 px, anti-aliased) as
  `textures/screen4/foreground_water_original_r6_body.png`. The face discards there (`tunnel_s4_water2.js`), with the same
  place and flow as its colour. Her own fur then shows down to the original's lobe outline, which is the water's top edge.
- **The colour texture** `foreground_water_original_r6.png` = R4's, with the 11 px ring round her body back to the
  original's own pixels (R4 had filled it), so the original's lobe tops reach her fur (`diag/r6_texture.jpg`,
  `diag/r6_edge.jpg`). R4's texture is byte-identical (md5 `9115e1de...`).
- **The opening's suds and foam bubbles hidden** under `water6` (still built and moved, with their own random numbers).
- Nothing added. Registration (R5), material, distortion, bloom, her model and the gameplay are unchanged.

## Measured (the same frames)

- **The band at her base** (y 0.80-0.97, pink, gold and buttons left out; `44_water_material/diag/band.py`):

  | start | icy pale | saturated blue | mid blue | white | lavender | mean saturation |
  |---|---|---|---|---|---|---|
  | original | 27.5 % | 19.6 % | 11.4 % | 18.6 % | 15.3 % | 0.35 |
  | accepted | 42.3 | 17.5 | 23.1 | 14.4 | 0.9 | 0.37 |
  | R5 | 29.9 | 14.1 | 11.8 | 22.6 | 15.0 | 0.31 |
  | **R6** | **26.9** | **19.0** | **12.4** | **20.7** | **12.8** | **0.34** |

- **The bottom water between the buttons:** saturated blue 36.6 -> 48.6 % (the original 53.5), icy pale 26.7 -> 17.2 (17.0).
- **Moving (+1 s):** the band's white is still 37.1 % (the original 18.6). The same-frame ablation (`diag/band_T1_ablations.md`):
  - the game's own spray pool (`fx`) is the cause: 24.8 % without it;
  - the opening's spray pool changes nothing;
  - her splash meshes together change about 1 point.
  - Refined in R7.
- **The face drawn alone** (`diag/R6_face_alone_start.jpg`): its top edge in front of her is the original's lobe outline; a
  few thin purple fringe pixels along the cut.

## Files

- `final/{start,T1.0,T2.0}/`: the canvases and pages (seed 7; start = the in-tunnel start view, then 1.0 and 2.0 s after
  the tap, straight).
- `sheets/01_FULLRES_original_accepted_R6.jpg`, `01b_FULLRES_original_R5_R6.jpg`, `02_closeup_water_start_x1.4.jpg`,
  `03_closeup_water_moving_T1.0.jpg`, `_T2.0.jpg`.
- `diag/`: the ablation definitions (`abl_*.json`), the tables and the crops. `scripts/`: the sheets and measurement scripts.

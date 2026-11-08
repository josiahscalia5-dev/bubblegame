# scene07 pass 9: the chamber's walls and vault restored (8 November 2026, session ce30359f). OPT-IN, NOT approved

Authority: `Design/ApprovedScreens/09_Avoid_Enemies.png` ("Avoid Enemies!", the user's Screen 09 / board 07).
Switch: `?s3=intunnel,structmatch,home,level1,tripo1,scene07` (scene07 is opt-in; without it nothing changes).
Bundle: `52edd119` (pass 8: `d2a666bd`).

## The one correction
Pass 8's `WebDemo/src/tripo_l1.js` line 174 ended with a comment, `// (pass 8: the walls keep their glow, the vault glows a dim
periwinkle) const shell = new THREE.Mesh(sg, vaultM); shell.name = 'scene07_chamberShell'; root.add(shell);`, so the statement that
creates and adds the chamber's walls and vault was part of the comment: they were never drawn (`scene07_chamberShell` was absent from
pass 8's bundle). Found by the lighting-visual-matching agent and confirmed by the game-art-director agent. Pass 9 moves that
statement onto its own line. Nothing else changed.

## Comparison at u 233 (seed 7, 412 x 915, route "upper", same inputs)
`01_original_pass8_pass9.jpg` (approved / pass 8 / pass 9); frames `frames/pass9/upper_u230.0.jpg`, `upper_u233.0.jpg` (pass 8's in
`../74_scene07_avoid_enemies/frames/pass8/`).

Measured against the approved image resized to 412 x 915 (LPIPS AlexNet and mean CIEDE2000 per pixel; lower is closer), metrics
Python `~/.bubblewash-tools/metrics/bin/python`:

| Region (fraction of height) | pass 8 | pass 9 | approved |
|---|---|---|---|
| upper 0.18-0.50: LPIPS | 0.792 | **0.710** | - |
| upper: mean ΔE2000 | 30.2 | 30.6 | - |
| upper: mean HSV saturation / value | 95 / 246 | 144 / 243 | 115 / 213 |
| lower 0.50-0.83: LPIPS | 0.835 | 0.838 | - |
| play area 0.18-0.83: LPIPS | 0.821 | **0.782** | - |

Reading: the enclosed vault replaces pass 8's pale open sky; perceptually closer in the upper half, colour distance unchanged, the vault
now more saturated than the original's upper half and a plain surface where the original shows dense, bright machinery.

## Proofs
- Gameplay: `proofs/route_upper_scene07_pass9.json.log` equals pass 8's route log (`../74_.../proofs/route_upper_scene07_pass8.json.log`):
  the same events, the same states at every frame (renderer counters aside), no console errors.
- Identity without scene07 (accepted `?s3=intunnel`, the normal game, the 3D opening, level1 flow at start and 20 s), pass 8 build vs
  pass 9 build: `proofs/identity.txt` (`scripts/identity.sh`).

## Verdict
- game-art-director agent: **KEEP** (pass 8's upper half read as an open pale sky with a sun; the original is an enclosed machinery
  chamber, and pass 9 encloses it). What it still gets wrong (its measure, rows 0.18-0.40): the vault is one flat blue-violet (91 % of
  pixels in hue 220-260°; the original about 50 % in 260-340°: violet, magenta, pink), saturation 156 vs the original's 120, brightness
  spread 11 vs 39. Next single correction: `SCENE07.chamber.vault` 0x8f9cff -> about 0xf2c4ec (pass 10); after that, density
  (machinery raised into the vault band).
- The user: not reviewed yet.

## Pass 10: vault tint 0x8f9cff -> 0xf2c4ec (`SCENE07.chamber.vault`; bundle `a8454993`). KEPT (marginal), NOT approved
Sheet `02_original_pass9_pass10.jpg`; frames `frames/pass10/`. Gameplay: `proofs/route_upper_scene07_pass10.json.log` equals pass 8's
(events, states, no console errors). Measured at u 233 (upper band 0.18-0.50 / play area 0.18-0.83):

| | pass 9 | pass 10 | approved |
|---|---|---|---|
| upper LPIPS | 0.710 | **0.706** | - |
| upper mean ΔE2000 | 30.6 | 30.6 | - |
| upper hue 260-340° (violet-pink) / 220-260° (blue-violet) | 16 % / 74 % | 70 % / 20 % | 36 % / 28 % |
| upper saturation / value (spread) | 144 / 243 (16) | 148 / 240 (16) | 115 / 213 (39) |
| play area LPIPS | 0.782 | **0.780** | - |

Reading: the vault moved from blue-violet into the original's pink-lavender family but overshoots it and stays a flat, too-saturated
surface; not less like the original, so kept. The larger gap is density: the original's upper half is machinery (pass 11).

## Pass 11: a second tier of the game's own machinery IN the vault band (`SCENE07.upper.vaultItems`, 8 items). CANDIDATE (scratch build)
Sheet `03_original_pass10_pass11.jpg`; frames `frames/pass11/`; gameplay `proofs/route_upper_scene07_pass11.json.log` equals pass 8's.
Upper band at u 233: LPIPS 0.706 -> 0.712, ΔE2000 30.6 -> 32.0, Canny edge density 0.065 -> 0.091 (approved 0.163), brightness spread
16 -> 21 (approved 39). Cost: about 245k triangles more, inside the stretch's draw distance only.
- game-art-director: **KEEP, narrowly**: the shape moves toward the original's dense machinery skyline; the loss is colour only (the
  models' copper and brown appear nowhere in the original; the orange pipe elbow top right crowds the HUD). Its test for the next step:
  recolour only these 8 machines; keep pass 11 + 12 only if the upper ΔE drops below 30.6 and LPIPS is 0.706 or lower, else revert both.

## Pass 12: the vault machines recoloured to the original's palette. CANDIDATE (scratch build)
Each vault item gets its own material copies; the texture is desaturated to 25 % and multiplied by a cycled tint (pink 0xff9ed8, sky
blue 0x9ccfff, gold 0xffd86a), in the diffuse and the emissive glow (0.28 -> 0.38). The first tier is untouched.

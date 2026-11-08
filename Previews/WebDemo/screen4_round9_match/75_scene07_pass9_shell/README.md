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
Pending (the game-art-director agent's keep / revert, then the user's review).

# Bubble Wash Kingdom — Tripo GLB review and safe-import handoff

These are six user-supplied Tripo models. They are **candidates**, not approved replacements for the existing playable game.

Each contains one textured mesh and has **zero glTF animations and zero skins**; real animation and rigging remain separate work.

| Asset | File size | Triangles | Initial assessment |
|---|---:|---:|---|
| cartoon girl 3d model.glb | 3.01 MiB | 10,755 | Visually promising full-body girl; static, unrigged, no animation. Check visual identity; prepare rig and arm/head animation only if suitable. |
| pink fluffy creature 3d model.glb | 4.59 MiB | 9,796 | Needs strict rear-angle silhouette comparison against ORIGINAL CLASSIC Screen 4; visible prominent protrusions/spiky look differ. Do NOT replace approved mascot by default. |
| purple basket 3d model.glb | 2.14 MiB | 9,679 | Recognizable purple basket. Check whether vent holes and interior are physically open; test tip pivot and hand contact. |
| sock character 3d model.glb | 3.74 MiB | 10,244 | Promising smiling collectible. Needs animation/collection behavior and model scale alignment. |
| soft plush towels 3d model.glb | 4.66 MiB | 10,076 | Appears to contain three towels in one mesh; toss sequence needs individually controllable pieces or separated geometry. |
| washing machine 3d model.glb | 2.28 MiB | 9,461 | Plausible lavender/silver body and gold ring. Verify central opening is physically traversable by mascot/camera; dark cavity in preview is not evidence of working tunnel. |

## Required test before integrating

1. Inspect the six GLBs from front, side, and rear inside the *existing* Bubble Wash Kingdom Three.js project; check materials, axes, dimensions, texture colors, camera framing, and memory/performance on target mobile devices.
2. **Do not replace the mascot or tunnel by default.** Compare the pink mascot from the real Screen 4 rear gameplay camera against the user’s ORIGINAL CLASSIC approved Screen 4, not a later storyboard variant. Assess shape, fur, appendages, relative scale, blue water contact, and silhouette.
3. Verify the washer is physically hollow at the central entry and can connect seamlessly to the existing real water tunnel. Do not replace that tunnel with a solid or painted fake surface.
4. For the girl: make a clean animation-friendly rig or use procedural movement if practical; show expressive eyes/head, basket pick-up, wrist rotation, laundry toss. The supplied mesh currently has no skeletal skin.
5. Basket holes/interior and loose clothing need inspection. The supplied towels are visually a three-towel cluster; separation may be necessary for individual toss objects.
6. Keep UI, water, HUD, collectibles, branches, controls, collisions and existing approved work intact. Use a reversible checkpoint and integrate only after side-by-side A/B tests demonstrate improvements.
7. Build and record real gameplay tests (washer entry, steering, forward travel, coins/socks). Provide exact file changes, verified Git commit, and honest comparisons.
8. Do not spend Tripo credits unless the user separately approves a stated job/cost. Never include API credentials in source, logs, or deliverables.

## IMPORTANT

The included PNG contact sheet is rendered directly from the attached GLB files and is not a generated illustration. All GLBs and their hashes are listed in asset_manifest.json.

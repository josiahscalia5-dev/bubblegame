# Bubble Wash Kingdom — Screen 4 Visual Handoff

## AUTHORITY
01_APPROVED_ORIGINAL_ONLY_AUTHORITY.png is the authentic approved artwork and the ONLY aesthetic authority. All other images explain, compare, or document an unfinished experiment. Do not use concept illustration as the target.

## What is wrong / corrections to attempt in order
1. **Foreground water geometry/contact** — retain pink fuzzy silhouette fully above water; recreate irregular, low, smoothly joined rounded water lobes and subtle translucent lavender pearls immediately ahead of and beside lower edge; never occlude significant pink fur. No pillow mesh, separate fins, giant foam cushion, or imposed balloon pile.
2. **Blue palette** — current water is too pale/icy. Use local changes to the water material transparency/composite over the lighter floor, bloom, emissive/tonemap, and base pigment to restore deeper cobalt/royal blue while maintaining cyan glow and distinct near-white crests. Avoid global color grading changes.
3. **Texture detail / distortion** — current water retains smeared stretched texture and broad repeated white strokes. Inspect texture coordinate flow, wrapping, texture filtering, mipmaps and water shader blur; adjust the existing shader to preserve small sharp irregular broken highlights and glints in motion.
4. **Playable interaction** — show continuous forward motion with the character riding ON TOP of the moving blue water, no submersion, functional steering, coins, socks, gems, brushes, HUD, abilities, pause and restart. No introduction scene.

## Evidence protocol
* Capture screenshot of APPROVED original; existing `?s3=intunnel` accepted build; new candidate behind its own flag. **Same camera, viewport, seeded state, pose, and game position.** If starting from a different clock time, align on game position rather than comparing dissimilar moments.
* Save water-contact crops at full resolution and unaltered renders.
* Add layer-isolation captures (foreground water surface alone / beneath water floor alone / without bloom / without transparent veil). Spector.js should identify the draw calls and render targets responsible.
* Video: straight travel + steering, check 0s, 1s, 2s and 4-6s, maintain collision and pickup behavior.
* Use OpenCV/scikit-image and LPIPS to guide diagnosis; neither a favorable metric nor pixel equality to previous build establishes similarity to original. Independent side-by-side visual review decides.
* If candidate does not clearly improve the comparison, revert it and keep the accepted build.

## Files in this kit
* 01 - Original authentic full reference.
* 02 - The user's latest actual 5-way test image (ORIGINAL / ACCEPTED / water2 c1 / R1 / R2).
* 03 - Enlarged annotated original water target, no fabricated replacement image.
* 04 - Enlarged latest candidate comparison; source is a small contact sheet so do not infer texture fidelity beyond original resolution.
* 05 - Earlier full-scene comparison for context; NOT current R2.
* 06 - Ready-to-send strict Claude prompt.
* 07 - Technical links to verified tool documentation and implementation suggestions.

## Tool roles
* Already used in this project, per Claude reports: **Spector.js** (draw-call & shader diagnosis), **Playwright/Chromium** (repeatable real screenshots/motion), **OpenCV/scikit-image** (region comparison), **LPIPS/Optuna** (secondary metrics and targeted tuning), **Blender** (only if geometry is fundamentally required). Do not waste credits reinstalling them.
* Optional NEW inspection tool: **Needle Inspector** extension on developer's Chrome browser. Free scene inspection, optional Pro editing/MCP. Need not install if current scene-inspection scripts already expose everything.
* Do not use Tripo/Meshy to model moving water. Reserve for standalone character/collectible/brush geometry only if necessary.

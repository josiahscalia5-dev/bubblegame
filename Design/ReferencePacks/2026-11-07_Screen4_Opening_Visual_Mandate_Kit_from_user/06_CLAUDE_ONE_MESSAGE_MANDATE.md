# THE SCREEN 4 OPENING VISUAL-FIDELITY MANDATE — Bubble Wash Kingdom

Claude Code: This is a **single, high-priority, binding instruction** for my EXISTING Bubble Wash Kingdom Three.js game. It supersedes earlier casual suggestions to spend time on small water effects, extra bubbles, or swim animation. **Do not interpret my request as asking for another small cosmetic pass.** Read this entire brief and inspect the attached authentic references before acting.

## NON-NEGOTIABLE OBJECTIVE

At the **Tap to Start opening of Screen 4**, and during the **first 0–3 seconds after tapping Start as the pink character travels into the laundry-machine tunnel**, the actual PLAYABLE mobile game should reproduce the **complete composition and art direction** of `01_AUTHENTIC_ORIGINAL_APPROVED_SCREEN4.png` as faithfully as technically achievable. It must immediately look like THAT approved scene, not merely a generically similar colorful tunnel. The ORIGINAL is the sole visual source of truth; do not mistake any R7/R9/swim2/blend/fidelity experiment, image enlargement, or AI-generated alternative for the target. Existing game frames are BEFORE comparisons, not approved art.

This means **ALL visible elements together**: camera/perspective and framing; lavender-and-gold washer mouth/bevel and continuing concentric rings; long deep cobalt/cyan tunnel and luminous warm center; foreground blue/turquoise/glassy rounded waves; broad, round, plush pink mascot sitting visibly ON the water with the lower edge naturally occluded by water; scale/location of pink-white-blue brushes; coins, diamond, smiling sock, clear iridescent bubbles, highlights; and the heart/coin/gem HUD, sock mission and bottom power buttons. Match their relationships, relative sizes, layer order, visual density and lighting—not just their presence. **The first impression of the full scene is more important than minor motion polish.**

## STRICT PRIORITY ORDER

**P0 — visual layout and geometry of the opening (must address first):** scene composition and camera/FOV/aspect ratio; washer rim visibility; tunnel length, ring spacing and vanishing point; water geometry/height/color and character-to-water integration; broad pink rounded silhouette; prop sizes/placements/depth; overall readable composition.

**P1 — visuals in motion:** preserve this same scene identity while advancing for +1, +2, +3 seconds—no disappearing washer mouth, empty top blue wall, cream corner bars, lost ring depth, pale central fog, or props shifting out of proportion. The 2D reference is a design target for moving views, not a demand that distinct gameplay frames are identical pixels.

**P2 — movement refinement:** only after P0/P1 are credibly improved, consider tiny bob/jump/landing/swim cosmetic adjustments. Preserve current accepted gameplay throughout. Do **not** turn this job into an animation-first project.

## REQUIRED EVIDENCE AND SOURCE INSPECTION BEFORE ANY CODE

1. Confirm exact repository, working branch, clean/dirty tree, latest pushed checkpoint, 5-minute autosave, and current accepted `?s3=intunnel` (accepted swim2). **The fidelity candidate was judged only marginally better (64/100 vs 60/100 subjective art-director score) and has a dark hole and balloon-like water shapes; it was NOT accepted.** Do not merge it wholesale or replace swim2.
2. Read `CLAUDE.md`, `HANDOFF.md`, the account-transfer handoff, and the actual recent swim2/blend/fidelity reports. Inspect the existing visual references already tracked in the repository, plus these attached files. Do not redo analyses already completed without a concrete reason.
3. Use the existing `bubble-wash-screen-matcher` skill, `screen4-water-motion-engineer`, and the already enabled `parallax-threejs` tools (`threejs-devtools-mcp`, `chrome-devtools-mcp`, `playwright-mcp`) to inspect the LIVE Three.js scene graph, camera, render order, meshes, shaders, texture/material parameters and screen coordinates. Use Blender/other installed utilities only if needed for an identified geometry problem. No new generic plugins and no parallel army of agents. Spector is optional and can remain skipped.
4. Generate CURRENT accepted-build screenshots directly from the playable runtime at the opening Tap to Start state and at deterministic +1, +2, +3 seconds. Compare to the untouched original at an honestly matched portrait crop and safe-area framing (the source is 748 × 1536; do not stretch it to fake a match to Pixel 7). Make a region-by-region structural mismatch report for every priority zone.
5. For **each major mismatch**, report: what the original shows; what the live game actually shows; the EXACT responsible scene object/file/camera/material/geometry; whether the cause is structural, art-asset, staging, lighting, color or layering; the minimal corrective solution; expected visual benefit; and uncertainty. Distinguish proven causes from hypotheses.

## HARD VISUAL FAILURE CONDITIONS TO EXPLAIN OR FIX

- Pink mascot looks like a low flat mound, a skinny peaked egg, or is buried under a blue sheet instead of a broad, fluffy dome sitting above the water.
- Rigid waterline, opaque/white film, or too much pale icy foam; purple jelly-bean/balloon blobs; a grey/dark hole beneath the mascot; waves that appear attached to her as objects.
- Pale washed-out water or white fog replacing the original's saturated cobalt/cyan color, distinct rounded blue currents, and *localized* glassy lavender-white reflections at the waterline.
- Lavender/gold washer mouth and ring layers are missing during gameplay; the upper area is dominated by unrelated blue wall panels or bright cream diagonal bars.
- Tunnel looks too short/empty, center glow is wrong, or coin/diamond/sock/brush/bubble size and depth do not read like the original.
- Opening HUD/layout is no longer coherent or is hidden/cropped because of the viewport change.

## REQUIRED DELIVERABLE NOW — DIAGNOSE AND DESIGN, NOT BUILD

**Stop after a concrete architecture-level repair proposal for approval.** Give me (A) a concise plain-language root-cause summary; (B) a prioritized table of P0/P1 mismatches with source file/object names and exactly what must change; (C) the *smallest coherent structural rebuild* that would produce a materially better full-frame match; (D) any needed new geometry/materials/original-based textures/asset files and why, with free/usable alternatives where appropriate; (E) a realistic implementation and Claude usage/credit-risk estimate, plus what can be reused. Explain if a camera-guided hybrid 2.5D/3D decorative layer is superior for fidelity, but retain a real responsive 3D game and depth-correct gameplay objects. State what cannot be inferred exactly from the single 2D concept reference. **Ask for approval before altering game code.**

## ONLY AFTER I APPROVE THAT PLAN

Implement **ONE** isolated visual-first candidate behind its own flag, keeping accepted swim2 recoverable and visually unchanged. Do not merge, overwrite the accepted bundle, force-push, start repeated experimental rounds, or interfere with the autosaving session/other branches. Target the entire opening scene with one integrated composition pass. Keep Three.js/gameplay physics, movement controls, coin/gem/sock pickups, abilities, HUD and level continuity intact. Stop instead of spending heavily if the proposed fix has no demonstrated full-scene visual advantage.

Prove it using real mobile-portrait game captures: `ORIGINAL | ACCEPTED swim2 | NEW` at pre-tap, start, +1s, +2s, +3s and key swipes/jump/landing; full-size tunnel and character-water close-ups; short actual playable gameplay video; a numbered list of corrected vs remaining differences; performance and automated gameplay tests; and one independent `game-art-director` critique. No inflated similarity score, no unrelated mockup or rendered illustration passed off as real gameplay. Save source, report, media and rollback steps to GitHub; verify the push. Present results for MY sign-off.

**One final instruction:** Do not answer with "I'll improve the water" and begin more shaders. Show exactly how you will recreate the full ORIGINAL opening composition, which structural source objects you will change, and why the resulting playable scene should look materially more like the approved image. That is the mandate.

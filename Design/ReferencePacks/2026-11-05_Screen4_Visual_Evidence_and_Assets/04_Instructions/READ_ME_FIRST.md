# Start here — what to attach to Claude

UPLOAD THIS ZIP as a single kit when Claude can unpack files. If it cannot, send the following individually:
1. 01_Approved_and_Latest/APPROVED_ORIGINAL_CLASSIC.png — the one authoritative target.
2. 02_Seven_Annotated_Comparisons/00_START_HERE_OVERVIEW.png — orientation and all seven checkpoints.
3. All seven images in 02_Seven_Annotated_Comparisons (01...07).
4. 04_Instructions/PASTE_INTO_CLAUDE.txt — exact instructions.

OPTIONAL ASSETS:
03_Optional_Bubble_Assets/Bubble_Aqua_Transparent_512.png, Bubble_Lilac_Transparent_512.png, Bubble_Pink_Transparent_512.png — small transparent 2D sprites (Pillow-generated), useful only if the current render stack uses additive/alpha-blended sprites and need actual small bubble particles.
03_Optional_Bubble_Assets/Starter_Transparent_Bubble_Cluster.glb — basic geometric multi-sphere placeholder. This is NOT a finished iridescent material, may need alpha material tuning in-game and should not replace existing higher-quality geometry/materials.

IMPORTANT: all diagnostic comparison images are annotated crops from the user's uploaded visual evidence, not newly generated revisions to the user's game. The provided bubble sprites and GLB are prototype helpers, not references for changing the approved art direction.

TECHNICAL NEXT ACTIONS:
- Current engine? Inspect repository first, don't assume Three.js.
- Use near/mid/far bubble emitters anchored to scene space and following vortex flow, with scale fading by depth, meaningful depth sorting/occlusion.
- Make the water foreground overlap the character lower portion via proper scene render order / geometry, not by moving or reshaping the character.
- Look for HUD-adjacent white rectangle in geometry/light/texture layers.
- Avoid raw pixel-match against static stylized illustration unless viewport/perspective are aligned; use the reference for measurable layout and human review, and test actual motion.

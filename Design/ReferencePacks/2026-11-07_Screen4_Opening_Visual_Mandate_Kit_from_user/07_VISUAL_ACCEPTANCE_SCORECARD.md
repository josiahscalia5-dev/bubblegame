# SCREEN 4 — VISUAL APPROVAL GATES (not an automated accuracy guarantee)

**REFERENCE:** `01_AUTHENTIC_ORIGINAL_APPROVED_SCREEN4.png` is the actual user-approved source image. Full image 748 × 1536. Enlarged crops are inspection aids only (no invented high-frequency detail). Do not substitute current game screenshots or the rejected fidelity experiment for the original.

## Gate A: The whole scene at the opening (BLOCKING)
- [ ] Source/reference and newly captured in-game image displayed side by side at equivalent portrait framing; no stretched source image. Original is 748 × 1536, not 1080 × 2400; preserve proportions and note crop differences.
- [ ] Whole washer/laundry opening is composed like original: metallic lavender/gold bevel above and surrounding the cobalt/cyan funnel; long concentric rings/vanishing point beyond. Original's curved washer lip is visible below the mission card, not replaced by a flat upper blue wall.
- [ ] Pink mascot dominates lower-center foreground with a **broad spherical dome** visible *above* the water, left/right fluffy tufts, natural overlapping wave base. It must not be a flat pink cap or narrow egg.
- [ ] Original foreground water is vibrant blue/turquoise, with dynamic glassy rounded forms, bright highlights, and a few localized pale lavender-blue bubbles/mounds. No large rigid white foam covering character, no purple balloon row, no black/grey gap under character.
- [ ] Bubbly, sparkling tunnel is deep; visual layers and colors remain distinct (cobalt ring, cyan water, localized warm golden glow); not featureless bright cyan, pastel white, or purple.
- [ ] Two big brushes left/right frame the space. Coins with paw symbol, purple diamond, smiling sock and transparent floating bubbles appear at comparable scale/depth/regions. One should not obscure the entire scene.
- [ ] HUD: heart, coin, gem top row; Rescue 5 lost socks mission; Pause; Bubble Blast/Turbo Spin bottom. Maintain correct safe areas, legibility, hierarchy.
- [ ] Actual runnable WebGL scene, not a static screenshot/animation trick or an image pasted over interactive gameplay.

## Gate B: Start-and-forward sequence (BLOCKING)
- [ ] Screenshot just before tap, at start, +1s, +2s, +3s from same device portrait viewport and deterministic start condition.
- [ ] Washer lip/rings and deep art composition do not disappear immediately after the tap.
- [ ] No pale shader haze/white foam film, no washed-out water, no rigid graphics that move glued to mascot.
- [ ] Movement/camera remains functional; no player control/collectible/physics regressions.

## Gate C: Evidence (BLOCKING before accepting)
- [ ] A source-object/root-cause table for material composition differences, naming real source paths and scene objects; unproven causes marked as hypotheses.
- [ ] Comparison: ORIGINAL | ACCEPTED swim2 | NEW with consistent image framing; include closeups of machine, tunnel, mascot and waterline.
- [ ] One real gameplay recording including swipes/jump. Art director reviews ONCE. State **objective changes** and **subjective visual verdict** separately; do not inflate scores.
- [ ] Accepted swim2 remains untouched and recoverable; candidate stays behind a distinct flag and tests pass.
- [ ] GitHub work and evidence pushed and verified; do not merge or force-push without owner approval.

## Prioritization when cost or tradeoffs are involved
Fix whole-frame P0 design first: **camera framing/scene topology → machine/tunnel shape and staging → player silhouette and waterline → wave geometry & palette → prop scale/placement → fine polish**. Animation-only changes are lower priority until the opening looks right. If a candidate's art improvement is imperceptible at mobile size or introduces new prominent flaws, stop and report it rather than doing another loop.

## Useful existing tools (already in the reported environment)
- `bubble-wash-screen-matcher`: consistent visual assessment and comparisons
- `threejs-devtools-mcp`: inspect real camera, meshes, materials, shader state and render layers
- `chrome-devtools-mcp` / `playwright-mcp`: launch, test, capture actual mobile game with deterministic scenarios
- Project specialists: `screen4-water-motion-engineer` (implementation/inspection) and `game-art-director` (independent review); no need to recruit more generic agents by default
- Blender: only if evidence proves existing meshes/geometry insufficient

**Interpretation:** The original is an illustrated target, while the shipping game is moving 3D. An exact pixel match across all moving times may not be possible; success means a substantially faithful *playable 3D art-directed reproduction*, verified through real runtime captures and honest limitations.

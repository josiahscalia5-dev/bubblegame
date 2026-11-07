# BUBBLE WASH KINGDOM — SCREEN 4
## STRICT WATER SIZE, LAYERS, COLOR, WAVE GEOMETRY, AND CIRCULAR TUNNEL CALIBRATION

**MANDATORY IMPLEMENTATION TASK FOR CLAUDE CODE.** Read the attached measured reference sheet and the ORIGINAL APPROVED Screen 4 before editing. Keep this a real playable Three.js/WebGL game. Correct only what is necessary to reproduce the original visual target; preserve functioning game logic, UI, collectibles, camera controls, and movement.

### 0. ONE RULE THAT OVERRIDES EVERYTHING ELSE

The ORIGINAL APPROVED Screen 4 is the visual source of truth. The numbers below have two DIFFERENT meanings:

- **Measured screen-space targets** are proportions of the original 628 x 1,157-pixel artwork. They determine how the final gameplay must APPEAR from the normal mobile camera.
- **3D world-space values** are starting settings for your existing scene, NOT measurements recoverable from a 2D picture. Measure the actual game's mascot and tunnel first, then adjust values until the on-screen projection matches the measured targets. Never assert that an arbitrary meter value is the "exact original" without calibration.

Do not merely pick the meter values, declare success, and ignore the screenshot comparison.

### 1. LOCK THE ORIGINAL CAMERA COMPOSITION

Use the original artwork at 628 x 1,157 as a reference viewport (or use an equivalent portrait aspect ratio and compare normalized coordinates).

- **Pink mascot visible fur-to-fur bounds:** approximately X=112–468 (356 px = ~57% of image width), Y=765–962 (~197 px = 17% of image height). The character is centrally positioned, with its round pink back above the water.
- **Main blue foreground water field:** approximately Y=725–1006 (~24% of total image height), stretching edge-to-edge. Its irregular waves and highlights extend ABOVE this band locally and continue back into the tunnel; this is not a rectangular flat slab. The HUD may cover part of the bottom.
- **Character-to-water contact:** rounded blue crests approach and partly conceal ONLY the lower ~8–15% of the visible pink fur. There must be no open gap, no white cloud across the body, and no transparent film placed over the whole character.
- **Metallic washer entrance:** prominent lavender/silver/warm-gold curved rim approximately Y=240–340, above the blue nested rings. The opening must be large and clearly circular/arched.
- **Tunnel perspective:** blue concentric rings occupy most of the interior behind the character, shrinking toward the center of the image; do not leave a large empty lavender block above the scene.

Create a same-scale overlay of the approved image and the actual gameplay frame. Calibrate camera FOV, camera height, water projection, character scale, and tunnel geometry to bring these proportions into alignment. Avoid distorting the character model purely to match screen pixels.

### 2. SET ONE ACTUAL 3D SCALE, THEN USE RELATIVE DIMENSIONS

Let **M = the CURRENT ACTUAL fur-to-fur width of the pink mascot's 3D model in world units**, measured using its bounding box in the existing project. If M is NOT 1.5 meters, compute the following from the real measured M; do not randomly resize the game to 1.5 m. A worked example using M = 1.5 m is included to make the intended scale understandable.

| Component | Adjustable initial world-space target | Example if M = 1.5 m |
|---|---|---|
| Circular tunnel inner diameter at the opening | 3–4 x M | 4.5–6.0 m |
| Water channel width across the lower part of the tunnel | 80–95% of inner tunnel diameter | 3.6–5.7 m |
| Water body depth below the visible surface | 0.20–0.40 x M | 30–60 cm |
| Rounded, traveling surface wave height (crest vs. nearby trough) | 0.04–0.09 x M | 6–14 cm |
| Local small contact ripples | 0.01–0.035 x M | 1.5–5 cm |
| Natural vertical bob of mascot (around its supported level) | +/-0.02–0.04 x M | +/-3–6 cm |
| Initial character immersion/draft | ~5–12% of mascot's body HEIGHT | depends on actual height |

These are **STARTING ENGINEERING PARAMETERS**, not a claim that the art specifies physical meters. Their SCREEN PROJECTION and visual result must win over the initial numbers. Keep wave and bob motion subtle. Use the existing game's axis conventions.

### 3. BUILD THE BLUE WATER IN FOUR CLEAN, RELATED LAYERS

**Layer A — deep water body (underlying mass):** a continuous, opaque or well-controlled depth-shaded blue volume along the lower tunnel. Use rich blue in troughs, lighter blue only where the light strikes; this is not a translucent blue plane passing through the pink body. Maintain plausible water-body depth as the game advances.

**Layer B — primary rolling surface:** actual moving surface geometry, not simply changing a texture on a flat polygon. Use irregular, rounded wave mounds with smooth normals and variable crest spacing. Keep rolling cyan highlights attached to those waves. Water flow should visually move toward/around the character while the character progresses down the tunnel. Avoid tall jagged white spikes or equally spaced white crescents.

**Layer C — character contact and wake:** anchor water displacement and ripples to the mascot's TRUE world-space horizontal position and local water-surface height. A few small rounded ripples and a subtle trailing wake follow turns and forward travel. The lower pink fur touches the blue waves continuously while the bulk of the pink back stays clearly exposed. No broad opaque foam layer, no cut-out-looking ring, no floating gap.

**Layer D — bubbles and sparkle:** separate clear translucent/iridescent bubbles of multiple sizes and a LOW quantity of small highlights. Keep sparkling effects sparse and subordinate to the saturated blue water. Avoid large white particles and bloom that bleach the water.

Suggested material/color starting points (NOT substitutes for sampling the original approved image): deep blue `#0747B4`, saturated blue `#0878E7`, bright blue `#0799FA`, turquoise `#13CAE9`, cyan highlights `#7BEFFF`. Sample actual approved-water pixels and compare in the same color space. White should occupy only small highlights/bubbles, not most of the water surface.

### 4. CHARACTER BUOYANCY MUST FOLLOW THE WATER'S ACTUAL HEIGHT

For normal swimming, derive the mascot's local supported vertical position from the actual water-height function / geometry at the mascot's X,Z and current time. Anchor the lower body to **surfaceHeight - immersionDraft**, where immersionDraft is a small, tuned fraction of the character's actual body height. Smooth response over time; apply a small synchronized buoyancy motion rather than an unrelated vertical sine loop that separates body from water.

Keep the existing collision controller and gameplay steering authoritative. Treat buoyancy as a carefully controlled visual/body offset or as an integrated part of the established controller, rather than breaking gameplay physics. Actual jumps are an intentional exception: when jumping, the mascot leaves the water briefly, then reconnects to the surface naturally on landing.

During left/right steering, sample the local water height at the new horizontal position and update ripples/wake from the new contact position. No character hovering at 6 seconds. Avoid clipping, depth-sorting artifacts, sudden teleports, and camera bob that makes the HUD shake.

### 5. TUNNEL CIRCLE AND WATER CONTINUITY

The blue tunnel is a 3D circular opening, not a blue ring painted on the background. Retain a recognizable outer metallic lavender/silver/gold rim and several progressively smaller layered cobalt/cyan/turquoise rings with proper perspective and reflections. Keep the pink/blue fluffy brushes, coins, sock collectible, bubbles, and HUD recognizable. The water continues under the entire playable route: its size, surface height, wave geometry, shading, and speed must not abruptly switch at the tunnel entrance or later segments. The mascot must feel like it is really gliding and swimming **ON this continuous water surface INTO the laundry tunnel**.

Do not replace the circular tunnel structure, model, or camera without a visual reason demonstrated against the approved artwork. If the current framing is wrong, you ARE authorized to fix it.

### 6. CALIBRATION PROCEDURE — REQUIRED

1. Inspect the current game repository, branch, water mesh/shader, actual 3D dimensions, mascot bounding box, and camera; checkpoint safely. Preserve any running tests and existing work.
2. Capture an unedited baseline at the established portrait size, seed 7, approximately 3.0 seconds (if the project still supports those settings), plus 2, 4, 5, 6, and 8 seconds.
3. Measure actual rendered screen proportions against the ORIGINAL. Record pixel/normalized bounds for mascot, foreground waterline, rim, and tunnel opening. Create a visual overlay; annotate the mismatch rather than guessing.
4. Tune projected shape and camera first, then primary blue water geometry, wave height, color/shading, actual mascot water contact, and finally small bubbles/sparkles. Do not waste time repeating minor shader-value tweaks if the geometry or waterline is wrong.
5. Validate left/right steering and steady straight movement. Water contact must work at the opening, through the center and side positions, and farther into the tunnel.
6. Test on portrait mobile for performance and gameplay: coins, socks, brushes, obstacles, collisions, score/HUD, and abilities. Avoid heavy effects that tank performance.
7. Show a side-by-side against the ORIGINAL at comparable projection, a waterline close-up, an unedited movement video, actual test findings, and the checkpoint/commit. Clearly identify anything still unmatched.

### 7. PASS / FAIL CRITERIA

PASS only when the original's VISUAL proportions, blue color family, rounded layered water structure, continuous lower-fur contact, and recognizable circular washer opening are all convincingly present during REAL gameplay. The pink body stays visibly above water, with no floating gap or white film; the mascot glides, steers, and gently bobs without clipping or jitter. The game remains fully functional.

FAIL if a screenshot looks better but the character is still floating at 6 seconds, a flat white film remains, the water is pale/flat, the screen proportions are wrong, the tunnel is reduced to a generic portal, or gameplay systems break.

**FINAL ORDER:** Use the attached measured original reference to CALIBRATE the EXISTING LIVE GAME. Treat these dimensions as a rigorous starting brief, not arbitrary numbers to implement blindly. Your job is to make the original Screen 4 come to life while preserving real, smooth mobile gameplay. IMPLEMENT, CAPTURE, COMPARE, AND REPORT HONESTLY. Do not stop at a proposal.

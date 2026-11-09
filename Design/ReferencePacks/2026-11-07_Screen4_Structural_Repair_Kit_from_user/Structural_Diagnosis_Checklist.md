# Screen 4 structural reconstruction: diagnosis and acceptance matrix

The goal is to build a real playable 3D Screen 4 visually as close as practical to the ORIGINAL approved classic illustration. It is NOT to change the visual brief, add generic spectacular water, or spend more rounds making imperceptible tweaks.

## Analyze before writing code (read-only first)

Establish the exact accepted version, current feature flags, camera setup, scene parenting, all relevant water meshes/shaders, fur meshes, tunnel objects, collectible spawn definitions, browser renderer settings and existing comparison/test automation. Use live Three.js DevTools, Chrome DevTools and Playwright from the installed parallax-threejs plugin. Verify the source files, active scene nodes and all GPU materials *before* diagnosing; don't guess file or object names.

At equivalent Pixel 7 aspect, inspect stable timepoints start, +1 s, +2 s and active swipe, jump, landing. The original is a single still, so it can define the TARGET look, not ground-truth animation or exact physical trajectories. Align the composition at a representative gameplay frame rather than falsely comparing a frozen original to arbitrary far-forward moments.

## Structural diagnostic order

| Priority | What to measure from original vs running game | Structural questions / possible remedies |
|---|---|---|
| 1 | Screen-space composition and depth: where tunnel vanishing point, washer ring, pink hero, objects appear | Is camera FOV/aspect/pose, clipping, parenting or object-distance wrong? Rebuild anchor positions/camera staging; preserve gameplay camera response and collision rules. |
| 2 | Pink hero visible proportions and waterline | Is the silhouette too shallow/peaked due to mesh topology, scale, rotation, water height or render layer? Correct actual geometry; never make a hollow under-body visible. |
| 3 | Contact water shape and colour integration | Can current mesh create irregular rounded glassy blue/cyan water mounds with subtle lavender reflection and bright localized rims? If not, replace only the contact geometry/material system, while preserving actual flowing surface and swipes. No standalone purple spheres, violet tint sheet, white blanket/foam film, or cotton-ball spray pile. |
| 4 | Visual colour pipeline from first frame to active gameplay | Inspect tonemapping/exposure/outputColorSpace, color textures' colorSpace, shader conversions, additive overlays, alpha compositing. Locate source of washed-out blue or sharp bright strips. Do not simply over-saturate entire scene. |
| 5 | Tunnel geometry and motion persistence | Does lavender/gold washer bevel remain present during movement? Do concentric cobalt tunnel rings continue deep into distance? Are cream beams an unintended geometry/material/overlay artifact? |
| 6 | Items, bubbles, brushes and HUD | Match relative screen-space scale/placement/depth and styling of paw coins, purple gem, floating sock, brush objects, round clear bubbles, HUD/cards. Check their world coordinates and projected image anchors; don't hardcode objects as 2D HUD if they need real interaction. |
| 7 | Real motion and performance | During swipes/jumps/landings, does contact water react naturally while visibly flowing past the hero? Maintain interaction, sprite/mesh integrity, collisions, pickups, heart/coin/gem/sock counts, pause, Bubble Blast and Turbo Spin. |

## Geometry and visual reconstruction rules

- Keep the accepted version intact as source-of-truth and rollback. Make the reconstruction a *separate* flagged candidate, using the project's actual flag parser instead of inventing incompatible syntax. Suggested candidate label `structmatch` only if the parser supports it.
- Keep tunnel length, movement and depth real: no static full-screen still posing as gameplay. A calibrated hybrid 2.5D/3D rendering approach may be considered for decorative *non-interactive* art/background layers if needed, but live geometry, controls, camera/parallax, collectibles and water contact must stay functional.
- Before any large rebuild, show the user a root-cause table with current scene object names / source paths, expected visual difference, controlled change and risk. Do not claim original exactness can be guaranteed from one image.
- If existing mesh topology or camera architecture prevents the match, changing that structure deliberately is allowed ONLY behind the isolated flag; leave accepted build unchanged. Changes to gameplay coordinate systems, engine version, collision semantics and controls are prohibited without explicit approval.
- Inspect transparency sort issues around water and fur: depthTest, depthWrite, renderOrder, alphaTest, intersections, material opacity, shadow/reflection. Diagnose rather than force settings indiscriminately.

## Independent validation before recommendation

1. Captures `ORIGINAL | ACCEPTED swim2 | STRUCTMATCH`, same phone aspect, matching gameplay phases; provide separate full-resolution images plus a short genuine gameplay video with left/right swipes, jump, landing. Clearly label the original as a static *target*.
2. Tight waterline crops before/after for hero profile, front and side waves, bubble rims, contact occlusion and any dark gap.
3. Demonstrable improvement in broad dome, contact water geometry, richer but controlled cobalt/turquoise-blue water, washer rim/depth, collectible staging, AND overall scene. If only the dome improves while other areas regress, reject the candidate.
4. Accepted route MUST be pixel-identical to pre-work snapshots; gameplay trace and scripts must match baseline. Run project's exact existing tests and report which pass/fail. Do not fake no-regression using a different scene or viewport.
5. FPS/performance: test in a phone-like browser and watch texture/draw-call/memory costs; be candid if headless software rasterization differs from real Android hardware.
6. Ask `game-art-director` for ONE independent opinion on the finished candidate. Subjective score is a qualitative opinion, not a certified similarity percentage.
7. No new agent run / next experiment without approval. Preserve source files, comparison images, video and report on GitHub with verified push. Do not merge or replace accepted without user approval.

## Clear stopping rule

If one structurally grounded rebuild still falls visibly short, report which of these is the blocker: unavoidable 2D-illustration vs realtime geometry difference; missing source art/texture/3D asset; topology/camera constraints; renderer/transparency limitation; mobile performance budget; or insufficient input views for hidden surfaces. Offer one costed engineering/art-production plan and a lower-cost practical alternative (e.g. calibrated art-directed 2.5D layers over live gameplay), then STOP. No endless additional 'one final pass' experiments, no guaranteed 90–100% claim.

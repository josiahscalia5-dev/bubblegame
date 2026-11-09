# Bubble Wash Kingdom — Scene 5/6 REAL GAME Visual Match Pack

AUTHORITATIVE INPUTS
- `01_CURRENT_GAME_2026-11-09.jpg`: actual existing game frame supplied by user, not the desired art.
- `02_APPROVED_SCENE_5.png`: approved visual source of truth for tunnel introduction.
- `03_APPROVED_SCENE_6.png`: approved source of truth for the SAME tunnel, with enemies, paw coins and side brushes.
- `00_3WAY_ACTUAL_VS_APPROVED.png`: full-frame aligned contact sheet; source originals preserved separately.
- `04`–`09`: untouched-pixel crops for asset/lighting/water inspection. These are visual references, not gameplay-ready art.

KEY REQUIREMENT: correct actual Three.js/WebGL geometry, shaders, models, lighting, camera and animation inside the EXISTING playable mobile game, not images pasted into the screen. Preserve controls, UI functionality, coins/socks, collisions and an explicit classic rollback.

OBSERVED COMPARISON — examine and measure from original pixel images rather than assuming these descriptions are exhaustive:
1. Approved tunnel: metallic lavender/purple curved drum with visible perforations, depth, glowing rib accents, realistic metallic material; current tube is simpler, repetitive, and much more pink/uniform.
2. Left/right machine banks: approved scene has substantial pink-and-gold cylindrical housings, gold paw medallions and curving gold/brass pipes, repeat toward horizon; most of that mass/visual density is missing in current.
3. Left illuminated vessel: violet glass/light tube and gold brackets. Right: prominent cobalt-blue toothed circular gear with brass hub and illuminated violet vessels. Current gear/machine silhouettes not framing the view.
4. Top: suspended warm amber/orange lantern/lamp, thick curved brass supply piping, warm elongated light strips along arch, violet emissive pools. Current shows thin brown diagonal rods with no equivalent top mechanical assembly.
5. Side safety rails: current has exposed fine orange fences; reference has rounded metallic gold rails integrated with platforms and housings.
6. Water: reference is deep electric cobalt transitioning to bright cyan/turquoise at center, with thick dimensional traveling wave forms, narrow crest highlights/splashes near mascot. Current has over-broad pale/white opaque water patches and a flat/low-contrast foreground.
7. Pink mascot: should read as rounded/domed furry ball facing away, buoyantly submerged only lower portion, with water moving up/down around it, wake and small splashes. Current reads somewhat flattened and sits beside a broad white foam ring.
8. Bubbles: approved iridescent round bubbles vary size and depth, clustered near architectural highlights; current distribution does not match.
9. Camera/composition: user wants approved tunnel vanishing-point, hero scale and equipment framing. Must optimize in same portrait viewport and state; cannot rely on similarity scores alone.
10. Scene 6 continuation: add two purple enemies, graduated collectible gold paw coins in a traversable path, and tall pink/white/blue side brush cylinders, while preserving one continuous scene throughout actual gameplay. The current sock hazard/mission should not disappear.
11. UI: approved images use Laundry Toss splash/title/start layer; the current screenshot is an actual in-game HUD with 5-sock objective, Tap to Start and abilities. Retain functional live HUD; compare visual world underneath HUD by masking UI regions or producing a camera-only capture.

IMPLEMENTATION ORDER
P0: baseline reproducible same camera, game checkpoint and viewport; fix architecture silhouettes and missing pink/gold machine banks, right gear, left vessel, overhead lamp/pipes.
P0: water shader and tone mapping; reduce overly broad pale-water patches; 3D water shape and hero intersection/wake; water motion.
P1: purple drum metal/perforation materials, framing, golden rails, lighting, color response, glass/glow, bubbles.
P1: mid-ground depth repetition; Scene 6 enemies/coin/brush readability while retaining control and collisions.
P2: tiny decals, bolts, stars, bubbles, HUD art differences that do not affect gameplay.

ASSET DECISIONS
- Before spending money, inventory existing 40+ GLBs, especially Tripo purple enemy, paw coin, cobalt gear, machine housing, washer, and look for already-authored banks. Retexture, optimize, repair geometry or duplicate existing 3D prefabs before regenerating.
- Ludo.ai Image-to-3D is for ISOLATED, CLEAN, SINGLE props. Only consider for an important missing object after proof of missing/rebuild inability; do not upload a whole tunnel image expecting a complete accurate navigable environment. Blender mesh editing or parametric Three.js procedural geometry is usually best for fitted rails/tubes/arches/boiler banks. Render shader water in engine, not in image-to-3D.
- If any new generation is needed, isolate one clear object on transparent/neutral background (e.g. purple-glow glass canister or pink-and-gold housing) and validate GLB from multiple views; consider only after approval and document credit cost.

PROOF GATES
- Make reference vs actual aligned captures in same 864x1536 or higher 9:16 viewport. Include unaltered screenshots and 3D-only captures with HUD hidden for fair scene comparison; do not remove UI from the actual playable game.
- At beginning of new tunnel, near brushes and before enemies, produce match views; plus live video showing fluid motion, swipe control, coin pick-up and enemy avoidance.
- Measure landmark/camera alignment, large silhouette coverage, palette/lighting, mascot waterline, and live GPU/performance impact. Accept only after user review.
- Save on correct user branch `claude/bubble-wash-restore-transfer-kc4ecl`; verify its latest HEAD before editing and preserve other specialist work. Do not force-push.

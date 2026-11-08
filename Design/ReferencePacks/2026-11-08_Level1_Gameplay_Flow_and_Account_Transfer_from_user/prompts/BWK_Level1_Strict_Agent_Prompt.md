# BUBBLE WASH KINGDOM — NON-NEGOTIABLE LEVEL 1 PLAYABLE VISUAL-CORRECTION MANDATE

**Use with Cursor Cloud Agent, Codex, or Claude Code. This is a coding and testing assignment on an EXISTING game, not an image-generation request.**

## A. Project lock and repository safety

Repository: `https://github.com/josiahscalia5-dev/bubblegame`

Previously active working branch: `ccr-76d4bc77-rqhl8o` (**do not assume this is still latest; fetch and verify**). Before making any edits, identify the exact current remote HEAD, working changes and owners of active Claude sessions. Never reset, force-push, delete, overwrite, or directly commit your experiment to the existing work branch. Create a new, clearly named feature branch from the latest verified agreed base, e.g. `agent/level1-watery-continuity-<date>`, and return a PR. If other agents are editing `opening3d.js`, `level1.js`, or the tunnel files, coordinate file ownership or stop before conflicts. Preserve a precise rollback commit and an inventory of changed paths.

Read `HANDOFF_FOR_NEW_CLAUDE_ACCOUNT.md`, newest `HANDOFF.md`, `CLAUDE.md`, and the approved references and proof methodology. Important: some older `CLAUDE.md` text says "only Screen 4"; the **current user request explicitly expands scope to full Level 1 with uninterrupted water**, while all original Screen 4 artwork constraints remain binding. Do not silently overwrite unrelated systems.

## B. Reference order: do not substitute art

1. **ORIGINAL CLASSIC MASTER** of the tunnel gameplay. This exact in-repo file governs Screen 4 mascot rear silhouette, saturated blue water, metallic washer rim/brushes, camera and composition:
   `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`.
2. User-approved girl-and-washer artwork: `references/USER_APPROVED_GIRL_WASHER_SCREEN.png` (included in the attachment package). This governs girl identity, basket, pose, washer placement, premium lighting and polish, **but it must be animated in real time**.
3. Full 12-panel board: `references/USER_12_PANEL_LEVEL1_BOARD_FLOW_ONLY.png`. Governs story progression, collectibles, side paths and level-end goals, **not the exact Screen 4 water or revised wet-castle composition**.
4. This pack's annotated `01`–`05` boards are implementation instructions; captured frames in `proof_frames/` show the OLD/CURRENT BUILD, not a goal.
5. `concepts/PROPOSED_WATERY_END_OF_LEVEL_NOT_APPROVED.png` is an *illustrative new direction only*. DO NOT treat it as approved production artwork or a replacement for any original.

**Most recent explicit user correction overrides the earlier dry-looking castle board:** from the moment the pink mascot enters the washing machine until Level Complete, it remains on and moving through saturated blue water inside one coherent magical washer-tunnel world, INCLUDING the castle / Bubble Kingdom approach and the goal trigger. No straight dry platform/road with a shallow splash decal is acceptable. The castle may appear through a connected larger wet chamber or tunnel-end portal; the tunnel and machinery remain visible, and water always supports the pink mascot. Do not turn the entire sequence into a new open-air scene.

## C. Mandatory correction, screen by screen

### Stage 1: Home + Laundry Toss
- Match the approved girl-and-washer composition: rich readable face/curly hair/bow, expressive eyes, appropriate scale; actual 3D scene, premium lighting, purple basket, individual socks and towels, hollow washer opening with glowing blue depth and metallic gold/lavender framing.
- **Keep the working rigged Tripo girl** if present; verify live armature + eye blink in browser, not just GLB import or script presence. Make real head, hand, upper-body and basket motion legible from the approved mobile camera.
- A clean five-beat in-game animation: girl prepares > basket tips and laundry independently arcs > mascot is unexpectedly swept up > mascot actually crosses the circular washer door plane > follow-camera passes into tunnel and hands off to playable state.
- No static poster, faux video overlay, giant explanatory arrow during gameplay, occluding basket, teleport or sudden camera jump. Do not discard completed animation/rigger work.

### Stage 2: Smooth washer entry + Classic Screen 4
- Character enters a **physically open** 3D porthole; no solid washer face. Maintain spatial continuity: world coordinates, orientation, camera and water transition coherently from entry to live gameplay.
- The **first playable camera match** should be composed against the original Classic Screen 4 at the same mobile viewport. Preserve rich silver/lavender/purple cylindrical metal, spinning pink/blue fluffy brushes, saturated dimensional cobalt/turquoise water, bubbles, yellow paw coins, smiling socks, UI/HUD, lighting and glowing distant centre.
- Mascot must have **round, full, fine pink fur rear silhouette**, small side appendages and lower fur resting ON blue water. Do not replace with the rejected tailed Tripo mascot; no white foam pillow/film/cloak behind mascot; only small natural white highlights.
- Real-time forward progress on a 3D curve/spline or equivalent. The camera may follow at a stable screen composition, but the actual player and nearby objects must move through world space. Coins/socks/obstacles approach and pass at believable rates; left-right swipe steering moves the player, with tilt, swim strokes, bobbing, ripples, splash wake and water-collision contact.
- Preserve all collectibles, collisions, powerups, pause/restart, progress goal and mobile performance. Avoid replacing a playable scene with an image.

### Stage 3: Entire Level 1 is continuously wet, including later side paths and castle
- Inspect actual running level at middle and late checkpoints. In user video, the final castle approach has an extended dry-looking raised road/platform; this is the critical error.
- Convert the *visual and gameplay surface* of that section to a continuous volumetric, animated blue-water route organically connected to the washer tunnel. The mascot must remain immersed only at the underside/lower fur; **never walk on a dry road, hover above an invisible surface, sink behind opaque water or lose swimming animation**.
- The route can branch through two connected wet channels at jump/drop choice points, but neither branch becomes dry. Keep water at all decision points and under every recovery path.
- Reveal the Bubble Kingdom/castle ahead **inside a widened, still-enclosed wet washer chamber or glowing portal**; retain some curved washer metal rings, fabric brushes, laundry-machine details and bubble currents so the player never feels transported to an unrelated exterior world.
- Keep yellow paw coins, socks, collectible counters, gems, enemies, existing level logic, camera readability and completion trigger. On reaching the goal, the mascot is still bobbing on blue water; overlay Level Complete without switching the underlying world to a dry scene.
- Constrain mobile GPU cost. Optimize unnecessary draw calls, textures, particle counts and geometry without sacrificing approved Screen 4 framing. Use pre-existing optimized rig/model; no new paid Tripo generation without separate user approval.

## D. Concrete QA evidence: pass/fail, not 'looks better'

Create test captures at a consistent vertical mobile viewport (the previous workflow used **412 × 915**, seed **7**, matched camera when supported). Record the current baseline first. Capture and compare all six labeled checkpoints in `annotated/05_Level1_Full_Flow_Acceptance.png`:

1. Home (~0.7 seconds): actual rigged girl, basket, pink mascot and readable washer.
2. Toss (~2 seconds): girl moves; laundry flies separately, mascot leaves basket.
3. Entry (~4.3 seconds): body passes through 3D washer port and meets blue water.
4. Classic gameplay (seed 7, ~3.0 seconds into playable tunnel, plus 17 seconds in full run): approved blue water, rim, brushes, mascot, coins/socks.
5. Side paths (~28 seconds, if route length unchanged): still wet, world-space steering/branches and correct collectibles.
6. Castle/end (~38–45 seconds, if route length unchanged): **blue water continuously beneath/around mascot, interior washer chamber still visible, Level Complete triggered on water**.

These timestamps are approximate reference points from a particular recorded build, not required universal game timing. Show screenshot overlays/side-by-sides in an `evidence/` folder, including original-vs-new for first screens and current-late-vs-new for castle. Show one continuous real phone-aspect capture of Home > Toss > washer entry > steering/swimming > side path > castle > Level Complete with visible controls and collecting. Provide a second short replay showing the character bobbing and swiping with identifiable world-space forward motion. Automated screenshots and motion traces should confirm water continuity and lack of dry road in last section.

**Acceptance gates:**
- Gameplay source builds/runs and all core interaction tests pass. FPS and draw-call measures reported (do not invent).
- Original accepted Classic Screen 4 remains visually matched at locked baseline comparison checkpoints; any changed pixel areas documented and evaluated, do not claim "0 pixels" unless truly measured.
- Intro girl and props use live 3D animation, not baked image.
- Character never loses water contact anywhere after washer entry; ripple/wake follows body for entire Level 1.
- Castle/kingdom reached via continuous flowing blue water within clearly connected washer-world interior; zero dry road gameplay.
- No credentials, secret network configs, large unnecessary caches or paid Tripo jobs.
- User-facing evidence and measurable test report attached. Rate similarity separately for opening, entry, Classic Screen 4 and late level with **honest limitations**. Aim for about 90% visual fidelity without claiming pixel-perfect reproduction of concept art.

## E. Deliver safely to Claude

Commit completed source/tests/evidence on **your isolated feature branch** only. Push to GitHub, provide PR link, exact branch, commit SHA, `git diff --stat`, tests, before/after comparisons and actual gameplay recording. Do not merge until the user or Claude has inspected results; do not force push, rewrite existing Claude branch, or remove approved assets. Include any tool/dependency restore steps. Have Claude merge after ensuring its current working branch and active other sessions are reconciled. If partial, clearly list incomplete checkpoints, no manufactured success.

**Start implementing now on the existing project, prioritizing the continuous underwater washer-to-castle route and real visual evidence. Preserve all proven working components rather than restarting the game.**

# SCREEN 3: AUTHENTIC OPENING CHECKLIST — DO NOT MIX REFERENCES

## Unambiguous reference authority
- AUTHENTIC Screen 3 approved artwork (ONLY exact visual target for the opening): `Design/ReferencePacks/2026-11-04_Approved_Screen4_Package/01_APPROVED_TARGETS/01_APPROVED_SCREEN_3_OPENING.jpg` on the correct GitHub branch.
- AUTHENTIC Screen 4 approved artwork (ONLY exact visual target for INSIDE the tunnel): `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`.
- `01_OPTIONAL_AI_CONCEPT_NOT_ORIGINAL.png` and `02_AI_CONCEPT_ANNOTATIONS_NOT_ORIGINAL.png` in this kit are AI-created CONCEPT images. **They are not approvals, not the original and not pixel/layout targets.** Never substitute them for the authentic references. Use only when they help illustrate a material or prop idea that is consistent with the original.
- `03_REAL_GAME_OPENING_STEP7.png` is ACTUAL GAME evidence. `04_AUTHENTIC_APPROVED_SCREEN4_INTERIOR_ONLY.png` is a downloaded small copy of the approved interior, useful for transition context, not Screen 3.
- Repository: `https://github.com/josiahscalia5-dev/bubblegame`.

## Compare BEFORE altering code — record each difference visually
[ ] 1. Sky/castle — original has a detailed magical lavender castle with visible towers, turrets, golden architectural features, flags and layered depth. Current: mostly plain purple ceiling/flat wall. Investigate why existing castle mesh is out of frame or occluded, and inspect sky camera, backdrop layers, occlusion and asset availability. Fix with real geometry and camera, not static screenshot.
[ ] 2. Giant washer mouth — original has a large central gold circular portal; current mouth reads comparatively small and thin, and its center loses strong cobalt under pastel haze. Check front-view diameter, placement and perspective, plus tunnel material, bloom and haze.
[ ] 3. Blue water slide — original has thick irregular aqua-white, sparkling turquoise surf and a lively raised watery path. Current shows comparatively flat graphic hexagonal web lines and clean channel walls. Correct water shader, geometry, splash interactions and texture scale.
[ ] 4. LEFT brush — original has a large fluffy blue brush and pink accents partially cropped at left, set against gold machinery. Current left blue/pink roller is smaller/lower and composed differently. Measure silhouette in normalized frame coordinates at same camera.
[ ] 5. RIGHT laundry gear — original has gold/blue machinery and rollers with glossy water tubes as framing props; current gear silhouettes/placement dominate differently. Match composition using existing props/transforms first.
[ ] 6. Portal depth — the original opening clearly shows the bright blue tunnel/rainbow flow THROUGH the gold mouth; current often has a pale lavender/white circle. Use real inner mesh material and camera/lighting, not pasted 2D art.
[ ] 7. Bubbles — a handful of large iridescent bubbles strategically placed at sides, not a dense central veil.
[ ] 8. Pink main character — rear view, centered, near foreground and ON TOP of the blue water. In the original large and rounder/fluffier. User asked to defer remodel; fix camera/contact/splash first, don't change model without consent.
[ ] 9. Collectible depth — gold coins and other props should be visible at believable sizes through the tunnel mouth; don't crowd central path.
[ ] 10. HUD — keep counters, blue Let's go banner, arrow/tap panel readable and interactive; only adjust if measured mismatches.
[ ] 11. Transition — original Screen 3 exterior opening and original Screen 4 interior must flow naturally as a playable 3D sequence. Do not treat AI-generated concept as a new mid-point to chase.

## Required verification protocol
- Capture actual in-game portrait frame BEFORE tap, and at transition entry, 3.0 seconds after tap (seed 7/no steering), plus 5–7 seconds moving, at 767x1536 and Pixel 7 412x839.
- Build and render Three.js WebGL, not Blender stills or 2D screenshot overlays. Present 3 panels for each critical moment: ORIGINAL AUTHENTIC | PREVIOUS ACTUAL | NEW ACTUAL. Label AI concepts separately.
- Isolate layers for castle, background, portal, water, brush, machinery, bubbles; identify object transforms and rendering materials that cause the mismatch.
- Correct ONE high-impact section first: existing castle/sky visibility AND portal composition in the LIVE opening. Then compare. Separately do water and brushes. Keep interior Step 6/7 correction intact.
- Tests: start, steering, jump, hazards, collectibles, sock/gem pickup, pause/power-ups in `?s3=focus`, viewport/mobile, no console errors, previous branches/modes unchanged.
- Save rollback point and verified Git commit per independently testable fix. No new paid assets or design agents required unless existing models cannot work, explain then request approval.
- If a target difference cannot be matched, document the exact technical cause and show the failed attempt; do not call it exact or claim 8/10 based on image metrics alone.

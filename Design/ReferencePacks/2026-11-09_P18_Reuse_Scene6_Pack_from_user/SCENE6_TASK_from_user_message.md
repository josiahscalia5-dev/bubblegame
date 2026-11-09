# The user's Scene 6 task (9 November 2026, ~02:50 UTC, session 6ddc157f): REUSE the built Pass 18 gameplay, match the NEW Scene 6. Do NOT rebuild

Saved from the user's message (their words condensed; nothing added). STATUS: NOT STARTED (the user asked first for the environment verification and
the account-transfer backup, "do not start unrelated development work during this verification").
- Foundation = the EXISTING Pass 18 "Avoid Enemies!" gameplay (screens `01_EXISTING_p18a_REAL_BUILD.jpg`, `02_EXISTING_p18b_REAL_BUILD.jpg`):
  scene07 pass 18 (`WebDemo/src/tripo_l1.js` applyScene07, `scene07_build18.js` BUILD18, `scene07_recon16.js`, `scene07_recon17.js`; switches
  `tripo1,scene07` in the ACTIVE game; `,nobuild18` = pass 17c). Keep its controls, collisions, coins, socks, obstacles, enemies' behaviour, the swimmer.
- Visual target = storyboard Scene 6 "Swim, collect, and avoid enemies!" (`03_NEW_APPROVED_SCENE6_TARGET.jpg`), about 90 % similarity, not pixel-perfect.
- Improve the scenery: glowing purple machinery, pink-and-gold washing-machine cabinets, lavender metallic drum housing, blue gears, gold railings,
  illuminated tanks, colourful tunnel arches, rotating pink-white-blue brushes (real cylinders that rotate; no big rectangular backing blocks).
- Enemies closer to the artwork (keep behaviour, collision, angry readable faces, scale). The user's new purple enemy (`enemy3`) is a candidate.
- Water: rich cobalt-blue flowing waves; the character travels through it, swim motion tied to the water; NO large white film / foam cloud behind him.
- Camera, perspective, enemy scale, coin placement, tunnel depth, machinery composition may be refined; controls stay.
- MOST IMPORTANT: continuous with the new Scenes 1-5 (tripo3: pink-gold washer, housings, cobalt gear): no completely different tunnel after the cinematic.
- Reuse the user's Tripo assets in GitHub (housing_tripo_821, gear_v2_tripo, coin_v2_tripo, l1_enemy_v2_tripo, existing brushes, s09 assets); no new credits.
- Use the art director, lighting specialist, gameplay visual testing, water VFX specialist, Three.js tools; follow the session preflight; report missing specialists.
- PROOF: current Pass 18 frame | Scene 6 reference | improved gameplay at matching checkpoints; a continuous video from the washer into Scene 6
  (movement, enemies, coins, brushes, swimming). Commit tested steps; rollback kept; never force-push.

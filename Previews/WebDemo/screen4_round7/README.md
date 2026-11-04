# Round 7 (`?s3=round7`, test, not approved), 4 November 2026: Screen 4 only, matching the ORIGINAL approved Screen 4

Authority: the user's ORIGINAL APPROVED Screen 4 (`Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`).
Build guides (how to reconstruct, not designs to copy): `05_SCREEN4_WHAT_CLAUDIA_MUST_FIX.png`, `06_SCREEN4_EXACT_MATCH_TARGET_BREAKDOWN.png`.
Round 7 = Round 6 + the rich preview + this pass. `?s3=round6`, `?s3=round6,rich`, Round 5, Round 4 and the normal game
are unchanged. **Hero moment: 3.0 s** (the washer entrance at the top); 4.2 s shows the inside of the drum.

## Who did what (the project's design agents; details in `ChatHistory/2026-11-04_screen4_design_agents_log.md`)

- **3D Game Art Director** (`.claude/agents/game-art-director.md`): reviewed the three references and five real gameplay
  frames and ranked the six largest differences with owners.
- **Tunnel & Lighting** tasks (`lighting-visual-matching.md`'s area), done by the lead in `tunnel_r6.js` (`ROUND6.r7`),
  `game.js` and `tunnel_s4.js`: see below.
- **Water & VFX Specialist** (`water-vfx-engineer.md`): `WebDemo/src/tunnel_r7_water.js`, in its own git worktree.
- **Gameplay & Visual Testing**: the checks at the end.

## Tunnel, entrance, collectibles and light (from the Art Director's list)

- **Tunnel:** cyan-cobalt instead of violet. Blues that lean toward cyan survive the grade; pure blues came out violet.
  Brighter ring layers, many more white glints and water streaks, and a warm peach and rainbow glow ring round the bright
  centre (the original's whirlpool heart). The orange gold lips inside the tunnel are removed.
- **Entrance:** a thicker, polished, lemon-gold rim; the inner step ring is gold too (it read as a thin red line); the
  washer wall is soft silver-lilac.
- **Coins:** lemon gold instead of copper-orange (the strong grade turned the Tripo coin copper; `lemonGold()` pulls the
  final colour toward lemon gold, keeping its shading).
- **Framing brushes:** two decorative fluffy brushes on the wall at the mouth, top-left and right edge, as in the
  original. They are scenery, not hazards; the six hazard brushes are unchanged.
- **Collectibles at the hero moment** as in the original: a big coin near each screen edge, the gem left of centre, the
  sock on the right, a small coin far in the middle. All are real and collectable.
- **Mission card** on screen at the hero moment (it used to appear only inside the drum).

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

## Second session (original account, 4 November evening): the design agents' passes

Every agent below was actually started in this session and ran to completion. The Art Director reviewed first, then the
two building specialists worked in parallel, each in its own git worktree on its own files. Their commits were merged:
water `1ba9b89`, tunnel `4f56ec6`, combined in `624b2a4`. The last session's water work had been lost because it was never
committed; this time each specialist committed before finishing.

- **3D Game Art Director** (`game-art-director`) compared the three references with five real frames. It chose **3.0 s**
  as the hero frame and ranked seven differences: foam and immersion; whirlpool depth; rim and wall; brushes; bubbles;
  exposure; collectibles. It then wrote a dispatch plan with owners and acceptance checks.
- **Water & VFX** (`water-vfx-engineer`, only `tunnel_r7_water.js`):
  - foam bank `r7FoamBank`: about 660 glossy foam lumps in one draw call, hiding the lower body; it reacts to swerves
    and landings and thins out in a jump;
  - removed the navy disc (round 5's contact collar, hidden in round 7);
  - one glossy bubble look: milky body, thick bright rim, highlight, soft rainbow film; three big hero bubbles;
  - `r7Spray`: side spray specks and streaks;
  - round 6's bow wave re-shaded turquoise.
- **Tunnel & Lighting** (`lighting-visual-matching`; `ROUND6.r7` in `tunnel_r6.js`, round-7 lines in `tunnel_s4.js` and `game.js`):
  - spiral whirlpool bands with cobalt troughs and flecks (`whirl`) and a glow sprite at the vanishing point (`r7Glow`);
  - fewer flanges with uneven depths;
  - slimmer peach-gold rim (bezel outer 2.47), the orange step ring hidden;
  - high-key light with a warm pink-peach light;
  - left framing brush raised onto the washer face;
  - the centre coin run moved later, so one small coin and the gem show.
- **Gameplay & Visual Testing** (`gameplay-visual-testing`): runs the gameplay, cost and pixel-regression checks on the
  combined build.

Measured at 3.0 s with `compare_s4.py`, play area (approved / session start / combined `624b2a4`):

| | approved | start | combined |
|---|---|---|---|
| white foam | 20.6% | 7.2% | 22.5% |
| pale milky blue | 11.8% | 5.3% | 13.5% |
| deep blue | 6.2% | 1.3% | 3.6% |
| gold | 8.0% | 14.0% | 7.6% |
| pink | 13.9% | 18.1% | 16.2% |
| turquoise | 1.9% | 4.3% | 1.0% |
| purple (gem) | 0.6% | 1.5% | 1.1% |
| centre region ΔE2000 | – | 19.5 | 3.3 |
| mean ΔE2000 per pixel | – | 24.8 | 22.7 |

These are measurements of colour shares and regions, not a percentage of visual similarity.

Visual judgement: the composition is closer, with the foam bank across the bottom, a whirlpool centre, a slimmer rim and
the gem visible. Combined, though, the frame is too pale and lilac; the original is richer cobalt and cyan. A short tuning
pass on the combined build is next.

Sheets: `approved_before_now_3.0s.jpg` (approved, session start, now at 3.0 and 3.1 s),
`water_pass_before_approved_after.png`, `tunnel_pass_approved_before_after.png`.

### Evidence saved (`evidence/`)

- `art_director/`: the sheet the Art Director reviewed, and its centre and lower crops.
- `session_start/`: Round 7 at the start of this session.
- `water/`: the Water & VFX specialist's final frames, its jump-and-swerve strip and its measurements.
- `tunnel/`: the Tunnel & Lighting specialist's final frames, its approach sheet and its measurements.
- `compare_s4_combined_624b2a4.md`: measurements of the combined build.
- The agents' own full reports: `ChatHistory/2026-11-04_design_agent_reports.md`.
- This session's chat: `ChatHistory/2026-11-04_original_account_screen4_round7_agents_session.md` (Tripo key redacted).

# Screen 4 design agents: what the user is using and what they did (4 November 2026, from about 20:16 UTC)

The user asked for this to be recorded in the chat history: **for Screen 4 the user is now working with the project's
specialised 3D design agents**, coordinated by the lead Claude session ("Claudia"). Work is on **Screen 4 only**: no
Screen 1, Laundry Toss, opening cinematic, castle introduction or Screen 3.

Authority: the user's ORIGINAL APPROVED Screen 4
(`Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`). The two build guides,
`05_SCREEN4_WHAT_CLAUDIA_MUST_FIX.png` and `06_SCREEN4_EXACT_MATCH_TARGET_BREAKDOWN.png`, explain what to reconstruct.
Their AI-generated designs do not replace the original.

## The four agents (project-level definitions in `.claude/agents/`)

| Agent (file) | Role | Status this session |
|---|---|---|
| 3D Game Art Director (`game-art-director.md`) | Reviews real gameplay against the original approved Screen 4, ranks the differences, assigns owners. Read-only. | **Invoked and completed** a review of the three references and five real gameplay captures. Report below. |
| Water & VFX Specialist (`water-vfx-engineer.md`) | Rushing turquoise water, splash collar, immersion, bubbles, spray. | **Invoked and running** in its own git worktree. It owns only `WebDemo/src/tunnel_r7_water.js`, so it cannot overwrite the lead's files. The Art Director's water findings were relayed to it. |
| Tunnel & Lighting Specialist (`lighting-visual-matching.md`) | Lavender washer wall, gold rim, blue tunnel, lighting, camera. | Its tasks are carried out by the lead session in the main copy (`tunnel_r6.js`, `ROUND6.r7`), following the Art Director's list. It was not started as a separate process, because it would edit the same files. |
| Gameplay & Visual Testing (`gameplay-visual-testing.md`) | Playwright gameplay checks, captures, approved-versus-game comparisons, pixel regression. | Runs the final checks once the water work is merged. |

Agents in this environment cannot start other agents, so the lead session does the coordination the Art Director
recommends: it relays findings to each specialist and keeps each one on its own files.

## Test switch

`?s3=round7` = Round 6 + the rich preview + this pass. `?s3=round6`, `?s3=round6,rich`, Round 5, Round 4 and the
normal game are preserved unchanged.

## The Art Director's review (completed, about 20:20 UTC), verbatim summary

- Closest current frame: Round 6 "rich" at 4.2 s, just inside the drum. Its layout is nearest the original: a big
  paw coin left, another lower right, the sock right of centre, a brush top-left and the character at about the right
  size. The 3.0 s frames show the wall and rim, but the brushes sat behind the character "like mouse ears" and the
  tunnel was an evenly striped violet tube.
- Six largest differences, ranked:
  1. **Tunnel colour and whirlpool**: the original has deep cobalt rings with cyan and white sparkle, and a warm
     peach/rainbow glow round a bright centre at about 50% of the width and 55% of the height. The game was pale sky
     blue with thin gold rings. Owner: Tunnel & Lighting.
  2. **Lavender wall and gold rim arc** (17–33% of the height): pale silver-lilac metal above a thick, polished,
     yellow-gold arc that is wider than the screen. The game showed violet-blue stripes and an orange rim. Owner:
     Tunnel & Lighting.
  3. **Water, splash collar and immersion** (78–97% of the height): the original has a full-width bubbly white foam
     band over pale turquoise covering the character's lower quarter. The game had a thin collar and a dark navy
     column under the character. Owner: Water & VFX.
  4. **Coins, gem and sock**: the original's coins are lemon gold, big at both edges; small purple gem left of centre;
     sock right. The game's coins were orange-copper. Owner: Tunnel & Lighting (colour), Gameplay & Visual Testing
     (confirm every item is still collectable).
  5. **Brushes at the frame edges**: a cropped brush top-left and a pink, white and blue brush at the right edge. The
     game's top-left brush was twice as wide. Owner: Tunnel & Lighting.
  6. **Bubbles and lighting**: glossy bubbles with white highlights and a slight milky fill, gathered round the
     character and the edges, plus warm pink and peach light. Owners: Water & VFX (bubbles), Tunnel & Lighting (light).
- Measurements (reported separately): every frame lacks deep blue (0.3–1.1% of the play area against 6.5%) and white
  foam (5.6–13.6% against 20.8%).

## What has been implemented from it so far (lead session, `?s3=round7`)

- The tunnel is cyan-cobalt instead of violet, with brighter ring layers, more white sparkle and water streaks, and a
  warm peach and rainbow glow ring round the bright centre. Sparkle in the tunnel went from 0.10% to 0.70% of the area
  (the original has 1.36%). Tonal range is 0.069 (the original 0.073).
- The gold rim, inner step ring and paw coins are lemon gold instead of copper-orange, and the rim is polished and
  thicker. The washer wall is set to soft silver-lilac. The orange gold lips inside the tunnel are removed.
- Two decorative fluffy brushes on the wall at the mouth frame the view (left high, right at mid height). They are
  scenery, not hazards; the six hazard brushes are unchanged.
- The collectibles at the hero moment are placed as in the original: a big coin near each edge, the gem left of centre,
  the sock on the right and a small coin far in the middle. All are real, collectable objects.
- The mission card "Rescue 5 lost socks" is on screen at the hero moment (3.0 s), as in the original.
- In progress: why the band above the gold rim shows blue rings rather than the lavender wall.
- In progress (Water & VFX specialist): immersion, the full-width bubbly foam band, splash crests and glossy bubbles.

## Lessons recorded

- Only one software-rendered browser at a time: two captures running together produced a blank lavender frame.
  Alone, the same moment renders correctly. This was not a game bug.
- In three.js code, `void THREE` (using the whole namespace as a value) stops the bundler trimming three.js: the bundle
  grew from 885 to 1005 KB.

## Second session, original account (about 20:30 to 21:30 UTC): every agent invoked and completed

- **Art Director:** invoked and completed (hero frame 3.0 s; seven ranked differences; a dispatch plan with owners and
  acceptance checks).
- **Water & VFX:** invoked in its own worktree; completed and committed `1ba9b89` (foam bank, navy disc removed, glossy
  bubbles, spray). Merged.
- **Tunnel & Lighting:** this time invoked as its own agent in its own worktree (last session the lead did its tasks);
  completed and committed `4f56ec6` (whirlpool, rim, light, brushes, gem). Merged together with the water pass in `624b2a4`.
  Asked afterwards for a short tuning pass on the combined build (it was too pale and lilac).
- **Gameplay & Visual Testing:** invoked on `624b2a4` for the gameplay, cost, pixel-regression and recording checks.
- No two agents edited the same file. Browser runs were serialised with `flock /tmp/bw_browser.lock`.
- Results and numbers: `Previews/WebDemo/screen4_round7/README.md`.

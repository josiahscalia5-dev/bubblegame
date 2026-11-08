# game-art-director: baseline review of Level 1 (bundle a62848a0) against the board and the original Screen 4

Session b0abcf95, 8 November 2026. Read-only review of existing captures; nothing rendered or edited.

Tools I used: Read (images and README), Bash with Python, PIL and numpy (thumbnails, contact sheets, HSV colour-class shares, colour sampling) and grep. Nothing was rendered and nothing was edited.

All frames are from `Previews/WebDemo/screen4_round9_match/70_level1_wet/frames/new_89e89f18/` (bundle a62848a0). Percentages come from my own HSV colour classes in Python; they are not the project's `compare_s4.py`.

## A) The 10 beats against the board

| Beat | Status | Evidence |
|---|---|---|
| 01 Washer entry | PRESENT | `sheets/03_entry_OLD_NEW.jpg`: the girl, the toss, the porthole spiral, the camera into the water |
| 02 Start swimming, 0/5 | PRESENT | `t0.png`, `t3.0.png`: "Rescue 5 lost socks 0/5" panel, vortex, coins, sock |
| 03 Jump to raised side paths | MISSING | `t22.0.png` only shows "Jump! Swipe up over the soap bars" on the one path. There are no raised flumes and no gold rims. |
| 04 Drop to a lower path | PARTLY (visual only) | `t26.0.png` "The drop" is just a slope on the single path. No branch, no lower lane, no waterfall step. |
| 05 Spinning brushes | PRESENT, look off | `t6.0`–`t10.0`: banner and brushes in her lanes. They are flat flower discs on orange poles, not the board's big fluffy rollers. |
| 06 Coins, gems, socks | PRESENT | `t14.0` banner, the sock at `t14.0`, the gem at `t42.0` |
| 07 Avoid enemies | PRESENT | `t30.0`, `t32.0`: grime balls roll toward her and knock her (`level1.js` lines 26 and 436). They are small black balls, not board 07's large navy blob with angry pink eyes. |
| 08 Bubble Kingdom | PARTLY | `t36.0`–`t48.0`: the banner and the wet chamber with hoops. The kingdom is only a small castle seen through the end portal (`t48.0`), with no towers or waterfalls in the chamber. |
| 09 Rescue 4/5 → 5/5 | PRESENT, out of order | 4/5 at `t26.0`, 5/5 already at `t36.0`, before the kingdom. Board 09 puts 4/5 inside the kingdom approach. |
| 10 Level Complete | PARTLY | `t50.0`: three stars and a checklist on blue water. Missing: the Rewards row (+300 / +10 / +5), "Next Level" (it says "Play again" plus "Level 2 not built yet"), "Collect 50 coins 50/50" (it shows "Coins collected 91"), and her celebration. |

## B) Top 8 visual differences from the original Screen 4 (most important first)

1. **The lilac ceiling dominates the top of the screen** (`t6.0`–`t46.0`, screen height 20–50%).
   - Purple share: 64% at `t10.0`, 65% at `t18.0`, 60% at `t42.0`; the original has 22%.
   - Its colour is a brighter, cooler lilac (median `#be95f6`) than the original's silver-lavender (`#9976ce`).
   - In the original that region is the blue and cyan vortex.
2. **The course water is a dark violet-indigo slab** (screen height 50–68%).
   - Median `#2a1ce6` at `t26.0` and `#3e41f5` at `t42.0`; the original's water ahead is `#619cec`.
   - Its flat facets read as dark stripes, with white confetti flecks on top.
   - There is a hard step where it meets her lighter surf, at about 70–75% of the height (`t10.0`, `t30.0`, `t42.0`).
3. **Seams and cut-outs.**
   - A wavy cyan-white cut line runs where the blue water walls meet the ceiling (left and right, 25–45% height), like an opaque swirl cutout.
   - `t22.0`: her surf ends in a hard edge at 83% height, and a flat lavender floor band (`#b3a1fd`) shows from 83% to 90%.
4. **Odd objects.**
   - `t46.0`: a flat pink bar crosses the chamber at about 38% height, and the finish arch's yellow foot block sits at the lower left (about 2% from the left, 62% height).
   - Green-topped island slabs show inside the portal.
   - A dark blob sits at the far top of `t26.0`.
   - Orange posts stand in the lanes at `t6.0`–`t10.0`.
5. **Thin orange hoops every 8 m** stack into a corridor of rainbow arches (`t5.0`–`t46.0`). The original has only one gold rim at the entrance, and no glowing centre is left after the drum.
6. **The coins are orange, not gold.** Median `#f69c3a` against the original's `#f7c826`, in every frame. Some are also oversized: at `t22.0` a coin about 0.17 W wide covers her.
7. **The brushes and glints are off.**
   - The hazards are flat flower discs on sticks in the middle of the tunnel; the original has big fluffy pom-poms framing the sides.
   - Generic pink four-point star glints appear at `t3.0`–`t26.0`, which the user has asked to avoid.
8. **There are no white crests in her water after the drum.**
   - White share at 50–92% height: 0–2% in the build; the original has 15–19% as crests.
   - Her surf is a uniform pale-cyan carpet. The original's bright crest lines and bubbles are missing (crests, not foam masses).

## C) Art spec for the new pieces

Scale: her body is 0.8 m wide, lanes are 0.7 m apart, so the main water is about 2.4 m wide.

**1. Raised side flumes (board 05)**
- Proportions:
  - Inner water width 1.0 m.
  - Water surface 0.9–1.0 m above the main water.
  - Centred about 1.8 m to each side, outside the three lanes, banked 15–20° inward.
  - Rails are round tubes 0.18 m across, standing no more than 0.25 m above the flume water.
  - Length 15–25 m, ending in a short spill back into the main water.
- Gold rails: mid `#f6bc3b`, highlight `#ffd257`, warm shadow `#ec9a63`, dark edge `#a85031` (board 05). Match the original's gold `#eeb613`–`#fcd941`. Use a standard metal material, metalness 0.7, roughness 0.3.
- Outer wall: the original's silver-lavender `#a78bd0` / `#c5a4e4`.
- Water: `#119ff6` body, `#35b2fb` highlights, crest lines `#f5f8ff` (board 06), flowing faster than the main path.
- Avoid: white rails or pillars (the rejected slide look), a visible dry top or underside, the orange of the current coins, z-fighting with the tunnel wall.

**2. Lower-path chute and waterfall step (board 06)**
- Proportions: the step is 0.8–1.0 m tall, about her height; the chute below is 1.8–2.0 m wide with gold rails on both sides, as above.
- The lip is one continuous curved water surface, with white spray only along the break line (`#f5f8ff`, capped at 12 px as in swim2).
- Water: `#047aec` deep, `#119ff6` body, `#35b2fb` light, streaks `#d3edfa` (board 06).
- Optional cue: a translucent pink down-arrow `#e47fd4` (board 05) on the water.
- Avoid: the current indigo `#2a1ce6`, black gaps under the step, horizontal seams, and the lavender floor showing through.

**3. Jump pad**
- A floating bubble-spring pad 0.9 m across and about 0.12 m thick, in one lane, 6–8 m before the flume entrance.
- Gold ring `#f7c826` with shadow `#eeb613`; a translucent cyan dome `#5bbff4` (the original's tunnel cyan) with pink up-chevrons `#e47fd4`.
- A gentle glow pulse and rising bubbles.
- Avoid: the soap-bar look, a white disc, mechanical springs.

**4. Sock-goal HUD panel (the original Screen 4 and board 11)**
- Keep the original's panel exactly, using the precision kit's `07` HUD crop:
  - blue `#1470ea` (range `#085bc6`–`#2c81f5`);
  - bar track navy `#071e65`;
  - white text with a navy outline, the sock icon on the left, "N/5" on the right.
- Fill: green `#90e51d`, highlight `#a1ec3a`, shade `#80da15` (board 11), in place of the current peach-pink gradient.
- Drop the extra course strip, its caption and the castle icon under the panel: the original has none.

**5. Level Complete card (board 12)**
- A big star row (`#fad928`, shade `#d48f23`) above a blue title banner (`#1578d0`, white text).
- Checklist card `#e5eff9` with green checks `#4ca439`.
- Rewards panel `#dbe8fa` in a `#148ff0` frame: coin, gem and sock icons with "+300", "+10" and "+5" in navy `#202e83`.
- Green "Next Level" button `#0eb31c` / `#74f029`.
- Card about 0.85 W wide, with her celebrating and socks behind it, over visible blue water.
- Avoid: the plain white card and the "not built yet" note.

Images I made (scratch only): `/tmp/claude-0/-home-user-bubblegame/b0abcf95-25a3-5b9a-a3f8-62736537e615/scratchpad/art_director/` (`new_0.jpg` to `new_3.jpg`, `full4.jpg`, `crops.jpg`, `refs.jpg`, `panels.jpg`).
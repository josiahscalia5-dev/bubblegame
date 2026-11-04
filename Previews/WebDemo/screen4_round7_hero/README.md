# Round 7 HERO SCENE (`?s3=hero`), 5 November 2026: Screen 4 rebuilt as a dedicated playable frame

**Authority:** the user's ORIGINAL APPROVED Screen 4,
`Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`. It is the only target.

The user asked for a full art-match rebuild of Screen 4, not another tuning pass on the layered Round 7 tunnel. The hero
scene is staged from the approved picture itself, measured by the 3D Game Art Director, and it stays a real game:

- every coin, the gem and the sock can be collected;
- the brushes still knock;
- the controls, hearts, Bubble Blast, Turbo Spin, pause and the mission are unchanged.

`?s3=round7` and everything older render pixel-identical to `33da0e2`, the session's starting point (see "Checks").

- **Open it:** `WebDemo/index.html?s3=hero`. The hero moment is **2.85 s** after the tap: the character is 3.27 m before
  the drum's mouth.
- **Code:**
  - `WebDemo/src/tunnel_r7_hero.js`: camera, whirlpool, rim and collar, hero grade, staging, bubbles.
  - `WebDemo/src/tunnel_r7_hero_water.js`: water and foam round the character, by the Water & VFX specialist.
  - Small switch hooks in `game.js`, `tunnel_s4.js`, `tunnel_r6.js` and `screen3_models.js`. Each does nothing unless
    `hero` is on.

## How it was built (what changed from "tuning the tunnel")

1. **Measured spec first.** The Art Director measured the approved picture in Python (OpenCV, scikit-image) and listed
   positions as fractions of the screen:
   - the vanishing point (55.5%, 52%);
   - the ring bands and their colours;
   - the rim's fitted circle;
   - the lavender band;
   - the foam bank's edge and colour shares;
   - every coin, the gem, the sock, the brushes and the bubbles.
2. **The camera was derived from the picture:**
   - the character's dome is 42% of the width, so the camera is about 2.6–2.8 m behind it;
   - its top is at 69% of the height, so the camera is at the drum's axis height;
   - the tunnel's mouth is 0.45 of the width round the centre, so the mouth is 6.1 m ahead.
3. **The whirlpool:** rings are shaded from the *screen radius round the vanishing point* on the walls and on the water
   alike, so they are true concentric rings, as painted, instead of hoops on a pipe with a flat floor:
   - ring colours are the measured bands (median body, trough, crest);
   - the rings flow outward, faster with speed;
   - irregular white splash strokes run along the rings, with cyan crest lines;
   - white streaks and sparkles are fixed in the world, so they rush past;
   - a pastel rainbow ring (peach, pink, lilac, cyan) sits round a soft pastel centre, with no hot spot, as measured.
4. **Rim and wall:** the approved rim is a big ring centred well below the whirlpool (inner edge 0.86 of the width across).
   It is rebuilt as a large gold bezel 2.1 m before the mouth:
   - gold across the top and right, muted mauve low on the left;
   - a thin plum shadow and a lavender bevel;
   - a silvery-lavender collar back to the tube, lavender only across the top (as painted), whirlpool water at the sides.
5. **The colour problem behind every pale, lilac round:**
   - The shaders of Rounds 5–7 wrote screen colours straight into linear-light shaders, so deep blues came out pastel.
   - The drum's old grade then turned saturated blues violet. Measured on one ring pixel: **#045ee7** before the grade,
     **#645cf3** after.
   - The hero scene writes sRGB colours through `THREE.Color` and has its own hue-preserving grade.
6. **Staging solved, not guessed.** `WebDemo/tools/screen4/hero_probe.cjs` casts rays from the approved picture's
   positions through the real hero camera (`PICKS`). Each object was then placed where it lands on the approved spot,
   inside the reach of a lane or a jump:
   - the big left and right coins, the small upper-left coin, the small centre coin;
   - the gem and the sock;
   - the two framing brushes (the left one on the washer's face);
   - ten bubbles.

   The first two hazard brushes stand 3.4 m further in and come out of the wall later, so the approved picture's open
   middle shows. Coin trails still lead through the safe lane.

## Results

(filled in below)

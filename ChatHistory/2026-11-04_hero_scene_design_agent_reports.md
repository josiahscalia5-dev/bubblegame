# Design agents' reports: Round 7 hero scene session (original account, 4–5 November 2026)

These are the final reports of the project's design agents (`.claude/agents/`), as they returned them to the lead in this
session. No keys appear here. The Gameplay & Visual Testing check and the Art Director's final review were still running
when this file was saved; their results will be added in a later save.

---

## 1. 3D Game Art Director: measured spec of the ORIGINAL APPROVED Screen 4

The Art Director measured the approved image (767×1536) with OpenCV and scikit-image.

- Units are fractions of the width (x) and the height (y), origin top-left. Radii and sizes are fractions of the WIDTH.
- Overlay of the fitted circles and outlines: `Previews/WebDemo/screen4_round7_hero/evidence/art_director_approved_spec_overlay.png`.

### Vortex

- **Vanishing point:** (0.555, 0.515–0.52).
- **Ring centres drift down and to the left as the rings grow.** Approximate rule: centre ≈ (0.557 − 0.105·r, 0.495 + 0.20·r).
- **Bands, by radius from the vanishing point** (median / crest / trough):

| Radius | Band | Median | Crest | Trough |
|---|---|---|---|---|
| 0.03–0.045 | pale pink | #f8dff8 | | |
| 0.045–0.07 | lilac | #ad96e9 | | #9680db |
| 0.07–0.11 | pastel ring 1, pink-white | #eecdf5 | #f1f4f9 | #e69bec |
| 0.11–0.165 | periwinkle | #6696ed | #bedbfc | #4072e2 |
| 0.165–0.20 | sky | #6cb6f4 | #b9f3fe | #3a84e6 |
| 0.20–0.215 | thin blue | #4c87e3 | | |
| 0.215–0.265 | pastel ring 2, cream rainbow | #eeddd4 | #f6f9ea | #aea3d0 |
| 0.265–0.34 | cornflower, white streaks | #5d9fed | #e5e3f9 | #216fe5 |
| 0.34–0.39 | darkest electric blue | #2d7cef | | #0955e2 |
| 0.39–0.45 | electric blue, cyan streak #0f8ff8 | #2d87f4 | | |

  - Pastel ring 2 changes tint by angle: peach #f1d2b4 at the top, mint #e7f7ee upper left, lilac #c7a3f2 left, ice-cyan #b0e6f4 upper right.
  - The outermost band ends at the navy mouth edge, #002ca9.
- **Spacing:** crest radii 0.035, 0.09, 0.18, 0.24, 0.35, 0.45. Beyond 0.18 the spacing is roughly geometric, about ×1.35–1.4.
- **Sparkles:** 66 white flecks, 79% of them above the vanishing point, densest at r 0.10–0.40. They are dashes 0.02–0.05 W long, running along the rings.
- **Centre:** no white hot spot. A pastel pink/lilac/white disc out to r ≈ 0.11.

### Gold rim

- **Inner edge:** a circle centred at (0.467, 0.668), r 0.857 W.
  - y = 0.240 at x = 0.5.
  - It meets the right frame edge at y ≈ 0.333.
- **Thickness:** 0.07–0.08 H at the right edge, made of a lavender bevel #cbabea, a peach-gold core and a plum shadow.
- **Colour:**
  - Gold for x > 0.62: highlight #fffabf, mid #ee9f84 / #f4ae8b, shadow #784463.
  - Muted mauve #b68fa0 / #baadd0 to the left.

### Lavender wall

- At x = 0.5 it runs y 0.245–0.29. Colour #605ac6–#6a5ecc, with a pale lip #a499ff above the navy edge.
- Right side: x 0.85–1.0, y 0.32–0.40.
- Corners: top-left #9673b7 / #d7baf0, top-right #6f73c5.

### Water and foam

- **Foam top edge:**
  - x 0–0.2: y 0.79–0.80.
  - Under the character: 0.81 at x 0.3, 0.835 at x 0.5, 0.86 at x 0.7.
  - x 0.8–1.0: y 0.80–0.82.
  - The foam body ends at about y 0.90.
- **Mounds:** 6–7, at x ≈ 0.05, 0.17, 0.32, 0.50, 0.60, 0.78, 0.92.
- **Foam band, y 0.80–0.90:** pale blue 30%, white 21%, electric blue 13%, lavender 12%, azure 4%, and the character 19%. Mean L* 73.5.
- **Water below y 0.90:** azure #4bbbf7 39%, electric blue 27%, pale blue 20%, white 13%.
- **Below the vanishing point, y 0.56–0.70:** the rings flatten into horizontal flow streaks: white 33%, pale blue 30%, azure 15%.

### Character

- Box x 0.21–0.735 including the tufts; the dome is x 0.27–0.69.
- Top at y 0.693.
- The foam line cuts it at 0.81 on the left, 0.835 in the centre and 0.86 on the right.

### Objects

Centre position; size as a fraction of the width.

| Object | Centre | Size | Notes |
|---|---|---|---|
| Left brush | (0.01, 0.324) | 0.39 | about 50% off frame |
| Right brush | (1.0, 0.50) | 0.45 | blue core |
| Small tilted coin | (0.151, 0.47) | 0.124 | |
| Far coin | (0.52, 0.554) | 0.10 | |
| Big left coin | (0.193, 0.602) | 0.21–0.23 | |
| Big right coin | (0.88, 0.736) | 0.24 | |
| Gem | (0.323, 0.509) | 0.10 | |
| Sock | (0.735, 0.605) | 0.20 | |
| Big bubble | (0.75, 0.335) | 0.20 | |

### Global colour, tunnel only

White 27%, electric blue 26% (#408def), pale blue 19%, lavender 12%, azure 10%, deep cobalt 4%. L* 75, saturation 0.42.

### Five structural fixes for Round 7 (as it stood at 3.0 s)

1. Rim size and position.
2. Viewing angle.
3. Hazard brushes cluttering the vortex.
4. A white foam mass instead of a thin blue-tinted bank over azure water.
5. Objects bunched too low in the middle.

---

## 2. Water & VFX specialist: hero-scene water

Commit `875f253`, merged into `claude/screen-4-art-rebuild-69gb2p` in `7e3eded`.

The character now sits inside raised, glossy blue water. White appears only on the crest tips, the flecks and the spray, and
the white foam blanket is gone.

### What was built

Everything runs only under `?s3=hero` and uses private random numbers.

- **`heroSwell`:** a horseshoe of water round the front and sides of the character that moves with it. 1 draw call,
  13,392 triangles.
  - Its crest heights were solved from the hero camera.
  - Turquoise near the crest and slightly see-through, so the lower body reads as under water. Azure down the face,
    electric blue in the ripples, with a cyan sheen and glossy highlights.
  - It piles up on the side the character swerves to, slumps in jumps, is thrown out on landing, and follows the
    character's dip after a landing.
- **`heroSplash`:** 560 droplets, streaks and puffs. 1 draw call, 1,120 triangles.
- **Floor:** the water floor near the character is turquoise/azure.
- **Hidden while the swell is up:** `r7FoamBank`, `mascotFoam`, `r7Spray`.
- **Cost at 2.85 s:** 207 draw calls / 1,382,316 triangles before, 206 / 1,363,508 after.

### Measured around the character

Region x 0.2–0.8, y 0.70–0.90:

| | white | pale blue | azure | electric blue | pink |
|---|---|---|---|---|---|
| Before | 29% | 15% | 1% | 5% | 40% |
| After | 12% | 19% | 11% | 22% | 30% |

- **Top edge:** within ±0.02 of the Art Director's targets at x 0.1 and 0.5. Higher at x 0.3 and 0.7, by design: the water climbs the body's sides at the lead's request after the user's correction.

### Still different from the approved image

- The approved bank is busier, with glassy bubble domes, dense sparkle and thick irregular white splash crests. Ours reads as smoother "glass hills".
- There is a pale lip right in front of the body.
- After a landing inside the drum (3.3 s) the side swells rise to about 0.6 of the screen height.
- Some spray streaks look like needles.

---

## 3. Lead's measurements in this session (for reference)

- **The pale lavender haze is in the 3D render, not CSS.** Across the 77% of the game area outside the HUD, the raw WebGL
  canvas and the page screenshot have the same mean colour within 1/255. The canvas is opaque.
- **Causes in the render:**
  - Round 5–7 shaders wrote screen (sRGB) colours into linear-light shaders.
  - The drum's grade maths: linear saturation and contrast drive pure blues negative, then the opening's vibrance step
    mixes them toward grey. One ring pixel goes from #045ee7 to #645cf3.
  - Bloom at threshold 0.9.
- **Regression:** the normal game, `round7`, `round6`, `round6,rich`, `round5` and `round4` all show 0 differing pixels
  against `33da0e2` at Tap to Start, 2.85 s, 4.2 s and 6.0 s.
- **Blue water around the character after the merge** (x 0.2–0.8, y 0.70–0.90):

| | white | blue water |
|---|---|---|
| Approved | 19% | 21% |
| 2.85 s | 13% | 43% |
| 3.0 s | 12% | 41% |
| 3.1 s | 15% | 38% |

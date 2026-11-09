# s56 water shader review: lane snapshot vs integration (9 November 2026)

Reviewed: `s56_tunnel_lane_snapshot.js` (lane WIP, 508 lines) against `s56_tunnel_integration.js` (current game, 478 lines).
Line numbers refer to the lane snapshot unless marked `integ`. Read-only: no project file was edited.

## What changed (diff -u)
The lane adds `S56.water` (41-51), retunes `WAVES` (59-65), and adds `CHOP` with `CHOP_K/MEAN/MAX` (70-79) and `CHOP_GLSL` / `s56Chop` (87-93).
It does NOT touch either ShaderMaterial, its uniforms, or any shader body. So the only GPU-visible change is the new `WAVES` numbers.

## Method and tool status
- **Generated the real GLSL.** The module's template literals were evaluated exactly as in the browser, giving one `.vert`/`.frag` per material.
  Then the plugin's `check-shader-bindings.ts` (deno 2.9.6) was run once per material.
- **Checked the numbers in node** against the game's real chain (`game.js:96-109`, `shaders.js` GradeShader). It is the same model as
  `WebDemo/tools/s56/pipe56.py`, plus the UnrealBloomPass that `pipe56.py` leaves out.
- **WebGL2 compile in headless Chrome: NOT RUN.** `/tmp/bw_browser.lock` was held throughout by washer34's `shots6.cjs` capture, with
  about 6 waiters queued. My 420 s wait expired; I did not break the lock. The blockers below are static, based on the GLSL ES 3.00 spec.
- **threejs-devtools-mcp: NOT AVAILABLE.** It failed to connect at session start (CONNECT_TIMEOUT; spector: CONNECTION_CLOSED), and this
  agent was given no `mcp__*` tool, so no call was possible. There was no live compiled-shader cross-check.

## Script output, read critically
- **shellMat:** CLEANLINESS, `uTime` declared (151) and set from JS (146) but never read. Real, harmless, and pre-existing (integ 116).
- **waterMat:** no findings. The varyings agree in name and type:
  - water: vW, vN, vXU, vH, vRing, vWake;
  - shell: vAU, vW, vN.
  The attributes `aAU`, `aXU`, `aR` and `aUp` match the `setAttribute` names and item sizes (209, 428-429).
- **Script gaps:**
  - It merges the two stages for the uniform check, so it misses `uHero` being unused in the water fragment (W5).
  - Its `uniforms:` regex needs the object on several lines and reads only the FIRST `uniforms:` in a file. These materials use one-line
    uniforms, and two materials share one file. I therefore fed it a normalised uniforms file per material; on the raw file it would mis-parse.

## BLOCKERS (would fail to compile or bind)
None in the snapshot as it stands. `CHOP_GLSL` is never interpolated, every generated literal is a float, and `- -1.2 * t` (WAVES[4]) is
legal GLSL. Two would appear at the next step:
- **B1. `s56Chop` uses `fwidth` (90), so it is fragment-only.**
  - If `${CHOP_GLSL}` is placed beside `${WAVE_GLSL}` in the vertex shader (356), it fails to compile: GLSL ES 3.00 has no derivatives in
    the vertex stage.
  - In the fragment stage it is legal in WebGL2 (three r170 is WebGL2-only; no extension flag is needed).
  - Call it only in uniform control flow, never inside an `if` on per-pixel values, or `fwidth` is undefined.
- **B2. `f()` (80) can emit a bare integer.**
  - The non-integer branch gives `f(2.0000001)` = `"2"` and `f(1e-7)` = `"0"` (verified in node).
  - GLSL ES 3.00 has no implicit int-to-float conversion, so `2 * cos(ph)` fails to compile.
  - Today's tables are safe: every literal in the generated WAVE and CHOP GLSL has a decimal point.
  - Fix: append `.0` when the string has no `.` or `e`.

## WARNINGS
- **W1. LIKELY BUG (drift introduced by this diff): the crest lines no longer follow the swells.**
  - The fragment code (399-400) hard-codes the OLD WAVES[0]/[1]: `0.22x + 0.60u - 2.0t` and `-0.85x + 1.30u - 3.1t + 1.3`, which are
    integ 47-48 exactly.
  - The lane's WAVES (60-61) changed to ku 0.75 / 1.60 and w 2.8 / 4.2.
  - Line p1 slips half a wavelength every 3.9 s (or 20.9 m along the run); p2 every 2.9 s (or 10.5 m).
  - Result: the white crest lines sit on troughs half the time and slide across the swells.
  - Fix: generate them from `WAVES` as `WAVE_GLSL` does, or replace them with the chop crests.
- **W2. Dead code, expected for WIP.**
  - `CHOP_GLSL` / `s56Chop` (87-93) are never interpolated.
  - `S56.water` (44-51) is never read. The comment at 41 ("read every frame") is not true yet.
  - The fragment still uses hard-coded colours (386) and fixed crest, lace, collar and wake strengths (402-408).
  - Tuning `window.__bwS56.water` does nothing until uniforms exist and `update()` copies them in. Once they do, rerun the binding check.
- **W3. `crest: 0.8` (47) is mis-scaled under either reading.**
  - Read per wave (`s > 0.8`, as the comment says): a +-0.45 rad band, 14.5 % of each wavelength. Over the 5 waves that covers about
    54 % of the surface, which is a pale-water risk.
  - Read as the summed `s56Chop().x > 0.8`: 0.08 % of the area, so crests almost never appear.
  - `s56Chop` returns only the sum, so the per-wave threshold described in the comment cannot be built from its return value.
- **W4. The chop's slopes need the track frame.**
  - `.yz` are d/dx (across) and d/du (along) in m/m; `.x` is normalised (range -0.39..0.91), not metres.
  - Slope max 0.70 (35 degrees), rms 0.18: as large as the geometry swells (rms 0.19, max 0.45).
  - The fragment stage has no R or T varying. Adding the slopes to N in world x/z, as the fine ripples do (381), is only correct where the
    track runs along world Z, and the track pitches, turns and banks (`track.js:25-53`).
  - Fix: pass `aR`/`aUp` through as varyings.
  - The normal formula at 367 is correct: U = T x R (`track.js:49`), so `cross(aR, aUp)` = +T.
- **W5. Uniforms set but never read:**
  - shell `uTime` (146/151);
  - water fragment `uHero` (372; only the vertex stage uses it);
  - `uHero.z` (vx, 471), read by neither stage.
  All harmless (the compiler drops them).
- **W6. The new comment at 57-58 overstates heroOffset.** It says he rides the swells "averaged over his body's footprint (heroOffset)",
  but `heroOffset` (489-496) samples a single point. With the shorter swells his bob gets busier: wave 3 meets him at about 15 rad/s at
  7.2 m/s, and the 14/s smoothing passes about 68 %, giving roughly 3.4 cm at 2.4 Hz. This is visual-only JS.
- **W7. The new WAVES lower the height rms from 0.111 m to 0.089 m.** The colour bands at 388-389 key on absolute height (-0.16..0.06 and
  0.04..0.2), so turquoise shrinks and cobalt grows: darker, not paler. Retune the thresholds.
- **W8. Pre-existing precision, low priority.**
  - The `s5h` hash (96) degenerates once its lattice input is large: vXU.y up to 262 times 5-13, plus uTime scroll terms, times 2.03 per
    octave. Above about 5e5, the fp32 ulp of `p*456.21` is 0.03 or more, so ripples, lace and crest breaks turn stripy on far chunks and
    late in a run.
  - The `sin()` arguments also grow with uTime (CHOP w up to 12.1 rad/s). That is fine on desktop highp but imprecise on some mobile GPUs
    past about 1e4 rad.
  - Fixes: `mod(w*t, 6.2831853)` in the generated GLSL, and `mod(i, 289.0)` inside `s5h`.

## PALE-WATER RISKS
The chain: shader linear -> UnrealBloomPass (luminance threshold 0.97, strength 0.32, `game.js:104`) -> grade (sat 1.32, contrast 1.12)
-> Neutral at 1.05 -> sRGB.
- **P1. The new foam `[1.45, 1.7, 2.0]` (45) blooms.**
  - Its luminance is 1.67, above the 0.97 threshold. The current foam (0.86, 0.93, 1.02) at 408 is 0.92 and never blooms.
  - Every crest, lace, collar and wake pixel would spread a white halo over the blue.
  - `pipe56.py` leaves the bloom out, so its fit cannot show this.
  - A foam weight above about 0.38 on turquoise (0.55 on deep) already crosses the threshold.
- **P2. Partial foam whitens much faster.**
  - `mix(turq, foam, 0.25)` displays as #91d1f9, against #5cbef1 with the current colours.
  - Anti-aliased edges, lace at 0.55, and foam faded by haze are all partial weights.
  - Fix: keep foam thin and hard-edged, or cap it near 1.0 and let the tone mapping supply "near-white".
- **P3. turq `[0.155, 0.62, 1.0]`: its blue channel exceeds the 0.76 knee, but the fit itself is correct.**
  - Through the real chain the palette lands on: deep #004dd5 (exact), mid #0a8cea, turq #40c1f7 (target #49c2f8), with only 5.5 %
    Neutral desaturation.
  - The risk is lost headroom. `c *= 0.72 + 0.3*face` (391) can reach x1.02, and the additive glints (397) on top bloom readily:
    turq + 0.5 glint has luminance 1.08 and displays as #9dd4fb.
  - The chop's 35-degree tilts (W4) widen glint coverage; the comment at 381 already notes that large tilts made pale glint blotches.
  - Fix: scale the chop's normal contribution down.
- **P4. Pre-existing and by design, not in this diff:**
  - HAZE (106-107) mixes the far water toward (0.42, 0.55, 1.02) at up to 0.9.
  - The splash droplets (436), at (1.15, 1.25, 1.35), have luminance 1.24 and bloom.

## Checked and correct
- WAVE_GLSL's derivatives are A*kx*cos and A*ku*cos. JS `s56Wave` and the GLSL come from one table, so they stay in step.
- CHOP_GLSL is correct:
  - its derivative coefficients A*K*k (0.099, 0.462, ...) are right;
  - `CHOP_MEAN` 0.291 matches e^-K I0(K) = 0.29132;
  - the height is normalised to a maximum of 1.0;
  - the fade `fd` scales both the term and its mean, so a faded wave adds 0 (no offset at distance);
  - the fade window of 0.3-1.0 rad/px is safely inside Nyquist (pi rad/px).
- `fwidth` in the shell fragment (167, 172) is legal. three.js gives highp. The phase sizes are fine in fp32.

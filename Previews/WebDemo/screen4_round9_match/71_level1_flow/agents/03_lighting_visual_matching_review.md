# lighting-visual-matching: artifacts, housing and the widened section (read-only)

Session b0abcf95, 8 November 2026.

Tools I used: Read, Grep, and Bash with Python/PIL (contact sheets and crops in the scratchpad, plus colour-class measurements). Nothing in the repository was edited and no browser was launched.

**Measurements** (colour classes, in the band from 0.20 to 0.45 of the screen height):
- **Lavender/purple share:** original 26% (that counts its housing rim and the pink brush); captures t6, t14, t32, t40 and t44 give 59%, 58%, 75%, 61% and 69%.
- **Warm rim pixels:** the original's rim has median #e99d8b, highlights #fdd3a7 and shadows #b87168. The game's hoops (goldM) have median #f5966a and shadows #943f25 (more orange, with brown shadows).

## 1. Artifacts, ranked by visual impact

**A. Purple ceiling dominance — CONFIRMED** (t6–t44; worst at t32 and in the chamber at t40–t48, from the top of the frame down to the vanishing point).
- Cause, lines 151–152: the metal is a fixed angle, `|a| < 0.78` rad (±45°).
- On a portrait screen a ±45° wedge above the vanishing point covers the whole upper half (the screen's top corners are only about 26° off vertical).
- In the chamber it is 0.78 × 5.6 = 4.4 m of metal each side of the top.
- Fix: make the crown a fixed arc length, so the upper corners show water.
```glsl
float Rr = ${wet ? 'vR' : f4(R)};
float edge = 1.1 / Rr + 0.025 * sin(u * 0.45 + t * 0.8);   // 0.43 rad drum, 0.31 at 3.6 m, 0.20 chamber
float ra = abs(a) / edge;
float metal = 1.0 - smoothstep(0.82, 1.08, ra);
vec3 mc = mix(PURPLE, LAV, 1.0 - smoothstep(0.38, 1.0, ra));
mc = mix(mc, SILVER, (1.0 - smoothstep(0.0, 0.41, ra)) * 0.6);
```
The `ra`-relative ramps are required. Line 154's fixed 0.32 would turn a narrow crown entirely silver. Line 153's `smoothstep(edge, 0.3, …)` already has edge0 > edge1, which GLSL ES leaves undefined.

**B. Wavy "cut-out" metal edge with white and orange outlines — CONFIRMED** (crops of t6, t14, t32 and t40: lobed boundaries traced in white and orange).
- Line 151: a wobble of 0.07·sin(u·1.1 + t·1.6).
- Line 152: a hard ±0.05 edge.
- Line 164: a full-strength white line.
- Line 165: a gold line that follows the wobble.
- Fix: use the softer `metal` above, then
```glsl
float wl = abs(ra - 1.0) * edge;
col = mix(col, WHITE, (1.0 - smoothstep(0.0, 0.05, wl)) * 0.25 * (0.55 + 0.45 * l1n(vec2(u*3.0 - t*4.0, a*9.0))));
col = mix(col, GOLD, (1.0 - smoothstep(0.0, 0.02, abs(ra - 0.88) * edge)) * 0.35);
```

**C. Floating orange poles — CONFIRMED** (t7 left, t8 right, the sheet 05 frame NEW 6 s).
- Line 416: the brush's gold axle is 1.0 m long at y 0.95, so it stops about 2.2 m above the water. The wall top is at 4.05 m.
- Fix:
```js
const top = C.axisH + Math.sqrt(C.radius ** 2 - x * x) - 0.74, len = top - 0.45;
const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, len, 12), brushHub); arm.position.set(0, 0.45 + len / 2, -0.25);
```

**D. Fine stripes on the side walls toward the centre — CONFIRMED** visually (t14, t32: vertical hairline striping and dashed white streaks).
- Lines 139–145, 148 and 155 have no fwidth fade (the water got one, `aaW`, line 238).
- Fix, after line 140:
```glsl
float aaR = clamp(fwidth(u) * 1.4 - 0.1, 0.0, 1.0);
rib *= 1.0 - aaR; rib2 *= 1.0 - aaR;   // and multiply streak and ring by (1.0 - aaR); line 155: 0.05 * (1.0 - aaR)
```

**E. Hand-off at u 35–50 — CONFIRMED** (t5): the course tube's crown, its outlines and the hoop at 44 show as a nested tube inside the Screen 4 drum.
- Lines 167–170: the intro blend runs after the metal and keeps 30% of it.
- A step from the Screen 4 lining's radius (2.0, `tunnel_r7_hero.js:254`) to 2.55 is SUSPECTED.
- Fix, before line 161: `metal *= smoothstep(41.0, 52.0, u);`, and the same factor on both waterline lines.

**F. Pale far centre — SUSPECTED deviation** (t14, t44: white-lavender).
- Line 173 mixes 0.92 toward #e6f8ff × 1.3; the original keeps the middle depth azure.
- Fix: `col = mix(col, mix(AZURE, GLOW, 0.6) * 1.2, smoothstep(12.0, 60.0, d) * 0.7);`

**G. Chamber end wall.**
- Green island slabs seen edge-on through the portal — CONFIRMED (t44–t48). Line 93 puts the islands at h 0.4–1.0, at eye height. Move them to h −2.5 to −1.0 or +3 to +5.
- The violM band — SUSPECTED, from the geometry; I can't see it clearly at t48. Line 552 puts it at radius Rk − 0.6 around the portal centre (P.h 2.4, 0.9 m above the drum axis), so its top reaches 7.62 m against the 7.1 m ceiling and is cut by the wall. Fix: `band.position.y = C.axisH - P.h` for that band, at radius `Rk - 0.35`.

**H. Pink bar across the chamber** (t44, t46 in `frames/new_89e89f18`) — this is the finish ribbon, already hidden at line 536 in the final build. Recapture to confirm.

**I. Chunk joins.** No seam is visible at 50.6, 65.6 and so on, since joining rows use the same `TR.frame(u)`.
- SUSPECTED: at 260.6, line 282 switches from 64 to 112 columns. That leaves a T-junction crescent of up to 3 mm, which could show the sky as sparkle once it is visible (u > 220).
- Use one constant `nA` (112) for every chunk once any widening exists.

No horizontal dark streaks show in the water in these captures; the `aaW` fix holds.

## 2. The widened section (R 2.55 → 3.6) and the lower channel

**Metal crown.**
- Formula A gives `edge` = 1.1/3.6 = 0.31 rad there (18°, 1.1 m of arc each side), so the crown edge sits at h ≈ 4.9 m. The walls beside and behind the flumes are then water ribbons.
- If the drum must stay as it is for now (one correction at a time), use instead: `float edge = mix(0.78, 1.1 / vR, smoothstep(2.6, 3.4, vR)) + 0.025 * sin(u * 0.45 + t * 0.8);`
- The `ra` ramps and the softened outlines from B are needed in either case.
- `vR` already reaches the shader (`aR`); size every chunk's `nA` from its largest `radiusAt`.

**Hoops.** Uniform `hk` = 1.41 makes them 41% thicker. Their 170° arc ends at h ≈ 1.8 m, x ≈ ±3.5, just behind the flumes. Give the widened section its own InstancedMesh with a 110–120° arc.

**Flumes.**
- At h 1.1–1.4 the wall is at |x| ≈ 3.58, so flumes at x = ±1.85 float about 1.2 m off it. Give each a violM outer skirt down to the main water, or silverM brackets to the wall every 4 m.
- Flume water: `waterFragWet` with `aHalf` set to the flume's half-width, so its foam sits at its rims.

**Gold that reads like the original's rim.** goldM (line 364) gives the orange and brown above (emissive 0x6a3a00, metalness 1 against a blue env map). Don't change goldM itself (the gate, portal and finish share it); clone it:
```js
const rimGoldM = goldM.clone();
rimGoldM.color.set(0xffd9a6); rimGoldM.metalness = 0.8; rimGoldM.roughness = 0.3;
rimGoldM.emissive.set(0x8a4e5e); rimGoldM.emissiveIntensity = 0.5; rimGoldM.envMapIntensity = 1.1;
```
- The rim: a TubeGeometry (radius 0.08) along each flume edge, built with the rail pattern at lines 479–480 (`TR.map(s*x, h, u)` into a `CatmullRomCurve3`).
- Inside it, a silverM lip (radius 0.035, 0.06 m inward), with violM underneath as at line 482.
- Optional: bulbM lights every 2 m, matching the hoops.

**Lower channel (−1.4 m).**
- Don't let `W.baseHeight` step inside one wetChunk. With 96 columns the step becomes near-vertical faces that stretch the noise into streaks.
- Split the water into the side water and the channel's own ribbon.
- Line the channel's side walls with a metal-free variant of the wall shader (for example a `uCrown` uniform set to 0), so they show dark-blue water ribbons, not lavender.
- Divider rails: rimGoldM on top, violM base tubes (the pattern at lines 479–482), placed so they hide the step edges.
# Tunnel & Lighting: the tunnel's water while she moves (inspection and design, 6 November 2026, rerun)

Read-only. Nothing in the game was changed and nothing was rendered. Sources: the existing same-frame ablations
(`52_diagnosis/ablation/R9_*`, `R9w_T1.0`) with their `census.json`, `zone_water.py`'s classes, and the ORIGINAL.
"Est." numbers are composites: the single ablations' linear-light deltas, summed. They are estimates, not renders.

## 1. The cause: three layers switch on 0.2 s after the tap

The start frame's census and the +1 s census differ by exactly three objects: `r3Swirl`, `r3Whirlpool` and
`r3Bubbles`. All three are gated by round3's `inside()` (`tunnel_r3.js:65`, her u from 3.0 to 4.3 m). Each one's own
updater turns it back on every frame:
- `tunnel_r3.js:286`: `mesh.visible = k > 0`;
- `:358`: the same;
- `:388`: `mesh.visible = k > 0.001`.

Round 4 hides only `r3Swirl`, and only once, at build (`tunnel_s4.js:321` -> `tunnel_r4.js:65`). She starts at u 1.592 m
at 7.21 m/s, so the three layers appear at +0.20 s and are full at +0.38 s. No checkpoint since R4 ever contained them.

What each layer draws:
- **the swirl:** cyan-white bands at up to 0.92 alpha, as white far down the tube (`uFar 1`). These are the paper-white
  blocks on the upper walls and the white arcs over the centre.
- **the whirlpool:** a white heart 14 m ahead.
- **`r3Bubbles`:** 64 bubbles inside the open tube, the "inner zone" that step 7 removed.

`mwTunnelBubbles` and `heroGlow` change the zone by 0.0 at +1 s.

| zone x 0.32-0.68, y 0.22-0.52 | cobalt | turq | pale | white | lavender | sat |
|---|---|---|---|---|---|---|
| ORIGINAL | 14.6 | 11.4 | 8.3 | 5.8 | 28.5 | 0.55 |
| R9 start | 6.4 | 8.3 | 8.0 | 7.8 | 29.4 | 0.50 |
| R9 +1 s | 10.8 | 5.5 | 23.0 | 14.0 | 5.0 | 0.46 |
| est. swirl + whirlpool hidden | 14.3 | 9.1 | 9.0 | 10.6 | 8.0 | 0.55 |
| est. + all bubble layers (bound) | 14.9 | 9.6 | 9.6 | 6.7 | 7.9 | 0.58 |

At +2 s, hiding the overlays (`r3Swirl` with `heroGlow`) gives:
- pale 26.3 -> 11.1;
- cobalt 7.9 -> 12.4;
- saturation 0.46 -> 0.56.

## 2. The lavender: not the flow, not delilac

In the ORIGINAL, y 0.22-0.30 of the zone is **74.7 % lavender**: the washer's bevel and housing. That band supplies 20
of the zone's 28.5 points (R9 start 71.1 %, +1 s 0.1 %). Once the camera passes the rim plane, the housing is behind it,
so **28.5 is not a moving-frame target.** Compare moving frames on y 0.30-0.52 instead:

| y 0.30-0.52 | cobalt | turq | pale | white | lavender | sat |
|---|---|---|---|---|---|---|
| ORIGINAL | 18.4 | 15.6 | 11.4 | 7.9 | **11.1** | 0.57 |
| R9 start | 5.2 | 11.2 | 10.8 | 10.7 | 13.8 | 0.49 |
| R9 +1 s | 3.5 | 6.1 | 25.2 | 19.3 | 6.9 | 0.40 |
| est. S1 | 6.6-7.4 | 9.1-9.8 | 11.3-12.0 | 9.2-14.7 | **11.0-11.1** | 0.49-0.52 |

The walls cannot lose lavender by moving:
- The ring map replaces everything at rw 0.005-0.46 (`tunnel_r9_focus.js:126`, `amount: 1.0, detail: 0`).
- It is sampled at the static `bv`, with no `uTime` or `uHeroTravel` term:
  `vec3 rmS = clamp(textureGrad(uFocusRings, bv, dx, dy).rgb + dl * 0.00000, ...)` (`tunnel_r9_match.js:642`).
- So the flow and travel terms (`:689-699`, `:726-727`) and the walls' delilac (`:713-714`) are overwritten.
- The floor's delilac (`tunnel_r9_match_water.js:333-334`) acts only outside rw 0.22-0.32. The ORIGINAL has 1.5 %
  lavender there.

**The swirl and the whirlpool paint over the original's lavender inner rings.** The remaining cobalt gap (5-7 against
18.4) is the same in the start frame. Fixing it moves the start frame, so it is a separate step.

## 3. Two radial light bars beyond the colour map's edge

In the top 22 % of the frame at +1 s, with the swirl hidden, 14.0 % of the pixels are bright-pale. 13 of those 14 points
lie in two sectors round the vanishing point, 60-72 and 104-117 degrees.

The cause is `tunnel_colour.png`, which is clamped in v (`tunnel_r9_match.js:383`):
- its outer row has cream columns at 65-68 degrees (#ffe0b5) and 108-113 degrees (#ffffe6);
- every wall point beyond rw 0.85 takes that row, so each column draws an endless radial bar;
- at the start the housing hides them.

## 4. The floor's paper scraps

`focusFloorGLSL` draws one opaque #f6fbff dash per cell of a screen-polar grid (20 cells per turn, 9 per ln r), so the
dashes are large near the camera. Its rows drift about 0.29 ln r/s at 7.2 m/s, but the floor under them streams at
0.7-1.4 ln/s, so the dashes ride with her.

**The replacement:** the floor's OWN world-anchored waves, already inside `matchFloor` (`hDet`, `face`, `caus`; tiles 1.5
x 0.9 m, scrolling at 3.2 m/s).
- **The crest rim:** a thin rim along the wave-height contour 0.74.
  - It is 1.0-2.2 px wide at any distance (divided by `fwidth`).
  - It is broken by the caustic web.
  - It fades out where the waves get finer than about 7-15 px.
- **Caps:** rounded white caps on the crest tops (hDet 0.86-0.95).
- **Lit faces:** in the ORIGINAL's floor azure, #62b5eb.
- **Colour:** the ORIGINAL's floor white, #e9f1f8. Its floor ahead is light (#e9f1f8 24 %, #91caed 22 %, #62b5eb 20 %),
  so no cobalt is added.

## 5. Bloom, grade and tone mapping: no change

Turning a pass off at +1 s moves the zone by:
- **bloom:** cobalt +1.1, white -1.1, pale -0.7;
- **grade:** cobalt +2.0, white +1.9, turquoise -0.9;
- **both:** cobalt +3.6, pale -1.2;
- **for comparison, the swirl alone:** pale **-11.4**.

The walls and floor are already pre-inverted through the grade and the Neutral tone mapping (`mtUndisplay`). Retuning
either pass moves the start frame. S1 also removes bloom's brightest sources.

## 6. Also found: the ring map does not move

Inside rw 0.46 the walls are a still image pinned to the screen while she travels: the tunnel's version of the pinned
picture on `heroSwell`. S4 adds a travel-driven flow. It is off by default and is a later step, because cross-fading
risks blurring the splashes that step 8 protected.

## 7. The code (behind `SWIM2_ON`, `tunnel_s4_bt.js:110`)

New file `WebDemo/src/tunnel_s4_swim2.js`, my section. It imports only `tunnel_s4_bt.js`, so there is no import cycle.

```js
import { SWIM2_ON } from './tunnel_s4_bt.js';
export { SWIM2_ON };
const f4 = (x) => (+x).toFixed(5);
const v3s = (hex) => { const n = parseInt(hex.slice(1), 16); return `vec3(${f4((n >> 16 & 255) / 255)}, ${f4((n >> 8 & 255) / 255)}, ${f4((n & 255) / 255)})`; };
export const SWIM2_TUNNEL = {
  hide: ['r3Swirl', 'r3Whirlpool', 'r3Bubbles'],          // S1 (tunnel_r3.js inside(): on from u 3.0 m)
  ramp: [1.8, 2.6],                                         // S3/S4 off at the start view (u 1.592), on 0.03-0.14 s later
  fold: { ln: 0.30 },                                       // S3: the colour map's outer 0.30 ln r mirrored, not clamped
  floor: { crest: 0.74, width: [1.0, 2.2], fade: [0.06, 0.14], broken: [0.3, 0.55], cap: [0.86, 0.95], capAmount: 0.7,
    lit: '#62b5eb', litAmount: 0.45, white: '#e9f1f8', amount: 0.9 },     // S2
  ringFlow: { amount: 0, travel: 0.03, drift: 0.0, amp: 0.12, blur: 12 },  // S4 (0 = off)
};
{ const t = typeof window !== 'undefined' && window.__BW_S3_TUNE__ && window.__BW_S3_TUNE__.swim2Tunnel;
  if (t) for (const k of Object.keys(t)) SWIM2_TUNNEL[k] = typeof t[k] === 'object' && !Array.isArray(t[k]) ? { ...SWIM2_TUNNEL[k], ...t[k] } : t[k]; }
const ramp = () => `smoothstep(${f4(SWIM2_TUNNEL.ramp[0])}, ${f4(SWIM2_TUNNEL.ramp[1])}, uHeroTravel)`;
// S3: after the wrap-corrected derivatives (the mip choice stays the unfolded one)
export function swim2FoldGLSL(span) {
  if (!SWIM2_ON) return '';
  const P2 = 2 * SWIM2_TUNNEL.fold.ln / span;
  return `  { float s2t = mod(max(bv.y - 1.0, 0.0), ${f4(P2)});   // ?s3=...,swim2: mirrored beyond the outer row (tunnel_s4_swim2.js)
    bv.y = mix(bv.y, 1.0 - min(s2t, ${f4(P2)} - s2t), step(1.0, bv.y) * ${ramp()}); }
`;
}
// S2: replaces focusFloorGLSL's body (inside matchFloor: c, fk, fx, hDet, caus, face in scope)
export function swim2FloorGLSL(delilac) {
  const P = SWIM2_TUNNEL.floor;
  return /* glsl */ `  {   // ?s3=...,swim2: the floor's white water from its own waves (tunnel_s4_swim2.js)
    float ffK = fk * fx;
    float ffLil = clamp((c.r - c.g) * 20.0, 0.0, 1.0) * clamp((c.b - c.r) * 20.0, 0.0, 1.0);
    c.r = mix(c.r, c.g * 0.8, ffLil * ${f4(delilac)} * ffK);   // (focus's de-lilac, unchanged)
    float s2Px = max(fwidth(hDet), 1e-4), s2Res = 1.0 - smoothstep(${f4(P.fade[0])}, ${f4(P.fade[1])}, s2Px);
    float s2Lit = smoothstep(-0.2, 0.6, face);
    c = mix(c, ${v3s(P.lit)}, smoothstep(0.5, 0.8, hDet) * s2Lit * ${f4(P.litAmount)} * ffK);
    float s2Line = 1.0 - smoothstep(${f4(P.width[0])}, ${f4(P.width[1])}, abs(hDet - ${f4(P.crest)}) / s2Px);
    float s2Brk = smoothstep(${f4(P.broken[0])}, ${f4(P.broken[1])}, caus + 0.6 * (hDet - 0.5) + 0.25 * s2Lit);
    float s2Cap = smoothstep(${f4(P.cap[0])}, ${f4(P.cap[1])}, hDet) * s2Lit * ${f4(P.capAmount)};
    c = mix(c, ${v3s(P.white)}, clamp(max(s2Line * s2Brk * (0.4 + 0.6 * s2Lit), s2Cap), 0.0, 1.0) * s2Res * ${f4(P.amount)} * ffK);
  }
`;
}
// S4: the ring map flowing outward with her travel (Water2 two-phase, contrast kept round its own blur)
export function swim2RingFlowDecl(span) {
  const R = SWIM2_TUNNEL.ringFlow;
  if (!SWIM2_ON || !(R.amount > 0)) return '';
  const A = R.amp / span;
  return /* glsl */ `
vec3 s2Rings(vec2 bv, vec2 dx, vec2 dy) {
  vec3 s0 = textureGrad(uFocusRings, bv, dx, dy).rgb;
  float k = ${f4(R.amount)} * ${ramp()};
  if (k <= 0.0) return s0;
  float clk = (uHeroTravel * ${f4(R.travel)} + uTime * ${f4(R.drift)}) / ${f4(R.amp)};
  float p0 = fract(clk), p1 = fract(clk + 0.5), wB = abs(0.5 - p0) * 2.0, wA = 1.0 - wB;
  vec3 b = textureGrad(uFocusRings, bv, dx * ${f4(R.blur)}, dy * ${f4(R.blur)}).rgb;
  vec3 a0 = textureGrad(uFocusRings, bv - vec2(0.0, ${f4(A)} * (p0 - 0.5)), dx, dy).rgb;
  vec3 a1 = textureGrad(uFocusRings, bv - vec2(0.0, ${f4(A)} * (p1 - 0.5)), dx, dy).rgb;
  return mix(s0, clamp(b + ((a0 - b) * wA + (a1 - b) * wB) / sqrt(wA * wA + wB * wB), 0.0, 1.0), k);
}
`;
}
export const swim2RingSample = () => SWIM2_ON && SWIM2_TUNNEL.ringFlow.amount > 0 ? 's2Rings(bv, dx, dy)' : 'textureGrad(uFocusRings, bv, dx, dy).rgb';
```

Hooks:

| file:line | insert |
|---|---|
| `tunnel_r9_match.js:36` | `import { SWIM2_ON, SWIM2_TUNNEL, swim2FoldGLSL, swim2RingFlowDecl, swim2RingSample } from './tunnel_s4_swim2.js';` |
| `tunnel_r9_match.js` after `:339` | `if (SWIM2_ON) MATCH.hero.hide = [...MATCH.hero.hide, ...SWIM2_TUNNEL.hide];` |
| `tunnel_r9_match.js:675` | `${swim2RingFlowDecl(M.span)}` |
| `tunnel_r9_match.js` after `:684` | `${swim2FoldGLSL(M.span)}` |
| `tunnel_r9_match.js:642` | `textureGrad(uFocusRings, bv, dx, dy).rgb` -> `${swim2RingSample()}` |
| `tunnel_r9_match_water.js:36` | `import { SWIM2_ON, swim2FoldGLSL, swim2FloorGLSL, swim2RingSample } from './tunnel_s4_swim2.js';` |
| `tunnel_r9_match_water.js` after `:271` | `${swim2FoldGLSL(M.span)}` |
| `tunnel_r9_match_water.js:330` | `if (SWIM2_ON) return swim2FloorGLSL(MATCH_WATER.floorFx.delilac);` |
| `tunnel_r9_match_water.js:363` | the same `swim2RingSample()` swap |

- **S1 needs no edit in `tunnel_r3.js`.** The hero's per-frame hide (`tunnel_r7_hero.js:297-298`) runs after round3's
  updaters, the same pattern as `tunnel_r5.js:96` for `r3Foam`.
- The alternative is one gated condition, `&& !SWIM2_ON`, at `tunnel_r3.js:286`, `:358` and `:388`.
- Round3's private random numbers are untouched either way.

## 8. Predictions and checks (one step at a time; revert any step that looks less like the ORIGINAL)

| step | predicted at +1 s | check |
|---|---|---|
| S1 | zone pale 23.0 -> 9-10, cobalt 10.8 -> 14-15, turq 5.5 -> 9-10, white 14.0 -> 7-11, sat 0.46 -> 0.55-0.58; y 0.30-0.52 lavender 6.9 -> about 11 (ORIGINAL 11.1); no white wall blocks or centre haze; 3 fewer draw calls | `layer_diag.cjs` on `intunnel` and `intunnel,swim2` at start / +1 / +2 s, `zone_water.py` plus the y 0.30-0.52 band; start frame 0 px changed; the +1 s census without the three names |
| S3 | zone unchanged (the bars lie just outside it); bright-pale in the top 22 %: 14.0 -> about 2-4 % | the bar-sector count; start diff 0 |
| S2 | tunnel zone unchanged; floor ahead (x 0.28-0.64, y 0.58-0.70) white 19.2 % kept at 15-25 % (ORIGINAL 27.2), in rounded contours | `soloFloor` ablation; `flow_metric.py` on the floor ahead: the whites stream with the waves; the start diff only inside lqFloor's pixels |
| S4 (later) | rings stream outward about 0.22 ln/s while running; colour shares within 1 point | the art director on clips; splash crispness |

Scratch scripts: `/tmp/claude-0/-home-user-bubblegame/08b39b21-0dec-5ec1-bc99-07d34f97f077/scratchpad/ins/py/` (not in
the repository).

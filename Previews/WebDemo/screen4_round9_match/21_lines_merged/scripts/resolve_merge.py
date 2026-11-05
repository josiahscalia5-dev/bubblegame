import sys, re
SP, T = sys.argv[1], sys.argv[2]
def rep(s, old, new, label):
    n = s.count(old)
    assert n == 1, f'{label}: found {n} times'
    return s.replace(old, new)
def between(s, a, b):   # the text from a (inclusive) up to b (exclusive), unique
    i = s.index(a); j = s.index(b, i); assert s.count(a) == 1, a; return s[i:j]

# ---------------- tunnel_r9_match.js
p = f'{T}/tunnel_r9_match.js'; s = open(p).read(); B = open(f'{SP}/B_match.js').read()
s = rep(s, "import { FOCUS_ON, FOCUS } from './tunnel_r9_focus.js';   // ?s3=focus (the focused correction pass)\n",
 "import { FOCUS_ON, FOCUS } from './tunnel_r9_focus.js';   // ?s3=focus (the focused correction pass)\n"
 "import { PRE_FOCUSED_PASS, restoreSettings } from './tunnel_r9_focus_base.js';   // ?s3=focus: `match`'s settings as they were at 9a95c06\n", 'm-import')
s = rep(s, "if (FOCUS_ON) deepMerge(MATCH, FOCUS.match);   // ?s3=focus: the focused correction pass's settings (tunnel_r9_focus.js)\n",
 "// ?s3=focus: `match`'s settings as they were at 9a95c06, before the seventh session's focused pass changed them for `match`\n"
 "// (tunnel_r9_focus_base.js), then the focused correction pass's own settings (tunnel_r9_focus.js)\n"
 "if (FOCUS_ON) { restoreSettings(MATCH, PRE_FOCUSED_PASS.MATCH); deepMerge(MATCH, FOCUS.match); }\n", 'm-merge')
# conflict 1: both (A's comment for match; RIM_RHO for focus)
c1 = between(s, '<<<<<<< HEAD\n// the rim on the approved: its band from rho 0.937 to 1. Inside', '// the bezel\'s inner and outer sides')
ours = c1.split('=======\n')[0].replace('<<<<<<< HEAD\n', '')
theirs = c1.split('=======\n')[1].replace('>>>>>>> origin/ccr-de8d9670-2ohd5t\n', '')
theirs = theirs.replace("// the rim on the approved: its band from rho 0.937 to 1; inside it, at 3.0 s,", "// ?s3=focus only (`match` as it was at 9a95c06, with the camera then): inside the rim, at 3.0 s,")
s = s.replace(c1, ours + theirs)
# the wall shader: the rim-rho uniform and function (`match` only)
s = rep(s, "uniform vec2 uMatchVP, uMatchRes; uniform float uMatchRimU;\n", "uniform vec2 uMatchVP, uMatchRes;${FOCUS_ON ? '' : ' uniform float uMatchRimU;'}\n", 'm-unif')
fn = between(s, "// a point of the collar or the tube (cs in the cross-section, u along the path) seen from the camera", "${undisplayGLSL()}\n${matchPlaceGLSL()}")
s = s.replace(fn, "${FOCUS_ON ? '' : `" + fn + "`}")
# conflict 2: turbulence (`match`) / fleck accumulator (focus)
c2 = between(s, "<<<<<<< HEAD\n  float mtEdge = 0.0;\n", "  {\n    float bs = lr")
turb = c2.split('=======\n')[0].replace('<<<<<<< HEAD\n  float mtEdge = 0.0;\n', '')
s = s.replace(c2, "  float mtEdge = 0.0;${FOCUS_ON ? ' float mtFleck = 0.0;' : `\n" + turb.rstrip('\n') + "`}\n")
s = rep(s, " - uHeroTravel * ${f4(M.bands.travel * M.bands.perLog)} + turbB;\n", " - uHeroTravel * ${f4(M.bands.travel * M.bands.perLog)}${FOCUS_ON ? '' : ' + turbB'};\n", 'm-turbB')
st = between(s, "    // the thin streaks along the rings (MATCH.walls.streak; the focused pass)", "    c = mix(c, ${hx(M.bands.rim.col)}, rimK")
s = s.replace(st, "${FOCUS_ON ? '' : `" + st + "`}")
ir = between(s, "    // the pastel inner ring (MATCH.walls.innerRing; the focused pass)", "  }\n  {   // the mid vortex's bright pale blue")
s = s.replace(ir, "${FOCUS_ON ? '' : `" + ir + "`}")
dp = between(s, "  {   // the walls' pale mid blues toward saturated electric blue and azure (MATCH.walls.deepen", "  c = clamp((c - ${f4(M.liftWall)})")
s = s.replace(dp, "${FOCUS_ON ? '' : `" + dp + "`}")
s = rep(s, "  c = clamp((c - ${f4(M.liftWall)}) / ${f4(1 - M.liftWall)}, 0.0, 1.0);\n",
 "  c = clamp((c - ${f4(FOCUS_ON ? M.lift : M.liftWall)}) / ${f4(1 - (FOCUS_ON ? M.lift : M.liftWall))}, 0.0, 1.0);   // (focus: `match`'s one lift at 9a95c06)\n", 'm-lift')
# conflict 3: the mouth
c3 = between(s, "<<<<<<< HEAD\n  // (the focused pass: the ramp at the screen rho, mtRimRho;", "    float du0 = u - uStart;\n    vec2 rd;")
ours = c3.split('=======\n')[0].replace('<<<<<<< HEAD\n', '')
bm = between(B, "export function matchMouthGLSL(HERO, axisH, radius) {\n", "// the collar's top arc")
bbody = bm.replace("export function matchMouthGLSL(HERO, axisH, radius) {\n  const C = HERO.rim.centre;\n  return /* glsl */ `${FOCUS_ON ? focusMouthWaterGLSL(radius, axisH) : ''}", "  if (FOCUS_ON) {   // ?s3=focus: `match`'s mouth as it was at 9a95c06 (RIM_RHO), with the lining's water before it\n    const C = HERO.rim.centre;\n    return /* glsl */ `${focusMouthWaterGLSL(radius, axisH)}")
assert bbody != bm
bbody = bbody.rstrip('\n'); assert bbody.endswith('}'); bbody = bbody[:-1] + '  }\n'   # (the function's closing brace -> the if's)
s = s.replace(c3, bbody + ours)
# the collar
s = rep(s, "export function matchCollarGLSL() {\n  return /* glsl */ `  { vec2 rd;",
 "export function matchCollarGLSL(HERO) {\n  if (FOCUS_ON) {   // ?s3=focus: `match`'s collar as it was at 9a95c06 (RIM_RHO)\n    const C = HERO.rim.centre;\n"
 "    return /* glsl */ `  col = mix(col, mtUndisplay(mtRimS(vXHU.xy - vec2(${f4(C[0])}, ${f4(C[1])}), ${f4(RIM_RHO.inner)} + (${f4(RIM_RHO.mouth)} - ${f4(RIM_RHO.inner)}) * t)), uMatchOn);   // ?s3=match: the approved rim ramp (tunnel_r9_match.js)\n`;\n  }\n"
 "  return /* glsl */ `  { vec2 rd;", 'm-collar')
# conflict 4: the sock poses
c4 = between(s, "<<<<<<< HEAD\n  // its pose (MATCH.sockPose)", ">>>>>>> origin/ccr-de8d9670-2ohd5t\n")
ours, theirs = c4.split('=======\n'); ours = ours.replace('<<<<<<< HEAD\n', '')
ours = ours.replace("  // its pose (MATCH.sockPose): the model", "  // its pose (MATCH.sockPose; `match` only, focus has its own below): the model")
ours = rep(ours, "  if (sockModel && MATCH.sockPose) {", "  if (!FOCUS_ON && sockModel && MATCH.sockPose) {", 'm-sock')
s = s.replace(c4 + ">>>>>>> origin/ccr-de8d9670-2ohd5t\n", ours + "  }\n" + theirs)
assert '<<<<<<<' not in s and '>>>>>>>' not in s and '\n=======\n' not in s
open(p, 'w').write(s)

# ---------------- tunnel_r9_match_water.js
p = f'{T}/tunnel_r9_match_water.js'; s = open(p).read(); BW = open(f'{SP}/B_water.js').read()
s = rep(s, "import { FOCUS_ON, FOCUS } from './tunnel_r9_focus.js';   // ?s3=focus (the focused correction pass)\n",
 "import { FOCUS_ON, FOCUS } from './tunnel_r9_focus.js';   // ?s3=focus (the focused correction pass)\n"
 "import { PRE_FOCUSED_PASS, restoreSettings } from './tunnel_r9_focus_base.js';   // ?s3=focus: `match`'s settings as they were at 9a95c06\n", 'w-import')
s = rep(s, "  deepMerge(MATCH_WATER, FOCUS.water);\n",
 "  restoreSettings(MATCH_WATER, PRE_FOCUSED_PASS.MATCH_WATER);   // (`match`'s water as it was at 9a95c06, tunnel_r9_focus_base.js)\n  deepMerge(MATCH_WATER, FOCUS.water);\n", 'w-merge')
fb = between(s, "    {   // (focused pass) a band of opaque white-aqua froth along the top of the swell", "#endif\n${FOCUS_ON ? focusSwellGLSL()")
s = s.replace(fb, "${FOCUS_ON ? '' : `" + fb + "`}")
c5 = between(s, "<<<<<<< HEAD\n  const B = MATCH_WATER.froth;\n", ">>>>>>> origin/ccr-de8d9670-2ohd5t\n")
ours = c5.split('=======\n')[0].replace('<<<<<<< HEAD\n', '')
s = s.replace(c5 + ">>>>>>> origin/ccr-de8d9670-2ohd5t\n", "  if (FOCUS_ON) return focusLumpGLSL();   // ?s3=focus: small blue water splash crests (above)\n" + ours)
hw = between(s, "    float hw = max(fract(aB.w) * 0.1, 1.3 / pxPerM);", "    mv.xy += dirT * (position.x * 2.0 * r)")
s = s.replace(hw, "${FOCUS_ON ? `    float hw = max(fract(aB.w) * 0.1, 0.9 / pxPerM);          // half width (m), at least about a pixel\n` : `" + hw + "`}")
ofl = between(BW, "  if (vKind > 0.5) {   // a white streak: a tapered, slightly bent dash", "  float rr = dot(vQ, vQ);")
nfl = between(s, "  if (vKind > 0.5) {   // a white splash fleck (x along the band", "  float rr = dot(vQ, vQ);")
s = s.replace(nfl, "${FOCUS_ON ? `" + ofl + "` : `" + nfl + "`}")
assert '<<<<<<<' not in s and '>>>>>>>' not in s
open(p, 'w').write(s)

# ---------------- tunnel_r8_splash.js
p = f'{T}/tunnel_r8_splash.js'; s = open(p).read()
s = rep(s, "import { matchLumpGLSL, matchLumpDecl } from './tunnel_r9_match_water.js';",
 "import { FOCUS_ON } from './tunnel_r9_focus.js';   // ?s3=focus: the seventh session's froth lobes are `match` only\nimport { matchLumpGLSL, matchLumpDecl } from './tunnel_r9_match_water.js';", 's-import')
s = rep(s, "new THREE.IcosahedronGeometry(1, MATCH_ON ? SPLASH.lumpDetail : 3)", "new THREE.IcosahedronGeometry(1, MATCH_ON && !FOCUS_ON ? SPLASH.lumpDetail : 3)", 's-detail')
s = rep(s, "+ 0.06 * sin(q.x * 7.0 + q.z * 5.0 + uTime * (3.0 + seed * 2.0) + seed * 20.0)${MATCH_ON ? `", "+ 0.06 * sin(q.x * 7.0 + q.z * 5.0 + uTime * (3.0 + seed * 2.0) + seed * 20.0)${MATCH_ON && !FOCUS_ON ? `", 's-froth')
s = rep(s, "${MATCH_ON ? matchLumpDecl() : ''}void main() {", "${MATCH_ON && !FOCUS_ON ? matchLumpDecl() : ''}void main() {", 's-decl')
open(p, 'w').write(s)
print('ok')

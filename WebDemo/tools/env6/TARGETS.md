# Screen 6 environment rebuild: measured targets (session ddf175f2, 9 November 2026). The ONLY target is
`Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/06_Swim_Collect_Avoid_Enemies.png` (864x1536).

Coordinates are fractions of the 864x1536 frame (x from the left, y from the TOP), read off a 0.05 grid laid on the approved image
(`Previews/WebDemo/six_scenes/17_screen6_env_ddf175f2/approved_grid.png`). The game is compared at u 206, 864x1536 (432x768 CSS, DPR 2),
the s56 camera (vanishing point measured at ~(0.50, 0.455) in both). The approved top band (y < 0.30) and bottom band (y > 0.78) are UI
(logo, plaque, caption, Start); the game's HUD covers the same bands. The scenery that matters is y 0.30-0.78.

## The user's mandate (9 November, ~18:10 UTC, "URGENT")
Rebuild the COMPLETE approved environment, big things first: foreground machinery both sides with real volume, both roller brushes, glowing
purple tanks, gold fittings and pipes, the upper-right cobalt gear, the overhead brass lamp and gold pipes, glowing pink arches receding,
dense rich lighting, saturated cobalt/turquoise water with relief round the mascot. Not small polish. Real 3D in the playable game, no
painted backdrops. No Tripo credits. Gameplay (lanes, pickups, collisions, HUD) unchanged.

## The integrated candidate (all lanes on together; judge YOUR work in THIS list, not alone)
`S3=intunnel,structmatch,level1,tripo1,scene07,six,tripo3,s56,coin6,hero6,water6,brush6,arch56,env6` (add `home,tripo2,six2` for the full app).
- `env6` (coordinator, `src/s56_env6.js`): the HERO grade inside the s56 tunnel (uHero = 1; the old drum grade turned pink red, gold orange,
  water violet) and bloom only on HDR lights (strength 0.3, radius 0.35, threshold 1.05). Under env6, arch56's `a56Ungrade` inverse is off
  (uA56Ungrade = 1 - uHero = 0) and the water uses its `*H` hero palette. Design colours for the hero grade.
- Fast tuning tool: `tools/env6/var6.cjs` (one page load, the game frozen at u 206, any number of JS variants re-rendered on the SAME frame).
  `VARS='[["tag","code"],...]' S3=... DPR=2 flock /tmp/bw_browser.lock node tools/env6/var6.cjs $PWD <out>` (code gets d, scene, B; the live
  settings are window.__bwArch56 / __bwBrush6 / __bwS56 / __bwEnv6). A rebuild is needed only for code changes, not for settings.
- Current combined frame: `Previews/WebDemo/six_scenes/17_screen6_env_ddf175f2/02_haze/c_env6_herograde_bloom030_t105.png`.

## Targets (approved, y from the top)
**Vanishing point** (0.50, 0.457). Water fills the floor between the banks from the VP down; bank edges run from the VP to ~(0.15, 0.56)
and ~(0.85, 0.56), then off the frame edges at y ~0.72 (the brushes cover them).

**Left roller brush** (foreground, the frame's left edge; we see its right half). Dark-gold top drum x 0.00-0.08, top y 0.34. Glossy pink
bell (gold star studs) y 0.41-0.46 out to x 0.13. Gold rim band y 0.46-0.486 out to x 0.14. Then four FLARED bristle skirts, each a separate
overlapping tier, dense and opaque, strands radiating down/out:
pink y 0.486-0.551 (inner edge x 0.17), white-lavender y 0.551-0.597 (x 0.19), royal blue y 0.597-0.656 (x 0.20), pale blue-white
y 0.656-0.714 (x 0.21). The skirt's lower edge meets the water at y ~0.71.
**Right roller brush** (cut by the right edge; we see its left part). Pink dome y 0.44-0.48 (x 0.89-1.0), gold band y 0.48-0.50
(x 0.88-1.0), bristles: pink y 0.50-0.565 (inner edge x 0.86), white y 0.565-0.617 (x 0.84), blue y 0.617-0.669 (x 0.82), pale
y 0.669-0.714 (x 0.80).

**Left machinery** (nearest module, behind the left brush, then receding to the VP):
- Lavender control box with a screen of two glowing white-violet bulbs: x 0.11-0.20, y 0.34-0.395; below it a panel with two round lights
  (yellow, teal) x 0.12-0.23, y 0.405-0.45.
- Tall violet GLOWING glass tank (bright white-pink core): x 0.22-0.31, y 0.346-0.408, gold cap y 0.33-0.35 with gold rings, gold base.
- Gold elbow pipe arcing above it: from (0.15, 0.324) up to (0.27, 0.307), then down into the tank cap. Another gold pipe at the far left top
  (x 0.00-0.06, y 0.30-0.34).
- Gold railing on a deck x 0.14-0.29, y 0.46-0.486; under it a pink cabinet x 0.15-0.29, y 0.486-0.564 with a gold paw medallion
  (centre (0.225, 0.53), radius 0.04 W).
- Receding: tanks with gold caps at x 0.31-0.37 (y 0.375-0.415), x 0.37-0.405 (y 0.39-0.43), smaller toward the VP; gold pipe elbows
  over them; pink cabinets and gold rails continuing at the water's edge.
**Right machinery**:
- Large COBALT GEAR facing the camera: spans x 0.685-0.865, y 0.327-0.45 (teeth all round, darker blue face, gold hub at ~(0.80, 0.39)),
  partly behind the right tank.
- Big violet glowing glass tank: x 0.84-0.97, y 0.353-0.425; gold cap and rings y 0.34-0.36; a gold elbow pipe above it from y 0.30
  (x 0.88-1.00).
- Pink drum housing with two gold STARS: x 0.735-0.90, y 0.45-0.528; a gold railing on top y 0.425-0.45 (x 0.74-0.84).
- Receding: tanks at x 0.63-0.67 (y 0.38-0.415) and smaller, pink cabinets x 0.68-0.73 (y 0.44-0.49), gold rails.
**Overhead**:
- Brass ceiling LAMP at the top centre: x 0.45-0.55, y 0.216-0.278, its hot white-gold bulb y 0.255-0.278 (it lights the ceiling).
- A thick gold pipe from the lamp to the right: (0.55, 0.265) -> (0.65, 0.29) -> an elbow down at x ~0.72 to y ~0.33 (above the gear).
- The nearest pink arch carries big yellow-white capsule lamp bars at x 0.09-0.22 and x 0.77-0.90 (y 0.23-0.30); every arch behind it
  repeats smaller warm lamp dashes, receding to the VP. Between the arches: dark violet perforated metal with black oval holes.
**Water** (y 0.457-0.78): saturated azure-cobalt: troughs ~#0a5bdc, body ~#1e90f5, lit faces ~#6fd6fb; many thin, sharp, broken WHITE
crest lines; sparkles; clear rolling relief toward the camera. A white SPLASH CROWN round the hero (spray at his left and right sides up to
y ~0.65, foam and droplets at his waterline y ~0.70-0.785). No large pale or white sheets.
**Hero** (pink fluffy dome): x 0.255-0.74, top y 0.59, waterline ~0.76: a ROUND dome (the upper ~60 % of a ball), radial fur, lighter top.
**Coins** (gameplay, not to be moved): approved (0.30, 0.58) r 0.055 W, (0.69, 0.585) r 0.065 W, (0.51, 0.535) r 0.05 W, far (0.48, 0.475),
(0.535, 0.495). **Enemies**: (0.36, 0.508) r 0.055 W, (0.635, 0.508) r 0.05 W.

## Rules for every lane
- Edit ONLY your own files (Tools/lanes.json). Need a change in another lane's file? Say so in your report (exact file, numbers, why).
- Every browser run under `flock /tmp/bw_browser.lock` (4 CPUs, software WebGL). Close nothing else's browser.
- Without your switch the build must be unchanged (0 px at tap and u 206 against the same build with the switch off).
- Judge only from real captures of the integrated candidate at u 206 next to the approved image. Revert what looks less like it.
- Commit and push your lane branch at each tested step (never force).

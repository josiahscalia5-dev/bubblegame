# Screen 6 environment rebuild (session ddf175f2, 9 November 2026). NOT approved: waiting for the user.

Target: ONLY `Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/06_Swim_Collect_Avoid_Enemies.png`. Game: u 206, 864x1536,
the s56 camera, frozen seeded frame (`WebDemo/tools/env6/var6.cjs`). Measured targets for all lanes: `WebDemo/tools/env6/TARGETS.md`.

## The candidate (one reversible list; the plain launch is unchanged)
`?s3=intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3,six2,s56,coin6,hero6,water6,brush6,arch56,env6`
(+ `,tripo6` = the user's new Tripo brush and star drum instead of the procedural ones; `,noarch6` = arch56 before this session's pass).
Rollback: the checkpoint branch `claude/bubble-wash-checkpoint-screen6-before-tripo-ddf175f2` (e0f66645), and the plain launch itself.

## What was done
1. The three specialist lanes (arch56, brush6, s56) merged for the first time into one scene, each behind its switch.
2. `env6` (`src/s56_env6.js`): the peach haze measured and removed: the old Classic Screen 4 drum grade still ran at u 206 and arch56 inverted it
   in its materials with a knee inverse that multiplied lamps up to 20x (linear luminance 214), which the bloom smeared over the frame. env6 runs
   the hero grade inside the s56 tunnel and blooms only HDR lights (`02_haze/`, `hdr_luminance_*.json`).
3. Lanes in parallel (frames in `arch56/`, `brush6/`, `water6/`): arch56 = large machinery on both banks from the user's Tripo models (911 / 912
   housings in hot pink, 913_914 glowing chambers, gold_jj elbows, blue_jt gear), wider tunnel, pink arches with lamp bars, ceiling lamp and pipe;
   brush6 = both roller brushes at the measured size, opaque tufted tiers; water6 = saturated cobalt / azure / turquoise water with crests, the
   hero a round dome sunk to his nubs.
4. Tripo (the user's approval, 360 credits): see `Design/TripoDeliveries/2026-11-09_session_ddf175f2_Screen6_assets/README.md`.

## Evidence
- `SBS_step0_current_plain_launch.png`: approved | the game before. `10_integrated/SBS_FINAL_approved_vs_game_u206.png`: approved | the candidate.
  `10_integrated/SBS_approved_vs_game_u206_tripo6.png`: with the Tripo models.
- `proofs/` + this session's re-check after all merges: the plain launch's WebGL canvas 0 px changed (u 206, u 60), Classic Screen 4 (`?s3=intunnel`) 0 px.
- `11_gameplay_route/`: the Level 1 autopilot (ROUTE=upper) on the candidate = the baseline exactly: Level Complete, 5 socks, 125 coins,
  2 gems, 3 stars, 4 hearts, 2 pops, 11 swipes, 0 console errors; real frames at u 60 / 206 / 240 and Level Complete.

## Art director (game-art-director, read-only), the whole composition at u 206 (crops in `12_art_director/`)
Verdict: NOW is clearly closer than BEFORE in every zone (left bank, right bank with the gear in place, both brushes, arches and depth, water, hero
height). tripo6 vs procedural: the PROCEDURAL brush and star drum read closer (tripo6: copper slabs, washed-out lavender bristles, violet drum).
Remaining, ranked: 1. glow and depth (tank cores, capsule lamps, the hot ceiling bulb and the icy-white vanishing point not glowing; the ceiling
between arches smooth lavender instead of dark violet with black holes); 2. left bank palette (too much gold and hot pink; the approved is
lavender / violet with pink low; the control box with two bulbs and the paw medallion missing); 3. hero (cone-like mound, speckled fur; approved
a round dome with radial fur, lighter top, white splash crown); 4. water (too cyan near him, violet far; crests long smooth loops instead of short
broken crests over cobalt troughs); 5. right bank (the big glowing tank missing; the gameplay coin arc hides the gear and stars); 6. brushes
(see-through spikes, no distinct white tier). Broken: spray dots drawn over the brushes; the overhead pipe reads tan. Measured gold share on the
left bank (hue 20-60, s > 0.4, v > 0.5): approved 0.06, game 0.26; hot glow (v > 0.95, s < 0.35): approved 0.15, game 0.07.

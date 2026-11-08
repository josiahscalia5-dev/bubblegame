# Screen 4 `match6` in `?s3=intunnel,structmatch`: her rear silhouette (8 November 2026, session `8140e507`)

The user's priority 3 of 8 November (~02:35 UTC): "Correcting the pink mascot's rear-view silhouette so it looks full, round, and
fluffy like ORIGINAL CLASSIC Screen 4"; the pass criterion of the user's mascot pack (7 November): "a round, full pink dome with finer
directional strands, small side nubs and the original rear-view profile at normal gameplay size". On by default in
`?s3=intunnel,structmatch` (so also in the full app `?s3=intunnel,structmatch,home,level1`); **rollback: `,nomatch6`** = the match5
look exactly (0 px). NOT accepted by the user yet. The rejected Tripo pink creature is NOT used: this is her own model, drawn differently.
Built on this session's branch `claude/bubble-wash-kingdom-continue-z9nmm1` (it contains all of `ccr-76d4bc77-rqhl8o`); files:
`WebDemo/src/tunnel_s4_struct.js` (`SHELL_FUR6`, `SHELL_VERTEX6`, `match6FurGLSL`, the match6 block in `structCrown`) and one flag in
`WebDemo/src/tunnel_s4_bt.js` (`STRUCT_PARTS.match6`); both reserved by this session (`SESSION_FILE_RESERVATIONS.md`).

## Root cause (found by rendering her alone at the same frame: `frames/tap_to_start_MATCH5_her_alone.png`)
Her body model already has a round dome and two side nubs. match5's shell fur (strands 0.22 of her model's units long, combed
straight down and out over the WHOLE mesh) grew out of the nubs and the crease round them alike, so her outline read as one lumpy,
flat-topped polygon without nubs; its fine strands (density 74) read as uniform noise at gameplay size.

## The change (drawn only: her size for gameplay, lanes, hit box, swim motion and water contact are untouched)
- Her nubs: in her drawn mesh, round lobes on a narrow neck (scaled round their own centre), the screen-left one higher, the
  screen-right one lower and further out (the ORIGINAL's), small pom-poms; the body just below them 7 % slimmer; short fur on them
  and in the crease round them, so they stay separate from her dome.
- Her crown: a broader arc (`crown` R 0.98).
- Her strands: radiating from a whorl high on her back (as the ORIGINAL's), with a little gravity; shorter where they part.
- Her fur's look: short irregular tufts round the whorl (crimson grooves), sparse white droplet specks, a paler crown, the base's
  hue kept at match5's (the art director rejected a darker, more violet base in try m6e).

## The tries, each compared with the ORIGINAL and the previous (the user's rule: revert anything less like the original)
| try | what | verdict |
|---|---|---|
| m6a-m6c | nubs' fur short, nubs moved out and down, radial strands, broader crown | the outline a dome with nubs (measured below) |
| m6d-m6e | radiating strand bundles, paler crown, darker base | art director: shape better, but the bundles read as even pleats and the base too dark / violet: REVERTED |
| m6f-m6i | tufts and specks instead of pleats, a rosier base, round nub lobes | art director: closer than match5, nothing to revert; nubs too big |
| m6j | nubs shrunk with negative growth | the left nub a pointed fin: REJECTED (`sheets/08_rejected_try_m6j_pointed_nub.jpg`) |
| **m6k** (this build) | smaller pom-pom nubs, the right one lower and further out, crimson grooves | art director: keep; closer than match5 |

## Measured (Tap to Start, seed 7, 768 x 1536 canvas; her crop x 130-640, y 880-1400)
| | ORIGINAL | match5 (previous) | match6 |
|---|---|---|---|
| LPIPS (AlexNet) against the ORIGINAL, her crop (lower = closer) | 0 | 0.7545 | **0.7498** (m6k; m6i 0.7438; the rejected m6e 0.7346) |
| SSIM (grey) against the ORIGINAL, her crop (higher = closer) | 1 | 0.1603 | **0.1697** (m6k; m6i 0.1706; m6e 0.1696) |
| her outline width x height (of the frame; `67_match5/scripts/her_box.py`) | 0.513 x 0.167 | 0.516 x 0.178 | 0.527 x 0.178 (m6c) |
| her lowest band's mean pink (strict mask), hue | #e64cb5, 319 | #ec41b8, 318 | #ea3db7, 318 (m6i) |
| the art director's whole-body mean pink (its own mask) | #ec56bf | #f04fbe | #ee52c2 (m6i) |
(Each measurement names the try it was made on; no single "similarity percentage" is claimed. LPIPS favoured the rejected m6e's
pleats most: a texture metric, which is why the art director's judgement against the ORIGINAL decided between the tries.)

## Proofs
- Identity (`proofs/identity.txt`, `scripts/identity.sh`): the previous bundle 92bd9272 against match6's for the accepted
  `?s3=intunnel` (start, 3.0 s), the normal game (1.0 s) and `?s3=intunnel,structmatch,nomatch6` against the previous candidate
  (start, 3.0 s).
- Through the run (`motion/`, `sheets/05_motion_ORIGINAL_MATCH5_MATCH6_same_run.jpg`, `scripts/motion.sh`): the same seeded run with
  real swipes and a jump for match5 and match6: 0 gameplay state fields differ at 4, 5, 5.5, 6, 7.7 and 10 s; her strands stay on
  her as she swims and steers. (Made on try m6e; the later tries changed only her drawn nubs and fur colour.)
- Sheets: `01_full_...`, `02_her_...`, `03_her_zoom_...`, `04_page_with_HUD_...` (ORIGINAL | match5 | match6 at Tap to Start),
  `06_...` and `07_...` (the tries).

## Remaining (candid)
- The water's crest hides her lower body and her right nub: the ORIGINAL shows her down to about y 1330 of 1536 (ours about 1275)
  and both nubs; her top is about 25 px higher than the ORIGINAL's. This is the next step (the water, priority 4), with the left nub
  pulled in about 20 px (the art director's last note).
- Her fur's contrast is a little flatter than the ORIGINAL's (brightness spread 0.095 against 0.131 on the art director's mask).
- Not measured on a real phone. Cost: the same shells as match5 (8 layers, one instanced draw call per mesh); the new fur code is
  a few arithmetic lines per pixel.

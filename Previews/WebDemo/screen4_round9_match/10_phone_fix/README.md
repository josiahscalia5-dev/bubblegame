# Phone fix and the white rectangle (5 November 2026, seventh session): the user's checkpoints 06 and 07

The user approved the phone fix at 14:29 UTC ("Yes"). At 14:43 UTC the user's evidence kit
(`Design/ReferencePacks/2026-11-05_Screen4_Visual_Evidence_and_Assets/`) named two of its seven checkpoints here:
**06, the upper-frame composition** (a broad plain purple band between the mission banner and the gold rim) and
**07, a bright pale rectangle under the mission banner**. Both only showed on a phone, whose screen is taller than the
original's 1:2.

Everything here is under `?s3=match` only. At 1:2 and wider nothing changes, so the desktop captures (538 x 1076) and
every older version are unaffected.

## Captures (real gameplay, `?s3=match`, seed 7, Tap to Start then 3.0 s, whole phone screen with the HUD)

`scripts/phone_shot.cjs <demo> <out> [WxH]` (Playwright's Pixel 7 profile; WxH overrides the viewport):
- `412x839`: Chrome on a Pixel 7 (the size the 14:25 preview and the user's annotated comparisons used);
- `412x915`: the full-screen app on a Pixel 7 (a 20:9 screen, aspect 0.45);
- `360x880`: an extra-tall phone (aspect 0.41), where the view still widens.

SAVED is `36c8676` (the build the user reviewed); FIXED is this session's build. The sheet:
`phone_original_vs_saved_vs_fixed_3.00s.jpg`. All six loaded with no console errors.

## 07, the white rectangle: found and removed

- **The cause** (`scripts/rect_probe.cjs`, which hides each object covering the rectangle and reads the pixels back):
  the washing machine's front face, `r6Face` (child of `r6Porthole`). Its shader in `WebDemo/src/tunnel_r6.js` paints
  "a glowing light panel above the door". That came from Round 6's construction guide, which is not a target; the
  original has no such panel. Hiding `r6Face` turned the probe pixels from #d4eff5 to the colours behind it; no other
  object changed them by more than 1 level in 255.
- **The fix:** under `?s3=match` the face shader is built without the panel (`R9_MATCH` in `tunnel_r6.js`). Every other
  version keeps it.
- **Measured** (`scripts/phone_measure.py`): pale near-white pixels (value >= 225, saturation <= 40) in the box the
  rectangle filled (screen x 0.36-0.71, y 0.17-0.21):

  | | original | saved | fixed |
  |---|---|---|---|
  | 412 x 839 | 0.1% | 58.9% | 0.0% |
  | 412 x 915 | | 90.2% | 0.0% |
  | 360 x 880 | | 1.2% (the panel sits higher there) | 0.0% |

## 06, the upper frame: the original's vertical framing on phones

- **The cause:** the game kept the original's full width on a screen taller than 1:2 and widened the vertical view
  (`game.js` `updateCamera`), so the tunnel sat lower and a broad purple band opened above the rim. The page also kept a
  16 px side padding and the browser's default 8 px margin, so the stage was 364 of the 412 px width and its bottom 8 px
  were off screen.
- **The fix** (new file `WebDemo/src/match_phone.js`; gated hooks in `game.js`, `tunnel_r7_hero.js`, `screen3_models.js`,
  `opening.js` and `src/page.html`):
  - the camera keeps the original's vertical framing down to an aspect of 0.45 (a 20:9 phone) and trims the sides
    instead, at most 5% of each side; only still taller screens widen the view;
  - `uHeroTanW` (the screen width per metre of depth that places the whirlpool's colours) and the 1:2 reference cameras
    that place bubbles from the approved layout use the 1:2 reference width, so the phone shows the 1:2 picture with its
    sides trimmed and nothing rescaled;
  - on a narrow screen the stage fills the phone edge to edge (412 of 412 px wide, from y = 0).
- **Measured** (`scripts/phone_rim.py`, the Art Director's `rim.py` method): the top of the gold rim's warm band at the
  right shoulder, x = 0.80, as a share of the screen height: original 0.255; desktop 1:2 0.247; saved on phones 0.283
  (412 x 839), 0.301 (412 x 915), 0.317 (360 x 880); fixed 0.244, 0.218, 0.244. The fixed phone frames have the 1:2
  frame's vertical framing exactly; the spread comes from the trimmed sides moving x = 0.80 along the arc. (The centre
  column's numbers in that script's output are not usable: the rim's top centre is hidden by the banner or reads lavender,
  and the warm tunnel core is picked up instead.)

## What still differs in the upper frame

- The game's mission banner is smaller than the original's (the HUD is scaled by the screen width and was kept as it is,
  as the user asked). The original's banner reaches down to about 0.21 of the height; the game's to about 0.15. So a
  narrower band of lavender housing still shows between the banner and the rim, where the original's banner covers it.
- On a 20:9 phone up to 5% of each side is trimmed (the original is itself cut at its sides, through the right coin and
  both brushes).

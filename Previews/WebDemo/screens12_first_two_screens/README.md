# Screens 1 and 2 (Home, Laundry Toss) in front of the live game: `?s3=...,home` (7 November 2026, session `398ed88c`)

The user's first-two-screens package (`Design/ReferencePacks/2026-11-07_First_Two_Screens_Girl_Laundry_from_user/`): the ORIGINAL
girl + laundry artwork (`11109.jpg`) is the authority for the girl, the pink character, the room and the gold washer; the two
phone previews only place the UI. Code: `WebDemo/src/screens12.js` (gated on the `home` switch); `game.js` only imports it and
holds its frames while the screens cover the game. Try it: `index.html?s3=intunnel,structmatch,home` (or `?s3=intunnel,home`).

## What it is
- **The artwork as the opening illustration** (the user's prompt allows it), with the pink character CUT OUT of it
  (`WebDemo/ui/screens12/mascot_sprite.png`) so she can be tossed, and the room behind her repaired
  (`ui/screens12/laundry_scene.jpg`; the painted HUD and title strip repaired too, since real UI replaces them).
- **Real UI:** the top bar shows the game's live hearts, coins and gems (read from the game's own HUD); its gear opens Settings
  (Sound on/off works: it presses the game's own sound button). Screen 1: Bubble Wash KINGDOM title, PLAY, and Levels (Level 1
  playable, 2-4 locked), Characters, Shop (live coins and gems), Settings panels. Screen 2: Laundry Toss!, the cue "LET'S GO!
  INTO THE WASHER!", START (shows LOADING... until the 3D game has loaded underneath), Back.
- **START:** a bubble puff and a soft light burst where she sits, she is tossed along the artwork's arrow (a curve, spinning,
  shrinking, with a sparkle trail) into the washer's blue tunnel, the view dives into the tunnel, and the live 3D Screen 4
  (its accepted Tap to Start) takes over. No static picture stands in for the game: Screen 4 is the real game.

## Tests (`WebDemo/tools/screens12/screens12_check.cjs`, Playwright, touch, real taps)
- `run_pixel7/` (412 x 839): Screen 1, Levels panel, Settings (sound On -> Off -> On), PLAY -> Screen 2, START once loaded, the
  toss, the dive, the hand-over (the overlay removed), then a tap on the stage: the run starts (phase `running`, she moved
  5.7 m). 0 console errors. The whole session is recorded unedited: `run_pixel7/*.webm` (software rendering in this container
  makes the 3D part slow; on a phone it is real time).
- `layout_360x740/`, `layout_390x844/`, `layout_412x839/`: Screens 1-2 at three phone sizes; the top bar, title, buttons and
  navigation fit; the girl, the character and the washer stay whole. Sheets: `sheet_flow_pixel7.jpg`, `sheet_layouts.jpg`.
- `identity_screen4_unchanged.txt`: with the screens' code in the bundle (3fff8982) and the switch off, `?s3=intunnel` (start),
  `?s3=intunnel,structmatch` (3.0 s) and the normal game (1 s) render 0 pixels different from bundle bb2cffb8.

## Differences from the previews (candid)
- The girl and the room are the artwork itself (2D), not 3D models; only the character moves. No rigged 3D girl exists in the
  project (see `Design/LAUNDRY_TOSS_INTRO_ASSETS.md`).
- Where she was cut out, the wall behind her is a soft repaired glow (covered by the bubble puff during the toss).
- Levels 2-4, Characters and Shop are informational panels (no such systems exist yet in the game).

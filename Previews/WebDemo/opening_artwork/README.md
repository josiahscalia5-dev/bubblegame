# The approved Screen 3 artwork as the opening screen (test version, 3 November 2026)

Real screenshots from the running browser game (headless Chromium through Playwright, software WebGL; not a real phone). Branch `ccr-4e2b86d7-kqpei8`; nothing merged.

| File | What it shows |
|---|---|
| `01_opening_vs_approved.png` | Your approved Screen 3, the game at Tap to Start, and `?classic` (the original opening). The game's screen differs from the approved image by 0.59 of 255 per colour channel on average, which comes from resizing only. |
| `02_tap_into_tunnel.png` | A real click on the painted "Tap to Start", then the existing 0.45 s fade into the live 3D game and on into the tunnel. |
| `03_phones.png` | 390 × 844 and 375 × 667 phones. The whole artwork is shown, not cropped or stretched. On the taller phone a band in the artwork's border colour is left below it. |
| `04_tunnel_unchanged.png` | The same seeded run on the checkpoint build (`6116703`) and the test build. After the fade, there are 0 differing pixels. |

## What was tested

- **Settings:** a real click on the painted gear toggles sound and does not start the run, at 538 × 1076, 390 × 844 and 375 × 667. The real button sits within 1.5 px of the painted gear.
- **Tap to Start:** a real click on the painted "Tap to Start" starts the run, and so does the Enter key.
- **The fade:** the artwork's opacity goes 1, 0.87, 0.58, 0.26, then 0 at 0.45 s, while the settings button fades in. The live banner and panel stay hidden under the artwork, so nothing appears twice.
- **`?classic`:** the original opening, with the live banner and panel, and no artwork.
- **The tunnel and gameplay:**
  - Screenshots at 2.6, 3.5, 5.5, 7.5 and 9.5 s are pixel-identical to the checkpoint build.
  - The seeded runs end identically: 12 coins, 2 gems, 3 socks, 1 lap, same place and lane.
- No console errors or warnings in any run.

# Precision kit: checked on 5 November 2026

The user's `README_FOR_CLAUDIA.md` explains each file. These checks were made on receipt:

- **`00_ORIGINAL_CLASSIC_APPROVED_SCREEN4.jpg`** (767 x 1536) is the same image as the authority,
  `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`. The mean absolute
  difference is 0.44 of 255, JPEG re-encoding only.
- **Crops `01`-`07`** are exact crops of that image. Template matching (OpenCV, normalised correlation) scores 1.000 for
  each, at these places in the original:

| crop | content | x (share of the width) | y (share of the height) |
|---|---|---|---|
| `01` | gold-and-lavender washer housing | 0.00-1.00 | 0.21-0.40 |
| `02` | deep cobalt-cyan whirlpool | 0.07-0.93 | 0.28-0.67 |
| `03` | pink swimmer in blue water | 0.07-0.93 | 0.65-0.92 |
| `04` | coins, gem and sock | 0.03-0.98 | 0.44-0.73 |
| `05` | the brushes | 0.00-1.00 | 0.22-0.63 |
| `06` | foreground splashes and bubbles | 0.00-1.00 | 0.76-0.96 |
| `07` | HUD and upper frame | 0.00-1.00 | 0.00-0.24 |

- **`08`, `09` and `11`** are the game's `?s3=match` frame at 3.0 s and comparisons made from it. They are not targets.
- **`10`** is the user's annotated target-zone map of the original.

The crops are detail close-ups of the authority and may be used as such. The original itself remains the only final
authority.

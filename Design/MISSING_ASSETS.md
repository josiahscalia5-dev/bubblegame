# Models and artwork still needed

Every object in the game that doesn't have its final model yet is named `PLACEHOLDER_…` in the Unity scenes. This list says what each one should be, where it appears on the approved screens, and how to hand it over.

**You have already supplied:**
- `BubbleWashCastle.glb`: the castle portal. It's also reused for now as the kingdom gate and the small island castles.
- `BubbleWashTunnel_Mobile_2K_Lite.glb`: the washer drum, used for both drums (6 segments).

## Meshy 3D models, most important first

Mobile budget: about **20k triangles** for a prop, **50k for the mascot**, with one 2K texture each. The castle (150k) and each drum segment (136k) are already well above this. Lower-poly versions of those two would help the phone frame rate more than anything else.

| # | Model | Seen on screens | Replaces in the scene | Notes for Meshy |
|---|---|---|---|---|
| 1 | **Pink fluffy mascot** | all (1–12) | `PLACEHOLDER_PinkMascot` | Round pink fur ball with small arms and feet, big eyes, blush. Face on its front. Separate arm, foot and eye parts let it paddle and blink, but a single mesh works too. |
| 2 | **Spinning brush wheel** | 3, 4, 6, 7 | `PLACEHOLDER_SpinningBrush_*`, `PLACEHOLDER_GiantBrush` | Big round fluffy brush seen face-on: concentric pink, white and blue bristle rings around a hub. One model is used for all brushes, spinning about its face axis. |
| 3 | **Rescue sock** (face, purple stripes, blue toe) | 4, 8, 11, 12 | `PLACEHOLDER_LostSock_1-5`, `PLACEHOLDER_SockFriend` | Cute standing sock with a face. A blue-striped variant appears in 11 and 12; one model plus a recolour is fine. |
| 4 | **Paw coin** | 3–12 | placeholder coins | Thick glossy gold coin with an embossed paw print. |
| 5 | **Purple gem** | 1, 4, 8, 11 | placeholder gems, the special gem | Faceted, bright purple. |
| 6 | **Grime-ball enemy** | 9 | `PLACEHOLDER_GrimeBall_Enemy` | Dark navy round fuzzy ball with angry pink eyes and frowning brows. Please confirm its name. |
| 7 | **Water-slide pieces** | 3, 5, 6, 10 | `PLACEHOLDER_WaterSlideRails`, the `SidePath_*` troughs | A straight slide segment with gold rims, a raised side-path trough on supports, and an end piece the water pours off. Modular, about 4 m per piece. |
| 8 | **Treasure chest** (open, full of coins) | 12 | `PLACEHOLDER_TreasureChest` | Wooden chest with gold bands, lid open. |
| 9 | **Floating kingdom island** | 10, 11 | `PLACEHOLDER_FloatingIsland` | Pastel rock underside, grass on top, little trees. Two or three shapes give variety. |
| 10 | **Kingdom castle / gate** | 10, 11, 12 | `KingdomGate (Meshy castle reused …)`, `KingdomCastle (…)` | Pastel pink, white and gold towers with blue roofs. The gate has an archway the path runs through (Screen 11). Lower-poly than the portal castle. |
| 11 | **Golden figure at the portal** | 3 | `PLACEHOLDER_RubberDuck` | Still unclear from the approved image whether it's a rubber duck or a golden figure. Please confirm. |
| 12 | **Water-drop buddy** and **star ball** | 1 | `PLACEHOLDER_WaterDropBuddy`, `PLACEHOLDER_StarBall` | The blue water-drop friend and the pink star ball beside the mascot on the Home screen. |
| 13 | **Coin tub** | 5 | `PLACEHOLDER_CoinTub` | A pink tub of gold coins at the slide's edge. |
| 14 | **Wider castle facade with tower waterfalls** | 1, 3 | the castle (optional) | The approved castle is wider than the Meshy one, with towers running off both screen edges. Extra side-tower pieces would close that gap. Waterfalls are now effects, so they aren't needed in the model. |

### How to hand them over

- **Models 1–5 and 11 have drop folders.** Put the GLB in its folder:
  - `Assets/BubbleWash/Models/Mascot/`
  - `SpinningBrush/`
  - `RescueSock/`
  - `Coin/`
  - `Gem/`
  - `RubberDuck/`

  Then run **Bubble Wash → 1. Build Level 1 Scene**. Each model is fitted to the size the approved screens need.
- **Models 6–10 and 12–14 need one small code change** to give them a slot. Send them and I'll wire them in.

## 2D artwork

The interface works now with generated stand-in sprites (`Tools/generate_ui_sprites.py`). The layouts are measured from the approved screens, but the drawings are simpler than the approved art.

| Artwork | Screens | Notes |
|---|---|---|
| **"Bubble Wash Kingdom" logo with crown** | 1 | The biggest single difference on Screen 1. A transparent PNG at 1024 px wide or more. |
| **Power-up icons**: pink bubble blaster and yellow propeller | 4, 7–11 | Detailed glossy art in the approved screens. |
| **Level thumbnails**: Soap Lagoon, Suds City, Rainbow Rapids | 2 | Level 1 uses a live 3D picture of the castle. Levels 2–4 currently show tinted copies of it. |
| **Icon set**: heart, coin, gem, gear, pause, lock, warning, tick, stars, hand pointer, arrows, bottom-bar icons (Levels, Characters, Shop) | all | Transparent PNGs at about 256 px. |
| **Button and panel style** | all | Optional. The generated glossy blue, green, red and white panels are close. |
| **Arched text** for "Into the washing machine!" | 3 | Optional. It's straight text for now. |

The font is Fredoka Bold (open licence). It's close to the approved rounded font but not identical. If the original font is known, it can replace Fredoka.

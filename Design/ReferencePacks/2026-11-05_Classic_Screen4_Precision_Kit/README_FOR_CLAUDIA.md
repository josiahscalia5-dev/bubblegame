# Bubble Wash Kingdom — ORIGINAL CLASSIC Screen 4 precision reference kit

**Sole visual authority:** `00_ORIGINAL_CLASSIC_APPROVED_SCREEN4.jpg` (767×1536). It is an authentic copy of the user's approved original, not a redesign, AI-generated alternative, or 3D asset. Crops 01–07 are literal portions of THIS image, with no painterly alterations, artificial fills, or replacement elements. `10_TARGET_ZONES_ANNOTATED.jpg` is the only annotated copy.

**Current comparison:** `08_CURRENT_CLAUDE_MATCH_3_0S.png` is the new `?s3=match` screenshot cropped out of the user's actual supplied three-way comparison `09_APPROVED_VS_SPLASH_VS_MATCH_COMPARISON.png`. It is not the approved image. `11_LARGE_SIDE_BY_SIDE_TARGET_VS_CURRENT.jpg` places the original and latest at equal proportions for inspection; do not use this as a texture.

## Reference zones
1. `01_GOLD_LAVENDER_WASHER_HOUSING.jpg` — original curved metallic gold rim + lavender washer arch, including lighting transition to cobalt water. Current shows too much lavender between UI and water and the opening looks materially different.
2. `02_DEEP_COBALT_CYAN_WHIRLPOOL.jpg` — deep blue/cyan, intricate swirl, bright highlights, warm core. Current lacks dark cobalt/shadow contrast, has too much light blue/lavender toward the center, and repetitive concentric water texture.
3. `03_PINK_SWIMMER_BLUE_WATER_WAVES.jpg` — pink fur swimming partly immersed with irregular translucent bright turquoise crests and white foamy sprays. Current hero is more exposed with an artificial straight/flat waterline and insufficient wave geometry.
4. `04_GOLD_COINS_GEM_SOCK_POSITIONING.jpg` — visual positions, proportions, lighting and angle of foreground gold paw coins, purple diamond, smiling sock. Current positions and scale differ (notably the foreground sock and lower-right coin).
5. `05_PINK_WHITE_BLUE_FLUFFY_BRUSHES.jpg` — soft fluffy edge brushes, composition. Current left brush intrudes excessively.
6. `06_FOREGROUND_GLOSSY_SPLASHES_BUBBLES.jpg` — vivid blue water plus broken white crests, not an opaque foam blanket.
7. `07_HUD_AND_UPPER_FRAME.jpg` — HUD is preserved from the existing working game; do not redesign the app or start another game.

## Using the references
- Compare the ACTUAL in-game `?s3=match` at 3.0s to the only approved screen at identical portrait framing. Aim at the original composition, lighting, color, water movement and foreground immersion, not merely presence of objects.
- Never unwrap entire perspective illustrations into cylindrical wall textures without verifying their mapping; create seam-free water materials using purpose-made flow/normal maps, custom shader surfaces or layered 2.5D/3D where appropriate.
- Keep all existing gameplay, hero model and mechanics functional. Use a separate branch/test flag; preserve prior checkpoints.
- Existing coin/sock/brush meshes must remain separate moveable 3D game objects. Do not bake them into the tunnel image.
- These 2D images are **visual references and exact crops, not GLB assets**. Ask Manus for its real scene code/shaders/textures/GLBs as separate files if potentially reusable, and import only after inspection and isolated gameplay testing.
- Verify with full-resolution before-after screenshots, 50% blend to inspect alignment, and a short running clip showing blue water and wave/splash motion. No claims of 90–95% visual similarity without actual evidence.

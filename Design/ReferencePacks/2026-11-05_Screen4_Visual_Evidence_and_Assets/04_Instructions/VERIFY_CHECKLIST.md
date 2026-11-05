# Bubble Wash Kingdom - Screen 4 acceptance checklist

REFERENCE AUTHORITY: 01_Approved_and_Latest/APPROVED_ORIGINAL_CLASSIC.png

This is a cropped reference from the user's original approved screen. The other images show snapshots of a playable implementation; do not mistake either for the target. Keep character MODEL appearance out of scope.

- [ ] 01. Deep tunnel bubbles: small, medium and occasional large translucent bubbles appear *inside* the water vortex at near/mid/far depths, including behind collectibles; they move with believable buoyancy and turbulence, not just an overlay over the entire screen.
- [ ] 02. Waterline: the fuzzy character remains visibly above the surface at the top but the lower portion is naturally occluded by active blue/white foam and water. No transparent purple bubble-wall look. Do not redesign the character mesh.
- [ ] 03. Tunnel: dark cobalt concentric water bands create a deep, tighter center with warm peach-gold center, avoiding a broad smooth tube.
- [ ] 04. Foreground: substantial opaque aqua-white foam lobe volume, glossy bubbles, irregular shape, splash particles and physically convincing overlap.
- [ ] 05. Layout: coin, gem, and sock size, x/y projection and depth nearer target; perspective and overlaps consistent in camera view.
- [ ] 06. Upper crop: eliminate unnecessary empty purple band while retaining HUD placement and usable UI.
- [ ] 07. White rectangle: identify its cause (light plane/geometry/background element?) and remove the obvious flat white rectangle, unless it is a deliberate valid object, in which case correct its presentation to match the target.

### Nonnegotiable implementation QA
- Inspect actual source and rendering framework (Three.js, Babylon, Unity, etc.); use compatible native features.
- First ensure design specialists' changes are merged safely, without overwriting their changes. Preserve full working gameplay, movement, UI, collisions, particle performance, and GitHub history.
- Use the provided bubble sprites and GLB *only if helpful*. They are PROTOTYPE implementation aids, not an exact-match reference or a ready-made copy of the original's particles. Prioritize original image as visual target.
- Lock game camera, viewport (current Pixel 7 framing), deterministic motion/frame state, and same 3.0 s moment. Compare cropped GAMEPLAY ONLY to approved original, not 4-column screenshots or labels.
- Make a side-by-side frame and separate close-ups for the 7 checkpoints. Verify in moving gameplay, not just a still image.
- Record each checklist item as verified / partially verified / not verified with a screenshot and brief explanation; do not mark pass without actual render evidence.

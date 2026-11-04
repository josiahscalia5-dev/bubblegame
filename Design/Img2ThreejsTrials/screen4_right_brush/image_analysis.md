# Image analysis: approved Screen 4, right-hand brush (img2threejs layer protocol)

Reference: `reference_right_brush.jpg` (132 x 391 px), cut unedited from the user's approved Screen 4
(`03_SCREEN_4_CROPS/04_BIG_RIGHT_PINK_BLUE_WHITE_BRUSH.jpg`). Only the brush's left half shows; the screen edge cuts it.

## Layer 1: identification
- Work type: cylindrical laundry roller brush (rotary scrubbing brush) seen end-on. Broad class: rotating fibre tool.
  primaryDomain: object. Confidence 0.8 (it is a painted fantasy prop; the other approved reference
  `03_APPROVED_DETAILED_BRUSH_WATER_INTERIOR.jpg` shows the same brushes as drums on gold-and-blue hubs).

## Layer 2: form and silhouette
- Observed: a disc-like volume about as wide as the tunnel's half-width, face toward the camera. Radial symmetry about the
  rotation axis. Organic outline (fibre fringe), geometric core.
- Primitives: a short cylinder (hub) inside a torus-like fringe (looped fibres), a domed front face.

## Layer 3: decomposition
- Macro: hub (central face), fibre crown (ring of looped tufts).
- Meso: inner tuft ring (vivid blue), middle tuft ring (white), outer tuft ring (pink and magenta), outer loop fringe.
- Micro: individual looped fibre bundles (each a short rounded loop, about 1/14 of the radius), dark gaps between loops.

## Layer 4: spatial relationships
- `<fibre crown, attached-to, hub rim>` (embed). `<blue tufts, inside, white ring>`. `<pink fringe, outside, white ring>`.
- `<brush, embedded-in, tunnel wall>` (the brush emerges from the wall at the right; its back is hidden).

## Layer 5: materials (PBR)
- Fibres: dielectric, metalness 0, roughness 0.85-0.95, semi-translucent tips (soft rim brightening). No specular glints.
- Hub: hidden under the blue tufts in this view.

## Layer 6: colour and finish
- Inner ring: vivid blue, mid-dark value, high saturation (around RGB 40, 70, 210).
- Middle ring: white with faint pink, high value, low saturation.
- Outer ring: vivid pink to magenta, high value, high saturation (around RGB 245, 90, 180), with white loop tips.
- Finish: matte fibre, soft volumetric shading; brighter toward the camera-facing tips.

## What a single view hides
- The back and the hub's attachment; how deep the drum is along its axis (the detailed reference suggests a drum).
- Inferred, not observed: the loops continue round the hidden right half by radial symmetry.

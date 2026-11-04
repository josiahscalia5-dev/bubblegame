# img2threejs trial: the approved Screen 4 right-hand brush (4 November 2026): stopped, not used in the game

You asked whether the img2threejs Claude Code skill could rebuild a Screen 4 component more accurately, and to stop if
it could not reproduce the soft, fluffy approved brush.

## Installed and checked

- `npx --yes img2threejs@latest install` (CLI 0.1.1), which installs the skill at the pinned tag `v2.0.0`
  (commit `a669e9a`) into `~/.claude/skills/img2threejs`. Read before running: the installer only fetches that tag with
  git and links it; it has no dependencies and spends nothing. `doctor`: Claude Code detected, git 2.43.0.
- The skill loads in the session. Its Python core needs only the standard library.
- Not installed: Material Maker MCP and image2blender (no benefit shown).
- `~/.claude/skills` lives on the session's machine, so a new session needs the install again.

## What was run (the skill's own gated pipeline, state in `screen4_right_brush/.img2threejs/state.json`)

1. Image analysis, suitability (conditional: one cropped, low-resolution view; radial symmetry), admission (admitted).
2. Pre-spec assessment, detail inventory, spec authoring; colour evidence extracted from crops of the brush's blue, white
   and pink regions; strict validation **passed**.
3. Build passes: blockout (one refine-spec loop: a `transform.scale` overrode every part's size), structural pass, then
   form refinement, the first pass with the tufts (`renders/`).

## Result: stopped at form refinement

- The form-refinement brush is **smooth concentric rings** (`renders/form/sheet.png`): blue dome, white torus, pink torus.
  The tufts the spec asked for are identical small ellipsoids repeated round each ring, all the same size and angle,
  and buried inside the ring bodies, so the face looks exactly like the blockout.
- The generated code for that pass did not run as delivered: it called a capsule helper it never wrote (switched to its
  ellipsoid primitive to get the render).
- Why it cannot reach the approved brush:
  - Its geometry vocabulary is hard-surface primitives (boxes, cylinders, tori, capsules) and identical instanced repeats.
    Its detail types are bevels, fasteners, scratches and grooves; its local knowledge search for "roller brush" returned
    brushed-steel finishes.
  - It refuses alpha cards for hair and emits no textures, so fibres can only be faceted geometry.
  - Its biggest fidelity lever is projecting the reference photo's own pixels onto the mesh. That is ruled out here: no
    pixels of the approved pictures may appear in the game. The colour extractor also writes an albedo map from the
    approved crop, which the generated code would load with `TextureLoader`; the render harness (`render_factory.cjs`)
    switches that off, and those derived maps were deleted (the palettes are kept in `material-evidence/*.log`).

## What replaced it

A fluffy brush built with game techniques instead: shell fur, fringe cards, clumped strands and ragged colour bands
(`WebDemo/src/fluffy_brush.js`, test switch `?s3=round4,fluffy`). The approved brush beside it, and in gameplay:
`Previews/WebDemo/screen4_fluffy_brush/`.

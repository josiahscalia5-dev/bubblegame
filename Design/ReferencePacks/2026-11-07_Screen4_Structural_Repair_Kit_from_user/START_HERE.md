# Bubble Wash Kingdom — Original Screen 4 Structural Recovery Kit

**Purpose:** a conditional, one-pass structural recovery kit for Claude Code when ordinary water/visual tweaks have failed. This is NOT a request to keep endlessly tuning shaders. Start with `Claude_Structural_Fallback_Prompt.md` and attach the four image references.

## Trusted source material

- `01_Original_Approved_Screen4.jpg` — authentic original approved classic Screen 4, unchanged at 748×1536. This is the visual authority.
- `02_Character_And_Water_Closeup.png` — crop enlarged 3× for examining the broad fluffy pink dome and natural waterline. Enlarging does not create missing detail.
- `03_Water_Waves_Closeup.png` — original-only enlarged water crop.
- `04_Tunnel_And_Rings_Closeup.png` — original-only enlarged tunnel/ring crop.
- `05_Annotated_Screen4_Map.png` — annotated reference. Outlines are diagnostic zones, NOT objects to reproduce.
- `Structural_Diagnosis_Checklist.md` — technical failure-to-solution checklist and acceptance criteria.
- `Claude_Structural_Fallback_Prompt.md` — one complete paste-ready fallback prompt.
- `REFERENCE_SOURCES_SHA256.txt` — integrity checks for included visual files.

**Important:** The ORIGINAL is one still concept illustration, not captured 3D gameplay. Exact pixels at every motion frame are not physically specified. Solve for the same composition and design language in a genuinely playable Three.js/WebGL scene; do not hide the game behind a static image or claimed 'exact-match score'.

**Known project context from the user's Claude reports:** GitHub `josiahscalia5-dev/bubblegame`; existing accepted Screen 4 uses `?s3=intunnel` with `swim2` improvements. Recent `blend` and `fidelity` candidates were experiments; the `fidelity` one was rejected due to purple blobs, dark gap and reduced flow. Claude should confirm exact active branch and baseline by reading `CLAUDE.md`, `HANDOFF.md`, and repo scripts, rather than treating these notes as a live Git status.

## Primary technical reference (official Three.js docs)

- Color Management: https://threejs.org/manual/pages/color-management.html
- Transparency: https://threejs.org/manual/pages/transparency.html
- Material depthWrite, transparent, toneMapped: https://threejs.org/docs/pages/Material.html
- Perspective camera / FOV / aspect: https://threejs.org/manual/pages/cameras.html

These documentation links are for diagnosis, not evidence that the project's implementation uses any specific settings. Check the pinned Three.js 0.170.0 APIs actually available in the repository.

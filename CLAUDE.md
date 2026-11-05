# Bubble Wash Kingdom: rules for every Claude session

Read `HANDOFF.md` first: its top section is the newest state, branch and commit. The full history is in `ChatHistory/`.

## What the user wants now

- **Only Screen 4.** No work on Screen 1, the Laundry Toss intro, the cartoon girl, the castle or other levels unless asked.
- **The authority is the ORIGINAL APPROVED Screen 4:**
  `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg` (767 x 1536). It is the ONLY Screen 4 target, for every agent, tool and comparison.
  - Close-ups for detail only, all crops of it: `Design/ReferencePacks/2026-11-04_Tripo_Reference_Kit/09_APPROVED_CHARACTER_WATER_CONTACT.png`,
    `10_APPROVED_TUNNEL_LIGHT_AND_DEPTH.png` and `Design/ReferencePacks/2026-11-04_Approved_Screen4_Package/03_SCREEN_4_CROPS/01_...` to `08_...`.
  - NOT targets: the EXACT TARGET board (`03_SCREEN4_EXACT_TARGET_BOARD.png`), the guides (`01_ROUND6_...`, `05_...`, `06_...`),
    concept sheets, the Tripo kit's `VFX_ONLY` images, the water-look references, `Design/ApprovedScreens/` and any other
    generated image. `02_APPROVED_SCREEN_4_FULL.jpg` is a smaller copy: use the original.
  - The user's precision kit, exact crops of the original by zone (verified): `Design/ReferencePacks/2026-11-05_Classic_Screen4_Precision_Kit/` (`01`-`07`; `10` the annotated zones).
  - Supporting MATERIAL references the user approved on 5 November, for look and finish only (never layout; the original
    wins): `Design/ReferencePacks/2026-11-05_Screen4_Supporting_Material_References/` (see its README). REF5, the blue-water vortex, is the tunnel's water material.
- **First priority: a visibly blue/turquoise water body** through the tunnel, wrapping the pink character's lower body.
  White foam is only an accent on top. Never a white foam blanket, and never bloom, haze or a pale wash as a substitute.
- **Real three.js rendering in the playable game.** Never a static screenshot or a painted background in place of the 3D
  scene. Never restart or rebuild the game from scratch.

## How work is done

- The game is plain JavaScript on three.js r170 in `WebDemo/`. Build it with `cd WebDemo && npm install && node build.mjs`
  (esbuild; Vite is installed only for side tests). Commit `game.bundle.js` together with its source.
- Each visual pass is a new `?s3=<switch>` test version:
  - normal game (no switch); `round4`, `round5`, `round6`, `round7` (older passes);
  - `hero`: the Round 7 hero scene, hero moment 2.85 s;
  - `liquid`: Round 8, real water; `liquid,nofoam` shows it without foam.
  - `splash`: Round 8 pass 2, visible translucent splashes and a deeper swirl on top of `liquid`; `splash,nofoam` without the
    white.
  - Everything older must stay **pixel-identical**. Prove it with frame comparisons before saying so.
- **Gameplay is preserved:** controls, lanes, jump, tap to spin, coins, the gem, socks, hearts, pause, Bubble Blast,
  Turbo Spin, the mission. Use private random generators; the game's seeded `Math.random` is never touched.
- **Tools:** run `source Tools/bw_tools_env.sh` in every shell. If `~/.bubblewash-tools` is missing (a new account or
  environment), run `bash Tools/cloud_env_setup.sh`. Status and sign-ins: `Tools/DEV_TOOLS.md`.
- **Design agents** (`.claude/agents/`):
  - `game-art-director`: read-only reviewer;
  - `water-vfx-engineer`;
  - `lighting-visual-matching`: tunnel architecture and lighting;
  - `gameplay-visual-testing`: read-only tests.

  Give editing agents isolated worktrees and separate files. **Skill:** `.claude/skills/bubble-wash-screen-matcher/`.
- **Evidence:** compare full-resolution real gameplay captures against the approved Screen 4 and keep them in
  `Previews/WebDemo/<round folder>/`. Never claim a similarity percentage without saying which measurement produced it.

## Safety

- **Never force-push or rewrite another branch.** Work on the session's own branch. Save with
  `bash Tools/save_now.sh "<message>"`, which verifies the push.
- **Never put a key in the repository, a commit, a script or the chat.** The repository is public. Tripo's key goes in
  the cloud environment's settings (see `Tools/DEV_TOOLS.md`). The chat exporter redacts keys.
- **Tripo spends real credits:** `tripo make`, `tripo ai` and `tripo redo` charge. Ask the user before each paid job, with
  the job and its estimated cost. `tripo doctor` and `tripo balance` are free. Meshy is not used.

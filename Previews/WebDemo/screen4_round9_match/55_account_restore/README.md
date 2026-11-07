# Account restoration proof: the accepted Screen 4 build is unchanged (seventeenth session, 6-7 November 2026)

Second Claude account. Diagnostic only: no game file was changed. The accepted build is `?s3=intunnel` and the normal game.

## 1. Files

- `git diff --stat 0f7121f HEAD -- WebDemo/` is EMPTY. `0f7121f` is the previous account's final commit, 6 November
  22:50 UTC.
- `WebDemo/game.bundle.js` md5 `5bb24e2828a6f2ef17146252c69b413a`; `index.html` and `artifact.html` byte-identical.

## 2. Reproducible build (scratch copies; the repository untouched)

| build | game.bundle.js md5 | meaning |
|---|---|---|
| committed (the accepted build) | `5bb24e2828a6f2ef17146252c69b413a` | |
| the source of `c4072c9` (the commit that built it), rebuilt here | `5bb24e2828a6f2ef17146252c69b413a` | **byte-identical**: the build is reproducible on this account |
| the current source, rebuilt here | `cf9790fc36d91bc2cb5d61f659eb4ca6` | differs only by the unused `SWIM2_ON` line added after the build (`tunnel_s4_bt.js:108-110`): 28 bytes plus renamed minifier names. `index.html` and `artifact.html` identical |

Tools: three 0.170.0, esbuild 0.24.0 (`npm install`, pinned); Node 22.23.4. esbuild prints two pre-existing warnings
(duplicate keys `innerRings`, `leftGlow` in `tunnel_r9_focus.js`), part of the accepted build.

## 3. Pixel identity (`scripts/identity_restore.sh`, results in `identity/RESULTS.txt`)

- **Method:** the same seeded frame as `53_swim/scripts/identity.sh` (`layer_diag.cjs` base render: seed 7, no
  steering, the 768 x 1536 canvas).
- **Compared:** the committed bundle against (a) the rebuild of the current source and (b) the frame the previous
  account's machine saved (`53_swim/identity/*_new`, the same bundle), plus a re-render.

| moment | committed vs rebuilt | committed vs previous machine | re-render | console |
|---|---|---|---|---|
| accepted `?s3=intunnel`, start (Tap to Start) | 0 px | 0 px | 0 px | no errors or warnings |
| accepted `?s3=intunnel`, +1 s | 0 px | 0 px | 0 px | none |
| normal game, +1 s | 0 px | 0 px | 0 px | none |
| R9 (`intunnel,water9`), +1 s | 0 px | 0 px | 0 px | none |

## 4. Gameplay (`gameplay/`)

| test | result |
|---|---|
| `S3=intunnel s3_func.cjs`: settings, Tap to Start, real swipes left / right / up (jump), the ride, keyboard start, console errors, draw calls and triangles | **IDENTICAL** to the accepted report `53_swim/gameplay/s3_func_intunnel.txt` (507 lines) |
| `S3=intunnel SCRIPT=swipejump motion_trace.cjs`: 152 frames of position, lane, speed, air, coins, gems, socks, hearts, knocks, camera, her drawn pose and the swell | **IDENTICAL** in every field of every frame to `53_swim/motion/trace_accepted_swipejump.json`; no console errors |
| `S3=intunnel r2_func.cjs`: hearts, pause, Bubble Blast, Turbo Spin | **NOT VERIFIED.** The hearts section is identical to the accepted report. The test then TIMED OUT twice at its second page load (`fresh()`, `r2_func.cjs:49`: `page.goto` waiting for `domcontentloaded`, 300 s): `gameplay/r2_func_intunnel_run1_timeout.txt` (run 1, with other jobs running) and `gameplay/r2_func_intunnel.txt` (run 2, alone). The game files are byte-identical to the build whose `r2_func` passed before, so a game change is ruled out; the cause (container or harness timing) is NOT yet found. Do not count it as passed |

**The diagnostic for the `r2_func` timeout:**
- `scratch_diag/reload_diag.cjs` reproduces the sequence (load, tap, 1,200 frames, reload) with timings.
- Its first version served files without a content type, so the module never ran; that run proved nothing and is
  disregarded.
- The corrected run's result is recorded in `CLAUDE_ACCOUNT_TRANSFER_HANDOFF.md`, section 10.

## 5. Tools verified live (6 November, about 23:22 UTC)

- **chrome-devtools-mcp:** opened `http://localhost:9222/index.html?s3=intunnel`.
- **threejs-devtools-mcp:** `bridge_status` connected; `renderer_info` showed 54 programs, 115 geometries, 36 textures,
  frame 130.
- **playwright-mcp:** opened the same page, 0 errors.
- **Console:** only a missing favicon (404) and software-WebGL notices.
- **Spector MCP:** "Connection closed" (not built; skipped by the user).

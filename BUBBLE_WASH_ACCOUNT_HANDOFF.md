# Bubble Wash Kingdom: account handoff (read this first on any Claude account)

Written 7 November 2026, about 16:00-16:30 UTC, by session `398ed88c` (the account that has usage), after restoring the
old account's transfer and finishing one focused Screen 4 pass. Nothing in this file is a secret. The full inventories
(agents, plugins, environment, restore and verify steps) are in `CLAUDE_ACCOUNT_TRANSFER_HANDOFF.md`; the project's rules
are in `CLAUDE.md` and always apply.

## 1. Where everything is

| What | Where |
|---|---|
| Repository | https://github.com/josiahscalia5-dev/bubblegame |
| **Working branch (newest)** | `claude/bubble-wash-account-handoff-yhk8dy` (this session; it contains everything below) |
| The old account's transfer branch | `claude/bubble-wash-transfer-tcgbof` (`3c4c023` + its autosaves up to `0c76b4d`, all merged here with a normal merge; that account's container may still autosave there, so never push to it) |
| The accepted line | `ccr-10503be1-pnv5vq` (pull request #2 from the transfer branch into it waits for the user; never merge without the user) |
| Latest commit | see section 8 (the verified push) |

## 2. The accepted Screen 4 (the baseline: protected, unchanged)

- `?s3=intunnel` (it includes `swim2`, accepted by the user on 7 November about 10:20 UTC): the game starts inside the blue
  laundry tunnel at the approved view; Tap to Start is the user's ACCEPTED reference
  (`Design/ReferencePacks/2026-11-07_Final_Screen4_Reference_Pack_from_user/03_accepted_tap_to_start.png`).
- Rollbacks: `?s3=intunnel,noswim2` (the look before swim2), commit `920531d` (the game before swim2's acceptance).
- The committed accepted bundle before this pass: md5 `38466b67...` (accepted + `blend` behind its flag). This pass's bundle
  renders the accepted `?s3=intunnel` (start, +1 s, +2 s), `noswim2`, `blend`, `water9` and the normal game with **0 pixels
  different** from it (`Previews/WebDemo/screen4_round9_match/64_final_pass/proofs/identity.txt`).

## 3. The candidate waiting for the user: `?s3=intunnel,structmatch` (NOT in the accepted game)

Built on the accepted version, behind its flag (`STRUCT_ON` / `STRUCT_PARTS` in `WebDemo/src/tunnel_s4_bt.js`, code in
`WebDemo/src/tunnel_s4_struct.js`). Evidence and proofs: `Previews/WebDemo/screen4_round9_match/64_final_pass/README.md`.

| Part (default on) | What | Off for comparison |
|---|---|---|
| her (`hero`) | Screen 3's stretch and droplet flecks off; her crown a smooth round arc; richer magenta fur; drawn 5 % larger and 0.07 m higher in the water (her silhouette box 0.517 x 0.164 of the frame, the ORIGINAL 0.513 x 0.167); the gap between her legs filled | `,nohero` |
| the water round her (`swell`) | the accepted flowing surf kept (it flows with her travel, swim2), its blue graded toward the ORIGINAL's azure, richer, with deeper cores; its white foam untouched | `,noswellgrade` |
| the washer lining (`housing`) | the user's 7 November clarification: a curved silver / lavender / purple drum lining on the tunnel's own upper wall through the whole run (ribs, rivets and streaks fixed to the drum; a silver sheen; its edge a soft glow into the blue tunnel, one distance all round so it is an arc as the accepted rim); fades in after the tap, so Tap to Start is the accepted frame | `,nohousing` |

Opt-in only (off by default, kept so no work is lost): `,mounds` (the engineer's water-space wave mounds; they read as ice
or gumdrops next to the ORIGINAL), `,tunnel2` (wall grade and thicker rim), `,props2` (staged coin sizes), `,hud2` (corner
power cards).

## 4. What is finished and what is not

- Finished (this session): restoration of the old account's work (its engineer `afb9a081` stopped at 15:19 UTC on that
  account's 5-hour limit; its last snapshot `wip_snapshots_design_agents/screen4-water-motion-engineer_afb9a081/` was
  restored and continued, not restarted); the focused pass above; its proofs (section 6).
- Waiting for the user: the verdict on `?s3=intunnel,structmatch`. If approved, make it the bare `?s3=intunnel` the way
  swim2 was accepted (`58_swim2_accepted/README.md`), keeping `?s3=intunnel,nostruct`-style rollback.
- Not done (by the user's instruction: no art-director review, no new investigations): an art-director verdict; Pixel 7
  stills (the recordings are at Pixel 7 framing).
- Known limits of the pass (honest): her motion is the accepted swim2 motion (bob, lean, squash, flowing water), not new;
  the water's shapes are the accepted surf's (only its colour changed); the lining is softer than the accepted rim (no gold
  ring floats in front of the camera, by design).

## 5. The references (authority order)

1. The ORIGINAL approved Screen 4: `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`
   (767 x 1536): the only visual target.
2. The ACCEPTED Tap to Start (keep as the base) and the user's final mandate: `Design/ReferencePacks/2026-11-07_Final_Screen4_Reference_Pack_from_user/`.
3. The washer-interior clarification (ACCEPTED t0 is the metal's target; the concept image is a guide only):
   `Design/ReferencePacks/2026-11-07_Washer_Interior_Continuity_from_user/`.
4. Everything else as listed in `CLAUDE.md`.

## 6. Testing procedure (all scripts in the evidence folder)

```
source Tools/bw_tools_env.sh            # every shell; if ~/.bubblewash-tools is missing: bash Tools/cloud_env_setup.sh
cd WebDemo && npm install && node build.mjs
bash Tools/verify_restore.sh --build    # read-only restore check
# the pass's whole proof chain (identity, captures, s3_func, r2_func, motion trace, two recordings):
bash Previews/WebDemo/screen4_round9_match/64_final_pass/scripts/chain.sh <repo> <scratch dir> <committed bundle> <committed index.html>
```

Page captures: `SETTLE=900 S3=intunnel,structmatch TIMES=0,1,2,3,5 node tools/screen3/s3_shot.cjs "$PWD" <out>` (from
`WebDemo/`). The route loops: just before the drum's end (about 30 m, about +4.3 s) the game flashes back to the slide
(`loopRun` in `game.js`), so +4 s and +14 s are "near the end of the route".

## 7. Agents, skill, tools, plugins: what travels and what must be reconnected

- **Travel with the repository (verified present):** `.claude/agents/` (`screen4-water-motion-engineer`, `game-art-director`,
  `water-vfx-engineer`, `lighting-visual-matching`, `gameplay-visual-testing`), `.claude/skills/bubble-wash-screen-matcher/`,
  `.claude/hooks/session-start.sh` + `.claude/settings.json` (the autosave hook), `.mcp.json` (empty: the MCP servers come
  from the plugin), every tool in `Tools/` and `WebDemo/tools/`.
- **Account level: do NOT travel; redo on each account:**
  - the claude.ai GitHub connection (and the Claude GitHub App on the repository);
  - the **parallax-threejs** plugin (0.4.12): chrome-devtools-mcp, threejs-devtools-mcp and playwright-mcp work on this
    account; **Spector failed to connect here** (`CONNECTION_CLOSED`; skipped by the user before);
  - the cloud environment: on this account it is `bubblegame` (`env_016qrkLt8s9RU8tVo9qEp8qo`, personal, limited network
    with package registries and MCP servers, `download.blender.org`, `download.pytorch.org`, a setup script that runs
    `Tools/cloud_env_setup.sh`); on a new account create the same (`CLAUDE_ACCOUNT_TRANSFER_HANDOFF.md` section 0 has the
    script verbatim);
  - any Tripo key (environment settings only; never in the repository; Tripo jobs cost credits: ask first);
  - running agents' live state (only their files are saved, as worktree snapshots every 5 minutes).

## 8. Latest safe commits

- Before this pass: `0c76b4d` (the old account's last autosave, transfer branch), merged here as `8343381`.
- This pass: see the final report of session `398ed88c` and `git log` on the working branch (the commit message starts
  "Screen 4 final pass").

## 9. Next steps (in order; no repeated investigations)

1. The user reviews `64_final_pass/` (sheets and the recording) and decides on `?s3=intunnel,structmatch`.
2. If approved: fold it into the bare `?s3=intunnel` with a rollback switch, prove 0 px for the old look under the rollback,
   commit, and lock Screen 4.
3. Then the rest of Level 1 (the user's goal), starting from the locked Screen 4.

## 10. Continuation prompt for another account (paste as is)

> Resume Bubble Wash Kingdom from GitHub: repository josiahscalia5-dev/bubblegame, branch
> `claude/bubble-wash-account-handoff-yhk8dy`. Read `BUBBLE_WASH_ACCOUNT_HANDOFF.md`, then `CLAUDE.md` and `HANDOFF.md`.
> Do not restart or redesign anything; the accepted Screen 4 is `?s3=intunnel`; the candidate `?s3=intunnel,structmatch`
> waits for my verdict. Verify with `bash Tools/verify_restore.sh --build`, tell me what needs reconnecting (plugin,
> environment, GitHub), then wait for my decision.

# Screen 09 ("Avoid Enemies!") architecture: Tripo attempts (8 November 2026, ~17:10 UTC, session 57091b57) — BOTH REJECTED

The user's order: rebuild the original's scenery (`Design/ApprovedScreens/09_Avoid_Enemies.png`) with Tripo, from clean isolated references,
one object per job, never the whole screenshot; reject flat cards. Submitted through `Tools/tripo_job.sh` (one lead session, dry run,
account check, logged in `../TRIPO_JOBS_LOG.md`).

| Input (`inputs/`, crops of the original only, x8, on white) | Task | Credits | Result | Decision |
|---|---|---|---|---|
| A: the left washer housing (pink ring with a bubble, centre (25,145) r 41 of 254 x 466; cut by the screen edge, completed by mirroring its visible half) | `2414a436-d703-4458-b25f-81da91890435` | 120 | a pale elongated spindle (`s09_housing/s09_housing_raw.glb`, 4,967 triangles): no ring, no bubble | **REJECTED** |
| C: the top-right blue machinery (a gear-drum, centre (243,112) r 32; completed by mirroring) | `b1e382e3-389f-4f29-b14c-4224b6d31241` | 120 | a blue slug-like blob (`s09_machinery/s09_machinery_raw.glb`, 5,075 triangles): no gear or wheel | **REJECTED** |
| B: the right pink-gold star wall (x 180-226, y 239-304) | not submitted | 0 | by nature a flat wall section: a likely flat card; kept as real geometry (`scene07`'s star tubs) | - |

`01_REJECTED_raw_models_vs_inputs.jpg`: four views of each next to its input. Balance 1,300 -> 1,060.

**Why it fails (the same as the castle earlier):** on the original these structures are only 40-80 pixels across and painted; enlarging adds
no detail, so Tripo has no shape to reconstruct. More jobs from these crops would very likely fail the same way, so no more were spent.

**What could work (for the user to choose):** (1) a larger or cleaner picture of each structure from the artwork's source, if one exists;
(2) the user's own pink-and-gold architecture GLBs, if they exist (none have reached this session); (3) a Tripo-generated clean concept
image of each object made from these crops, then image-to-3D (an intermediate generated image: only with the user's yes, since the user
does not want generated images treated as references); (4) keep building the structures as real three.js geometry (`scene07`), which is
what the kit itself recommends first.

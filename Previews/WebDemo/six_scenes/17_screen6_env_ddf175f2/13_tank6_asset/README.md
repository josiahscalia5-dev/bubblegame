# tank6: the first replacement asset (session ddf175f2, 9 November 2026). NOT approved.

The user's directive: one genuinely better 3D asset first, shown in the real game. Choice: the approved Screen 6's tall GLOWING GLASS TANK
(the art director's #1 remaining difference is glow; the tank repeats 8+ times on both banks; Tripo's tank failed).
Asset tools checked live: Meshy MCP and Hyper3D Rodin MCP not available (not in the connector directory, not installed, no keys); Sketchfab
search reachable but its open search returned nothing usable and downloads need the user's token; Poly Haven reachable (realistic assets only).
Image-to-3D (Tripo / Meshy / Rodin) bakes opaque textures, which cannot give the transparent glowing glass this object needs.

So the tank is a MODELLED asset: `Tools/blender_glow_tank.py` -> `WebDemo/models/s6assets/glow_tank.glb` (5 named parts, 5.7k triangles),
with real materials in the game (`WebDemo/src/s56_tank6.js`): gold, a fresnel glass shell with painted highlights, a glowing liquid column (violet
edge -> magenta -> white-hot centre, HDR for the bloom, a slow swirl), lit bubbles, a camera-facing additive halo. It stands in every place lane
arch56 built a procedural tank (arch56 records tankSlots under `,tank6`), and as the big tank on the right bank. 5-6 draw calls for all tanks.
Switch: add `,tank6` to the Screen 6 candidate. No credits spent.

Results (u 206, 864x1536): `SBS_approved_vs_game_u206_tank6.png`, `crop_left_approved_before_after.png`, `crop_right_approved_before_after.png`.
Tuning steps: `tune_step2_left.png`, `tune_step3_left.png` (the first version read pale white-lilac; fixed by keeping the body under the
tone-mapping knee with one hot spot). Verdict (honest): the tanks now glow from inside (before: flat lavender panels); a real but moderate
step; the approved's crisper white-hot core and the lavender (not pink-gold) machinery around the tanks remain different.
The big right tank does not show at u 206 (that bay is the roller brush's).
Proofs: plain launch canvas 0 px at u 206, Classic Screen 4 0 px; Level 1 route with tank6 = baseline (Level Complete, 5 socks, 125 coins,
2 gems, 3 stars, 4 hearts, 2 pops, 0 console errors): `route_tank6.json`, `route_gameplay_u206_tank6.jpg`.

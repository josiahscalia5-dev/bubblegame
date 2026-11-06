# Coin counter one apart in the R9 and swim clips: not a gameplay change (sixteenth session)

The clip key moments showed the HUD coin count one apart from the jump on (R9 1,290 / 1,292 / 1,295 against swim
1,291 / 1,293 / 1,296).

The same 7 s swipe-and-jump script was rerun in the recorder's dry mode
(`51_swim/scripts/record_phone.cjs ... 7 dry`: real pointer input on fixed frames, the game state logged every frame in
`track.json`), comparing time, z, x, lane, air, coins, gems, socks, hearts, speed, knocks and bumps frame by frame:

| compared | differences (fields x frames, 210 frames) |
|---|---|
| R9 (old bundle 7402397a) vs swim (new bundle) | 13 |
| swim vs the ACCEPTED build | 81 |
| R9 vs the ACCEPTED build | 77 |
| **the ACCEPTED build vs ITSELF (two runs)** | **82** |

**Every difference is the same kind:** a coin or gem pickup landing one frame earlier or later, with position, lane,
height, air, hearts and the final totals (1,298 coins) identical. The accepted build differs from itself as much as from
the candidates. So this is run-to-run timing noise in the recorded clips: the game's own `performance.now()` frame loop,
`game.js:1160` / `1615`, runs beside the scripted steps. It is not a gameplay change.

The deterministic check, `tools/screen4/motion_trace.cjs` (stepping through `__bw.advance` only), gave 0 differences
between swim and the accepted build over 152 frames x 16 fields.

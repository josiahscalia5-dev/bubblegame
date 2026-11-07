# `swim2` ACCEPTED as Screen 4 (7 November 2026, eighteenth session, the user's approval)

The bare `?s3=intunnel` (the accepted Screen 4) now includes `swim2`: the tunnel stays cobalt while she swims, the water at
her flows with her travel, the spray is capped at 12 px (`../57_swim2/README.md`). One line in
`WebDemo/src/tunnel_s4_bt.js`:

```
export const SWIM2_ON = BT_ON && (LIST.includes('swim2') || (INTUNNEL_ON && LIST.every((f) => f === 'intunnel')));
```

## Rollback (nothing is lost)

- **In the game:** `?s3=intunnel,noswim2` is the previous accepted look, 0 px different from it (below).
- **In git:** commit `920531d` (7 November 09:51 UTC) is the last commit before the acceptance: bundle md5 `1199348a`,
  `?s3=intunnel` = the previous look, `swim2` behind its flag. The branch is never rewritten, so the hash stays valid.
  The 6 November checkpoint is still `0f7121f` (bundle `5bb24e28`). A git tag was tried; this session's git proxy
  refuses tag pushes (HTTP 403), so the hash is the checkpoint.
- To restore the game folder only: `git checkout 920531d -- WebDemo/` then `bash Tools/save_now.sh "<message>"` (a NEW
  commit; never reset or force-push).

## Proofs (old bundle `1199348a` vs new bundle `ea0c833c`, same seed and moment, `layer_diag.cjs` base renders)

`identity_acceptance.txt`, all 768 x 1536:

| pair | moments | pixels different |
|---|---|---|
| old `intunnel,swim2` vs new `intunnel` | start, +1 s, +2 s | 0, 0, 0 |
| old `intunnel` vs new `intunnel,noswim2` (the rollback) | start, +1 s, +2 s | 0, 0, 0 |
| the normal game | start, +1 s | 0, 0 |
| `intunnel,water9` (R9), `intunnel,swim`, `intunnel,swim2` | +1 s | 0, 0, 0 |

The switch is real: the new `intunnel` against the new `intunnel,noswim2` differs by 1,027,138 px at +1 s (0 at the start,
where swim2 is the accepted start by design).

Gameplay (`gameplay/`): `r2_func` (VW=135 VH=270) for `intunnel` and `s3_func` for `intunnel`, compared with the
accepted reports (results in the commit message and `gameplay/RESULT.txt`).

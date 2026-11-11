# The user's eight Tripo models (9 November 2026 ~15:28 UTC, session 47f75e22). Originals, exact bytes. NOT in the game. NOT approved.

Sent as six ZIP packs (`BubbleWash_Claude_Pack_01`-`06.zip`). Extracted into one folder, `python3 rebuild_yo_jj.py` rebuilt
`BubbleWash_Tripo_yo_jj_optimized.glb` from its two parts (packs 05 + 06), then `python3 verify_all_glbs.py` passed for all eight:
size, SHA-256 against `MODEL_SHA256_MANIFEST.json`, and the GLB header (magic `glTF`, header length = file length).
The two `.part` files are not stored (the rebuilt GLB is byte-identical to their concatenation; their SHA-256 values are in the manifest).
Re-check any time: `cd` here, `python3 -I verify_all_glbs.py`.

No Tripo credits were spent (no job run). None of these files is referenced by game code.

| File | Bytes | SHA-256 | Git blob | Pack |
|---|---|---|---|---|
| `BubbleWash_Tripo_Machinery_tiny.glb` | 10,358,984 | `999ebdd3ad1d4d39230f92c70f64714c0fbb81b98078520086931219bd7be019` | `0c47fb09` | 01 |
| `BubbleWash_Tripo_911_tiny.glb` | 10,150,020 | `4345fd777bccb7fcc16f70acd1f059e3957d128ebd89f42edfede485dd51e29c` | `e96ebf9f` | 01 |
| `BubbleWash_Tripo_912_tiny.glb` | 10,791,824 | `16b4878d64f506324123842b2059ff2a7aa63138be49064bdff536a169898f88` | `8d926d5b` | 02 |
| `BubbleWash_Tripo_blue_jt_tiny.glb` | 10,254,232 | `086b0652cb8786060c691b8b627afd381a8088a5c19c022f7cda8a67ee63e95b` | `67a1b823` | 02 |
| `BubbleWash_Tripo_dave_tiny.glb` | 10,084,252 | `5e599f37e4270e07b157f2c9c9d6ecc383651a29cdfa8bc75e3598a093533567` | `925fcc46` | 03 |
| `BubbleWash_Tripo_gold_jj_tiny.glb` | 9,386,348 | `94593bdb007cd517fd7115a34fb50dc8338cd3bb41b7d6ffc0b58b1a15e4fddc` | `70fa2256` | 03 |
| `913 914.glb` | 18,866,372 | `661687e63236c7368b94cb86ccda4222618b90a7f071eacdff1c372aef450643` | `111c7b86` | 04 |
| `BubbleWash_Tripo_yo_jj_optimized.glb` | 43,780,888 | `61869bb5b5556a54f5cf40a6f32edccd333b967d769dfb8d7b00475675946a7e` | `63a467fd` | 05 + 06 |

**Duplicates check (before saving):** the git blob id of each file was searched in the tree of every branch on GitHub (61 refs): no match, so none
of the eight was already in the repository. The repository's earlier uploads `WebDemo/models/s56tm/tripo911_user_original.glb` (the "911_small",
10,451,688 B) and `machinery_tripo_user_original.glb` (the "Machinery_small", 11,005,412 B) are DIFFERENT files from the `_tiny` versions here.

Evaluation, mobile optimisation and the comparison with the approved Scenes 5 / 6: `Previews/WebDemo/six_scenes/12_eight_models_47f75e22/README.md`.

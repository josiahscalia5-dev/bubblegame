# Tripo image-to-3D of the pink mascot (7 November 2026, about 22:40 UTC, session `398ed88c`): REJECTED

- **The user's order:** one Tripo image-to-3D generation of the approved pink character, evaluated before spending more.
- **Input:** `mascot_rear_ORIGINAL_completed_1024.png`: the rear-view character cut out of the ORIGINAL approved Screen 4 (her
  box x .215-.731, y .696-.868 of the ORIGINAL), the bites the bubbles take out of her lower edge filled with her own fur
  (`mascot_rear_ORIGINAL_cutout_1024.png` is the raw cut-out). Model P2-20260801, `texture_quality=detailed`, `pbr=true`, GLB.
- **Task** `f2eeb0ee-a223-4e1f-9393-b8ba022dd758`: succeeded, **120 credits** (balance 760 -> 640). The download first failed
  because Tripo's download host `openapi-dl.data.tripo3d.com` was not allowed; the user's environment now allows it.
- **Result:** `tripo_f2eeb0ee_pink_mascot_rear_REJECTED.glb` (4,601 vertices, 5,228 triangles, PBR colour + metal/rough maps,
  no normal map; unit cube) and `tripo_preview_REJECTED_mushroom.png`. **It is a MUSHROOM:** a flat pink cap over a white
  stem. A rear view of a dome cut off by the water is ambiguous to image-to-3D. Not used in the game.
- **Recommended next attempt (needs the user's yes: another 120 credits):** the SAME character's full front view from the
  user's girl + laundry artwork (`Design/ReferencePacks/2026-11-07_First_Two_Screens_Girl_Laundry_from_user/11109.jpg`; the
  cut-out is `WebDemo/ui/screens12/mascot_sprite.png`): a complete round body with arms, which image-to-3D reads correctly;
  her back is then the generated model's back. Then the game's own fur (shell fur, `SHELL_FUR` in `tunnel_s4_struct.js`) on it.
- **Keys:** the key is a network secret of the user's `bubblegame` environment (injected by the proxy for
  `openapi.tripo3d.ai`); `tripo` runs with `TRIPO_API_KEY=proxy-injected`. No key is in this repository.

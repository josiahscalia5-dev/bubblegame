# Meshy deliveries

Every model package delivered for Bubble Wash Kingdom, kept as delivered. This folder is outside `Assets/`, so Unity does not import these files. The game uses copies in its model slots.

| Delivery | Used in the Unity project | Used in the browser demo (`WebDemo/`) |
|---|---|---|
| `PinkMascot/` (4 MB and 10 MB ColorSafe GLBs, preview, prompt, README) | Not yet: the Unity scene still has the placeholder mascot. To use it, copy `BubbleWash_Pink_Mascot_Claudia_4MB_ColorSafe.glb` into `Assets/BubbleWash/Models/Mascot/` and rebuild the scene. | A web copy of the 4 MB GLB (`WebDemo/models/mascot.glb`) |
| `WashingRoller/` (Textured, Balanced and UltraLite GLBs, previews, README) | Textured: `Assets/BubbleWash/Models/SpinningBrush/` | A simplified web copy of UltraLite (`WebDemo/models/roller.glb`) |
| `PinkGemstone/` (Small and Tiny GLBs, prompt, notes) | Small: `Assets/BubbleWash/Models/Gem/` | A simplified web copy of Small (`WebDemo/models/gem.glb`) |
| `LostSock/` (Small 3.6 MB and Balanced 9.2 MB GLBs) | Not yet: the Unity scene still has the placeholder socks. To use it, copy `BubbleWash_Lost_Sock_Claudia_Small.glb` into `Assets/BubbleWash/Models/RescueSock/` and rebuild the scene. Its face is on its +Z side, and its material is fully metallic, so it needs a non-metallic material to keep its white and purple. | A simplified web copy of Small (`WebDemo/models/sock.glb`, 13.7k triangles), five socks in the drum; also the panel icon `WebDemo/ui/sock.png` |
| `DuckHelper/` (Balanced 89.6k-triangle and Small 40k-triangle ColorSafe GLBs, preview, instructions) | Not yet: the Unity scene has an empty `RubberDuck` slot ("Duck / golden figure at the portal"). To use it, copy `BubbleWash_Duck_Helper_Claudia_Balanced_ColorSafe.glb` into that slot's folder and rebuild the scene. It has baked vertex colours and no normals or material, and its face is on +Z. | The Balanced GLB unchanged (`WebDemo/models/duck.glb`): the helper on its pink float ahead of the mascot, which leads the way into the washing machine. Its goggles are softened in the shader so they do not draw the eye. |
| `SideMachinery/` (Balanced 136k, Medium 253k and Small 49k-triangle GLBs, previews, README, import prompt) | Not yet. | The Medium GLB unchanged (`WebDemo/models/machinery.glb`): the giant blue-and-gold machinery at the lower left of the slide, standing still (it is one combined mesh). The Balanced copy was tried first; at game size it showed thin gold cracks across the bristles, which the Medium copy mostly closes. |
| `EntranceDecor/` (glowing water tower, blue-and-gold gear wheel, curved golden pipe, crown and curved trim: Balanced and Small GLBs, prompt, checks; see its README) | Not yet. | Web copies of the four Balanced GLBs (`WebDemo/models/tower.glb`, `gear.glb`, `pipe.glb`, `crown.glb`):
  - two water towers on the sides of the castle, their fluid animated in code
  - seven gears at the portal mouth and high on the left, turning
  - two elbow spouts pouring from the towers
  - the crown keystone on the portal arch

  They replace the code-built towers and gears. The Small copies have stray sliver triangles and are not used. |

The castle and washer tunnel GLBs were delivered earlier and live in `Assets/BubbleWash/Models/CastlePortal/` and `Assets/BubbleWash/Models/WasherTunnel/`.

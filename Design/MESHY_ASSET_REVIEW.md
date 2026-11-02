# Meshy asset review: approved Screen 3 against the browser demo (2 November 2026)

This review answers one question: which 3D models are genuinely missing from Screen 3, so that no Meshy credits go on duplicates. It compares the approved `Design/ApprovedScreens/x3_03_Lets_Go_Washer_Entry.png` and the 12-screen board with the recorded demo frames in `Previews/WebDemo/`.

The approved image is small (269 × 538 px, shown at 3×). Shapes smaller than a coin are hard to read, and the notes below say where that applies.

## 1. Already modelled: these only need lighting, placement, scale or materials

| Approved Screen 3 | Meshy model you have | What is left (no new model) |
|---|---|---|
| Castle and portal arch | Castle portal | The approved castle is lavender and gold; the Meshy one renders pink and orange. Colour grading in code. |
| Swirling tunnel inside the portal | Washing-machine tunnel | The approved interior is a pink, blue and white vortex; ours is blue with gold rings. Material and lighting. |
| Pink fluffy mascot | Pink mascot | Fur shader and size are done. Only fine tuning is left. |
| Big fluffy brush on the left, and pink fluffy shapes on the right | Washing roller | The approved near brush is mostly blue with a white and pink fringe, seen end on. Recolour the roller in code. No new brush is needed. |
| Gems | Gemstone | Done. |
| Socks (Screen 4, inside the tunnel) | Lost sock | Done. |

## 2. Built in code: no Meshy model needed

- **The water slide and its uphill and downhill path.** It bends with the 3D path, so a fixed Meshy slide piece would not fit.
- **The water, foam, wake, droplets and splashes.**
- **Water-slide rails.** The gold rails must follow the slide's curves and hills, so they are generated in code. Their look can be made richer in code.
- **Tower waterfalls** and their gold spouts and basins.
- **Iridescent bubbles.**
- **Paw coins**, including the gold discs around the portal mouth. Most of those are coins.
- **Tunnel decorations:** glowing gold ring lights, sparkles, and coins and gems inside the tunnel. The stars and panels are already in the tunnel texture.
- **Simple pipes.** Plain curved brass pipes look fine generated in code.
- **The HUD and panels.**

## 3. Genuinely missing: create these in Meshy, largest first

1. **Gold machinery tower.** A tall brass column with gear-toothed gold collars wrapped around a blue glass tube of flowing water.
   - This is the largest missing element: it frames both sides of the approved screen (top right, and left behind the brush).
   - One model, mirrored and reused at different heights, covers both sides.
   - It replaces the simple code-made tanks and pillars, which look plain next to the Meshy castle.
2. **Gold gear with a blue hub.** One flat, chunky cartoon gear on its own, so the game can spin it.
   - It can be reused many times at different sizes: in the lower corners of the approved screen, beside the slide and in the tunnel.
   - It replaces the code-made gears.
3. **Golden toy figure on the slide.** The small golden character sitting on the slide in front of the portal: big round head, closed eyes, a purple nose or mouth, and a gold base.
   - It is small on screen but sits in the centre, right ahead of the mascot.
   - The same model, smaller, can also stand in for the golden toys around the portal mouth. They are too small in the approved image to tell apart, and some may simply be coins.
   - The Unity project already has an empty slot for it, `RubberDuck` ("Duck / golden figure at the portal").

Not needed for Screen 3 (for later screens only): the yellow rubber duck and the blue water-drop friend from Screen 1, and the dark bubble enemy from Screen 9.

## Tips to avoid wasted credits

- Ask for one object per model, centred, in the same glossy cartoon style as the castle: gold and royal blue, pastel lighting.
- Ask for a small export (about 20–50k triangles), like the gemstone and sock deliveries.
- Keep the gear flat and separate from the tower, so it can turn on its own.
- For the golden figure, ask for its face to point forward (+Z) and its base flat, so it can sit on the slide.

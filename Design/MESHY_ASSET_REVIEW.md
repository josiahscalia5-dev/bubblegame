# Meshy asset review: approved Screen 3 against the browser demo (2 November 2026)

**Update, later on 2 November:** the three models this review first listed as missing (the gold machinery tower, the gold gear and the golden figure) are now built in code in the browser demo. **No new Meshy model is required for Screen 3.** Section 3 below lists the optional upgrades.

This review answers one question: which 3D models are genuinely missing from Screen 3, so that no Meshy credits go on duplicates. It compares the approved `Design/ApprovedScreens/x3_03_Lets_Go_Washer_Entry.png` and the 12-screen board with the recorded demo frames in `Previews/WebDemo/`.

The approved image is small (269 × 538 px, shown at 3×). Shapes smaller than a coin are hard to read, and the notes below say where that applies.

## 1. Already modelled: these only need lighting, placement, scale or materials

| Approved Screen 3 | Meshy model you have | What is left (no new model) |
|---|---|---|
| Castle and portal arch | Castle portal | **Done (colour grade in code).** The castle now renders lavender, white and gold, with its pink crest banner kept. |
| Swirling tunnel inside the portal | Washing-machine tunnel | **Lighter, misting to a bright core (in code).** The approved vortex is still whiter and pinker than ours. |
| Pink fluffy mascot | Pink mascot | Fur shader and size are done. Only fine tuning is left. |
| Big fluffy brush on the left, and pink fluffy shapes on the right | Washing roller | **Done (recoloured in code):** blue tufts toward the hub, a white band and a pink fringe. A 3 m brush turns end-on at the lower left, and a second one shows its pink fringe on the right. No new brush is needed. |
| Gems | Gemstone | Done. |
| Socks (Screen 4, inside the tunnel) | Lost sock | Done. |

## 2. Built in code: no Meshy model needed

- **The water slide and its uphill and downhill path.** It bends with the 3D path, so a fixed Meshy slide piece would not fit.
- **The water, foam, wake, droplets and splashes.**
- **Water-slide rails.** The gold rails must follow the slide's curves and hills, so they are generated in code (see the slide flume below).
- **Tower waterfalls** and their gold spouts and basins.
- **Iridescent bubbles.**
- **Paw coins**, including the gold discs around the portal mouth. Most of those are coins.
- **Tunnel decorations:** glowing rings in gold, pink, cyan and lavender with bulbs, turning gold wall gears, sparkles, and coins and gems inside the tunnel. The stars and panels are already in the tunnel texture.
- **Curved gold pipes**, banded in blue.
- **Washing machinery** (`WebDemo/src/scenery.js`): the huge gold washing wheel on the lower right with pink fluffy trim and glowing bulbs, the blue-and-gold wheel high on the left, the cream-and-gold housing under the left brush, six gold gears with teal and navy hubs at the portal mouth, and a gold machinery tower on each side of the castle (glass tube of rushing water, gear-toothed collars, glass dome, waterfall). Wheels, gears and collars turn.
- **The slide flume**: lavender walls, thick gold rails and chunky gold segments with blue gem studs.
- **The golden helper on its pink float** (`WebDemo/src/helper.js`): closed happy eyes, small purple mouth, pink cheeks, white tuft, waving wings. It leads the mascot into the washing machine.
- **The HUD and panels.**

## 3. Optional Meshy upgrades (only if the code-built versions are not close enough)

Nothing is required. These two could look richer as sculpted models than as shapes built in code:

1. **Golden helper duck on a pink swim ring.** Name it `BubbleWash_Golden_Helper_Duck`. Prompt idea: "small cute golden-yellow duckling toy sitting in a pink and white striped swim ring, big round head, closed happy eyes, small purple beak, pink blush cheeks, white fluffy tuft on top, tiny wings raised, glossy cartoon style, gold and pastel".
   - It is small on screen but in the centre of the approved screen.
   - Ask for its face on +Z, the ring flat underneath, and about 20–50k triangles. A static mesh is enough, because the game bobs and rocks it.
2. **Ornate gold machinery tower.** Name it `BubbleWash_Gold_Machinery_Tower`. Prompt idea: "tall ornate cartoon gold machinery tower, blue glass water tube in the middle, gear-toothed gold collars, glass dome cap with gold finial, glossy, washing-machine fairy-tale style".
   - The towers are mostly cut off by the screen edges at Tap to Start, so this matters less.

Not needed for Screen 3 (for later screens only): the yellow rubber duck and the blue water-drop friend from Screen 1, and the dark bubble enemy from Screen 9.

## Tips to avoid wasted credits

- Ask for one object per model, centred, in the same glossy cartoon style as the castle: gold and royal blue, pastel lighting.
- Ask for a small export (about 20–50k triangles), like the gemstone and sock deliveries.
- For the golden helper, ask for its face to point forward (+Z) and its base flat, so it can sit on the slide.

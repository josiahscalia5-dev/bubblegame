# A2 Inner Washing-Machine Tunnel (Tripo3D), as delivered on 3 November 2026

- `Bubble_Wash_A2_Tunnel_Claude_2K.glb` (3.8 MB, 2048 px textures) and `Bubble_Wash_A2_Tunnel_Claude_1K.glb` (1.7 MB, 1024 px textures).
  - Both use the same mesh: 18,169 triangles, one material with colour, metal/roughness and normal maps.
- **Not used in the game.** You withdrew the integration request before any change was made.

What the inspection found:

- **Shape:** it is a forced-perspective model. The rings shrink from a half-width of about 0.45 at the front to 0.06 at the back, and close to a point. The model is only 0.77 units deep, and its rear is solid.
- **Front view:** from the front it looks like a long tunnel, very like the approved Screen 4 tunnel view.
- **Not traversable as delivered.** Using it as a real tunnel would mean un-tapering it (scaling each ring back to full size) and bending copies along the ride's path, the way `WebDemo/src/liner.js` did for the earlier Meshy liner.
- **Ring profile per depth slice:** recorded in the chat history of the 3 November second session.
- **For a re-generation:** ask for a straight tube of equal-size rings, open at both ends, with real depth.

Drop the final Meshy pink mascot GLB here (one file), then Bubble Wash > 1. Build Level 1 Scene.

It replaces PLACEHOLDER_PinkMascot automatically: fitted to 1.04 m arms-to-arms (the size that
matches Screens 3 and 4), centred, facing forward (+Z = into the washing machine).
If it faces the wrong way or needs a different size, edit Assets/BubbleWash/Config/MeshyAssetSlots.asset
(Mascot: rotationOffset / targetSize). For the swimming animation, put the names of the arm, foot and
eye nodes in that slot (armLeft, armRight, footLeft, footRight, eyes); without them the body still
floats, bobs, leans, flips, spins and squashes.

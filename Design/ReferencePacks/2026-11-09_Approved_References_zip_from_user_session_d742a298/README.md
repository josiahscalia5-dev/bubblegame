# The user's approved references (zip), 9 November 2026 ~23:33 UTC, session d742a298

Received as `Bubble_Wash_Claude_Approved_References.zip` with the user's directive "STRICT PRIORITY: FIX THE OPENING SEQUENCE AND CONNECT IT TO MY
EXISTING SCREEN 6", followed (10 November ~00:00 UTC) by "MANDATORY CORRECTIONS TO THE WASHER SPIN AND SCREEN 6 TRANSITION". Exact bytes kept
(`SHA256SUMS.txt`). The images are reference artwork, not models.

| File | What |
|---|---|
| `BW_01_Approved_Six_Screens.jpg` (1296 x 1536) | the six approved portrait screens on one sheet |
| `BW_02_Approved_Opening_Story.jpg` (1024 x 1536) | the opening story: 1 hideout, 2 she loads, 3 he goes in, 4 the wash begins, 5 into the tunnel, 6 swim / collect / avoid |
| `BW_03_Approved_Washer_Closeup.jpg` (1536 x 1043) | Screen 4 "The wash begins!" close-up: the pink-and-gold washer, gold porthole door, glowing violet drum, him in cobalt / turquoise water with white splash |
| `READ_ME_FOR_CLAUDE.txt` | the user's note: match the girl, basket, washer and wash spin; connect the opening to the EXISTING playable Screen 6; do not rebuild Screen 6 |

## The user's requirements for the washer spin and the hand-over (both messages, in short)
1. His face: consistent eye size, spacing and orientation; features fixed to his head; the whole body tumbles (never the face alone); smooth,
   believable acceleration and deceleration; surprised, excited, adorable; no clipping, distortion or abrupt changes.
2. Real dimensional water in the drum: cobalt and turquoise, curved waves that rotate and surge round him, white splash and small bubbles, moving
   with the drum's spin, violet-blue reflections of the lit drum, touching him and the towels. Never a flat sheet, a band across his eyes, or an
   opaque layer over his face.
3. The spin as the approved screen: pink-and-gold washer, round metal door, glowing violet drum, rich blue water, his scale, cinematic.
4. MOST IMPORTANT: after the spin the swirling water pulls him into a magical water passage; the camera follows; he emerges DIRECTLY in the
   EXISTING playable Screen 6 (never a rebuilt or second tunnel), in the right place and orientation, ready to control.
5. Proof with real frames (in the washer before the spin, spinning with the water, the passage opening, in the passage, Screen 6 appearing, the
   player controlling him) and one continuous recording; build and gameplay checks; commit and push.

Implementation: the switch `open9` (`WebDemo/src/opening_six2_open9.js`); evidence `Previews/WebDemo/six_scenes/19_open9_washer_to_screen6_d742a298/`.

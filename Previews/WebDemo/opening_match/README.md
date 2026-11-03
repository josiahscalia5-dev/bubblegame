# Screen 3 opening: test version evidence (3 November 2026)

Everything here was rendered from the running browser game (headless Chromium, software WebGL) at the approved screens' 1:2 portrait size. None of it is a mockup. The write-up is in [`Design/SCREEN3_OPENING_MATCH.md`](../../../Design/SCREEN3_OPENING_MATCH.md).

| File | What it shows |
|---|---|
| `01_start_test_vs_approved.png` | The approved Screen 3 beside the test version's Tap to Start frame, full height. |
| `02_start_approved_original_test.png` | Approved, original (`b75f88c`) and test version, same moment. |
| `03_closeups.png` | The same crops of all three: water and foam around the mascot, the washer-door entrance, the left brush, and the right side. |
| `04_tunnel_unchanged.png` | Inside the tunnel at 5.5, 6.5, 7.5 and 8.5 s: original, test, and the pixels that differ (pink).<br>Same seed, same inputs, the page's CSS animations frozen. Only the mascot's fur differs; with that part off, 0 pixels differ. |
| `05_gameplay_moments.png` | The run from Tap to Start into the tunnel: original (top) and test (bottom). |
| `07_soap_suds_closeup.png` | Your approved close-up of the mascot beside the test version: at Tap to Start, running, and changing lane, with the original for reference. |
| `06_phone_390x844.png` | Tap to Start on a 390 × 844 phone screen, original and test. The HUD is in the same place. |
| `opening_test_gameplay.mp4` | 13 s of real gameplay of the test version.<br>Real pointer swipes and taps (drawn by the `?touches` overlay), into the tunnel, socks and coins collected, loop back to the slide. |
| `opening_test_journey.png` | Twelve frames from that recording, Tap to Start to inside the tunnel. |

Re-create with the tools in `WebDemo/tools/`: `start_frame.cjs`, `seeded_shots.cjs`, `pxdiff.py`, `trace.cjs` with `trace_diff.py`, `phone_check.cjs`, `record.cjs` and `opening_evidence.py` (see `WebDemo/README.md`).

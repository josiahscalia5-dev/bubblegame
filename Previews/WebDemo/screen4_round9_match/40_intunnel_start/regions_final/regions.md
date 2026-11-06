Region comparison against the ORIGINAL approved Screen 4 (tools/screen4/region_compare.py). LPIPS: lower is closer; SSIM: higher is closer; dE: mean-colour CIEDE2000; hist: a*b* histogram Bhattacharyya distance (lower is closer); shares in % (game / original).

| region | bt_previous LPIPS / SSIM / dE / hist | intunnel_start LPIPS / SSIM / dE / hist | saturated blue % | white % | pink % | lavender % |
|---|---|---|---|---|---|---|
| 1 tunnel rings | 0.385 / 0.335 / 0.7 / 0.244 | 0.372 / 0.367 / 0.6 / 0.245 | 32.2 / 32.4 (33.5) | 4.7 / 4.9 (6.2) | 4.6 / 4.7 (3.2) | 19.6 / 19.0 (13.8) |
| 1 far centre | 0.465 / 0.358 / 4.8 / 0.315 | 0.445 / 0.359 / 4.1 / 0.31 | 5.5 / 4.9 (7.5) | 22.0 / 22.9 (19.5) | 1.4 / 1.4 (1.1) | 14.8 / 14.3 (9.8) |
| 2 foreground water | 0.652 / 0.368 / 2.6 / 0.396 | 0.656 / 0.375 / 2.1 / 0.381 | 17.0 / 18.7 (24.6) | 15.2 / 15.1 (16.8) | 5.9 / 5.8 (4.1) | 0.6 / 0.6 (6.5) |
| 3 character + contact | 0.592 / 0.144 / 9.0 / 0.628 | 0.593 / 0.131 / 8.9 / 0.628 | 11.2 / 11.3 (4.4) | 11.0 / 11.2 (18.1) | 30.0 / 30.2 (36.0) | 0.3 / 0.3 (6.5) |
| 4 brushes | 0.451 / 0.166 / 1.9 / 0.416 | 0.455 / 0.167 / 1.9 / 0.415 | 16.3 / 16.2 (15.2) | 11.7 / 12.2 (10.7) | 19.1 / 19.2 (14.5) | 16.4 / 16.5 (17.4) |
| 5 coins gem sock | 0.567 / 0.293 / 6.3 / 0.417 | 0.557 / 0.308 / 5.9 / 0.417 | 10.6 / 10.4 (9.8) | 16.2 / 16.4 (18.8) | 0.9 / 0.9 (1.2) | 6.9 / 6.6 (7.7) |
| 6 bubbles + upper light | 0.46 / 0.342 / 3.8 / 0.332 | 0.442 / 0.387 / 3.7 / 0.333 | 23.6 / 23.6 (23.8) | 4.1 / 4.2 (7.7) | 2.3 / 2.4 (3.2) | 21.1 / 20.8 (18.1) |
| 6 colour balance (whole) | 0.288 / 0.164 / 2.0 / 0.329 | 0.281 / 0.184 / 2.0 / 0.327 | 23.3 / 23.5 (24.0) | 11.4 / 11.4 (12.5) | 9.5 / 9.6 (9.5) | 8.9 / 8.7 (10.0) |
| 7 composition (whole) | 0.253 / 0.192 / 1.7 / 0.327 | 0.259 / 0.206 / 1.8 / 0.326 | 23.0 / 23.6 (27.3) | 10.5 / 10.7 (11.2) | 8.4 / 8.5 (8.6) | 8.2 / 8.1 (9.0) |

bt_previous: her silhouette IoU with the original's 0.697; game {'top': np.float64(0.698), 'base': np.float64(0.855), 'width': np.float64(0.476), 'area': np.float64(3.85)}; original {'top': np.float64(0.7), 'base': np.float64(0.859), 'width': np.float64(0.458), 'area': np.float64(4.4)}

intunnel_start: her silhouette IoU with the original's 0.698; game {'top': np.float64(0.693), 'base': np.float64(0.852), 'width': np.float64(0.475), 'area': np.float64(3.88)}; original {'top': np.float64(0.7), 'base': np.float64(0.859), 'width': np.float64(0.458), 'area': np.float64(4.4)}

Ranked by LPIPS (the largest perceptual differences first), per frame:
- bt_previous: 2 foreground water 0.652, 3 character + contact 0.592, 5 coins gem sock 0.567, 1 far centre 0.465, 6 bubbles + upper light 0.46, 4 brushes 0.451, 1 tunnel rings 0.385
- intunnel_start: 2 foreground water 0.656, 3 character + contact 0.593, 5 coins gem sock 0.557, 4 brushes 0.455, 1 far centre 0.445, 6 bubbles + upper light 0.442, 1 tunnel rings 0.372

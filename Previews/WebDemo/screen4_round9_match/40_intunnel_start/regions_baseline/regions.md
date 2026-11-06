Region comparison against the ORIGINAL approved Screen 4 (tools/screen4/region_compare.py). LPIPS: lower is closer; SSIM: higher is closer; dE: mean-colour CIEDE2000; hist: a*b* histogram Bhattacharyya distance (lower is closer); shares in % (game / original).

| region | step8 LPIPS / SSIM / dE / hist | bt LPIPS / SSIM / dE / hist | saturated blue % | white % | pink % | lavender % |
|---|---|---|---|---|---|---|
| 1 tunnel rings | 0.385 / 0.335 / 0.7 / 0.244 | 0.385 / 0.335 / 0.7 / 0.244 | 32.2 / 32.2 (33.5) | 4.7 / 4.7 (6.2) | 4.6 / 4.6 (3.2) | 19.6 / 19.6 (13.8) |
| 1 far centre | 0.462 / 0.36 / 4.8 / 0.314 | 0.465 / 0.358 / 4.8 / 0.315 | 5.2 / 5.5 (7.5) | 22.0 / 22.0 (19.5) | 1.4 / 1.4 (1.1) | 14.6 / 14.8 (9.8) |
| 2 foreground water | 0.652 / 0.368 / 2.6 / 0.396 | 0.652 / 0.368 / 2.6 / 0.396 | 17.0 / 17.0 (24.6) | 15.2 / 15.2 (16.8) | 5.9 / 5.9 (4.1) | 0.6 / 0.6 (6.5) |
| 3 character + contact | 0.592 / 0.144 / 9.0 / 0.627 | 0.592 / 0.144 / 9.0 / 0.628 | 11.0 / 11.2 (4.4) | 11.0 / 11.0 (18.1) | 30.0 / 30.0 (36.0) | 0.4 / 0.3 (6.5) |
| 4 brushes | 0.451 / 0.166 / 1.9 / 0.416 | 0.451 / 0.166 / 1.9 / 0.416 | 16.2 / 16.3 (15.2) | 11.7 / 11.7 (10.7) | 19.1 / 19.1 (14.5) | 16.4 / 16.4 (17.4) |
| 5 coins gem sock | 0.57 / 0.295 / 6.8 / 0.423 | 0.567 / 0.293 / 6.3 / 0.417 | 7.6 / 10.6 (9.8) | 16.0 / 16.2 (18.8) | 1.7 / 0.9 (1.2) | 7.3 / 6.9 (7.7) |
| 6 bubbles + upper light | 0.46 / 0.342 / 3.8 / 0.332 | 0.46 / 0.342 / 3.8 / 0.332 | 23.6 / 23.6 (23.8) | 4.1 / 4.1 (7.7) | 2.3 / 2.3 (3.2) | 21.1 / 21.1 (18.1) |
| 6 colour balance (whole) | 0.292 / 0.166 / 1.8 / 0.331 | 0.288 / 0.164 / 2.0 / 0.329 | 22.8 / 23.3 (24.0) | 11.4 / 11.4 (12.5) | 9.7 / 9.5 (9.5) | 8.9 / 8.9 (10.0) |
| 7 composition (whole) | 0.254 / 0.194 / 1.6 / 0.328 | 0.253 / 0.192 / 1.7 / 0.327 | 22.6 / 23.0 (27.3) | 10.5 / 10.5 (11.2) | 8.5 / 8.4 (8.6) | 8.2 / 8.2 (9.0) |

step8: her silhouette IoU with the original's 0.697; game {'top': np.float64(0.698), 'base': np.float64(0.855), 'width': np.float64(0.476), 'area': np.float64(3.85)}; original {'top': np.float64(0.7), 'base': np.float64(0.859), 'width': np.float64(0.458), 'area': np.float64(4.4)}

bt: her silhouette IoU with the original's 0.697; game {'top': np.float64(0.698), 'base': np.float64(0.855), 'width': np.float64(0.476), 'area': np.float64(3.85)}; original {'top': np.float64(0.7), 'base': np.float64(0.859), 'width': np.float64(0.458), 'area': np.float64(4.4)}

Ranked by LPIPS (the largest perceptual differences first), per frame:
- step8: 2 foreground water 0.652, 3 character + contact 0.592, 5 coins gem sock 0.57, 1 far centre 0.462, 6 bubbles + upper light 0.46, 4 brushes 0.451, 1 tunnel rings 0.385
- bt: 2 foreground water 0.652, 3 character + contact 0.592, 5 coins gem sock 0.567, 1 far centre 0.465, 6 bubbles + upper light 0.46, 4 brushes 0.451, 1 tunnel rings 0.385

Region comparison against the ORIGINAL approved Screen 4 (tools/screen4/region_compare.py). LPIPS: lower is closer; SSIM: higher is closer; dE: mean-colour CIEDE2000; hist: a*b* histogram Bhattacharyya distance (lower is closer); shares in % (game / original).

| region | previous LPIPS / SSIM / dE / hist | W2 LPIPS / SSIM / dE / hist | W2b LPIPS / SSIM / dE / hist | saturated blue % | white % | pink % | lavender % |
|---|---|---|---|---|---|---|---|
| 1 tunnel rings | 0.372 / 0.367 / 0.6 / 0.245 | 0.372 / 0.367 / 0.6 / 0.245 | 0.372 / 0.367 / 0.6 / 0.245 | 32.4 / 32.4 / 32.4 (33.5) | 4.9 / 4.9 / 4.9 (6.2) | 4.7 / 4.7 / 4.7 (3.2) | 19.0 / 19.0 / 19.0 (13.8) |
| 1 far centre | 0.445 / 0.359 / 4.1 / 0.31 | 0.445 / 0.359 / 4.1 / 0.31 | 0.445 / 0.359 / 4.1 / 0.31 | 4.9 / 4.9 / 4.9 (7.5) | 22.9 / 22.8 / 22.9 (19.5) | 1.4 / 1.4 / 1.4 (1.1) | 14.3 / 14.3 / 14.3 (9.8) |
| 2 foreground water | 0.656 / 0.375 / 2.1 / 0.381 | 0.708 / 0.391 / 4.5 / 0.416 | 0.699 / 0.402 / 0.7 / 0.405 | 18.7 / 47.8 / 29.2 (24.6) | 15.1 / 11.0 / 17.4 (16.8) | 5.8 / 5.8 / 5.8 (4.1) | 0.6 / 1.9 / 0.7 (6.5) |
| 3 character + contact | 0.593 / 0.131 / 8.9 / 0.628 | 0.61 / 0.138 / 9.3 / 0.653 | 0.601 / 0.135 / 8.7 / 0.634 | 11.3 / 27.9 / 17.2 (4.4) | 11.2 / 8.5 / 12.4 (18.1) | 30.2 / 30.3 / 30.2 (36.0) | 0.3 / 0.9 / 0.4 (6.5) |
| 4 brushes | 0.455 / 0.167 / 1.9 / 0.415 | 0.455 / 0.167 / 1.9 / 0.415 | 0.455 / 0.167 / 1.9 / 0.415 | 16.2 / 16.2 / 16.2 (15.2) | 12.2 / 12.2 / 12.2 (10.7) | 19.2 / 19.2 / 19.2 (14.5) | 16.5 / 16.5 / 16.5 (17.4) |
| 5 coins gem sock | 0.557 / 0.308 / 5.9 / 0.417 | 0.557 / 0.307 / 6.2 / 0.415 | 0.556 / 0.308 / 6.0 / 0.417 | 10.4 / 11.3 / 10.7 (9.8) | 16.4 / 15.9 / 16.2 (18.8) | 0.9 / 0.9 / 0.9 (1.2) | 6.6 / 6.7 / 6.7 (7.7) |
| 6 bubbles + upper light | 0.442 / 0.387 / 3.7 / 0.333 | 0.443 / 0.388 / 3.7 / 0.333 | 0.442 / 0.387 / 3.7 / 0.333 | 23.6 / 23.6 / 23.6 (23.8) | 4.2 / 4.2 / 4.2 (7.7) | 2.4 / 2.4 / 2.4 (3.2) | 20.8 / 20.8 / 20.8 (18.1) |
| 6 colour balance (whole) | 0.281 / 0.184 / 2.0 / 0.327 | 0.278 / 0.185 / 2.8 / 0.33 | 0.269 / 0.183 / 2.1 / 0.331 | 23.5 / 28.6 / 25.3 (24.0) | 11.4 / 10.6 / 11.8 (12.5) | 9.6 / 9.6 / 9.6 (9.5) | 8.7 / 8.9 / 8.7 (10.0) |
| 7 composition (whole) | 0.259 / 0.206 / 1.8 / 0.326 | 0.255 / 0.206 / 2.8 / 0.329 | 0.251 / 0.205 / 1.9 / 0.33 | 23.6 / 28.1 / 25.0 (27.3) | 10.7 / 10.0 / 11.0 (11.2) | 8.5 / 8.5 / 8.5 (8.6) | 8.1 / 8.3 / 8.1 (9.0) |

previous: her silhouette IoU with the original's 0.698; game {'top': np.float64(0.693), 'base': np.float64(0.852), 'width': np.float64(0.475), 'area': np.float64(3.88)}; original {'top': np.float64(0.7), 'base': np.float64(0.859), 'width': np.float64(0.458), 'area': np.float64(4.4)}

W2: her silhouette IoU with the original's 0.701; game {'top': np.float64(0.693), 'base': np.float64(0.852), 'width': np.float64(0.475), 'area': np.float64(3.89)}; original {'top': np.float64(0.7), 'base': np.float64(0.859), 'width': np.float64(0.458), 'area': np.float64(4.4)}

W2b: her silhouette IoU with the original's 0.698; game {'top': np.float64(0.693), 'base': np.float64(0.852), 'width': np.float64(0.475), 'area': np.float64(3.88)}; original {'top': np.float64(0.7), 'base': np.float64(0.859), 'width': np.float64(0.458), 'area': np.float64(4.4)}

Ranked by LPIPS (the largest perceptual differences first), per frame:
- previous: 2 foreground water 0.656, 3 character + contact 0.593, 5 coins gem sock 0.557, 4 brushes 0.455, 1 far centre 0.445, 6 bubbles + upper light 0.442, 1 tunnel rings 0.372
- W2: 2 foreground water 0.708, 3 character + contact 0.61, 5 coins gem sock 0.557, 4 brushes 0.455, 1 far centre 0.445, 6 bubbles + upper light 0.443, 1 tunnel rings 0.372
- W2b: 2 foreground water 0.699, 3 character + contact 0.601, 5 coins gem sock 0.556, 4 brushes 0.455, 1 far centre 0.445, 6 bubbles + upper light 0.442, 1 tunnel rings 0.372

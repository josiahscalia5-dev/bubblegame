Region comparison against the ORIGINAL approved Screen 4 (tools/screen4/region_compare.py). LPIPS: lower is closer; SSIM: higher is closer; dE: mean-colour CIEDE2000; hist: a*b* histogram Bhattacharyya distance (lower is closer); shares in % (game / original).

| region | accepted LPIPS / SSIM / dE / hist | R3c LPIPS / SSIM / dE / hist | R4 LPIPS / SSIM / dE / hist | R4_T1 LPIPS / SSIM / dE / hist | R3c_T1 LPIPS / SSIM / dE / hist | saturated blue % | white % | pink % | lavender % |
|---|---|---|---|---|---|---|---|---|---|
| 1 tunnel rings | 0.372 / 0.367 / 0.6 / 0.245 | 0.372 / 0.367 / 0.6 / 0.245 | 0.372 / 0.367 / 0.6 / 0.245 | 0.595 / 0.2 / 4.4 / 0.443 | 0.595 / 0.2 / 4.4 / 0.443 | 32.4 / 32.4 / 32.4 / 38.8 / 38.8 (33.5) | 4.9 / 4.9 / 4.9 / 10.0 / 10.0 (6.2) | 4.7 / 4.7 / 4.7 / 9.9 / 9.9 (3.2) | 19.0 / 19.0 / 19.0 / 6.1 / 6.1 (13.8) |
| 1 far centre | 0.445 / 0.359 / 4.1 / 0.31 | 0.445 / 0.359 / 4.1 / 0.31 | 0.445 / 0.359 / 4.1 / 0.31 | 0.714 / 0.315 / 6.1 / 0.466 | 0.714 / 0.315 / 6.1 / 0.466 | 4.9 / 4.9 / 4.9 / 0.1 / 0.1 (7.5) | 22.9 / 22.9 / 22.9 / 45.0 / 45.0 (19.5) | 1.4 / 1.4 / 1.4 / 0.0 / 0.0 (1.1) | 14.3 / 14.3 / 14.3 / 6.0 / 6.0 (9.8) |
| 2 foreground water | 0.656 / 0.375 / 2.1 / 0.381 | 0.576 / 0.397 / 3.2 / 0.265 | 0.556 / 0.371 / 3.4 / 0.27 | 0.644 / 0.387 / 9.7 / 0.332 | 0.652 / 0.389 / 9.8 / 0.324 | 18.7 / 15.2 / 16.2 / 9.3 / 10.1 (24.6) | 15.1 / 17.8 / 20.0 / 29.1 / 28.2 (16.8) | 5.8 / 5.5 / 5.5 / 11.3 / 11.4 (4.1) | 0.6 / 6.0 / 4.6 / 6.2 / 7.8 (6.5) |
| 3 character + contact | 0.593 / 0.131 / 8.9 / 0.628 | 0.555 / 0.129 / 8.0 / 0.565 | 0.547 / 0.106 / 8.6 / 0.578 | 0.592 / 0.15 / 8.7 / 0.581 | 0.605 / 0.154 / 8.1 / 0.574 | 11.3 / 10.5 / 10.9 / 9.0 / 9.1 (4.4) | 11.2 / 13.4 / 14.5 / 14.3 / 13.8 (18.1) | 30.2 / 27.8 / 27.7 / 27.4 / 27.5 (36.0) | 0.3 / 7.8 / 6.0 / 7.1 / 9.0 (6.5) |
| 4 brushes | 0.455 / 0.167 / 1.9 / 0.415 | 0.455 / 0.167 / 1.9 / 0.415 | 0.455 / 0.167 / 1.9 / 0.415 | 0.557 / 0.135 / 10.7 / 0.533 | 0.557 / 0.135 / 10.7 / 0.533 | 16.2 / 16.2 / 16.2 / 34.9 / 34.9 (15.2) | 12.2 / 12.2 / 12.2 / 7.3 / 7.3 (10.7) | 19.2 / 19.2 / 19.2 / 13.5 / 13.5 (14.5) | 16.5 / 16.5 / 16.5 / 5.7 / 5.7 (17.4) |
| 5 coins gem sock | 0.557 / 0.308 / 5.9 / 0.417 | 0.558 / 0.311 / 6.3 / 0.411 | 0.558 / 0.31 / 6.3 / 0.411 | 0.791 / 0.262 / 19.7 / 0.548 | 0.791 / 0.262 / 19.7 / 0.548 | 10.4 / 10.8 / 10.8 / 12.0 / 12.0 (9.8) | 16.4 / 16.5 / 16.5 / 22.4 / 22.4 (18.8) | 0.9 / 0.9 / 0.9 / 17.8 / 17.8 (1.2) | 6.6 / 6.9 / 6.9 / 6.5 / 6.5 (7.7) |
| 6 bubbles + upper light | 0.442 / 0.387 / 3.7 / 0.333 | 0.442 / 0.387 / 3.7 / 0.333 | 0.442 / 0.387 / 3.7 / 0.333 | 0.558 / 0.284 / 12.3 / 0.487 | 0.558 / 0.284 / 12.3 / 0.487 | 23.6 / 23.6 / 23.6 / 50.9 / 50.9 (23.8) | 4.2 / 4.2 / 4.2 / 4.4 / 4.4 (7.7) | 2.4 / 2.4 / 2.4 / 2.7 / 2.7 (3.2) | 20.8 / 20.8 / 20.8 / 6.0 / 6.0 (18.1) |
| 6 colour balance (whole) | 0.281 / 0.184 / 2.0 / 0.327 | 0.263 / 0.197 / 1.7 / 0.318 | 0.261 / 0.193 / 1.8 / 0.321 | 0.438 / 0.079 / 4.6 / 0.382 | 0.439 / 0.077 / 4.6 / 0.378 | 23.5 / 22.9 / 23.1 / 26.8 / 26.9 (24.0) | 11.4 / 12.1 / 12.4 / 16.3 / 16.1 (12.5) | 9.6 / 9.2 / 9.2 / 12.4 / 12.4 (9.5) | 8.7 / 10.2 / 9.8 / 5.1 / 5.4 (10.0) |
| 7 composition (whole) | 0.259 / 0.206 / 1.8 / 0.326 | 0.247 / 0.221 / 1.6 / 0.317 | 0.243 / 0.219 / 1.6 / 0.319 | 0.386 / 0.108 / 4.6 / 0.349 | 0.385 / 0.106 / 4.5 / 0.345 | 23.6 / 23.2 / 23.4 / 29.9 / 30.1 (27.3) | 10.7 / 11.2 / 11.5 / 14.9 / 14.8 (11.2) | 8.5 / 8.2 / 8.2 / 10.8 / 10.8 (8.6) | 8.1 / 9.3 / 9.0 / 4.5 / 4.8 (9.0) |

accepted: her silhouette IoU with the original's 0.698; game {'top': np.float64(0.693), 'base': np.float64(0.852), 'width': np.float64(0.475), 'area': np.float64(3.88)}; original {'top': np.float64(0.7), 'base': np.float64(0.859), 'width': np.float64(0.458), 'area': np.float64(4.4)}

R3c: her silhouette IoU with the original's 0.659; game {'top': np.float64(0.693), 'base': np.float64(0.844), 'width': np.float64(0.475), 'area': np.float64(3.54)}; original {'top': np.float64(0.7), 'base': np.float64(0.859), 'width': np.float64(0.458), 'area': np.float64(4.4)}

R4: her silhouette IoU with the original's 0.658; game {'top': np.float64(0.693), 'base': np.float64(0.844), 'width': np.float64(0.475), 'area': np.float64(3.53)}; original {'top': np.float64(0.7), 'base': np.float64(0.859), 'width': np.float64(0.458), 'area': np.float64(4.4)}

R4_T1: her silhouette IoU with the original's 0.561; game {'top': np.float64(0.722), 'base': np.float64(0.867), 'width': np.float64(0.476), 'area': np.float64(3.14)}; original {'top': np.float64(0.7), 'base': np.float64(0.859), 'width': np.float64(0.458), 'area': np.float64(4.4)}

R3c_T1: her silhouette IoU with the original's 0.561; game {'top': np.float64(0.722), 'base': np.float64(0.867), 'width': np.float64(0.476), 'area': np.float64(3.15)}; original {'top': np.float64(0.7), 'base': np.float64(0.859), 'width': np.float64(0.458), 'area': np.float64(4.4)}

Ranked by LPIPS (the largest perceptual differences first), per frame:
- accepted: 2 foreground water 0.656, 3 character + contact 0.593, 5 coins gem sock 0.557, 4 brushes 0.455, 1 far centre 0.445, 6 bubbles + upper light 0.442, 1 tunnel rings 0.372
- R3c: 2 foreground water 0.576, 5 coins gem sock 0.558, 3 character + contact 0.555, 4 brushes 0.455, 1 far centre 0.445, 6 bubbles + upper light 0.442, 1 tunnel rings 0.372
- R4: 5 coins gem sock 0.558, 2 foreground water 0.556, 3 character + contact 0.547, 4 brushes 0.455, 1 far centre 0.445, 6 bubbles + upper light 0.442, 1 tunnel rings 0.372
- R4_T1: 5 coins gem sock 0.791, 1 far centre 0.714, 2 foreground water 0.644, 1 tunnel rings 0.595, 3 character + contact 0.592, 6 bubbles + upper light 0.558, 4 brushes 0.557
- R3c_T1: 5 coins gem sock 0.791, 1 far centre 0.714, 2 foreground water 0.652, 3 character + contact 0.605, 1 tunnel rings 0.595, 6 bubbles + upper light 0.558, 4 brushes 0.557

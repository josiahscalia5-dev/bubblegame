Region comparison against the ORIGINAL approved Screen 4 (tools/screen4/region_compare.py). LPIPS: lower is closer; SSIM: higher is closer; dE: mean-colour CIEDE2000; hist: a*b* histogram Bhattacharyya distance (lower is closer); shares in % (game / original).

| region | accepted LPIPS / SSIM / dE / hist | R2 LPIPS / SSIM / dE / hist | R3 LPIPS / SSIM / dE / hist | saturated blue % | white % | pink % | lavender % |
|---|---|---|---|---|---|---|---|
| 1 tunnel rings | 0.372 / 0.367 / 0.6 / 0.245 | 0.372 / 0.367 / 0.6 / 0.245 | 0.372 / 0.367 / 0.6 / 0.245 | 32.4 / 32.4 / 32.4 (33.5) | 4.9 / 4.9 / 4.9 (6.2) | 4.7 / 4.7 / 4.7 (3.2) | 19.0 / 19.0 / 19.0 (13.8) |
| 1 far centre | 0.445 / 0.359 / 4.1 / 0.31 | 0.445 / 0.359 / 4.1 / 0.31 | 0.445 / 0.359 / 4.1 / 0.31 | 4.9 / 4.9 / 4.9 (7.5) | 22.9 / 22.8 / 22.8 (19.5) | 1.4 / 1.4 / 1.4 (1.1) | 14.3 / 14.3 / 14.3 (9.8) |
| 2 foreground water | 0.656 / 0.375 / 2.1 / 0.381 | 0.589 / 0.394 / 4.3 / 0.286 | 0.571 / 0.387 / 3.3 / 0.268 | 18.7 / 12.2 / 15.4 (24.6) | 15.1 / 19.6 / 18.6 (16.8) | 5.8 / 5.5 / 5.5 (4.1) | 0.6 / 6.0 / 5.8 (6.5) |
| 3 character + contact | 0.593 / 0.131 / 8.9 / 0.628 | 0.568 / 0.13 / 8.2 / 0.57 | 0.557 / 0.126 / 7.9 / 0.567 | 11.3 / 9.5 / 10.0 (4.4) | 11.2 / 14.6 / 13.2 (18.1) | 30.2 / 27.7 / 27.7 (36.0) | 0.3 / 7.9 / 8.1 (6.5) |
| 4 brushes | 0.455 / 0.167 / 1.9 / 0.415 | 0.455 / 0.167 / 1.9 / 0.415 | 0.455 / 0.167 / 1.9 / 0.415 | 16.2 / 16.2 / 16.2 (15.2) | 12.2 / 12.2 / 12.2 (10.7) | 19.2 / 19.2 / 19.2 (14.5) | 16.5 / 16.5 / 16.5 (17.4) |
| 5 coins gem sock | 0.557 / 0.308 / 5.9 / 0.417 | 0.559 / 0.31 / 6.2 / 0.412 | 0.558 / 0.31 / 6.3 / 0.411 | 10.4 / 10.5 / 10.8 (9.8) | 16.4 / 16.6 / 16.4 (18.8) | 0.9 / 0.9 / 0.9 (1.2) | 6.6 / 6.8 / 6.9 (7.7) |
| 6 bubbles + upper light | 0.442 / 0.387 / 3.7 / 0.333 | 0.442 / 0.387 / 3.7 / 0.333 | 0.442 / 0.387 / 3.7 / 0.333 | 23.6 / 23.6 / 23.6 (23.8) | 4.2 / 4.2 / 4.2 (7.7) | 2.4 / 2.4 / 2.4 (3.2) | 20.8 / 20.8 / 20.8 (18.1) |
| 6 colour balance (whole) | 0.281 / 0.184 / 2.0 / 0.327 | 0.265 / 0.196 / 1.6 / 0.319 | 0.266 / 0.195 / 1.7 / 0.319 | 23.5 / 22.4 / 22.9 (24.0) | 11.4 / 12.5 / 12.2 (12.5) | 9.6 / 9.2 / 9.2 (9.5) | 8.7 / 10.2 / 10.1 (10.0) |
| 7 composition (whole) | 0.259 / 0.206 / 1.8 / 0.326 | 0.247 / 0.221 / 1.4 / 0.318 | 0.248 / 0.219 / 1.6 / 0.318 | 23.6 / 22.7 / 23.3 (27.3) | 10.7 / 11.5 / 11.3 (11.2) | 8.5 / 8.2 / 8.2 (8.6) | 8.1 / 9.3 / 9.3 (9.0) |

accepted: her silhouette IoU with the original's 0.698; game {'top': np.float64(0.693), 'base': np.float64(0.852), 'width': np.float64(0.475), 'area': np.float64(3.88)}; original {'top': np.float64(0.7), 'base': np.float64(0.859), 'width': np.float64(0.458), 'area': np.float64(4.4)}

R2: her silhouette IoU with the original's 0.659; game {'top': np.float64(0.693), 'base': np.float64(0.844), 'width': np.float64(0.475), 'area': np.float64(3.54)}; original {'top': np.float64(0.7), 'base': np.float64(0.859), 'width': np.float64(0.458), 'area': np.float64(4.4)}

R3: her silhouette IoU with the original's 0.658; game {'top': np.float64(0.693), 'base': np.float64(0.844), 'width': np.float64(0.475), 'area': np.float64(3.54)}; original {'top': np.float64(0.7), 'base': np.float64(0.859), 'width': np.float64(0.458), 'area': np.float64(4.4)}

Ranked by LPIPS (the largest perceptual differences first), per frame:
- accepted: 2 foreground water 0.656, 3 character + contact 0.593, 5 coins gem sock 0.557, 4 brushes 0.455, 1 far centre 0.445, 6 bubbles + upper light 0.442, 1 tunnel rings 0.372
- R2: 2 foreground water 0.589, 3 character + contact 0.568, 5 coins gem sock 0.559, 4 brushes 0.455, 1 far centre 0.445, 6 bubbles + upper light 0.442, 1 tunnel rings 0.372
- R3: 2 foreground water 0.571, 5 coins gem sock 0.558, 3 character + contact 0.557, 4 brushes 0.455, 1 far centre 0.445, 6 bubbles + upper light 0.442, 1 tunnel rings 0.372

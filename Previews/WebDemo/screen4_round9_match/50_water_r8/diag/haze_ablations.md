# R7's water band with one glow / haze layer off at a time (scripts/haze_metrics.py; ablations_haze.json; the same frame re-rendered)

### start

## water band x60-700 y1250-1420

| frame | dark | deep cobalt | saturated blue | white | mean luma | luma P10-P90 | sharpness | crisp highlights |
|---|---|---|---|---|---|---|---|---|
| ORIGINAL | 14.6 % | 0.1 % | 12.2 % | 20.7 % | 0.773 | 0.57-0.97 | 2.8 | 0.00 % |
| R7 | 12.1 % | 0.0 % | 13.3 % | 22.5 % | 0.780 | 0.59-0.96 | 33.1 | 0.55 % |
| no bloom | 15.8 % | 0.1 % | 15.7 % | 21.9 % | 0.767 | 0.56-0.96 | 37.7 | 0.56 % |
| no grade | 11.7 % | 0.0 % | 10.0 % | 24.8 % | 0.779 | 0.59-0.95 | 32.3 | 0.55 % |
| no overlays | 12.4 % | 0.0 % | 13.4 % | 22.5 % | 0.779 | 0.59-0.96 | 26.3 | 0.23 % |
| no overlays no bloom | 16.4 % | 0.1 % | 16.1 % | 21.8 % | 0.765 | 0.56-0.96 | 31.0 | 0.26 % |

### T1

## water band x60-700 y1250-1420

| frame | dark | deep cobalt | saturated blue | white | mean luma | luma P10-P90 | sharpness | crisp highlights |
|---|---|---|---|---|---|---|---|---|
| ORIGINAL | 14.6 % | 0.1 % | 12.2 % | 20.7 % | 0.773 | 0.57-0.97 | 2.8 | 0.00 % |
| R7 | 10.1 % | 0.0 % | 6.4 % | 18.8 % | 0.774 | 0.60-0.95 | 43.2 | 0.82 % |
| no bloom | 12.0 % | 0.0 % | 8.0 % | 18.3 % | 0.765 | 0.58-0.94 | 46.9 | 0.86 % |
| no grade | 9.8 % | 0.0 % | 4.1 % | 20.8 % | 0.774 | 0.60-0.94 | 41.8 | 0.83 % |
| no overlays | 12.1 % | 0.0 % | 8.4 % | 26.8 % | 0.783 | 0.59-0.96 | 30.3 | 0.31 % |
| no overlays no bloom | 15.6 % | 0.0 % | 10.7 % | 25.9 % | 0.769 | 0.56-0.96 | 34.6 | 0.34 % |

### T2

## water band x60-700 y1250-1420

| frame | dark | deep cobalt | saturated blue | white | mean luma | luma P10-P90 | sharpness | crisp highlights |
|---|---|---|---|---|---|---|---|---|
| ORIGINAL | 14.6 % | 0.1 % | 12.2 % | 20.7 % | 0.773 | 0.57-0.97 | 2.8 | 0.00 % |
| R7 | 7.2 % | 0.0 % | 3.9 % | 20.9 % | 0.794 | 0.62-0.94 | 37.3 | 0.72 % |
| no bloom | 9.8 % | 0.1 % | 5.9 % | 19.8 % | 0.782 | 0.60-0.94 | 44.3 | 0.80 % |
| no grade | 7.0 % | 0.0 % | 2.4 % | 22.9 % | 0.793 | 0.63-0.94 | 35.9 | 0.73 % |
| no overlays | 11.8 % | 0.0 % | 8.2 % | 26.6 % | 0.786 | 0.59-0.96 | 35.7 | 0.35 % |
| no overlays no bloom | 15.8 % | 0.1 % | 11.2 % | 25.8 % | 0.771 | 0.56-0.96 | 41.6 | 0.41 % |

# The bloom over the water by source (scripts/bloom_src.py; mean RGB levels added)
r8d_start: bloom added, mean RGB-levels:  water band  all 2.9, face-only 3.4, others (face hidden) 2.7 | just above the water (y 1180-1250) all 2.3 | the tunnel middle (y 300-900) all 1.6
r8d_T1: bloom added, mean RGB-levels:  water band  all 1.9, face-only 3.8, others (face hidden) 0.9 | just above the water (y 1180-1250) all 1.2 | the tunnel middle (y 300-900) all 3.3
r8d_T2: bloom added, mean RGB-levels:  water band  all 2.9, face-only 4.0, others (face hidden) 2.4 | just above the water (y 1180-1250) all 2.6 | the tunnel middle (y 300-900) all 3.5

# The live post settings in R7 (tools/models/game_eval.cjs, __bw.debug().composer): bloom strength 0.16, radius 0.42, threshold 1.0 at the start, +1 s and +2 s; exposure 1.05; grade saturation 1.32, contrast 1.12, vignette 0.18; the opening-grade term uOpen 0.272 at the start (exposure x 0.9, deeper mid-darks: not a haze), 0 when running.

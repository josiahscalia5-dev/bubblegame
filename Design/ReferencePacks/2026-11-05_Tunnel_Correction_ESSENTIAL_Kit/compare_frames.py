#!/usr/bin/env python3
"""Local screenshot comparator. Requires Pillow: pip install Pillow

python compare_frames.py --approved 01_APPROVED_ORIGINAL_SCREEN_ACTUAL.png --current 02_CURRENT_FOCUS_BUILD_ACTUAL.png --output compare_out

Note: images are resized to matched display area; metrics show general visual differences,
not semantic proof of an exact-match game reconstruction.
"""
import argparse
from pathlib import Path
from PIL import Image, ImageChops, ImageEnhance, ImageStat, ImageDraw, ImageFont

def main():
    p = argparse.ArgumentParser()
    p.add_argument('--approved', required=True)
    p.add_argument('--current', required=True)
    p.add_argument('--output', default='compare_out')
    a=p.parse_args()
    out=Path(a.output); out.mkdir(parents=True,exist_ok=True)
    approved=Image.open(a.approved).convert('RGB')
    current=Image.open(a.current).convert('RGB').resize(approved.size,Image.Resampling.LANCZOS)
    approved.save(out/'approved_aligned.png')
    current.save(out/'current_aligned.png')
    Image.blend(approved,current,.5).save(out/'overlay_50_percent.png')
    diff=ImageChops.difference(approved,current)
    ImageEnhance.Contrast(diff).enhance(3).save(out/'differences_enhanced.png')
    mae=sum(ImageStat.Stat(diff).mean)/3/255
    (out/'metrics.txt').write_text(f'Mean absolute pixel difference (RGB normalized, NOT semantic similarity): {mae:.4f}\n'
    'Do not claim this metric alone proves a match. Align framing and compare water regions visually.\n')
    # Lower-left ROI: adjust if the game's camera region changes
    w,h=approved.size
    box=(int(.02*w),int(.40*h),int(.42*w),int(.78*h))
    canvas=Image.new('RGB',(2*(box[2]-box[0]),box[3]-box[1]))
    cw=box[2]-box[0]
    canvas.paste(approved.crop(box),(0,0))
    canvas.paste(current.crop(box),(cw,0))
    canvas.save(out/'lower_left_comparison.png')
    print('Wrote comparisons to',out,'MAE',round(mae,4))
if __name__=='__main__': main()

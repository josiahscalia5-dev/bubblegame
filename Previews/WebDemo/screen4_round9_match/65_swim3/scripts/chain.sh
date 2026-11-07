#!/usr/bin/env bash
#   bash chain.sh <repo> <scratch> <accepted bundle> <accepted index.html> <previous bundle> <previous index.html>
R="$1"; SP="$2"; E=$R/Previews/WebDemo/screen4_round9_match/65_swim3; D=$R/WebDemo
source $R/Tools/bw_tools_env.sh > /dev/null 2>&1
echo "== identity $(date -u +%H:%M:%S)"; bash $E/scripts/identity.sh $R $SP $3 $4 $5 $6
echo "== gameplay $(date -u +%H:%M:%S)"; bash $E/scripts/gameplay.sh $R
echo "== clip new $(date -u +%H:%M:%S)"; F=$SP/clip65_new; rm -rf $F; mkdir -p $F
(cd $D && S3=intunnel,structmatch ART_OFF=1 node $R/Previews/WebDemo/screen4_round9_match/51_swim/scripts/record_phone.cjs $D $F 9 game > $E/videos/clip_new.log 2>&1)
ffmpeg -v error -y -framerate 30 -i $F/f%04d.jpg -vf scale=618:-2 -c:v libx264 -pix_fmt yuv420p -crf 22 -movflags +faststart $E/videos/swim_steer_coins_new.mp4
cp $F/track.json $E/videos/track_new.json; echo "clip new: $(tail -n 1 $E/videos/clip_new.log) | $(ls $F | grep -c jpg) frames"
echo "== done $(date -u +%H:%M:%S)"

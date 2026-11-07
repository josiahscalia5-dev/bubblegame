#!/usr/bin/env bash
#   bash chain.sh <repo> <scratch> <accepted bundle> <accepted index.html> <452f9568 bundle> <its index.html> <swim3 81f55c8e bundle>
R="$1"; SP="$2"; E=$R/Previews/WebDemo/screen4_round9_match/66_match4; D=$R/WebDemo
source $R/Tools/bw_tools_env.sh > /dev/null 2>&1
echo "== captures $(date -u +%H:%M:%S)"; (cd $D && SETTLE=900 S3=intunnel,structmatch TIMES=0,1,2,3,4,5,8,14 node tools/screen3/s3_shot.cjs "$D" $E/frames_new > $E/frames_new.log 2>&1; tail -1 $E/frames_new.log)
echo "== identity $(date -u +%H:%M:%S)"; bash $E/scripts/identity.sh $R $SP $3 $4 $5 $6 $7
echo "== gameplay $(date -u +%H:%M:%S)"; bash $E/scripts/gameplay.sh $R
echo "== clip new $(date -u +%H:%M:%S)"; F=$SP/clip66_new; rm -rf $F; mkdir -p $F
(cd $D && S3=intunnel,structmatch ART_OFF=1 node $R/Previews/WebDemo/screen4_round9_match/51_swim/scripts/record_phone.cjs $D $F 9 game > $E/videos/clip_new.log 2>&1)
ffmpeg -v error -y -framerate 30 -i $F/f%04d.jpg -vf scale=618:-2 -c:v libx264 -pix_fmt yuv420p -crf 22 -movflags +faststart $E/videos/swim_steer_coins_new.mp4
cp $F/track.json $E/videos/track_new.json; echo "clip new: $(tail -n 1 $E/videos/clip_new.log) | $(ls $F | grep -c jpg) frames"
echo "== done $(date -u +%H:%M:%S)"

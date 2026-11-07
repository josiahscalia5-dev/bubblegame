#!/usr/bin/env bash
# The final pass's proof chain (one browser at a time): identity, accepted captures, gameplay tests, the two clips.
#   bash chain.sh <worktree> <scratch> <committed bundle> <committed index.html>
R="$1"; SP="$2"; E=$R/Previews/WebDemo/screen4_round9_match/64_final_pass; D=$R/WebDemo
source $R/Tools/bw_tools_env.sh > /dev/null 2>&1
echo "== identity $(date -u +%H:%M:%S)"; bash $E/scripts/identity_all.sh $R $SP $3 $4
echo "== accepted captures $(date -u +%H:%M:%S)"; (cd $D && SETTLE=900 S3=intunnel TIMES=0,1,2,3,5 node tools/screen3/s3_shot.cjs "$D" $E/frames_accepted > $E/frames_accepted.log 2>&1; tail -1 $E/frames_accepted.log)
echo "== gameplay $(date -u +%H:%M:%S)"; bash $E/scripts/gameplay.sh $R
for L in new accepted; do
  S=intunnel,structmatch; [ $L = accepted ] && S=intunnel
  echo "== clip $L $(date -u +%H:%M:%S)"; F=$SP/clip_$L; rm -rf $F; mkdir -p $F
  (cd $D && S3="$S" ART_OFF=1 node $R/Previews/WebDemo/screen4_round9_match/51_swim/scripts/record_phone.cjs $D $F 9 game > $E/videos/clip_$L.log 2>&1)
  ffmpeg -v error -y -framerate 30 -i $F/f%04d.jpg -vf scale=618:-2 -c:v libx264 -pix_fmt yuv420p -crf 22 -movflags +faststart $E/videos/swim_steer_coins_$L.mp4
  cp $F/track.json $E/videos/track_$L.json 2>/dev/null
  echo "clip $L: $(tail -n 1 $E/videos/clip_$L.log) | $(ls $F | grep -c jpg) frames"
done
echo "== done $(date -u +%H:%M:%S)"

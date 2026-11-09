#!/usr/bin/env bash
# Real-game preview (session 3849f5c8): the plain launch, as a player opens it. Serialized through the browser lock.
set -u
R=/workspace/bubblegame; D=$R/WebDemo; O=$R/Previews/WebDemo/six_scenes/14_real_game_preview_3849f5c8
PLAIN='intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3,six2,s56'
cd $D
echo "== stills (opening) $(date -u +%T)"
S3=$PLAIN TIMES=-1,1.2,2.4,3.3,4.2,5.0,5.6,6.4,7.2,7.9,8.5,8.9 VW=432 VH=768 DPR=2 flock /tmp/bw_browser.lock node tools/six2/shots6.cjs $D $O/stills > $O/stills/log.json 2> $O/stills/log.txt; echo "stills exit $?"
echo "== game stills $(date -u +%T)"
S3= ZS=tap,46,206 VW=432 VH=768 DPR=2 flock /tmp/bw_browser.lock node tools/s56/shots56.cjs $D $O/game > $O/game/log.json 2> $O/game/log.txt; echo "game exit $?"
echo "== recording $(date -u +%T)"
NOS3=1 ROUTE=upper FPS=12 RUN=34 O_HAND=8.95 O_END=9.75 VW=432 VH=768 WAIT='window.__bwTripo3 && window.__bwTripo3.ready' flock /tmp/bw_browser.lock node tools/level1/record_flow.cjs $D $O/recording_frames > $O/recording_frames/log.txt 2>&1; echo "rec exit $?"
echo "== done $(date -u +%T)"

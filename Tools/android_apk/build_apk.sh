#!/usr/bin/env bash
# Builds an installable Android APK of the Bubble Wash Kingdom web game (WebDemo/), for previewing it on a phone.
# The APK is one full-screen WebView (src/.../MainActivity.java) with the game packed inside (assets/www/), so it plays
# offline. It opens on a start page (start.html) with one button per test version.
#
#   bash Tools/android_apk/build_apk.sh [output.apk]
#
# Needs: a JDK (17 or newer) and an Android SDK holding "platforms;android-34" and "build-tools;34.0.0", at $ANDROID_HOME
# (default ~/android-sdk). No Gradle. Build WebDemo first (cd WebDemo && node build.mjs).
# Signing: a DEBUG key made on first use at ~/.bubblewash-android/debug.keystore (outside the repository; never commit it).
# The APK is for testing ("install unknown apps"), not for the Play Store.
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"; ROOT="$(cd "$HERE/../.." && pwd)"
SDK="${ANDROID_HOME:-${ANDROID_SDK_ROOT:-$HOME/android-sdk}}"
BT="$SDK/build-tools/34.0.0"; JAR="$SDK/platforms/android-34/android.jar"
OUT="${1:-$ROOT/BubbleWashKingdom_preview.apk}"
KS="${BW_KEYSTORE:-$HOME/.bubblewash-android/debug.keystore}"
for f in "$BT/aapt2" "$BT/d8" "$BT/zipalign" "$BT/apksigner" "$JAR"; do
  [ -e "$f" ] || { echo "missing $f: install the Android SDK's platforms;android-34 and build-tools;34.0.0 (see this script's header)"; exit 2; }
done
[ -f "$ROOT/WebDemo/game.bundle.js" ] || { echo "build WebDemo first: cd WebDemo && node build.mjs"; exit 2; }

W="$(mktemp -d)"; trap 'rm -rf "$W"' EXIT
mkdir -p "$W/assets/www" "$W/classes"
# 1. the game: the page, its bundle, the 3D models and the UI images, plus the start page
cp "$ROOT/WebDemo/index.html" "$ROOT/WebDemo/game.bundle.js" "$W/assets/www/"
cp -r "$ROOT/WebDemo/models" "$ROOT/WebDemo/ui" "$W/assets/www/"
[ -d "$ROOT/WebDemo/textures" ] && cp -r "$ROOT/WebDemo/textures" "$W/assets/www/"   # Round 9's reference-derived textures
cp "$HERE/start.html" "$W/assets/www/"
# 2. the Java code -> DEX
javac --release 11 -nowarn -classpath "$JAR" -d "$W/classes" $(find "$HERE/src" -name '*.java')
"$BT/d8" --release --min-api 24 --lib "$JAR" --output "$W" $(find "$W/classes" -name '*.class')
# 3. resources, manifest and assets -> APK (the .glb models are stored uncompressed: they are already binary)
"$BT/aapt2" compile --dir "$HERE/res" -o "$W/res.zip"
"$BT/aapt2" link -I "$JAR" --manifest "$HERE/AndroidManifest.xml" --min-sdk-version 24 --target-sdk-version 34 \
  -A "$W/assets" -0 glb -0 png -o "$W/unsigned.apk" "$W/res.zip"
(cd "$W" && zip -q unsigned.apk classes.dex)
"$BT/zipalign" -f -p 4 "$W/unsigned.apk" "$W/aligned.apk"
# 4. sign with the local debug key (made once, outside the repository)
if [ ! -f "$KS" ]; then
  mkdir -p "$(dirname "$KS")"
  keytool -genkeypair -keystore "$KS" -storepass android -keypass android -alias bwdebug -keyalg RSA -keysize 2048 \
    -validity 10000 -dname "CN=Bubble Wash Kingdom debug" > /dev/null 2>&1
fi
mkdir -p "$(dirname "$OUT")"
"$BT/apksigner" sign --ks "$KS" --ks-pass pass:android --key-pass pass:android --ks-key-alias bwdebug --out "$OUT" "$W/aligned.apk"
"$BT/apksigner" verify "$OUT"
echo "built $OUT ($(du -h "$OUT" | cut -f1)), game bundle md5 $(md5sum "$ROOT/WebDemo/game.bundle.js" | cut -c1-8)"

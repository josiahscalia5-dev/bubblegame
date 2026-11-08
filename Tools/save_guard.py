# Save guard (8 November 2026, session b0abcf95, the user's preservation mandate), run by Tools/save_now.sh after `git add -A`:
#   - no credentials ever reach GitHub: every staged added or changed text line is checked for key and token patterns (Tripo tsk_ keys,
#     GitHub, Anthropic, OpenAI, AWS, Slack tokens, private keys). The proxy placeholder `tsk_proxy-injected` is not a key and passes;
#   - no half-written media: a recording frame, video, model or archive changed in the last 30 s may still be being written (a
#     recording, an encode), so it waits for the next round.
# Prints one line per file to hold back: "SECRET <path>" or "BUSY <path>". save_now.sh unstages them (they stay on disk).
import re, subprocess, os, time, sys
SECRET = re.compile(r'(tsk_[A-Za-z0-9_\-]{20,}|gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,}|sk-ant-[A-Za-z0-9_\-]{20,}|sk-[A-Za-z0-9]{40,}'
                    r'|AKIA[0-9A-Z]{16}|xox[baprs]-[A-Za-z0-9\-]{10,}|-----BEGIN [A-Z ]*PRIVATE KEY-----)')
MEDIA = ('.mp4', '.webm', '.mov', '.mkv', '.glb', '.gltf', '.bin', '.png', '.jpg', '.jpeg', '.webp', '.zip', '.apk', '.aab', '.blend', '.fbx')
names = subprocess.run(['git', 'diff', '--cached', '--name-only', '--diff-filter=AM', '-z'], capture_output=True).stdout.decode('utf-8', 'replace').split('\0')
now = time.time(); hold = {}
for f in filter(None, names):
    if f.lower().endswith(MEDIA) and os.path.exists(f) and now - os.path.getmtime(f) < 30: hold[f] = 'BUSY'
    # (8 November, session 57091b57) GitHub refuses any file over 100 MB, and one such file would make EVERY later push fail:
    # hold it back (it stays on disk) and report it, so the rest keeps saving; store it with Git LFS or split it by hand
    elif os.path.isfile(f) and os.path.getsize(f) > 95 * 1024 * 1024: hold[f] = 'LARGE'
diff = subprocess.run(['git', 'diff', '--cached', '-U0', '--no-color', '--no-ext-diff', '--diff-filter=AM'], capture_output=True).stdout.decode('utf-8', 'replace')
cur = None
for line in diff.split('\n'):
    if line.startswith('+++ '): cur = line[6:] if line.startswith('+++ b/') else None
    elif line.startswith('+') and cur and cur not in hold and SECRET.search(line): hold[cur] = 'SECRET'
for f, why in hold.items(): print(why, f)

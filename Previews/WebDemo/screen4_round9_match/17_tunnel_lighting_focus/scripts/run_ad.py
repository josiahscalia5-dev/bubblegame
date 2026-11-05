# run_ad.py: runs one of the Art Director's measuring scripts (../../16_art_director_focus_review/scripts/<name>.py) with
# its 'focus' frame replaced by another capture, so a new frame is measured exactly as the review measured the old one.
#   "$BW_PY" -I run_ad.py <name> <canvas.png> [<page.png>]
# 'orig' (the ORIGINAL APPROVED Screen 4) and 'match' (15_focus_pass/final/match_before) stay as they were. Images the
# script writes go to $OUT (default: a new temporary folder), never into the review's folder.
import sys, os, tempfile
HERE = os.path.dirname(os.path.abspath(__file__))
AD = os.path.normpath(os.path.join(HERE, '..', '..', '16_art_director_focus_review', 'scripts'))
name, canvas = sys.argv[1], os.path.abspath(sys.argv[2])
page = os.path.abspath(sys.argv[3]) if len(sys.argv) > 3 else None
src = open(os.path.join(AD, name + '.py')).read()
old = 'Previews/WebDemo/screen4_round9_match/15_focus_pass/final/focus_final_t3.00_canvas.png'
src = src.replace("R+'" + old + "'", repr(canvas)).replace("'/home/user/bubblegame/" + old + "'", repr(canvas))
if page:
    src = src.replace("R+'Previews/WebDemo/screen4_round9_match/15_focus_pass/final/focus_final_t3.00.png'", repr(page))
out = os.environ.get('OUT') or tempfile.mkdtemp()
os.makedirs(out, exist_ok=True)
os.chdir(out)
sys.argv = [name]
exec(compile(src, name + '.py', 'exec'), {'__name__': '__main__'})

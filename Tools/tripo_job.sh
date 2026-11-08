#!/usr/bin/env bash
# The ONE way to submit a PAID Tripo job (8 November 2026, session 57091b57). The user's rules: their standing authorization lets
# Claude spend the AVAILABLE Tripo API credits without asking per job; "only one lead Claude session should submit paid Tripo jobs at
# a time to prevent duplicated spending"; never buy credits or upgrade without asking.
#   bash Tools/tripo_job.sh <name> <tripo command and arguments...>
#   e.g. bash Tools/tripo_job.sh basket_lavender make in.png -p texture_quality=detailed -p pbr=true -o <dir>
# What it does, in order (any failed check = nothing submitted, nothing spent):
#   1. only paid job commands (make, redo, ai, anim, model, mesh, generate, batch); never topup, login, logout or use;
#   2. one job at a time in this container (a lock: parallel agents of one session cannot spend at once);
#   3. ONE LEAD SESSION across the account: Tripo's own account-wide history (`tripo usage`, the same for every session and both
#      Claude accounts) must show no task queued or running, and no task created in the last 30 minutes that this container did
#      not submit (= another session is spending). If that other session has really ended, the user (or the lead) reruns with
#      BW_TRIPO_I_AM_LEAD=1, which is written to the log;
#   4. `make`: the free dry run first; its estimate must fit the balance;
#   5. runs the job (TRIPO_API_KEY=tsk_proxy-injected: the proxy injects the real key; no key is read or written here), then
#      appends one line to Design/TripoDeliveries/TRIPO_JOBS_LOG.md (time, session, branch, name, task, credits, balance after)
#      so every session and account sees the spending after a merge. Agents never run this: they recommend a job to the lead.
set -uo pipefail
cd "$(dirname "$0")/.." || exit 1
NAME="${1:-}"; shift || true; CMD="${1:-}"
[ -n "$NAME" ] && [ -n "$CMD" ] || { echo "usage: bash Tools/tripo_job.sh <name> <make|redo|ai|anim|model|mesh|generate|batch> ..."; exit 2; }
case "$CMD" in make|redo|ai|anim|model|mesh|generate|batch) ;; *) echo "refused: '$CMD' is not a paid job command this wrapper runs (never topup / login / use)"; exit 2 ;; esac
source Tools/bw_tools_env.sh > /dev/null 2>&1
export TRIPO_API_KEY=tsk_proxy-injected
STATE="$HOME/.bubblewash-tripo"; mkdir -p "$STATE"; LOG=Design/TripoDeliveries/TRIPO_JOBS_LOG.md
exec 8> "$STATE/lock"; flock -n 8 || { echo "refused: another Tripo job of this session is running (one at a time)"; exit 3; }
SID="${CLAUDE_SESSION_ID:-$(ls -t "$HOME"/.claude/projects/*/*.jsonl 2>/dev/null | head -1 | xargs -r basename | cut -c1-8)}"
# 3. one lead session: Tripo's account-wide task history
# (BW_TRIPO_TEST_USAGE=<file>: a test stands in for the account history; BW_TRIPO_CHECK_ONLY=1: every check and the dry run, no job)
if [ -n "${BW_TRIPO_TEST_USAGE:-}" ]; then usage="$(cat "$BW_TRIPO_TEST_USAGE")"
else usage="$(tripo usage --json --limit 30 2>/dev/null)" || { echo "refused: could not read Tripo's account history (tripo usage)"; exit 4; }; fi
verdict="$(printf '%s' "$usage" | python3 -I -c "
import json, sys, datetime
mine = set(open(sys.argv[1]).read().split()) if __import__('os').path.exists(sys.argv[1]) else set()
now = datetime.datetime.now(datetime.timezone.utc)
for t in json.load(sys.stdin):
    st = (t.get('status') or '').lower(); tid = t.get('task_id', '')
    if st in ('queued', 'running', 'waiting', 'pending'): print(f'BUSY {tid} is {st} on the account'); break
    try: age = (now - datetime.datetime.fromisoformat(t['created_at'].replace('Z', '+00:00'))).total_seconds() / 60
    except Exception: continue
    if age < 30 and tid not in mine: print(f'OTHER {tid} was submitted {age:.0f} min ago by another session'); break
else: print('OK')" "$STATE/my_tasks")"
if [ "$verdict" != "OK" ]; then
  if [ "${BW_TRIPO_I_AM_LEAD:-}" = "1" ] && [ "${verdict%% *}" = "OTHER" ]; then echo "lead override: $verdict"; override=" (lead override: $verdict)"
  elif [ "${verdict%% *}" = "BUSY" ]; then echo "refused: ${verdict#* } -> one job at a time on the account: wait until it finishes (tripo usage)"; exit 5
  else echo "refused: ${verdict#* } -> only one lead session submits paid Tripo jobs. Wait for it, or if that session has ended, rerun with BW_TRIPO_I_AM_LEAD=1"; exit 5; fi
fi
before="$(tripo balance --json 2>/dev/null | python3 -I -c 'import json,sys; print(json.load(sys.stdin)["balance"])' 2>/dev/null || echo '?')"
# 4. the free dry run (make)
if [ "$CMD" = make ]; then
  est="$(tripo "$@" --dry-run --json 2>/dev/null | python3 -I -c 'import json,sys; d=json.load(sys.stdin); print(d.get("generation_credits_estimate","?") if d.get("valid") else "INVALID " + str(d.get("errors")))' 2>/dev/null)"
  case "$est" in INVALID*|"") echo "refused: the dry run did not validate: $est"; exit 6 ;; esac
  if [ "$before" != "?" ] && [ "$est" != "?" ] && [ "$est" -gt "$before" ]; then echo "refused: estimate $est credits > balance $before (never buy credits without the user)"; exit 7; fi
  echo "dry run: about $est credits; balance $before"
fi
if [ "${BW_TRIPO_CHECK_ONLY:-}" = "1" ]; then echo "check only: every check passed; nothing submitted, nothing spent"; exit 0; fi
# 5. the job
out="$STATE/${NAME}_$(date -u +%H%M%S).json"
tripo "$@" --json --yes --no-open --name "bw_$NAME" > "$out" 2> "$out.err"; rc=$?
tasks="$(python3 -I -c "
import json, sys
try: d = json.load(open(sys.argv[1]))
except Exception: sys.exit()
for x in (d if isinstance(d, list) else [d]):
    if isinstance(x, dict) and x.get('task_id'): print(x['task_id'], x.get('credits_consumed', '?'), x.get('status', '?'))" "$out")"
printf '%s\n' "$tasks" | awk 'NF{print $1}' >> "$STATE/my_tasks"
after="$(tripo balance --json 2>/dev/null | python3 -I -c 'import json,sys; print(json.load(sys.stdin)["balance"])' 2>/dev/null || echo '?')"
[ -f "$LOG" ] || printf '# Tripo jobs (every paid job, appended by Tools/tripo_job.sh)\n\n| UTC | session | branch | name | task | credits | status | balance before -> after |\n|---|---|---|---|---|---|---|---|\n' > "$LOG"
printf '%s\n' "$tasks" | while read -r tid cr st; do [ -n "$tid" ] || continue
  echo "| $(date -u '+%Y-%m-%d %H:%M') | ${SID:-?} | $(git branch --show-current) | $NAME${override:-} | \`$tid\` | $cr | $st | $before -> $after |" >> "$LOG"; done
[ -n "$tasks" ] || echo "| $(date -u '+%Y-%m-%d %H:%M') | ${SID:-?} | $(git branch --show-current) | $NAME | (no task id; exit $rc) | ? | failed | $before -> $after |" >> "$LOG"
echo "result: exit $rc; $(printf '%s' "$tasks" | tr '\n' ' '); balance $before -> $after; JSON $out"
python3 -I -c "import json,sys; d=json.load(open(sys.argv[1])); print('files in', d.get('output_dir'))" "$out" 2>/dev/null
exit $rc

"""Screen 4: a small Optuna study (12 trials) of the bubble domes' look (?s3=intunnel,domes; tunnel_s4_domes.js).

    ~/.bubblewash-tools/metrics/bin/python WebDemo/tools/screen4/optuna_domes.py <out dir> [trials=12] [parallel=3]

Each trial renders the REAL game (tools/screen4/layer_diag.cjs, seed 7, the in-tunnel start, the 1:2 frame) with a test tune
(window.__BW_S3_TUNE__.domes; nothing on disk changes) and scores it against the ORIGINAL approved Screen 4 in the two regions
the domes are for (region_compare.py: '3 character + contact' and '2 foreground water'):
  score = LPIPS(character) + LPIPS(water) + 0.5 * (hist(character) + hist(water)) + |lavender % - original's| / 20 (both regions)
Lower is closer. Four parameters only: the domes' size (a scale on every radius), their body opacity, how deep their lavender is
(between the original's #a295ee and its deeper #8879db) and the white highlight's strength. The score picks candidates; the
choice is made by eye (the user: "do not use a numerical result as a substitute for visual judgment").
Writes trials.json (every trial's parameters and measures) and each trial's frame in <out dir>/trial_NN/.
"""
import sys, os, json, subprocess, threading
import numpy as np
import optuna
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import region_compare as RC  # noqa: E402

OUT = os.path.abspath(sys.argv[1]); N = int(sys.argv[2]) if len(sys.argv) > 2 else 12; PAR = int(sys.argv[3]) if len(sys.argv) > 3 else 3
WEB = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
BASE_LIST = [[16, 0.10, 0.03, 0.35, 0], [27, 0.06, 0.05, 0.3, 0], [2, 0.12, 0.05, 0.45, 1], [-9, 0.07, 0.05, 0.3, 0],
             [-20, 0.09, 0.03, 0.35, 0], [-31, 0.065, 0.04, 0.3, 0], [37, 0.07, 0.02, 0.3, 0], [-43, 0.08, 0.02, 0.35, 1]]
ORIG = RC.load(RC.ORIG)
lock = threading.Lock()


def mix_hex(a, b, t):
    pa = [int(a[i:i + 2], 16) for i in (1, 3, 5)]; pb = [int(b[i:i + 2], 16) for i in (1, 3, 5)]
    return '#' + ''.join(f'{round(x + (y - x) * t):02x}' for x, y in zip(pa, pb))


def objective(trial):
    s = trial.suggest_float('size', 1.0, 1.7)
    al = trial.suggest_float('alpha', 0.42, 0.8)
    deep = trial.suggest_float('deep', 0.0, 1.0)
    arc = trial.suggest_float('arc', 0.5, 1.0)
    tune = {'domes': {'list': [[p, round(r * s, 4), o, k, kind] for p, r, o, k, kind in BASE_LIST],
                      'look': {'alpha': [round(al, 3), round(min(0.9, al + 0.08), 3)], 'lavender': mix_hex('#a295ee', '#8879db', deep), 'arcK': round(arc, 3)}}}
    d = os.path.join(OUT, f'trial_{trial.number:02d}'); os.makedirs(d, exist_ok=True)
    env = dict(os.environ, S3='intunnel,domes', NOTAP='1', TUNE=json.dumps(tune))
    r = subprocess.run(['node', 'tools/screen4/layer_diag.cjs', WEB, d], cwd=WEB, env=env, capture_output=True, text=True, timeout=900)
    if r.returncode != 0: raise optuna.TrialPruned(r.stderr[-300:])
    g = RC.load(os.path.join(d, 'base_page.png'))
    with lock:   # LPIPS's network is shared
        rc = RC.region(ORIG, g, '3 character + contact'); rw = RC.region(ORIG, g, '2 foreground water')
    lav = abs(rc['game']['lavender'] - rc['original']['lavender']) + abs(rw['game']['lavender'] - rw['original']['lavender'])
    score = rc['lpips'] + rw['lpips'] + 0.5 * (rc['hist'] + rw['hist']) + lav / 20
    trial.set_user_attr('measures', {'character': {k: rc[k] for k in ('lpips', 'ssim', 'hist')}, 'water': {k: rw[k] for k in ('lpips', 'ssim', 'hist')},
                                     'lavender': [rc['game']['lavender'], rw['game']['lavender'], rc['original']['lavender'], rw['original']['lavender']], 'tune': tune})
    return score


if __name__ == '__main__':
    os.makedirs(OUT, exist_ok=True)
    study = optuna.create_study(direction='minimize', sampler=optuna.samplers.TPESampler(seed=7, n_startup_trials=6))
    study.enqueue_trial({'size': 1.0, 'alpha': 0.42, 'deep': 0.0, 'arc': 0.9})   # trial 0: the first build's own values
    study.optimize(objective, n_trials=N, n_jobs=PAR)
    rows = [{'n': t.number, 'score': round(t.value, 4) if t.value is not None else None, 'params': {k: round(v, 3) for k, v in t.params.items()}, **t.user_attrs} for t in study.trials]
    json.dump(rows, open(os.path.join(OUT, 'trials.json'), 'w'), indent=1)
    for row in sorted(rows, key=lambda r: r['score'] if r['score'] is not None else 9):
        m = row.get('measures', {})
        print(row['n'], row['score'], row['params'], 'char', m.get('character'), 'water', m.get('water'), 'lavender', m.get('lavender'))

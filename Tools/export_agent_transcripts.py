"""Export this session's design-agent (subagent) logs to one readable Markdown transcript.

Usage: python3 -I Tools/export_agent_transcripts.py <session-dir> <out.md> [title]

<session-dir> is ~/.claude/projects/<project>/<session-id>/ inside the session's container; its subagents/ folder holds
one agent-<id>.jsonl log per agent (and agent-<id>.meta.json with its type and description). For each agent, oldest
first: the lead's brief and later messages, the agent's notes, one line per tool step (tool output left out), and its
final report. Keys and passwords pass through the same redaction as Tools/export_chat_history.py.
"""
import glob
import json
import os
import re
import sys

# The same key patterns as Tools/export_chat_history.py (copied: that file runs its export when imported).
SECRETS = [
    re.compile(r"\b(tsk|msy|sk|rk|pk)[-_][A-Za-z0-9_\-]{16,}"),
    re.compile(r"\b(ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9]{20,}|\bgithub_pat_[A-Za-z0-9_]{20,}"),
    re.compile(r"\bAKIA[0-9A-Z]{16}\b|\bAIza[0-9A-Za-z_\-]{30,}|\bxox[abprs]-[A-Za-z0-9\-]{10,}"),
    re.compile(r"(?i)\bbearer\s+[A-Za-z0-9._\-]{16,}"),
    re.compile(r"(?i)((?:api[\s_-]?key|token|password|passwd|secret)\b[^\n]{0,20}?[:=\s]\s*)([A-Za-z0-9._\-]{20,})"),
]


def redact(text):
    for i, pat in enumerate(SECRETS):
        text = pat.sub((lambda m: m.group(1) + "[REDACTED]") if i == len(SECRETS) - 1 else "[REDACTED]", text)
    return text


src, out = sys.argv[1], sys.argv[2]
title = sys.argv[3] if len(sys.argv) > 3 else "Design agents' transcripts"
NAMES = {
    "game-art-director": "Game Art Director",
    "lighting-visual-matching": "Tunnel & Lighting specialist",
    "water-vfx-engineer": "Water & VFX specialist",
    "gameplay-visual-testing": "Gameplay & Visual Testing specialist",
}
REMINDER = re.compile(r"<system-reminder>.*?</system-reminder>", re.S)


def hhmm(ts):
    return ts[11:16] if ts and len(ts) >= 16 else "?"


def step_line(x):
    inp = x.get("input", {}) or {}
    what = inp.get("description") or inp.get("file_path") or inp.get("pattern") or inp.get("path") or ""
    return f"`{x.get('name')}`" + (f": {str(what)[:160]}" if what else "")


agents = []
for log in glob.glob(os.path.join(src, "subagents", "agent-*.jsonl")):
    aid = os.path.basename(log)[len("agent-"):-len(".jsonl")]
    meta = {}
    try:
        meta = json.load(open(os.path.join(src, "subagents", f"agent-{aid}.meta.json")))
    except (OSError, ValueError):
        pass
    rows = []
    for line in open(log, encoding="utf-8", errors="replace"):
        try:
            rows.append(json.loads(line))
        except ValueError:
            continue
    if rows:
        agents.append((rows[0].get("timestamp", ""), meta, rows))
agents.sort(key=lambda a: a[0])

with open(out, "w", encoding="utf-8") as f:
    f.write(f"# {title}\n\n")
    f.write("Each agent's brief and messages from the lead, its notes, one line per tool step (tool output left out) and "
            "its final report. The work itself is in the commits on this branch. Keys and passwords are replaced with "
            "[REDACTED].\n\n")
    for start, meta, rows in agents:
        name = NAMES.get(meta.get("agentType"), meta.get("agentType", "agent"))
        f.write(f"\n---\n\n## {name}: {meta.get('description', '')} (started {hhmm(start)} UTC)\n\n")
        if meta.get("worktreeBranch"):
            f.write(f"_Worked in its own worktree, branch `{meta['worktreeBranch']}`._\n\n")
        steps, last_text, last_who = 0, None, None
        for d in rows:
            ts, msg = d.get("timestamp", ""), d.get("message", {}) or {}
            content = msg.get("content")
            if d.get("type") == "user":
                texts = [content] if isinstance(content, str) else [
                    p.get("text", "") for p in (content or []) if isinstance(p, dict) and p.get("type") == "text"]
                texts = [REMINDER.sub("", t).strip() for t in texts]
                texts = [t for t in texts if t]
                if texts:
                    f.write(f"**Lead → agent** ({hhmm(ts)} UTC):\n\n" + redact("\n\n".join(texts)) + "\n\n")
                    last_who = "lead"
            elif d.get("type") == "assistant" and isinstance(content, list):
                for x in content:
                    if x.get("type") == "text" and x.get("text", "").strip():
                        if last_who != "agent":
                            f.write(f"**Agent** ({hhmm(ts)} UTC):\n\n")
                        f.write(redact(x["text"].strip()) + "\n\n")
                        last_text, last_who = x["text"], "agent"
                    elif x.get("type") == "tool_use":
                        steps += 1
                        f.write(f"- {hhmm(ts)} {redact(step_line(x))}\n")
                        last_who = "tool"
        f.write(f"\n_{steps} tool steps._\n")
print(f"wrote {out}: {len(agents)} agents")

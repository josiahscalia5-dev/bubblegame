"""Export a Claude Code session's conversation (your messages and Claude's replies) to Markdown.

Usage: python3 -I Tools/export_chat_history.py <session.jsonl> <out.md> [title]

The session log lives at ~/.claude/projects/<project>/<session-id>.jsonl inside the session's
container. Only the conversation is kept:
  - your messages (including ones sent while Claude was working),
  - Claude's visible replies,
  - one line for each file Claude sent you and each page it published.
System text, tool calls and their raw output, private reasoning and screenshots are left out.
"""
import json
import re
import sys

src, out = sys.argv[1], sys.argv[2]
title = sys.argv[3] if len(sys.argv) > 3 else "Chat history"
REMINDER = re.compile(r"<system-reminder>.*?</system-reminder>", re.S)
# Automatic size notes after Claude views a large screenshot ("[Image: original WxH, displayed at ...]").
IMAGE_NOTE = re.compile(r"\[Image: original \d+x\d+, displayed at [^\]]*\]")
UPLOAD = re.compile(r'@"/root/\.claude/uploads/[^"]*?/[0-9a-f]{8}-([^"]+)"')


def clean_user(text):
    text = REMINDER.sub("", text)
    text = IMAGE_NOTE.sub("", text)
    text = UPLOAD.sub(lambda m: f"[attached file: {m.group(1)}]", text)
    return text.strip()


blocks = []
last_role = None
seen_queued = set()   # a queued message can be logged more than once (for example after a restart)


def from_parts(parts):
    """The text of a message sent as a list of parts (text plus pasted images), with a note for the images."""
    texts = [clean_user(x.get("text", "")) for x in parts if x.get("type") == "text"]
    images = sum(1 for x in parts if x.get("type") == "image")
    text = "\n\n".join(t for t in texts if t)
    if images and text:
        text += f"\n\n_[{images} image{'s' if images > 1 else ''} attached]_"
    return text


def add(role, text, ts):
    global last_role
    if not text:
        return
    if role == last_role and role == "Claude":
        blocks[-1][1].append(text)          # consecutive replies within one turn read as one message
    else:
        blocks.append([role, [text], ts])
    last_role = role


with open(src) as f:
    for line in f:
        try:
            e = json.loads(line)
        except ValueError:
            continue
        t, ts = e.get("type"), (e.get("timestamp") or "")[:16].replace("T", " ")
        if t == "user" and not e.get("isSidechain"):
            c = e.get("message", {}).get("content")
            if isinstance(c, str):
                text = clean_user(c)
                # Automatic checks that run when Claude stops, and notices that one of Claude's own
                # background jobs finished, are not messages from you.
                if text.startswith("Stop hook feedback:"):
                    add("Automatic check", text, ts)
                elif text.startswith("<task-notification>"):
                    m = re.search(r"<summary>(.*?)</summary>", text, re.S)
                    add("Automatic notice", f"_{m.group(1).strip() if m else 'A background job finished.'}_", ts)
                else:
                    add("You", text, ts)
            elif isinstance(c, list):
                if any(x.get("type") == "text" and "[Request interrupted by user]" in x.get("text", "") for x in c):
                    add("Note", "_(You interrupted Claude here.)_", ts)
                # A message with pictures pasted in is a list of parts. Tool results are also logged as
                # "user" entries with list content; only a person's own message is kept.
                elif (e.get("origin") or {}).get("kind") == "human" and not any(x.get("type") == "tool_result" for x in c):
                    add("You", from_parts(c), ts)
        elif t == "attachment":
            a = e.get("attachment") or {}
            # Background-job notices also arrive as queued commands; only keep what a person typed.
            if a.get("type") == "queued_command":
                p = a.get("prompt")
                text = clean_user(p) if isinstance(p, str) else from_parts(p) if isinstance(p, list) else ""
                if text and not text.lstrip().startswith("<task-notification>") and text not in seen_queued:
                    seen_queued.add(text)
                    add("You (sent while Claude was working)", text, ts)
        elif t == "assistant" and not e.get("isSidechain"):
            for x in e.get("message", {}).get("content") or []:
                if x.get("type") == "text":
                    add("Claude", x["text"].strip(), ts)
                elif x.get("type") == "tool_use" and x.get("name") == "SendUserFile":
                    files = ", ".join(p.split("/bubblegame/")[-1] for p in x["input"].get("files", []))
                    add("Claude", f"_[Sent you files: {files}]_", ts)
                elif x.get("type") == "tool_use" and x.get("name") == "Artifact" and x["input"].get("action", "publish") == "publish" and x["input"].get("file_path"):
                    fp = x['input']['file_path']
                    add("Claude", f"_[Published the page {fp.split('/bubblegame/')[-1]}]_" if '/bubblegame/' in fp else "_[Published the playable page]_", ts)

# The repository is public: keys pasted into the chat must never reach it. Every exported text passes through this
# redaction (Tripo tsk_, Meshy msy_, OpenAI/Anthropic sk-, GitHub tokens, AWS key ids, Google API keys, Slack tokens, bearer
# headers, and anything after "api key"/"token"/"password"/"secret" that looks like a credential).
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


with open(out, "w") as f:
    f.write(f"# {title}\n\n")
    f.write("Your messages and Claude's replies, exported from the session log. Tool calls, raw command output and screenshots are left out; the work itself is in the commits on this branch. Keys and passwords are replaced with [REDACTED].\n\n")
    for role, texts, ts in blocks:
        f.write(f"---\n\n### {role}" + (f" · {ts} UTC" if ts else "") + "\n\n")
        f.write(redact("\n\n".join(texts)) + "\n\n")
print(f"wrote {out}: {len(blocks)} messages")

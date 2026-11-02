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
UPLOAD = re.compile(r'@"/root/\.claude/uploads/[^"]*?/[0-9a-f]{8}-([^"]+)"')


def clean_user(text):
    text = REMINDER.sub("", text)
    text = UPLOAD.sub(lambda m: f"[attached file: {m.group(1)}]", text)
    return text.strip()


blocks = []
last_role = None


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
                add("You", clean_user(c), ts)
            elif isinstance(c, list):
                for x in c:
                    if x.get("type") == "text" and "[Request interrupted by user]" in x.get("text", ""):
                        add("Note", "_(You interrupted Claude here.)_", ts)
        elif t == "attachment":
            a = e.get("attachment") or {}
            # Background-job notices also arrive as queued commands; only keep what a person typed.
            if a.get("type") == "queued_command" and isinstance(a.get("prompt"), str) and not a["prompt"].lstrip().startswith("<task-notification>"):
                add("You (sent while Claude was working)", clean_user(a["prompt"]), ts)
        elif t == "assistant" and not e.get("isSidechain"):
            for x in e.get("message", {}).get("content") or []:
                if x.get("type") == "text":
                    add("Claude", x["text"].strip(), ts)
                elif x.get("type") == "tool_use" and x.get("name") == "SendUserFile":
                    files = ", ".join(p.split("/bubblegame/")[-1] for p in x["input"].get("files", []))
                    add("Claude", f"_[Sent you files: {files}]_", ts)
                elif x.get("type") == "tool_use" and x.get("name") == "Artifact" and x["input"].get("action", "publish") == "publish" and x["input"].get("file_path"):
                    add("Claude", f"_[Published the page {x['input']['file_path'].split('/bubblegame/')[-1]}]_", ts)

with open(out, "w") as f:
    f.write(f"# {title}\n\n")
    f.write("Your messages and Claude's replies, exported from the session log. Tool calls, raw command output and screenshots are left out; the work itself is in the commits on this branch.\n\n")
    for role, texts, ts in blocks:
        f.write(f"---\n\n### {role}" + (f" · {ts} UTC" if ts else "") + "\n\n")
        f.write("\n\n".join(texts) + "\n\n")
print(f"wrote {out}: {len(blocks)} messages")

#!/usr/bin/env python3
"""Index work/*.md into work/index.json (stdlib only).

Each work entry is a markdown file with a small front-matter block:

    ---
    title: ...
    date: YYYY-MM-DD
    summary: one sentence
    tags: [a, b]          # optional
    status: ongoing|done  # optional
    links: Label | https://url, Label2 | https://url2   # optional
    ---

Files whose names start with "_" (e.g. _TEMPLATE.md) are skipped. A malformed
entry is skipped with a warning (a GitHub Actions annotation in CI) so one typo
never blocks the whole site from deploying.
"""
import datetime
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
WORK = ROOT / "work"
REQUIRED = ("title", "date", "summary")


def warn(msg):
    print(f"::warning::{msg}")


def split_front_matter(text):
    m = re.match(r"\A﻿?---\s*\n(.*?)\n---\s*\n?(.*)\Z", text, re.S)
    if not m:
        raise ValueError("missing front matter (--- block at top of file)")
    meta = {}
    for line in m.group(1).splitlines():
        if not line.strip() or line.lstrip().startswith("#"):
            continue
        key, sep, value = line.partition(":")
        if not sep:
            raise ValueError(f"bad front-matter line: {line!r}")
        meta[key.strip().lower()] = value.strip().strip("\"'")
    return meta, m.group(2).strip()


def parse_list(value):
    value = value.strip()
    if value.startswith("[") and value.endswith("]"):
        value = value[1:-1]
    return [v.strip().strip("\"'") for v in value.split(",") if v.strip()]


def parse_links(value):
    links = []
    for item in parse_list(value):
        label, sep, url = item.partition("|")
        if not sep or not url.strip().startswith(("http://", "https://")):
            raise ValueError(f"bad link {item!r}; use 'Label | https://url'")
        links.append({"label": label.strip(), "url": url.strip()})
    return links


def load_entry(path):
    meta, body = split_front_matter(path.read_text(encoding="utf-8"))
    for key in REQUIRED:
        if not meta.get(key):
            raise ValueError(f"missing required field '{key}'")
    try:
        datetime.date.fromisoformat(meta["date"])
    except ValueError:
        raise ValueError(f"date {meta['date']!r} is not YYYY-MM-DD")
    return {
        "slug": path.stem,
        "title": meta["title"],
        "date": meta["date"],
        "summary": meta["summary"],
        "tags": parse_list(meta.get("tags", "")),
        "status": meta.get("status", ""),
        "links": parse_links(meta.get("links", "")),
        "body": body,
    }


def main():
    entries = []
    for path in sorted(WORK.glob("*.md")):
        if path.name.startswith("_"):
            continue
        try:
            entries.append(load_entry(path))
        except ValueError as e:
            warn(f"work/{path.name}: {e} - entry skipped")
    entries.sort(key=lambda e: (e["date"], e["slug"]), reverse=True)
    out = WORK / "index.json"
    out.write_text(json.dumps(entries, indent=1, ensure_ascii=False), encoding="utf-8")
    print(f"wrote {out.relative_to(ROOT)} with {len(entries)} entries")
    return 0


if __name__ == "__main__":
    sys.exit(main())

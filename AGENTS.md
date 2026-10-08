# Portfolio site: instructions for agents / threads

Public portfolio of Yashowardhan Rai, served at https://yash739.github.io
(repo: `yash739/yash739.github.io`). Static HTML/CSS/JS, no framework.

## If you were asked to "add a section on the work done in this thread"

Add **one new markdown file** in `work/`. Do not edit `index.html`, `work.html`
or any other entry; one file per thread means threads never conflict.

1. `git pull --rebase` in this repo.
2. Copy `work/_TEMPLATE.md` to `work/YYYY-MM-DD-short-slug.md` (date = today,
   slug lowercase-with-hyphens; the filename becomes the URL: `work.html#<filename-without-.md>`).
3. Fill in the front matter and write the body (see below).
4. Run `python3 scripts/build_index.py` (stdlib only). It must print
   `wrote work/index.json with N entries` and **no `::warning::` for your file**.
   `work/index.json` is generated and git-ignored; never commit it.
5. Optional preview: `python3 -m http.server 8000` then open
   `http://localhost:8000/work.html#<slug>`.
6. `git add work/ && git commit -m "Work log: <title>" && git push`.
   Pushing to `main` triggers the GitHub Actions deploy (about a minute).

## Entry format

```
---
title: Short descriptive title
date: 2026-10-08
summary: One sentence shown on the card.
tags: [GRB, polarimetry]          # optional, 2-5 short tags, reuse existing ones
status: ongoing                   # optional: ongoing | done
links: Code | https://github.com/..., Paper | https://arxiv.org/...   # optional
---

Markdown body. Use `##` headings (the title is already an h1).
```

Front-matter rules: `title`, `date` (ISO), `summary` are required; each field is
a single line; `links` entries are `Label | https://url` separated by commas.
Entries with problems are skipped with a warning rather than breaking the site.

Write the body for a reader outside the thread: the question, what was done,
the result (numbers, a figure), and what is next. Prefer a page or less.

Images: put them in `work/assets/<slug>/` and reference them from the body as
`work/assets/<slug>/fig.png` (paths resolve relative to `work.html`, not the entry).
Keep images small (under ~500 KB each; export PNG/WebP, not full-resolution renders).

## Research project pages

Each tile in the home page's Research section opens `project.html#<slug>`, which is
rendered from `research/<slug>.md` (same front-matter format; `title` and `summary`
required, plus optional `period`, `guide`, `tags`, `links`). The body currently holds a
placeholder template (Overview / Approach / Results / Outputs): to fill a page in, edit
that one file. A new tile needs both a `research/<slug>.md` and a card in `index.html`
(copy an existing `<a class="card" href="project.html#slug">` block). `research/_TEMPLATE.md`
is the template for new pages.

## Papers, posters and slides pop up in a window

Any link with a `data-embed` attribute (`<a data-embed href="https://arxiv.org/abs/...">`)
opens in a pop-up viewer with an "Open in new tab" fallback. Supported: arXiv, Google
Slides, Google Drive files (must be shared "anyone with the link"). In markdown
`links:` fields, supported URLs get this automatically.

## Content rules (this site is public)

- Only state results that are true in this thread's outputs; cite numbers exactly.
- **Ask Yash before publishing** unpublished science results, collaborator names
  or data that belong to others, or anything from a private repo. Linking a
  private repo is fine only if he says so. When unsure, write the entry at the
  level of methods and motivation and leave out the numbers, then say so in your reply.
- No credentials, tokens, personal data, or local file paths.
- Do not reword the CV content in `index.html`; if it needs a change, tell Yash.

## Layout

- `index.html`: home page (CV content is static HTML; edit by hand when asked)
- `work.html` + `assets/work.js`: work-log list and entry viewer (reads `work/index.json`)
- `project.html` + `assets/project.js`: one research page per tile (reads `research/index.json`)
- `research/*.md`: research project pages; `assets/viewer.js`: pop-up viewer
- `work/*.md`: one entry per thread; `work/_TEMPLATE.md` is skipped by the indexer
- `scripts/build_index.py`: generates `work/index.json`
- `.github/workflows/pages.yml`: builds and deploys on every push to `main`
- `assets/vendor/marked.min.js`: vendored Markdown renderer (MIT)

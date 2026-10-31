# Portfolio site: instructions for agents / threads

Public portfolio of Yashowardhan Rai, served at https://yash739.github.io
(repo: `yash739/yash739.github.io`). Static HTML/CSS/JS, no framework. There is no
separate "work log": work from a thread belongs on the relevant **research project page**.

## If you were asked to "add the work done in this thread" to the site

1. `git pull --rebase` in this repo.
2. Find the project the work belongs to in `research/*.md` (one file per Research tile on the
   home page). Edit **only that file's body** (below the front matter), adding to the existing
   sections (Overview / What I did / Highlights), or add a new `##` section.
3. If the work does not fit any existing project, create `research/<slug>.md` from
   `research/_TEMPLATE.md` **and** add a tile to `index.html` (copy an existing
   `<a class="card" href="project.html#slug">` block). Ask Yash first.
4. Run `python3 scripts/build_index.py`. It must print `wrote research/index.json with N entries`
   and **no `::warning::` for your file**. `research/index.json` is generated and git-ignored.
5. Optional preview: `python3 -m http.server 8000`, then open
   `http://localhost:8000/project.html#<slug>`.
6. `git add research/ && git commit -m "Project page: <title>" && git push`.
   Pushing to `main` triggers the GitHub Actions deploy (about a minute).

## Research page format

```
---
title: Project title
period: Mon YYYY - present
guide: Prof. Name, Institution
summary: One or two sentences shown at the top of the page.
tags: [tag-one, tag-two]                  # optional; also shown on the tile
links: Code | https://github.com/..., Paper | https://arxiv.org/...   # optional
---

Markdown body. Use `##` headings (the title is already an h1).
```

Front-matter rules: `title` and `summary` are required; each field is a single line; `links`
entries are `Label | https://url` separated by commas. A page with problems is skipped with a
warning rather than breaking the site. Tiles on the home page are written by hand in
`index.html` (title, supervisor and timeline, plus tags): keep them in sync with the front matter.

Images: put them in `research/assets/<slug>/` and reference them from the body as
`research/assets/<slug>/fig.png` (paths resolve relative to `project.html`, not the page).
Keep images small (under ~500 KB each; PNG/WebP, not full-resolution renders).

## Content rules (this site is public)

- Only state results that are true in this thread's outputs; cite numbers exactly.
- **Ask Yash before publishing** unpublished science results, collaborator names or data that
  belong to others, or anything from a private repo. Linking a private repo is fine only if he
  says so. When unsure, write at the level of methods and motivation, leave out the numbers,
  and say so in your reply.
- No credentials, tokens, personal data, or local file paths.
- Yash removed the Honours, Teaching & service and Work log sections, and the GPA: do not re-add them.
- The top blurb states research *interests* (including multi-messenger science), not claimed
  work: do not describe multi-messenger work as done.
- Do not reword CV content in `index.html`; if it needs a change, tell Yash.

## Links

Papers, posters, slides and code links open in a new tab (`target="_blank" rel="noopener"`),
both in `index.html` and for `links:` entries in markdown pages.

## Layout

- `index.html`: home page (CV content is static HTML; edit by hand when asked)
- `assets/panel.js` + `assets/panel.css`: on desktop, clicking a Research tile opens that project in a side panel (tiles glide into a column; reads `research/index.json`; deep link `#research/<slug>`)
- `project.html` + `assets/project.js`: the same project as a full page (phones, no-JS, and the panel's "Open as a full page" link)
- `research/*.md`: research project pages; `research/_TEMPLATE.md` is skipped by the indexer
- `assets/img/` + `assets/swap.js`: the two hero photos (crossfade; captions live in `data-caption` attributes in `index.html`)
- `assets/reveal.js`: scroll-in animations; `assets/cv/`: the CV PDF and its thumbnail
- `scripts/build_index.py`: generates `research/index.json`
- `.github/workflows/pages.yml`: builds and deploys on every push to `main`
- `assets/vendor/marked.min.js`: vendored Markdown renderer (MIT)

# yash739.github.io

Portfolio of Yashowardhan Rai: <https://yash739.github.io>

A plain static site (HTML/CSS/JS) deployed by GitHub Actions. The CV content lives in
`index.html`. The **work log** is a folder of markdown files, one per piece of work, so
anyone (or any Claude thread) can add a section by adding a single file.

## Add a work-log entry

```bash
cp work/_TEMPLATE.md work/2026-10-08-my-topic.md   # edit it
python3 scripts/build_index.py                      # validates + generates work/index.json
python3 -m http.server 8000                         # preview at http://localhost:8000/work.html
git add work && git commit -m "Work log: my topic" && git push
```

Full conventions, including what not to publish, are in [AGENTS.md](AGENTS.md).

## How it deploys

On every push to `main`, `.github/workflows/pages.yml` runs `scripts/build_index.py`
and publishes the site with GitHub Pages (Settings, Pages, Source: GitHub Actions).

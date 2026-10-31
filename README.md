# yash739.github.io

Portfolio of Yashowardhan Rai: <https://yash739.github.io>

A plain static site (HTML/CSS/JS) deployed by GitHub Actions. The CV content lives in
`index.html`. Each Research tile opens a project page that is a markdown file in `research/`,
so a project (or any Claude thread) can add its write-up by editing one file.

## Edit a project page

```bash
# edit research/<project>.md, then:
python3 scripts/build_index.py                 # validates + generates research/index.json
python3 -m http.server 8000                    # preview at http://localhost:8000/project.html#<project>
git add research && git commit -m "Project page: <project>" && git push
```

Full conventions, including what not to publish, are in [AGENTS.md](AGENTS.md).

## How it deploys

On every push to `main`, `.github/workflows/pages.yml` runs `scripts/build_index.py`
and publishes the site with GitHub Pages (Settings, Pages, Source: GitHub Actions).

---
title: Building this portfolio site
date: 2026-10-08
summary: How the site is put together, and how any project thread can add its own write-up with a single file.
tags: [meta, web]
status: done
links: Source | https://github.com/yash739/yash739.github.io
---

This site is plain HTML, CSS and a little JavaScript, deployed to GitHub Pages. There is no framework and no build toolchain to maintain.

## How the work log works

Each entry on this page is one markdown file in `work/`. When something is pushed to `main`, a short Python script (standard library only) reads the files, checks their front matter and writes an index. The browser renders each entry with a small Markdown library.

Because every thread adds its own file rather than editing a shared one, several threads can contribute at the same time without merge conflicts.

## Adding an entry

Copy `work/_TEMPLATE.md`, fill in the title, date and a one-line summary, write the body, and push. The conventions, including what should not be published, are in `AGENTS.md` at the root of the repository.

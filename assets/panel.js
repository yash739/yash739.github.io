// Research tiles: click opens the project beside the tiles; the tiles glide into a column (FLIP).
// On narrow screens, and without JS, tiles are normal links to project.html#<slug>.
(function () {
  "use strict";
  var section = document.getElementById("research");
  if (!section) return;
  var grid = section.querySelector(".cards");
  var cards = Array.prototype.slice.call(grid.querySelectorAll(".card"));
  var wide = window.matchMedia("(min-width: 52.01rem)");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var EASE = "cubic-bezier(0.2, 0.8, 0.2, 1)";
  var data = null, panel = null, content = null, current = null, busy = false;

  function slugOf(a) { return (a.getAttribute("href").split("#")[1] || ""); }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  // FLIP: remember where tiles are, change layout, then animate each tile from old to new position.
  function flip(change, instant) {
    var before = cards.map(function (c) { return c.getBoundingClientRect(); });
    change();
    if (instant || reduce) return;
    cards.forEach(function (c, i) {
      var after = c.getBoundingClientRect();
      var dx = before[i].left - after.left, dy = before[i].top - after.top;
      if (!dx && !dy) return;
      c.animate([{ transform: "translate(" + dx + "px," + dy + "px)" }, { transform: "translate(0,0)" }],
        { duration: 750, easing: EASE, delay: i * 28, fill: "backwards" });
    });
  }

  function fill(item) {
    content.replaceChildren();
    var close = el("button", "rv-close", "×");
    close.type = "button";
    close.setAttribute("aria-label", "Close project");
    close.addEventListener("click", function () { closePanel(); });
    var title = el("h3", "rv-title", item.title);
    title.tabIndex = -1;
    content.appendChild(close);
    content.appendChild(title);
    var meta = [item.guide, item.period].filter(Boolean).join(" · ");
    if (meta) content.appendChild(el("p", "rv-meta", meta));
    if (item.summary) content.appendChild(el("p", "rv-lede", item.summary));
    if (item.tags && item.tags.length) {
      var t = el("div", "tags");
      item.tags.forEach(function (x) { t.appendChild(el("span", "tag", x)); });
      content.appendChild(t);
    }
    if (item.links && item.links.length) {
      var l = el("div", "links");
      item.links.forEach(function (k) {
        var a = el("a", "btn", k.label);
        a.href = k.url; a.target = "_blank"; a.rel = "noopener";
        l.appendChild(a);
      });
      content.appendChild(l);
    }
    var body = el("div", "prose");
    body.innerHTML = window.marked ? marked.parse(item.body || "") : "";
    content.appendChild(body);
    var full = el("a", "rv-full", "Open as a full page ↗");
    full.href = "project.html#" + item.slug;
    content.appendChild(full);
    return title;
  }

  function stagger() {
    if (reduce) return;
    Array.prototype.forEach.call(content.children, function (c, i) {
      c.animate([{ opacity: 0, transform: "translateY(12px)" }, { opacity: 1, transform: "none" }],
        { duration: 520, easing: EASE, delay: 160 + i * 45, fill: "backwards" });
    });
  }

  function mark(slug) {
    cards.forEach(function (c) { c.classList.toggle("is-active", slugOf(c) === slug); });
  }

  function find(slug) { return data && data.filter(function (d) { return d.slug === slug; })[0]; }

  function openPanel(slug, instant) {
    var item = find(slug);
    if (!item || busy) return;
    if (!panel) {
      panel = el("aside", "rv-panel");
      panel.setAttribute("aria-label", "Project details");
      var inner = el("div", "rv-inner");
      content = el("div", "rv-content");
      inner.appendChild(content);
      panel.appendChild(inner);
      var title;
      flip(function () {
        grid.classList.add("is-open");
        grid.appendChild(panel);
        title = fill(item);
        mark(slug);
      }, instant);
      if (!instant && !reduce) {
        inner.animate(
          [{ clipPath: "inset(0 100% 0 0 round 16px)", opacity: 0, transform: "translateX(-18px)" },
           { clipPath: "inset(0 0 0 0 round 16px)", opacity: 1, transform: "none" }],
          { duration: 700, easing: EASE, delay: 120, fill: "backwards" });
        stagger();
      }
      if (!instant) title.focus({ preventScroll: true });
    } else if (slug !== current) {
      busy = true;
      var inner2 = panel.firstElementChild;
      var done = function () {
        var title2 = fill(item);
        inner2.scrollTop = 0;
        mark(slug);
        stagger();
        busy = false;
        title2.focus({ preventScroll: true });
      };
      if (reduce) { done(); }
      else {
        content.animate([{ opacity: 1 }, { opacity: 0, transform: "translateY(6px)" }],
          { duration: 160, easing: "ease-in", fill: "forwards" });
        setTimeout(function () {
          content.getAnimations().forEach(function (a) { a.cancel(); });
          done();
        }, 170);
      }
    }
    current = slug;
    history.replaceState(null, "", "#research/" + slug);
  }

  function closePanel(instant) {
    if (!panel || busy) return;
    var p = panel, back = cards.filter(function (c) { return slugOf(c) === current; })[0];
    var finish = function () {
      flip(function () {
        p.remove();
        grid.classList.remove("is-open");
        mark(null);
      }, instant);
      panel = null; content = null; current = null; busy = false;
      history.replaceState(null, "", location.pathname + location.search + "#research");
      if (back && !instant) back.focus({ preventScroll: true });
    };
    if (instant || reduce) { finish(); return; }
    busy = true;
    p.firstElementChild.animate(
      [{ clipPath: "inset(0 0 0 0 round 16px)", opacity: 1 }, { clipPath: "inset(0 100% 0 0 round 16px)", opacity: 0 }],
      { duration: 320, easing: "ease-in", fill: "forwards" });
    setTimeout(finish, 330);
  }

  grid.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a.card");
    if (!a || !wide.matches || !data) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    var slug = slugOf(a);
    if (slug === current) closePanel(); else openPanel(slug);
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closePanel(); });
  wide.addEventListener("change", function () { if (!wide.matches) closePanel(true); });

  fetch("research/index.json", { cache: "no-cache" })
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(function (d) {
      data = d;
      var m = location.hash.match(/^#research\/(.+)$/);
      if (m && wide.matches) { openPanel(decodeURIComponent(m[1]), true); section.scrollIntoView(); }
    })
    .catch(function () { data = null; });
})();

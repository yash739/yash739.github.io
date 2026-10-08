// Opens papers, posters and slides in a pop-up window.
// Any <a data-embed href="..."> (optionally data-title="...") opens in the viewer;
// Viewer.canEmbed(url) tells other scripts whether a URL is supported.
// Supported: arXiv (abs or pdf), Google Slides, Google Drive files. Anything else opens normally.
(function () {
  "use strict";

  function embedUrl(url) {
    var m;
    if ((m = url.match(/^https?:\/\/arxiv\.org\/(?:abs|pdf)\/([\w.\-\/]+?)(?:\.pdf)?$/))) {
      return "https://arxiv.org/pdf/" + m[1];
    }
    if ((m = url.match(/^https:\/\/docs\.google\.com\/presentation\/d\/([\w\-]+)/))) {
      return "https://docs.google.com/presentation/d/" + m[1] + "/embed?start=false&loop=false";
    }
    if ((m = url.match(/^https:\/\/drive\.google\.com\/file\/d\/([\w\-]+)/))) {
      return "https://drive.google.com/file/d/" + m[1] + "/preview";
    }
    return null;
  }

  var dialog, frame, titleEl, newTab;

  function build() {
    dialog = document.createElement("dialog");
    dialog.className = "viewer";
    dialog.setAttribute("aria-label", "Document viewer");

    var bar = document.createElement("div");
    bar.className = "viewer-bar";
    titleEl = document.createElement("span");
    titleEl.className = "viewer-title";
    newTab = document.createElement("a");
    newTab.className = "viewer-open";
    newTab.target = "_blank";
    newTab.rel = "noopener";
    newTab.textContent = "Open in new tab ↗";
    var close = document.createElement("button");
    close.type = "button";
    close.className = "viewer-close";
    close.setAttribute("aria-label", "Close");
    close.textContent = "×";
    close.addEventListener("click", function () { dialog.close(); });
    bar.append(titleEl, newTab, close);

    frame = document.createElement("iframe");
    frame.className = "viewer-frame";
    frame.setAttribute("allow", "fullscreen");
    frame.setAttribute("referrerpolicy", "no-referrer");
    frame.title = "Document";

    var note = document.createElement("p");
    note.className = "viewer-note";
    note.textContent = "If the document does not appear here, use “Open in new tab”.";

    dialog.append(bar, frame, note);
    dialog.addEventListener("click", function (e) { if (e.target === dialog) dialog.close(); });
    dialog.addEventListener("close", function () { if (!dialog.open) frame.removeAttribute("src"); });
    document.body.appendChild(dialog);
  }

  function open(url, title) {
    var src = embedUrl(url);
    if (!src || typeof HTMLDialogElement === "undefined") { window.open(url, "_blank", "noopener"); return; }
    if (!dialog) build();
    titleEl.textContent = title || "Document";
    frame.title = title || "Document";
    newTab.href = url;
    frame.src = src;
    dialog.showModal();
  }

  document.addEventListener("click", function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
    var a = e.target.closest && e.target.closest("a[data-embed]");
    if (!a) return;
    e.preventDefault();
    open(a.href, a.getAttribute("data-title") || a.textContent.trim());
  });

  window.Viewer = { canEmbed: function (u) { return !!embedUrl(u); }, open: open };
})();

// Scroll-triggered reveal for the home page. CSS hides the listed elements only while
// <html> has the "js" class (set inline in the page head); this adds "in" as they scroll into view.
(function () {
  "use strict";
  var root = document.documentElement;
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) { root.classList.remove("js"); return; }

  var LIST = "#about .wrap > :not(h2), section > .wrap > h2, #research .card, .two > div, .cv > *, .contact-list li, #work-log .wrap > p";
  var els = document.querySelectorAll(LIST);

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

  Array.prototype.forEach.call(els, function (el) {
    var sibs = Array.prototype.filter.call(el.parentNode.children, function (c) { return c.matches(LIST); });
    var step = el.classList.contains("card") ? 2 : 6;
    el.style.setProperty("--d", (sibs.indexOf(el) % step) * 0.09 + "s");
    io.observe(el);
  });
})();

// Alternates the hero photos: crossfades every few seconds, pauses on hover/focus,
// click or tap swaps immediately. No autoplay when the visitor prefers reduced motion.
(function () {
  "use strict";
  var btn = document.querySelector(".portrait .swap");
  if (!btn) return;
  var imgs = btn.querySelectorAll("img");
  var cap = document.querySelector(".portrait figcaption");
  if (imgs.length < 2) return;
  var i = 0, timer = null;
  function show(n) {
    imgs[i].classList.remove("on");
    i = (n + imgs.length) % imgs.length;
    imgs[i].classList.add("on");
    if (cap) cap.textContent = imgs[i].getAttribute("data-caption") || "";
  }
  function start() {
    if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    stop();
    timer = setInterval(function () { show(i + 1); }, 5000);
  }
  function stop() { if (timer) { clearInterval(timer); timer = null; } }
  btn.addEventListener("click", function () { show(i + 1); start(); });
  btn.addEventListener("mouseenter", stop);
  btn.addEventListener("mouseleave", start);
  btn.addEventListener("focus", stop);
  btn.addEventListener("blur", start);
  start();
})();

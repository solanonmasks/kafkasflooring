// Site motion (ported from the design handoff's motion.js). Plain JavaScript, no framework.
// - Reveal on scroll: text blocks and images fade up (opacity 0 / translateY(28px) -> visible),
//   with a 90ms stagger between siblings (max 5).
// - Hero zoom: a full-bleed background image eases from scale(1.08) to 1 over 2.8s on load.
// - Hover zoom: an image inside an overflow:hidden box scales to 1.045 when hovered.
// - Visitors who ask for reduced motion (OS setting) get no reveal or hero zoom.
// To turn all motion off, remove the <script src="/motion.js"> line in src/layouts/Base.astro.
(() => {
  if (window.__siteMotion) return; window.__siteMotion = true;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const EASE = 'cubic-bezier(.2,.7,.2,1)';
  const done = new WeakSet();
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      el.style.opacity = '1';
      el.style.transform = 'none';
      io.unobserve(el);
      setTimeout(() => { el.style.transition = ''; el.style.willChange = ''; }, 1600);
    });
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });

  function kenBurns(img) {
    if (done.has(img)) return; done.add(img);
    if (reduce) return;
    img.style.transform = 'scale(1.08)';
    img.style.transition = 'transform 2.8s ' + EASE;
    requestAnimationFrame(() => requestAnimationFrame(() => { img.style.transform = 'scale(1)'; }));
  }
  function hoverZoom(img) {
    if (reduce) return;
    if (img.closest('[data-no-zoom]')) return; // e.g. the before/after slider
    const box = img.parentElement;
    if (!box || box.__hz) return;
    if (getComputedStyle(box).overflow !== 'hidden') return;
    box.__hz = true;
    img.style.transition = 'transform 1.1s ' + EASE;
    const host = box.closest('a') || box;
    host.addEventListener('mouseenter', () => { img.style.transform = 'scale(1.045)'; });
    host.addEventListener('mouseleave', () => { img.style.transform = 'scale(1)'; });
  }

  function scan() {
    const cands = new Set();
    document.querySelectorAll('main img, section img').forEach((img) => {
      if (img.closest('header')) return;
      const abs = getComputedStyle(img).position === 'absolute';
      const p = img.parentElement;
      if (abs && p && p.tagName === 'SECTION') { kenBurns(img); return; }
      hoverZoom(img);
      const target = p;
      if (target && target.tagName !== 'SECTION' && target.tagName !== 'MAIN') cands.add(target);
    });
    document.querySelectorAll('main h1, main h2, main h3, main p, main blockquote, main form, main aside, main figure, section h2, section p, footer > div').forEach((el) => {
      if (!el.closest('header')) cands.add(el);
    });
    const list = [...cands].filter((el) => !done.has(el));
    const filtered = list.filter((el) => { let a = el.parentElement; while (a) { if (cands.has(a)) return false; a = a.parentElement; } return true; });
    filtered.forEach((el) => {
      done.add(el);
      if (reduce) return;
      const sibs = [...el.parentElement.children].filter((c) => cands.has(c));
      const i = Math.max(0, sibs.indexOf(el));
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      el.style.willChange = 'opacity, transform';
      el.style.transition = `opacity .9s ${EASE} ${Math.min(i, 5) * 90}ms, transform 1s ${EASE} ${Math.min(i, 5) * 90}ms`;
      io.observe(el);
    });
  }
  let queued = false;
  const queue = () => { if (queued) return; queued = true; requestAnimationFrame(() => { queued = false; scan(); }); };
  new MutationObserver(queue).observe(document.documentElement, { childList: true, subtree: true });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', queue); else queue();
  setTimeout(queue, 400);
})();

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function splitWords(el: HTMLElement): HTMLElement[] {
  const text = el.textContent?.trim() || '';
  const words = text.split(/\s+/);
  el.innerHTML = words
    .map((w) => `<span class="gsap-word"><span class="gsap-word-inner">${w}</span></span>`)
    .join(' ');
  return Array.from(el.querySelectorAll<HTMLElement>('.gsap-word-inner'));
}

// ---------------------------------------------------------------------------
// Hero (on-load, no ScrollTrigger)
// ---------------------------------------------------------------------------

function setupHeroReveal(): void {
  const wordEls = document.querySelectorAll<HTMLElement>('[data-gsap-hero-words]');
  wordEls.forEach((el) => {
    const words = splitWords(el);
    gsap.from(words, {
      yPercent: 110,
      duration: 1.2,
      stagger: 0.07,
      ease: 'expo.out',
      delay: 0.1,
    });
  });

  const revealEls = document.querySelectorAll<HTMLElement>('[data-gsap-hero-reveal]');
  if (revealEls.length > 0) {
    gsap.from(Array.from(revealEls), {
      y: 24,
      opacity: 0,
      duration: 1,
      stagger: 0.12,
      ease: 'expo.out',
      delay: 0.55,
    });
  }
}

// ---------------------------------------------------------------------------
// Scroll-triggered word reveals
// ---------------------------------------------------------------------------

function setupWordReveals(): void {
  document.querySelectorAll<HTMLElement>('[data-gsap-words]').forEach((el) => {
    const words = splitWords(el);
    const trigger = el.closest<HTMLElement>('[data-gsap-trigger]') || el;
    gsap.from(words, {
      yPercent: 110,
      duration: 1,
      stagger: 0.055,
      ease: 'expo.out',
      scrollTrigger: { trigger, start: 'top 88%' },
    });
  });
}

// ---------------------------------------------------------------------------
// Fade + translate reveals
// ---------------------------------------------------------------------------

function setupFadeReveals(): void {
  document.querySelectorAll<HTMLElement>('[data-gsap-reveal]').forEach((el) => {
    const delay = parseFloat((el as HTMLElement).dataset.gsapDelay || '0');
    gsap.from(el, {
      y: 36,
      opacity: 0,
      duration: 0.95,
      delay,
      ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 88%' },
    });
  });
}

// ---------------------------------------------------------------------------
// Stagger children
// ---------------------------------------------------------------------------

function setupStaggerGroups(): void {
  document.querySelectorAll<HTMLElement>('[data-gsap-stagger]').forEach((group) => {
    const children = Array.from(group.children) as HTMLElement[];
    const delay = parseFloat(group.dataset.gsapDelay || '0');
    gsap.from(children, {
      y: 44,
      opacity: 0,
      duration: 0.9,
      stagger: 0.1,
      delay,
      ease: 'expo.out',
      scrollTrigger: { trigger: group, start: 'top 85%' },
    });
  });
}

// ---------------------------------------------------------------------------
// Parallax (scrub)
// ---------------------------------------------------------------------------

function setupParallax(): void {
  document.querySelectorAll<HTMLElement>('[data-gsap-parallax]').forEach((el) => {
    const amount = parseFloat(el.dataset.gsapParallax || '20');
    gsap.to(el, {
      y: amount,
      ease: 'none',
      scrollTrigger: {
        trigger: el.parentElement || el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.2,
      },
    });
  });
}

// ---------------------------------------------------------------------------
// Number counters
// ---------------------------------------------------------------------------

function setupCounters(): void {
  document.querySelectorAll<HTMLElement>('[data-gsap-counter]').forEach((el) => {
    const target = parseInt(el.dataset.gsapCounter || '0', 10);
    if (!Number.isFinite(target)) return;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 1.6,
      ease: 'expo.out',
      onUpdate() {
        el.textContent = Math.round(obj.val).toLocaleString();
      },
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });
}

// ---------------------------------------------------------------------------
// Horizontal line scale-in
// ---------------------------------------------------------------------------

function setupLineReveals(): void {
  document.querySelectorAll<HTMLElement>('[data-gsap-line]').forEach((el) => {
    gsap.from(el, {
      scaleX: 0,
      transformOrigin: 'left center',
      duration: 1.2,
      ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 92%' },
    });
  });
}

// ---------------------------------------------------------------------------
// Image strip — subtle horizontal drift on scroll
// ---------------------------------------------------------------------------

function setupImageStrip(): void {
  const strip = document.querySelector<HTMLElement>('[data-gsap-strip]');
  if (!strip) return;
  gsap.to(strip, {
    x: '-6%',
    ease: 'none',
    scrollTrigger: {
      trigger: strip.parentElement || strip,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.5,
    },
  });
}

// ---------------------------------------------------------------------------
// Values cursor-drag hover — image follows cursor with horizontal lag
// ---------------------------------------------------------------------------

function setupValueHover(): void {
  const section = document.querySelector<HTMLElement>('[data-value-section]');
  const rows = document.querySelectorAll<HTMLElement>('[data-value-item]');
  const cursorEl = document.querySelector<HTMLElement>('[data-value-cursor]');
  const imgs = document.querySelectorAll<HTMLElement>('[data-value-cursor-img]');
  if (!section || !rows.length || !cursorEl || !imgs.length) return;

  // Centre the element on the cursor via percent
  gsap.set(cursorEl, { xPercent: -50, yPercent: -50 });

  // X lags more → "dragging" feel; Y is snappier
  const xTo = gsap.quickTo(cursorEl, 'x', { duration: 0.85, ease: 'power3.out' });
  const yTo = gsap.quickTo(cursorEl, 'y', { duration: 0.35, ease: 'power3.out' });

  let currentImg = -1;

  function activateImg(idx: number): void {
    if (idx === currentImg) return;
    if (currentImg >= 0) gsap.set(imgs[currentImg], { autoAlpha: 0 });
    gsap.set(imgs[idx], { autoAlpha: 1 });
    currentImg = idx;
  }

  section.addEventListener('mousemove', (e: MouseEvent) => {
    xTo(e.clientX);
    yTo(e.clientY);
  });

  rows.forEach((row) => {
    const idx = parseInt(row.dataset.valueItem ?? '0', 10);
    row.addEventListener('mouseenter', () => {
      activateImg(idx);
      gsap.to(cursorEl, { autoAlpha: 1, scale: 1, duration: 0.35, ease: 'expo.out' });
    });
    row.addEventListener('mouseleave', () => {
      gsap.to(cursorEl, { autoAlpha: 0, scale: 0.88, duration: 0.25, ease: 'expo.in' });
    });
  });
}

// ---------------------------------------------------------------------------
// Pathway hover — swap image on step mouseenter
// ---------------------------------------------------------------------------

function setupPathwayHover(): void {
  const steps = document.querySelectorAll<HTMLElement>('[data-pathway-step]');
  const images = document.querySelectorAll<HTMLElement>('[data-pathway-img]');
  if (!steps.length || !images.length) return;

  let current = -1;

  function showImage(idx: number): void {
    if (idx === current) return;
    if (current >= 0) {
      gsap.to(images[current], { opacity: 0, scale: 1.06, duration: 0.4, ease: 'expo.inOut' });
    }
    gsap.to(images[idx], { opacity: 1, scale: 1, duration: 0.55, ease: 'expo.out' });
    current = idx;
  }

  steps.forEach((step) => {
    const idx = parseInt(step.dataset.pathwayStep ?? '0', 10);
    step.addEventListener('mouseenter', () => showImage(idx));
  });
}

// ---------------------------------------------------------------------------
// Steep scroll stagger — each child scrubs in from far below individually
// ---------------------------------------------------------------------------

function setupSteepStagger(): void {
  document.querySelectorAll<HTMLElement>('[data-gsap-steep-stagger]').forEach((el) => {
    const children = Array.from(el.children) as HTMLElement[];
    if (!children.length) return;

    children.forEach((child) => {
      gsap.from(child, {
        opacity: 0,
        y: 110,
        duration: 1,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: child,
          start: 'top 92%',
          end: 'top 55%',
          scrub: 0.9,
        },
      });
    });
  });
}

// ---------------------------------------------------------------------------
// Public entry
// ---------------------------------------------------------------------------

export function setupGsapEffects(): void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  setupHeroReveal();
  setupWordReveals();
  setupFadeReveals();
  setupStaggerGroups();
  setupParallax();
  setupCounters();
  setupLineReveals();
  setupImageStrip();
  setupPathwayHover();
  setupValueHover();
  setupSteepStagger();
}

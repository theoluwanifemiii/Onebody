'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function splitWords(el: HTMLElement): HTMLElement[] {
  const text = el.textContent?.trim() || '';
  const words = text.split(/\s+/);
  el.innerHTML = words
    .map((w) => `<span class="gsap-word"><span class="gsap-word-inner">${w}</span></span>`)
    .join(' ');
  return Array.from(el.querySelectorAll<HTMLElement>('.gsap-word-inner'));
}

export default function GsapEffects() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let cleanup: (() => void) | undefined;

    import('gsap').then(async ({ default: gsap }) => {
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      // Without this, ScrollTrigger.refresh() below tries to restore the
      // previous page's scroll position proportionally onto the new page's
      // (different) height — e.g. 25% down the old page becomes 25% down
      // the new one, landing well past the top after every route change.
      ScrollTrigger.clearScrollMemory();

      // Kill all previous ScrollTriggers on navigation
      ScrollTrigger.getAll().forEach((t) => t.kill());

      // Hero reveals (no scroll trigger)
      document.querySelectorAll<HTMLElement>('[data-gsap-hero-words]').forEach((el) => {
        const words = splitWords(el);
        gsap.from(words, { yPercent: 110, duration: 1.2, stagger: 0.07, ease: 'expo.out', delay: 0.1 });
      });

      document.querySelectorAll<HTMLElement>('[data-gsap-hero-reveal]').forEach((el) => {
        const delay = parseFloat(el.dataset.gsapDelay || '0');
        gsap.from(el, { y: 24, opacity: 0, duration: 1, ease: 'expo.out', delay: 0.55 + delay });
      });

      // Scroll word reveals
      document.querySelectorAll<HTMLElement>('[data-gsap-words]').forEach((el) => {
        const words = splitWords(el);
        const trigger = el.closest<HTMLElement>('[data-gsap-trigger]') || el;
        gsap.from(words, {
          yPercent: 110, duration: 1, stagger: 0.055, ease: 'expo.out',
          immediateRender: false,
          scrollTrigger: { trigger, start: 'top 88%' },
        });
      });

      // Fade reveals
      document.querySelectorAll<HTMLElement>('[data-gsap-reveal]').forEach((el) => {
        const delay = parseFloat(el.dataset.gsapDelay || '0');
        gsap.from(el, {
          y: 36, opacity: 0, duration: 0.95, delay, ease: 'expo.out',
          immediateRender: false,
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });

      // Stagger groups
      document.querySelectorAll<HTMLElement>('[data-gsap-stagger]').forEach((group) => {
        const children = Array.from(group.children) as HTMLElement[];
        const delay = parseFloat(group.dataset.gsapDelay || '0');
        gsap.from(children, {
          y: 44, opacity: 0, duration: 0.9, stagger: 0.1, delay, ease: 'expo.out',
          immediateRender: false,
          scrollTrigger: { trigger: group, start: 'top 85%' },
        });
      });

      // Parallax
      document.querySelectorAll<HTMLElement>('[data-gsap-parallax]').forEach((el) => {
        const amount = parseFloat(el.dataset.gsapParallax || '20');
        gsap.to(el, {
          y: amount, ease: 'none',
          scrollTrigger: { trigger: el.parentElement || el, start: 'top bottom', end: 'bottom top', scrub: 1.2 },
        });
      });

      // Number counters
      document.querySelectorAll<HTMLElement>('[data-gsap-counter]').forEach((el) => {
        const target = parseInt(el.dataset.gsapCounter || '0', 10);
        if (!Number.isFinite(target)) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target, duration: 1.6, ease: 'expo.out',
          onUpdate() { el.textContent = Math.round(obj.val).toLocaleString(); },
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        });
      });

      // Line scale-in
      document.querySelectorAll<HTMLElement>('[data-gsap-line]').forEach((el) => {
        gsap.from(el, {
          scaleX: 0, transformOrigin: 'left center', duration: 1.2, ease: 'expo.out',
          immediateRender: false,
          scrollTrigger: { trigger: el, start: 'top 92%' },
        });
      });

      // Image strip horizontal drift
      const strip = document.querySelector<HTMLElement>('[data-gsap-strip]');
      if (strip) {
        gsap.to(strip, {
          x: '-6%', ease: 'none',
          scrollTrigger: { trigger: strip.parentElement || strip, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
        });
      }

      // Pathway hover (step → image swap)
      const steps = document.querySelectorAll<HTMLElement>('[data-pathway-step]');
      const pathwayImages = document.querySelectorAll<HTMLElement>('[data-pathway-img]');
      if (steps.length && pathwayImages.length) {
        let currentPathway = -1;
        steps.forEach((step) => {
          const idx = parseInt(step.dataset.pathwayStep ?? '0', 10);
          step.addEventListener('mouseenter', () => {
            if (idx === currentPathway) return;
            if (currentPathway >= 0) {
              gsap.to(pathwayImages[currentPathway], { opacity: 0, scale: 1.06, duration: 0.4, ease: 'expo.inOut' });
            }
            gsap.to(pathwayImages[idx], { opacity: 1, scale: 1, duration: 0.55, ease: 'expo.out' });
            currentPathway = idx;
          });
        });
      }

      // Value cursor hover
      const valueSection = document.querySelector<HTMLElement>('[data-value-section]');
      const valueRows = document.querySelectorAll<HTMLElement>('[data-value-item]');
      const valueCursor = document.querySelector<HTMLElement>('[data-value-cursor]');
      const valueCursorImgs = document.querySelectorAll<HTMLElement>('[data-value-cursor-img]');
      if (valueSection && valueRows.length && valueCursor && valueCursorImgs.length) {
        gsap.set(valueCursor, { xPercent: -50, yPercent: -50 });
        const xTo = gsap.quickTo(valueCursor, 'x', { duration: 0.85, ease: 'power3.out' });
        const yTo = gsap.quickTo(valueCursor, 'y', { duration: 0.35, ease: 'power3.out' });
        let currentValue = -1;
        valueSection.addEventListener('mousemove', (e: MouseEvent) => { xTo(e.clientX); yTo(e.clientY); });
        valueRows.forEach((row) => {
          const idx = parseInt(row.dataset.valueItem ?? '0', 10);
          row.addEventListener('mouseenter', () => {
            if (idx !== currentValue) {
              if (currentValue >= 0) gsap.set(valueCursorImgs[currentValue], { autoAlpha: 0 });
              gsap.set(valueCursorImgs[idx], { autoAlpha: 1 });
              currentValue = idx;
            }
            gsap.to(valueCursor, { autoAlpha: 1, scale: 1, duration: 0.35, ease: 'expo.out' });
          });
          row.addEventListener('mouseleave', () => {
            gsap.to(valueCursor, { autoAlpha: 0, scale: 0.88, duration: 0.25, ease: 'expo.in' });
          });
        });
      }

      // Steep stagger
      document.querySelectorAll<HTMLElement>('[data-gsap-steep-stagger]').forEach((el) => {
        const children = Array.from(el.children) as HTMLElement[];
        children.forEach((child) => {
          gsap.from(child, {
            opacity: 0, y: 110, duration: 1, ease: 'expo.out',
            immediateRender: false,
            scrollTrigger: { trigger: child, start: 'top 92%', end: 'top 55%', scrub: 0.9 },
          });
        });
      });

      // ── Apple-style animations ────────────────────────────────────────────
      // Slide in from left
      document.querySelectorAll<HTMLElement>('[data-apple-slide-left]').forEach((el) => {
        gsap.from(el, {
          x: -80, opacity: 0, duration: 1.1, ease: 'expo.out',
          immediateRender: false,
          scrollTrigger: { trigger: el, start: 'top 85%' },
        });
      });

      // Slide in from right
      document.querySelectorAll<HTMLElement>('[data-apple-slide-right]').forEach((el) => {
        gsap.from(el, {
          x: 80, opacity: 0, duration: 1.1, ease: 'expo.out',
          immediateRender: false,
          scrollTrigger: { trigger: el, start: 'top 85%' },
        });
      });

      // Scale up + fade (product reveal)
      document.querySelectorAll<HTMLElement>('[data-apple-scale-up]').forEach((el) => {
        gsap.from(el, {
          scale: 0.86, opacity: 0, duration: 1.3, ease: 'expo.out',
          immediateRender: false,
          scrollTrigger: { trigger: el, start: 'top 82%' },
        });
      });

      // Blur + fade reveal (Apple text cinematic)
      document.querySelectorAll<HTMLElement>('[data-apple-blur]').forEach((el) => {
        gsap.from(el, {
          opacity: 0, filter: 'blur(14px)', y: 30, duration: 1.2, ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: el, start: 'top 82%' },
        });
      });

      // Clip-path wipe left→right (curtain reveal per list item)
      document.querySelectorAll<HTMLElement>('[data-apple-clip]').forEach((el, i) => {
        gsap.from(el, {
          clipPath: 'inset(0 100% 0 0)', opacity: 1, duration: 0.9, ease: 'expo.out',
          delay: i * 0.08,
          immediateRender: false,
          scrollTrigger: { trigger: el.closest('[data-apple-clip-group]') || el, start: 'top 85%' },
        });
      });

      // Scroll reveal (IntersectionObserver)
      const revealEls = document.querySelectorAll<HTMLElement>('.reveal');
      if (revealEls.length) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1 }
        );
        revealEls.forEach((el) => observer.observe(el));
        cleanup = () => observer.disconnect();
      }

      // refresh() records the scroll position synchronously and restores it
      // afterward. If we don't force it to 0 right here, it can capture a
      // stale/in-flight position (e.g. mid smooth-scroll) and lock that in
      // as the "resting" scroll position for the new page.
      const html = document.documentElement;
      const prevBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      ScrollTrigger.refresh();
      html.style.scrollBehavior = prevBehavior;
    });

    return () => {
      cleanup?.();
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      });
    };
  }, [pathname]);

  return null;
}

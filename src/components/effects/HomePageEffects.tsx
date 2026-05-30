'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const HOME_IMAGES = Array.from({ length: 20 }, (_, i) => {
  const id = String(i + 1).padStart(2, '0');
  return `/home-gallery/photo-${id}.jpg`;
});

const DESKTOP_TRAIL_INTERVAL_MS = 180;
const DESKTOP_TRAIL_FADE_DELAY_MS = 900;
const DESKTOP_TRAIL_REMOVE_DELAY_MS = 2400;
const DESKTOP_MAX_ACTIVE_IMAGES = 12;

const TOUCH_TRAIL_INTERVAL_MS = 160;
const TOUCH_TRAIL_FADE_DELAY_MS = 360;
const TOUCH_TRAIL_REMOVE_DELAY_MS = 900;
const TOUCH_MAX_ACTIVE_IMAGES = 8;

function trailDisabled(): boolean {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true;
  const nav = navigator as Navigator & { connection?: { saveData?: boolean }; deviceMemory?: number };
  if (nav.connection?.saveData) return true;
  if (typeof nav.deviceMemory === 'number' && nav.deviceMemory <= 2) return true;
  return false;
}

export default function HomePageEffects() {
  const pathname = usePathname();

  useEffect(() => {
    if (trailDisabled()) return;

    const hero = document.querySelector<HTMLElement>('[data-cursor-trail-hero]');
    if (!hero) return;

    const layer = document.createElement('div');
    layer.className = 'cursor-trail-layer';
    layer.setAttribute('aria-hidden', 'true');
    hero.appendChild(layer);

    const trackedImages: HTMLImageElement[] = [];
    let desktopLastSpawnAt = 0;
    let touchLastSpawnAt = 0;
    let imageIndex = 0;
    let touchActive = false;
    let activeTouchPointerId = -1;

    const nextSrc = () => {
      const src = HOME_IMAGES[imageIndex % HOME_IMAGES.length];
      imageIndex += 1;
      return src;
    };

    function spawnImage(x: number, y: number, src: string, opts: {
      fadeDelayMs: number; removeDelayMs: number; maxActiveImages: number; touchMode: boolean;
    }) {
      const img = document.createElement('img');
      img.src = src;
      img.alt = '';
      img.className = 'cursor-trail-image';
      if (opts.touchMode) img.classList.add('cursor-trail-image--touch');
      img.style.left = `${x}px`;
      img.style.top = `${y}px`;
      img.style.setProperty('--trail-rotate', `${Math.random() * 30 - 15}deg`);
      img.style.setProperty('--trail-shift-x', `${Math.random() * 22 - 11}px`);
      img.style.setProperty('--trail-shift-y', `${Math.random() * 22 - 11}px`);
      layer.appendChild(img);
      trackedImages.push(img);
      while (trackedImages.length > opts.maxActiveImages) {
        trackedImages.shift()?.remove();
      }
      requestAnimationFrame(() => img.classList.add('is-visible'));
      window.setTimeout(() => img.classList.add('is-fading'), opts.fadeDelayMs);
      window.setTimeout(() => {
        img.remove();
        const idx = trackedImages.indexOf(img);
        if (idx !== -1) trackedImages.splice(idx, 1);
      }, opts.removeDelayMs);
    }

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      const now = performance.now();
      if (now - desktopLastSpawnAt < DESKTOP_TRAIL_INTERVAL_MS) return;
      desktopLastSpawnAt = now;
      const rect = hero.getBoundingClientRect();
      spawnImage(e.clientX - rect.left, e.clientY - rect.top, nextSrc(), {
        fadeDelayMs: DESKTOP_TRAIL_FADE_DELAY_MS, removeDelayMs: DESKTOP_TRAIL_REMOVE_DELAY_MS,
        maxActiveImages: DESKTOP_MAX_ACTIVE_IMAGES, touchMode: false,
      });
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType !== 'touch') return;
      touchActive = true;
      activeTouchPointerId = e.pointerId;
      touchLastSpawnAt = 0;
      const rect = hero.getBoundingClientRect();
      spawnImage(e.clientX - rect.left, e.clientY - rect.top, nextSrc(), {
        fadeDelayMs: TOUCH_TRAIL_FADE_DELAY_MS, removeDelayMs: TOUCH_TRAIL_REMOVE_DELAY_MS,
        maxActiveImages: TOUCH_MAX_ACTIVE_IMAGES, touchMode: true,
      });
    };

    const onWindowPointerMove = (e: PointerEvent) => {
      if (!touchActive || e.pointerType !== 'touch' || e.pointerId !== activeTouchPointerId) return;
      const now = performance.now();
      if (now - touchLastSpawnAt < TOUCH_TRAIL_INTERVAL_MS) return;
      touchLastSpawnAt = now;
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;
      spawnImage(x, y, nextSrc(), {
        fadeDelayMs: TOUCH_TRAIL_FADE_DELAY_MS, removeDelayMs: TOUCH_TRAIL_REMOVE_DELAY_MS,
        maxActiveImages: TOUCH_MAX_ACTIVE_IMAGES, touchMode: true,
      });
    };

    const onPointerUp = (e: PointerEvent) => {
      if (touchActive && e.pointerId === activeTouchPointerId) { touchActive = false; activeTouchPointerId = -1; }
    };

    hero.addEventListener('pointermove', onPointerMove, { passive: true });
    hero.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('pointermove', onWindowPointerMove, { passive: true });
    window.addEventListener('pointerup', onPointerUp, { passive: true });
    window.addEventListener('pointercancel', onPointerUp, { passive: true });

    return () => {
      hero.removeEventListener('pointermove', onPointerMove);
      hero.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onWindowPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
      layer.remove();
    };
  }, [pathname]);

  return null;
}

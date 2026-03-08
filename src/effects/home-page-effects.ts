const HOME_IMAGES = Array.from({ length: 20 }, (_, index) => {
  const id = String(index + 1).padStart(2, '0');
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

const trailDisabled = (): boolean => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return true;
  }

  const withConnection = navigator as Navigator & {
    connection?: {
      saveData?: boolean;
    };
  };

  if (withConnection.connection?.saveData) {
    return true;
  }

  const withMemory = navigator as Navigator & {
    deviceMemory?: number;
  };

  if (typeof withMemory.deviceMemory === 'number' && withMemory.deviceMemory <= 2) {
    return true;
  }

  return false;
};

const createTrailLayer = (hero: HTMLElement): HTMLElement => {
  const layer = document.createElement('div');
  layer.className = 'cursor-trail-layer';
  layer.setAttribute('aria-hidden', 'true');
  hero.appendChild(layer);
  return layer;
};

const removeTrackedImage = (trackedImages: HTMLImageElement[], image: HTMLImageElement): void => {
  const index = trackedImages.indexOf(image);
  if (index !== -1) {
    trackedImages.splice(index, 1);
  }
};

const spawnTrailImage = (
  layer: HTMLElement,
  trackedImages: HTMLImageElement[],
  x: number,
  y: number,
  src: string,
  options: {
    fadeDelayMs: number;
    removeDelayMs: number;
    maxActiveImages: number;
    touchMode: boolean;
  }
): void => {
  const image = document.createElement('img');
  image.src = src;
  image.alt = '';
  image.className = 'cursor-trail-image';
  if (options.touchMode) {
    image.classList.add('cursor-trail-image--touch');
  }
  image.style.left = `${x}px`;
  image.style.top = `${y}px`;
  image.style.setProperty('--trail-rotate', `${Math.random() * 30 - 15}deg`);
  image.style.setProperty('--trail-shift-x', `${Math.random() * 22 - 11}px`);
  image.style.setProperty('--trail-shift-y', `${Math.random() * 22 - 11}px`);

  layer.appendChild(image);
  trackedImages.push(image);
  while (trackedImages.length > options.maxActiveImages) {
    const oldest = trackedImages.shift();
    oldest?.remove();
  }

  requestAnimationFrame(() => image.classList.add('is-visible'));

  window.setTimeout(() => image.classList.add('is-fading'), options.fadeDelayMs);
  window.setTimeout(() => {
    image.remove();
    removeTrackedImage(trackedImages, image);
  }, options.removeDelayMs);
};

const setupCursorTrail = (): void => {
  if (trailDisabled()) {
    return;
  }

  const hero = document.querySelector<HTMLElement>('[data-home-hero]');
  if (!hero) {
    return;
  }

  const layer = createTrailLayer(hero);
  const trackedImages: HTMLImageElement[] = [];
  let desktopLastSpawnAt = 0;
  let touchLastSpawnAt = 0;
  let imageIndex = 0;
  let touchActive = false;
  let activeTouchPointerId = -1;

  const nextImageSource = (): string => {
    const source = HOME_IMAGES[imageIndex % HOME_IMAGES.length];
    imageIndex += 1;
    return source;
  };

  const spawnDesktopTrail = (x: number, y: number): void => {
    const now = performance.now();
    if (now - desktopLastSpawnAt < DESKTOP_TRAIL_INTERVAL_MS) {
      return;
    }

    desktopLastSpawnAt = now;
    spawnTrailImage(layer, trackedImages, x, y, nextImageSource(), {
      fadeDelayMs: DESKTOP_TRAIL_FADE_DELAY_MS,
      removeDelayMs: DESKTOP_TRAIL_REMOVE_DELAY_MS,
      maxActiveImages: DESKTOP_MAX_ACTIVE_IMAGES,
      touchMode: false
    });
  };

  const spawnTouchTrail = (x: number, y: number): void => {
    const now = performance.now();
    if (now - touchLastSpawnAt < TOUCH_TRAIL_INTERVAL_MS) {
      return;
    }

    touchLastSpawnAt = now;
    spawnTrailImage(layer, trackedImages, x, y, nextImageSource(), {
      fadeDelayMs: TOUCH_TRAIL_FADE_DELAY_MS,
      removeDelayMs: TOUCH_TRAIL_REMOVE_DELAY_MS,
      maxActiveImages: TOUCH_MAX_ACTIVE_IMAGES,
      touchMode: true
    });
  };

  hero.addEventListener(
    'pointermove',
    (event) => {
      if (event.pointerType === 'touch') {
        return;
      }

      const rect = hero.getBoundingClientRect();
      spawnDesktopTrail(event.clientX - rect.left, event.clientY - rect.top);
    },
    { passive: true }
  );

  hero.addEventListener(
    'pointerdown',
    (event) => {
      if (event.pointerType !== 'touch') {
        return;
      }

      touchActive = true;
      activeTouchPointerId = event.pointerId;
      touchLastSpawnAt = 0;
      const rect = hero.getBoundingClientRect();
      spawnTouchTrail(event.clientX - rect.left, event.clientY - rect.top);
    },
    { passive: true }
  );

  window.addEventListener(
    'pointermove',
    (event) => {
      if (!touchActive || event.pointerType !== 'touch') {
        return;
      }

      if (event.pointerId !== activeTouchPointerId) {
        return;
      }

      const rect = hero.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
        return;
      }

      spawnTouchTrail(x, y);
    },
    { passive: true }
  );

  const deactivateTouchTrail = (event: PointerEvent): void => {
    if (!touchActive || event.pointerId !== activeTouchPointerId) {
      return;
    }

    touchActive = false;
    activeTouchPointerId = -1;
  };

  window.addEventListener('pointerup', deactivateTouchTrail, { passive: true });
  window.addEventListener('pointercancel', deactivateTouchTrail, { passive: true });
};

export const setupHomePageEffects = (): void => {
  const isHomePage = document.body.dataset.page === 'home';
  if (!isHomePage) {
    return;
  }

  setupCursorTrail();
};

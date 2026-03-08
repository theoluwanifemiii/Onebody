const ABOUT_PAGE_KEY = 'about';
const TILT_SELECTOR = '[data-tilt-card]';
const COUNTER_SELECTOR = '[data-count]';
const SCAD_STEP_SELECTOR = '[data-scad-step]';

const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

const setupTiltCards = (): void => {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    return;
  }

  const cards = Array.from(document.querySelectorAll<HTMLElement>(TILT_SELECTOR));
  cards.forEach((card) => {
    card.classList.add('about-tilt-card');

    card.addEventListener('pointermove', (event: PointerEvent) => {
      const rect = card.getBoundingClientRect();
      const xRatio = clamp((event.clientX - rect.left) / rect.width, 0, 1);
      const yRatio = clamp((event.clientY - rect.top) / rect.height, 0, 1);
      const maxTilt = 6;

      const tiltX = (0.5 - yRatio) * maxTilt;
      const tiltY = (xRatio - 0.5) * maxTilt;

      card.style.transform = `perspective(900px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateY(-2px)`;
      card.classList.add('is-hovered');
    });

    card.addEventListener('pointerleave', () => {
      card.style.transform = '';
      card.classList.remove('is-hovered');
    });
  });
};

const animateCount = (element: HTMLElement, target: number): void => {
  const durationMs = 1200;
  const startTime = performance.now();
  const formatter = new Intl.NumberFormat('en-US');

  const frame = (now: number): void => {
    const progress = clamp((now - startTime) / durationMs, 0, 1);
    const eased = 1 - (1 - progress) ** 3;
    const value = Math.round(target * eased);
    element.textContent = formatter.format(value);

    if (progress < 1) {
      requestAnimationFrame(frame);
    }
  };

  requestAnimationFrame(frame);
};

const setupCounters = (): void => {
  const counters = Array.from(document.querySelectorAll<HTMLElement>(COUNTER_SELECTOR));
  if (counters.length === 0) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const element = entry.target as HTMLElement;
        const rawTarget = Number.parseInt(element.dataset.count || '0', 10);
        const target = Number.isFinite(rawTarget) ? rawTarget : 0;
        animateCount(element, target);
        currentObserver.unobserve(element);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => {
    observer.observe(counter);
  });
};

const setupScadSteps = (): void => {
  const steps = Array.from(document.querySelectorAll<HTMLElement>(SCAD_STEP_SELECTOR));
  if (steps.length === 0) {
    return;
  }

  steps.forEach((step) => step.classList.add('about-scad-step'));

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const element = entry.target as HTMLElement;
        const index = steps.indexOf(element);
        window.setTimeout(() => {
          element.classList.add('is-active');
        }, Math.max(index, 0) * 120);
        currentObserver.unobserve(element);
      });
    },
    { threshold: 0.25, rootMargin: '0px 0px -8% 0px' }
  );

  steps.forEach((step) => observer.observe(step));
};

export const setupAboutPageEffects = (): void => {
  if (document.body.dataset.page !== ABOUT_PAGE_KEY) {
    return;
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  setupTiltCards();
  setupCounters();
  setupScadSteps();
};

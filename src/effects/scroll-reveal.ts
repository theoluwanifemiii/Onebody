const REVEAL_SELECTOR = [
  'main > section:not([data-home-hero])',
  'main > section article',
  'main > section figure',
  'main > section .rounded-2xl',
  'main > section .rounded-3xl',
  '[data-reveal]'
].join(', ');

const REVEAL_DELAY_STEP_MS = 45;
const REVEAL_DELAY_GROUP_SIZE = 6;

const isInitiallyInView = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= viewportHeight * 0.92;
};

export const setupScrollReveal = (): void => {
  // GSAP pages handle their own animations
  if (document.body.dataset.gsapPage) return;

  const targets = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
  if (targets.length === 0) {
    return;
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const element = entry.target as HTMLElement;
        element.classList.add('is-visible');
        currentObserver.unobserve(element);
      });
    },
    {
      threshold: 0.14,
      rootMargin: '0px 0px -10% 0px'
    }
  );

  targets.forEach((target, index) => {
    target.classList.add('reveal');
    target.style.setProperty(
      '--reveal-delay',
      `${(index % REVEAL_DELAY_GROUP_SIZE) * REVEAL_DELAY_STEP_MS}ms`
    );

    if (isInitiallyInView(target)) {
      target.classList.add('is-visible');
      return;
    }

    observer.observe(target);
  });
};

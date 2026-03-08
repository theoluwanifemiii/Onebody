import gsap from 'gsap';

const OVERLAY_ID = 'page-transition';
const LOGO_ID = 'page-transition-logo';

function getOverlay(): HTMLElement | null {
  return document.getElementById(OVERLAY_ID);
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// ---------------------------------------------------------------------------
// Entry — overlay slides UP to reveal the page (plays on every load)
// ---------------------------------------------------------------------------

function playEntry(): void {
  const overlay = getOverlay();
  if (!overlay) return;

  if (prefersReducedMotion()) {
    // Hide immediately — no animation
    gsap.set(overlay, { autoAlpha: 0 });
    return;
  }

  const logo = document.getElementById(LOGO_ID);
  const tl = gsap.timeline();

  // Logo fades in, holds, then fades out
  if (logo) {
    tl.from(logo, { opacity: 0, y: 10, duration: 0.3, ease: 'expo.out' });
    tl.to(logo, { opacity: 0, duration: 0.2, ease: 'expo.in' }, '+=0.1');
  }

  // Overlay sweeps up to reveal the page
  tl.to(
    overlay,
    {
      yPercent: -100,
      duration: 0.6,
      ease: 'expo.inOut',
      onComplete() {
        // Use autoAlpha so GSAP tracks visibility correctly for re-use
        // Reset position so the exit animation can come from below
        gsap.set(overlay, { autoAlpha: 0, yPercent: 0 });
      },
    },
    logo ? '-=0.05' : 0
  );
}

// ---------------------------------------------------------------------------
// Exit — overlay sweeps UP from below to cover the page, then navigates
// ---------------------------------------------------------------------------

function playExit(href: string): void {
  const overlay = getOverlay();

  if (!overlay || prefersReducedMotion()) {
    window.location.href = href;
    return;
  }

  // Place below viewport, make visible, then sweep up
  gsap.set(overlay, { autoAlpha: 1, yPercent: 100 });

  gsap.to(overlay, {
    yPercent: 0,
    duration: 0.35,
    ease: 'expo.inOut',
    onComplete() {
      window.location.href = href;
    },
  });
}

// ---------------------------------------------------------------------------
// Intercept internal link clicks
// ---------------------------------------------------------------------------

function setupLinkTransitions(): void {
  document.addEventListener('click', (e) => {
    const anchor = (e.target as Element).closest<HTMLAnchorElement>('a[href]');
    if (!anchor) return;

    const href = anchor.getAttribute('href') ?? '';

    if (
      anchor.target === '_blank' ||
      href.startsWith('http') ||
      href.startsWith('//') ||
      href.startsWith('#') ||
      href.startsWith('mailto') ||
      href.startsWith('tel') ||
      href === ''
    )
      return;

    e.preventDefault();
    playExit(href);
  });
}

// ---------------------------------------------------------------------------
// Public entry
// ---------------------------------------------------------------------------

export function setupPageTransitions(): void {
  playEntry();
  setupLinkTransitions();

  // When the browser restores a page from bfcache (back/forward button),
  // DOMContentLoaded does not fire again — the overlay is stuck covering the
  // screen. Re-run the entry animation so the page is visible.
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) playEntry();
  });
}

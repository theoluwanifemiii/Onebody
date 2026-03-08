import gsap from 'gsap';

const AD_IMAGE = '/ads/rain-of-grace.jpeg';
const SHOW_DELAY = 2.2; // seconds after page load

export function setupFlashAd(): void {

  const el = document.createElement('div');
  el.id = 'flash-ad';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-modal', 'true');
  el.setAttribute('aria-label', 'Event announcement');
  el.innerHTML = `
    <div id="flash-ad-backdrop"></div>
    <div id="flash-ad-card">
      <button id="flash-ad-close" aria-label="Close announcement">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <img src="${AD_IMAGE}" alt="Rain of Grace – Youth Revival Tour, Friday 20 March, 10AM" />
      <a
        href="https://www.instagram.com/onebodygospelmusic/"
        target="_blank"
        rel="noopener"
        id="flash-ad-cta"
      >
        Follow for more updates
      </a>
    </div>
  `;

  document.body.appendChild(el);

  const backdrop = el.querySelector<HTMLElement>('#flash-ad-backdrop')!;
  const card = el.querySelector<HTMLElement>('#flash-ad-card')!;
  const closeBtn = el.querySelector<HTMLElement>('#flash-ad-close')!;

  function dismiss(): void {

    gsap.to(card, { scale: 0.88, y: 16, duration: 0.28, ease: 'expo.in' });
    gsap.to(el, {
      autoAlpha: 0,
      duration: 0.35,
      ease: 'expo.in',
      onComplete: () => el.remove(),
    });
  }

  closeBtn.addEventListener('click', dismiss);
  backdrop.addEventListener('click', dismiss);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') dismiss(); });

  // Initial hidden state
  gsap.set(el, { autoAlpha: 0 });
  gsap.set(card, { scale: 0.86, y: 24 });

  gsap.delayedCall(SHOW_DELAY, () => {
    gsap.to(el, { autoAlpha: 1, duration: 0.4, ease: 'expo.out' });
    gsap.to(card, { scale: 1, y: 0, duration: 0.65, ease: 'expo.out' });
  });
}

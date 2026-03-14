'use client';

import { useEffect, useRef, useState } from 'react';

const AD_IMAGE = '/ads/rain-of-grace.jpeg';
const SHOW_DELAY = 2.2;

export default function FlashAd() {
  const [visible, setVisible] = useState(false);
  const elRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let delayCall: ReturnType<typeof setTimeout>;

    import('gsap').then(({ default: gsap }) => {
      const el = elRef.current;
      const card = cardRef.current;
      if (!el || !card) return;

      gsap.set(el, { autoAlpha: 0 });
      gsap.set(card, { scale: 0.86, y: 24 });

      delayCall = setTimeout(() => {
        setVisible(true);
        gsap.to(el, { autoAlpha: 1, duration: 0.4, ease: 'expo.out' });
        gsap.to(card, { scale: 1, y: 0, duration: 0.65, ease: 'expo.out' });
      }, SHOW_DELAY * 1000);
    });

    return () => clearTimeout(delayCall);
  }, []);

  const dismiss = () => {
    import('gsap').then(({ default: gsap }) => {
      const el = elRef.current;
      const card = cardRef.current;
      if (!el || !card) return;
      gsap.to(card, { scale: 0.88, y: 16, duration: 0.28, ease: 'expo.in' });
      gsap.to(el, {
        autoAlpha: 0,
        duration: 0.35,
        ease: 'expo.in',
        onComplete: () => setVisible(false),
      });
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') dismiss(); };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!visible && elRef.current === null) {
    // Render the container even before visible so refs are available
  }

  return (
    <div
      ref={elRef}
      id="flash-ad"
      role="dialog"
      aria-modal="true"
      aria-label="Event announcement"
      style={{ display: visible ? undefined : 'none' }}
    >
      <div id="flash-ad-backdrop" onClick={dismiss} />
      <div ref={cardRef} id="flash-ad-card">
        <button id="flash-ad-close" aria-label="Close announcement" onClick={dismiss}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <img src={AD_IMAGE} alt="Rain of Grace – Youth Revival Tour, Friday 20 March, 10AM" />
        <a
          href="https://www.instagram.com/onebodygospelmusic/"
          target="_blank"
          rel="noopener"
          id="flash-ad-cta"
        >
          Follow for more updates
        </a>
      </div>
    </div>
  );
}

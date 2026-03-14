'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const overlay = overlayRef.current;
    const logo = logoRef.current;
    if (!overlay) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      overlay.style.visibility = 'hidden';
      overlay.style.opacity = '0';
      return;
    }

    import('gsap').then(({ default: gsap }) => {
      const tl = gsap.timeline();
      if (logo) {
        tl.from(logo, { opacity: 0, y: 10, duration: 0.3, ease: 'expo.out' });
        tl.to(logo, { opacity: 0, duration: 0.2, ease: 'expo.in' }, '+=0.1');
      }
      tl.to(
        overlay,
        {
          yPercent: -100,
          duration: 0.6,
          ease: 'expo.inOut',
          onComplete() {
            gsap.set(overlay, { autoAlpha: 0, yPercent: 0 });
          },
        },
        logo ? '-=0.05' : 0
      );
    });
  }, [pathname]);

  return (
    <div
      ref={overlayRef}
      id="page-transition"
      aria-hidden="true"
    >
      <div ref={logoRef} id="page-transition-logo">
        <img src="/onebody-logo.png" alt="" />
        <span className="pt-wordmark">Onebody</span>
      </div>
    </div>
  );
}

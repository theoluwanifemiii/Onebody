'use client';

import { useRef, useEffect } from 'react';

const CARDS = [
  {
    src: '/home-gallery/photo-09.jpg',
    offset: { x: -90, y: -60 },
    rotation: -7,
    speed: { x: 0.9, y: 0.65 },
    size: { w: 190, h: 260 },
    delay: 0,
  },
  {
    src: '/home-gallery/photo-11.jpg',
    offset: { x: 10, y: -110 },
    rotation: 4,
    speed: { x: 0.55, y: 0.35 },
    size: { w: 210, h: 290 },
    delay: 0.06,
  },
  {
    src: '/home-gallery/photo-15.jpg',
    offset: { x: 100, y: -30 },
    rotation: -3,
    speed: { x: 0.75, y: 0.5 },
    size: { w: 175, h: 240 },
    delay: 0.12,
  },
];

export default function HeroReveal({ children }: { children: React.ReactNode }) {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeRef = useRef(false);

  useEffect(() => {
    import('gsap').then(({ default: gsap }) => {
      const trackers = CARDS.map((card, i) => {
        const el = cardRefs.current[i];
        if (!el) return null;
        gsap.set(el, { xPercent: -50, yPercent: -50, rotation: card.rotation });
        return {
          xTo: gsap.quickTo(el, 'x', { duration: card.speed.x, ease: 'power3.out' }),
          yTo: gsap.quickTo(el, 'y', { duration: card.speed.y, ease: 'power3.out' }),
          offset: card.offset,
        };
      });

      const onMove = (e: MouseEvent) => {
        if (!activeRef.current) return;
        trackers.forEach((t) => {
          if (!t) return;
          t.xTo(e.clientX + t.offset.x);
          t.yTo(e.clientY + t.offset.y);
        });
      };

      window.addEventListener('mousemove', onMove);
      return () => window.removeEventListener('mousemove', onMove);
    });
  }, []);

  const show = () => {
    activeRef.current = true;
    import('gsap').then(({ default: gsap }) => {
      CARDS.forEach((card, i) => {
        const el = cardRefs.current[i];
        if (el) gsap.to(el, { autoAlpha: 1, scale: 1, duration: 0.5, delay: card.delay, ease: 'expo.out' });
      });
    });
  };

  const hide = () => {
    activeRef.current = false;
    import('gsap').then(({ default: gsap }) => {
      CARDS.forEach((_, i) => {
        const el = cardRefs.current[i];
        if (el) gsap.to(el, { autoAlpha: 0, scale: 0.88, duration: 0.3, ease: 'expo.in' });
      });
    });
  };

  return (
    <div onMouseEnter={show} onMouseLeave={hide} className="cursor-none">
      {CARDS.map((card, i) => (
        <div
          key={card.src}
          ref={(el) => { cardRefs.current[i] = el; }}
          className="pointer-events-none fixed top-0 left-0 z-9000 overflow-hidden"
          style={{
            width: card.size.w,
            height: card.size.h,
            opacity: 0,
            visibility: 'hidden',
            transform: `scale(0.88) rotate(${card.rotation}deg)`,
          }}
        >
          <img src={card.src} alt="" className="w-full h-full object-cover" />
        </div>
      ))}

      {children}
    </div>
  );
}

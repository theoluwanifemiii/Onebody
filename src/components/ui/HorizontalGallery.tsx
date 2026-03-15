'use client';

import { useEffect, useRef } from 'react';

const IMAGES = [
  { src: '/about-moments/moment-01.jpg', alt: 'Worship moment',     mt: false },
  { src: '/home-gallery/photo-01.jpg',   alt: 'Community gathering', mt: true  },
  { src: '/about-moments/moment-02.jpg', alt: 'Serving together',    mt: false },
  { src: '/home-gallery/photo-02.jpg',   alt: 'Fellowship',          mt: true  },
  { src: '/about-moments/moment-03.jpg', alt: 'Congregation',        mt: false },
  { src: '/home-gallery/photo-03.jpg',   alt: 'Praise and worship',  mt: true  },
  { src: '/about-moments/moment-04.jpg', alt: 'Church community',    mt: false },
  { src: '/home-gallery/photo-04.jpg',   alt: 'People together',     mt: true  },
  { src: '/about-moments/moment-05.jpg', alt: 'Service moment',      mt: false },
  { src: '/home-gallery/photo-05.jpg',   alt: 'Onebody family',      mt: true  },
];

export default function HorizontalGallery() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track   = trackRef.current;
    if (!wrapper || !track) return;

    let tween: { kill: () => void } | null = null;
    let trigger: { kill: () => void } | null = null;

    (async () => {
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger }  = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const setup = () => {
        const travel = track.scrollWidth - window.innerWidth;
        if (travel <= 0) return;

        wrapper.style.height = `calc(100vh + ${travel}px)`;

        tween?.kill();
        trigger?.kill();

        tween = gsap.to(track, {
          x: -travel,
          ease: 'none',
          scrollTrigger: {
            trigger: wrapper,
            start: 'top top',
            end: () => `+=${travel}`,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        }) as unknown as { kill: () => void };

        trigger = (tween as unknown as { scrollTrigger: { kill: () => void } }).scrollTrigger;
      };

      setup();
      ScrollTrigger.addEventListener('refreshInit', setup);
    })();

    return () => {
      tween?.kill();
      trigger?.kill();
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative" style={{ background: '#111111' }}>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">

        {/* Header */}
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12 pt-20 pb-12 shrink-0">
          <p className="ob-kicker-dim mb-4">About Moments</p>
          <h2 className="ob-display text-white max-w-3xl">
            Worship, friendship, and service.
          </h2>
        </div>

        {/* Horizontal track */}
        <div className="flex-1 overflow-hidden flex items-end">
          <div
            ref={trackRef}
            className="flex items-end will-change-transform"
            style={{ paddingLeft: '3rem', gap: '1.25rem' }}
          >
            {IMAGES.map((img, i) => (
              <figure
                key={i}
                className={`flex-none overflow-hidden bg-stone-800${img.mt ? ' -mt-16' : ''}`}
                style={{ width: 'clamp(200px, 22vw, 380px)', aspectRatio: '3/4' }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="eager"
                  className="w-full h-full object-cover grayscale-30"
                />
              </figure>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

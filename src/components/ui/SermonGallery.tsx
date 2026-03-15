'use client';

import { useEffect, useRef } from 'react';

const IMAGES = [
  { src: '/home-gallery/photo-15.jpg', alt: 'Onebody community',  mt: false },
  { src: '/home-gallery/photo-16.jpg', alt: 'Worship gathering',  mt: true  },
  { src: '/home-gallery/photo-17.jpg', alt: 'Sunday service',     mt: false },
  { src: '/home-gallery/photo-18.jpg', alt: 'Church life',        mt: true  },
  { src: '/home-gallery/photo-19.jpg', alt: 'People of faith',    mt: false },
  { src: '/home-gallery/photo-20.jpg', alt: 'Onebody family',     mt: true  },
];

export default function SermonGallery() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef  = useRef<HTMLDivElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const sticky  = stickyRef.current;
    const track   = trackRef.current;
    if (!wrapper || !sticky || !track) return;

    let tween: { kill: () => void } | null = null;
    let trigger: { kill: () => void } | null = null;

    (async () => {
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger }  = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const setup = () => {
        const travel = track.scrollWidth - window.innerWidth;
        if (travel <= 0) return;

        // Outer wrapper height = viewport + travel distance
        // This creates exactly the right amount of scroll space
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
    /* Outer wrapper — height set dynamically to create scroll distance */
    <div ref={wrapperRef} className="relative" style={{ background: '#111111' }}>

      {/* Sticky container — sticks to top while wrapper scrolls past */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12 pt-20 pb-12 shrink-0">
          <p className="ob-kicker-dim mb-4">The Church</p>
          <h2 className="ob-display text-white max-w-2xl">
            Real people. Real lives. Real Jesus.
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
                className={`flex-none overflow-hidden bg-stone-900${img.mt ? ' -mt-12' : ''}`}
                style={{ width: 'clamp(220px, 26vw, 420px)', aspectRatio: '3/4' }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="eager"
                  className="w-full h-full object-cover opacity-85"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

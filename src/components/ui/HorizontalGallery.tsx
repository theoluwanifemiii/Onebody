'use client';

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
  return (
    <div style={{ background: '#111111' }} className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 mb-12">
        <p className="ob-kicker-dim mb-4">About Moments</p>
        <h2 className="ob-display text-white max-w-3xl">
          Worship, friendship, and service.
        </h2>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <div
          className="flex items-end"
          style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem', gap: '1rem', width: 'max-content' }}
        >
          {IMAGES.map((img, i) => (
            <figure
              key={i}
              className={`flex-none overflow-hidden bg-stone-800${img.mt ? ' -mt-12' : ''}`}
              style={{ width: 'clamp(160px, 22vw, 340px)', aspectRatio: '3/4' }}
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
  );
}

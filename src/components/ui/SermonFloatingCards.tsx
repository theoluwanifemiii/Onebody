'use client';

import { useEffect, useRef } from 'react';
import { PlayCircle } from 'lucide-react';
import type { Sermon } from '@/lib/sermons';
import { extractYouTubeId } from '@/lib/sermons';

type Props = { sermons: Sermon[] };

// Scattered positions as % of container — top/left/right offsets
const POSITIONS = [
  { top: '8%',  left: '2%',  rotate: '-8deg',  floatDelay: '0s',    floatDur: '4.2s' },
  { top: '5%',  right: '3%', rotate: '6deg',   floatDelay: '0.7s',  floatDur: '3.8s' },
  { top: '52%', left: '4%',  rotate: '5deg',   floatDelay: '1.3s',  floatDur: '4.6s' },
];

const MAGNETIC_RADIUS = 200; // px — how close cursor needs to be
const MAGNETIC_STRENGTH = 0.35; // how much the card moves (0–1)

export default function SermonFloatingCards({ sermons }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const offsets = useRef<{ x: number; y: number }[]>(sermons.map(() => ({ x: 0, y: 0 })));
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMove = (e: MouseEvent) => {
      const containerRect = container.getBoundingClientRect();

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cardCx = rect.left + rect.width / 2;
        const cardCy = rect.top + rect.height / 2;
        const dx = e.clientX - cardCx;
        const dy = e.clientY - cardCy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MAGNETIC_RADIUS) {
          const pull = (1 - dist / MAGNETIC_RADIUS) * MAGNETIC_STRENGTH;
          offsets.current[i] = { x: dx * pull, y: dy * pull };
        } else {
          offsets.current[i] = { x: 0, y: 0 };
        }
      });

      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        cardRefs.current.forEach((card, i) => {
          if (!card) return;
          const { x, y } = offsets.current[i];
          card.style.setProperty('--mx', `${x}px`);
          card.style.setProperty('--my', `${y}px`);
        });
      });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [sermons.length]);

  return (
    <>
      <style>{`
        @keyframes sermon-float {
          0%, 100% { transform: rotate(var(--rot)) translate(calc(var(--mx, 0px)), calc(var(--my, 0px))) translateY(0px); }
          50%       { transform: rotate(var(--rot)) translate(calc(var(--mx, 0px)), calc(var(--my, 0px))) translateY(-14px); }
        }
        .sf-card {
          animation: sermon-float var(--dur) ease-in-out infinite;
          animation-delay: var(--float-delay);
          transform: rotate(var(--rot)) translate(calc(var(--mx, 0px)), calc(var(--my, 0px)));
          transition: box-shadow 0.3s ease, filter 0.3s ease;
          --mx: 0px; --my: 0px;
        }
        .sf-card:hover { filter: brightness(1.06); box-shadow: 0 28px 60px rgba(0,0,0,0.28); }
        .sf-card:hover .sf-overlay { opacity: 1; }
        .sf-overlay { opacity: 0; transition: opacity 0.3s ease; }
      `}</style>

      <div ref={containerRef} className="pointer-events-none absolute inset-0">
        {sermons.map((sermon, i) => {
          const id = extractYouTubeId(sermon.youtubeId);
          const href = `https://www.youtube.com/watch?v=${id}`;
          const thumb = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
          const pos = POSITIONS[i];

          return (
            <a
              key={i}
              ref={(el) => { cardRefs.current[i] = el; }}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="sf-card pointer-events-auto absolute w-52 overflow-hidden rounded-2xl shadow-2xl md:w-64"
              style={{
                top:   pos.top,
                left:  'left' in pos ? pos.left : undefined,
                right: 'right' in pos ? (pos as { right: string }).right : undefined,
                '--rot': pos.rotate,
                '--float-delay': pos.floatDelay,
                '--dur': pos.floatDur,
              } as React.CSSProperties}
            >
              <img src={thumb} alt={sermon.title} className="w-full aspect-video object-cover" />
              <div className="sf-overlay absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/90 via-black/40 to-transparent p-3">
                <p className="text-[10px] font-medium uppercase tracking-widest text-white/50 mb-0.5">{sermon.series}</p>
                <p className="text-xs font-semibold leading-snug text-white line-clamp-2">{sermon.title}</p>
                <p className="mt-0.5 text-[10px] text-white/60">{sermon.speaker}</p>
                <div className="mt-2 flex items-center gap-1.5 text-[10px] font-medium text-white">
                  <PlayCircle className="h-3 w-3" strokeWidth={1.5} />
                  Watch now
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { PlayCircle, X } from 'lucide-react';

type Props = { videoId: string };

export default function WatchMessageModal({ videoId }: Props) {
  const [open, setOpen] = useState(false);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-7 py-3 text-base font-medium text-white transition-colors hover:bg-stone-700"
      >
        Watch a Message
        <PlayCircle className="h-4 w-4" strokeWidth={1.5} />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10"
          onClick={() => setOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative z-10 w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-12 right-0 flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
              Close
            </button>

            {/* Video */}
            <div className="overflow-hidden rounded-2xl bg-black shadow-2xl" style={{ aspectRatio: '16/9' }}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                title="Watch a Message"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

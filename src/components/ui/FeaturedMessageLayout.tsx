'use client';

import { useRef, useEffect, useState } from 'react';

export default function FeaturedMessageLayout({
  video,
  panel,
}: {
  video: React.ReactNode;
  panel: React.ReactNode;
}) {
  const videoRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [panelHeight, setPanelHeight] = useState<number | null>(null);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setPanelHeight(entry.contentRect.height);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const handleScroll = () => {
    const el = panelRef.current;
    if (!el) return;
    setAtBottom(el.scrollTop + el.clientHeight >= el.scrollHeight - 8);
  };

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
      <div ref={videoRef} className="overflow-hidden" data-gsap-reveal>
        {video}
      </div>

      <div className="relative" style={{ height: panelHeight ?? 'auto' }}>
        <div
          ref={panelRef}
          onScroll={handleScroll}
          className="h-full overflow-y-auto"
          data-gsap-stagger
        >
          {panel}
        </div>

        {/* Bottom fade — hides when scrolled to the end */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(to bottom, transparent, white)',
            opacity: atBottom ? 0 : 1,
          }}
        />
      </div>
    </div>
  );
}

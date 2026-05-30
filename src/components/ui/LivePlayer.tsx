'use client';

import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Props {
  channelUrl: string;
  streamsUrl: string;
}

const POLL_INTERVAL_MS = 5 * 60 * 1000; // 5 minutes

export default function LivePlayer({ channelUrl, streamsUrl }: Props) {
  const [videoId, setVideoId] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    async function checkLive() {
      try {
        const res = await fetch('/api/youtube/live-status');
        const data = await res.json();
        setVideoId(data.videoId ?? null);
      } catch {
        // silently fail — stays offline
      } finally {
        setChecked(true);
      }
    }

    checkLive();
    const interval = setInterval(checkLive, POLL_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  // Reset play state if stream ends
  useEffect(() => {
    if (!videoId) setPlaying(false);
  }, [videoId]);

  if (!checked) {
    return (
      <div className="border border-white/10 p-10 flex flex-col gap-8 animate-pulse" data-gsap-reveal>
        <div className="h-2 w-2 rounded-full bg-white/10" />
        <div className="aspect-video bg-white/5" />
      </div>
    );
  }

  if (!videoId) {
    return (
      <div className="border border-white/10 p-10 flex flex-col gap-8" data-gsap-reveal>
        <div className="flex items-center gap-4">
          <div className="h-2 w-2 rounded-full bg-white/20" />
          <p className="ob-kicker text-white/40">Not Live Right Now</p>
        </div>
        <div>
          <h3 className="text-2xl font-medium text-white tracking-tight mb-3">Watch the live service</h3>
          <p className="ob-body-dark">
            We stream every Sunday service live on YouTube. When we go live, the
            player will appear right here — no need to leave the page.
          </p>
        </div>
        <div className="aspect-video bg-stone-900 flex flex-col items-center justify-center gap-3 border border-white/5">
          <div className="h-3 w-3 rounded-full bg-white/10" />
          <p className="text-sm text-white/30 tracking-widest uppercase">Stream offline</p>
          <p className="text-xs text-white/20">Sundays · 9:00 AM</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href={`${channelUrl}/live`}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-3 border border-white/20 px-7 py-4 text-sm font-medium text-white/70 tracking-widest uppercase hover:border-white/50 hover:text-white transition-colors"
          >
            Go to YouTube
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </a>
          <a
            href={streamsUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-3 border border-white/10 px-7 py-4 text-sm font-medium text-white/40 tracking-widest uppercase hover:border-white/30 hover:text-white/70 transition-colors"
          >
            Past Streams
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-white/10 flex flex-col gap-8" data-gsap-reveal>
      <div className="flex items-center justify-between px-8 pt-8">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          <p className="ob-kicker text-red-400">Live Now</p>
        </div>
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener"
          className="text-xs text-white/40 hover:text-white/70 transition-colors flex items-center gap-1"
        >
          Open on YouTube <ArrowUpRight className="h-3 w-3" strokeWidth={1.5} />
        </a>
      </div>

      <div className="relative aspect-video bg-black">
        {!playing ? (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full group"
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt="Live stream thumbnail"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-20 w-20 rounded-full bg-red-600 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-medium text-white bg-black/60 px-2 py-1">LIVE</span>
            </div>
          </button>
        ) : (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title="Onebody Church — Live Stream"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        )}
      </div>

      <div className="px-8 pb-8">
        <a
          href={streamsUrl}
          target="_blank"
          rel="noopener"
          className="text-sm text-white/40 hover:text-white/70 transition-colors tracking-widest uppercase"
        >
          Past streams →
        </a>
      </div>
    </div>
  );
}

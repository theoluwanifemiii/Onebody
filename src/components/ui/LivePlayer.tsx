interface Props {
  channelId: string;
  streamsUrl: string;
}

function isValidChannelId(channelId: string) {
  return /^UC[\w-]{20,}$/.test(channelId);
}

export default function LivePlayer({ channelId, streamsUrl }: Props) {
  if (!isValidChannelId(channelId)) {
    return (
      <div className="border border-white/10 flex flex-col gap-6" data-gsap-reveal>
        <div className="aspect-video flex flex-col items-center justify-center gap-3 bg-white/5 text-center px-8">
          <p className="text-white/70">Live stream coming soon.</p>
          <p className="text-sm text-white/40">
            Check back during service times, or catch up on past messages below.
          </p>
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

  return (
    <div className="border border-white/10 flex flex-col gap-6" data-gsap-reveal>
      <div className="aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/live_stream?channel=${channelId}&rel=0&modestbranding=1`}
          title="Onebody Church — Live Stream"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        />
      </div>
      <div className="px-8 pb-8">
        <a
          href={streamsUrl}
          target="_blank"
          rel="noopener"
          className="text-sm text-white/40 hover:text-white/70 transition-colors tracking-widest uppercase"
        >
          Past streams 
        </a>
      </div>
    </div>
  );
}

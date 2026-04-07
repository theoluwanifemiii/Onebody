import { Asterisk } from 'lucide-react';

const ITEM_COUNT = 7;

export default function MarqueeStrip() {
  return (
    <div className="w-full overflow-hidden border-y border-stone-800 bg-stone-900 py-4 text-stone-300">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {Array.from({ length: ITEM_COUNT }).map((_, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="text-xl font-medium uppercase tracking-tight">Onebody Church</span>
            <Asterisk className="h-6 w-6 text-brand-500" />
          </span>
        ))}
      </div>
    </div>
  );
}

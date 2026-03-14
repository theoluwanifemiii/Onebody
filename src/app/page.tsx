import type { Metadata } from 'next';
import { PlayCircle } from 'lucide-react';
import MarqueeStrip from '@/components/layout/MarqueeStrip';

export const metadata: Metadata = {
  title: 'Onebody Church | Home',
};

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <section
        data-home-hero
        className="relative isolate flex flex-1 items-center justify-center overflow-hidden px-6 md:px-12"
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_72%_56%_at_50%_0%,#000_70%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_72%_56%_at_50%_0%,#000_70%,transparent_100%)]"
        />
        <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
          <h1 className="text-5xl font-medium leading-[1.02] tracking-tighter text-stone-900 md:text-7xl lg:text-8xl">
            Love is changing hearts,{' '}
            <span className="text-stone-400">lighting eyes,</span>{' '}
            moving hands and{' '}
            <span className="font-serif italic text-red-600">leading feet.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-stone-500 md:text-xl">
            Onebody is a Jesus-centered church in Yaba where worship, teaching, discipleship, and service shape how we
            gather and how we love our city.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/sermons#featured-message"
              className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-7 py-3 text-base font-medium text-stone-900 transition-colors hover:border-stone-300 hover:bg-stone-50"
            >
              Watch a Message
              <PlayCircle className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>
      <MarqueeStrip />
    </div>
  );
}

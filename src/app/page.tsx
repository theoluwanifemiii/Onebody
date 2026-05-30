import type { Metadata } from 'next';
import { PlayCircle, ArrowRight, Sun, Moon, MapPin, Heart } from 'lucide-react';
import MarqueeStrip from '@/components/layout/MarqueeStrip';
import TransitionLink from '@/components/ui/TransitionLink';
import { CHURCH_ADDRESS } from '@/lib/site-data';
import { getAllSermons, extractYouTubeId } from '@/lib/sermons';
import SermonFloatingCards from '@/components/ui/SermonFloatingCards';
import WatchMessageModal from '@/components/ui/WatchMessageModal';

export const metadata: Metadata = {
  title: 'Onebody Church | Home',
};

const SERVICE_MARQUEE_ITEMS = Array(14).fill('Our Services');

const LOVA_BENEFITS = [
  'A deeper understanding of the Gospel',
  'Clarity on God\'s vision for the Church',
  'Christ and Kingdom-centred knowledge',
  'A pathway for meaningful service',
  'Community with fellow disciples',
];


export default function HomePage() {
  const sermons = getAllSermons().slice(0, 3);
  const featuredId = extractYouTubeId(sermons[0]?.youtubeId ?? '');
  return (
    <>

      {/* ══════════════════════════════════════════════════
          1. HERO
          ══════════════════════════════════════════════════ */}
      <div className="flex h-screen flex-col overflow-hidden">
        <section
          data-cursor-trail-hero
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
              <span className="font-serif italic ob-gradient-text">leading feet.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-stone-500 md:text-xl">
              Onebody is a Jesus-centered church in Yaba where worship, teaching, discipleship, and service shape how we
              gather and how we love our city.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <WatchMessageModal videoId={featuredId} />
              <TransitionLink
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-7 py-3 text-base font-medium text-stone-900 transition-colors hover:border-stone-300 hover:bg-stone-50"
              >
                Worship with us
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </TransitionLink>
            </div>
          </div>
        </section>
        <MarqueeStrip />
      </div>


      {/* ══════════════════════════════════════════════════
          2. ABOUT — slide left text + scale-up video
          ══════════════════════════════════════════════════ */}
      <section
        id="home-about"
        className="relative flex min-h-screen items-center overflow-hidden bg-white px-6 py-24 md:px-12"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">

            {/* Left — slides in from left */}
            <div data-apple-slide-left>
              <p className="ob-kicker mb-6">About Onebody</p>
              <h2
                className="text-4xl font-medium tracking-tight text-stone-900 leading-tight mb-8 md:text-5xl lg:text-6xl"
                data-gsap-words
              >
                We Are A Church That Believes In And Preaches Jesus Christ
              </h2>
              <div className="ob-divider mb-8" />
              <p className="ob-body mb-10 max-w-md">
                In our community, the message of and about the teachings of Jesus Christ takes center
                stage. Here, Jesus is our conversation, culture, aspiration, and our everything.
                You will find Jesus here!
              </p>
              <TransitionLink
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-stone-900 px-7 py-3 text-sm font-medium text-stone-900 transition-colors hover:bg-stone-900 hover:text-white"
              >
                Read more <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
              </TransitionLink>
            </div>

            {/* Right — scales up from small (product reveal) */}
            <div
              className="relative overflow-hidden rounded-2xl bg-black shadow-2xl"
              style={{ aspectRatio: '16/9' }}
              data-apple-scale-up
            >
              <iframe
                src="https://www.youtube-nocookie.com/embed/qdDPB-RlHgc?rel=0&modestbranding=1"
                title="About Onebody Church"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          3. "OUR SERVICES" MARQUEE — visual divider
          ══════════════════════════════════════════════════ */}
      <div
        className="overflow-hidden border-y border-stone-100 py-5"
        style={{ background: '#fafaf9' }}
      >
        <div className="flex animate-marquee whitespace-nowrap" style={{ gap: '3rem' }}>
          {SERVICE_MARQUEE_ITEMS.map((text, i) => (
            <span
              key={i}
              className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-stone-400 shrink-0"
            >
              <span className="h-1 w-1 rounded-full bg-brand-500 shrink-0" />
              {text}
            </span>
          ))}
        </div>
      </div>


      {/* ══════════════════════════════════════════════════
          4. SERVICES — full-bleed image + flat service times
          ══════════════════════════════════════════════════ */}
      <section
        id="home-services"
        className="relative flex min-h-screen flex-col justify-end overflow-hidden"
        style={{ background: '#0f0f0f' }}
      >
        {/* Background image */}
        <img
          src="/home-gallery/photo-05.jpg"
          alt="Onebody Church gathering"
          className="w-full object-cover object-center"
          style={{ position: 'absolute', top: '-15vh', left: 0, right: 0, height: '130vh', zIndex: 0 }}
          data-gsap-parallax="-60"
        />
        {/* Gradient overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.99) 0%, rgba(0,0,0,0.92) 50%, rgba(0,0,0,0.80) 100%)', zIndex: 1 }} />

        {/* Content */}
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-48 md:px-12" style={{ zIndex: 2 }}>

          {/* Label + headline */}
          <div className="mb-14">
            <p className="ob-kicker mb-5" data-gsap-reveal>Our Services</p>
            <h2 className="ob-display text-white max-w-2xl" data-gsap-words>
              Come worship with us.
            </h2>
          </div>

          {/* ── Flat service time rows ── */}
          <div className="mb-12 border-t border-white/10" data-gsap-reveal>

            {/* Sunday */}
            <div className="flex items-center justify-between border-b border-white/10 py-7">
              <div className="flex items-center gap-5">
                <Sun className="h-5 w-5 shrink-0 text-orange-400" strokeWidth={1.5} />
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/30 mb-1">Sunday Morning</p>
                  <p className="text-2xl font-semibold text-white md:text-3xl">Passion Service</p>
                </div>
              </div>
              <p className="text-4xl font-bold tracking-tighter text-orange-400 md:text-5xl lg:text-6xl">9:00 AM</p>
            </div>

            {/* Wednesday */}
            <div className="flex items-center justify-between border-b border-white/10 py-7">
              <div className="flex items-center gap-5">
                <Moon className="h-5 w-5 shrink-0 text-brand-400" strokeWidth={1.5} />
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/30 mb-1">Wednesday Nights</p>
                  <p className="text-2xl font-semibold text-white md:text-3xl">Hope Nights</p>
                </div>
              </div>
              <p className="text-4xl font-bold tracking-tighter text-brand-400 md:text-5xl lg:text-6xl">6:00 PM</p>
            </div>
          </div>

          {/* Address + CTA */}
          <div
            className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
            data-gsap-reveal
            data-gsap-delay="0.15"
          >
            <div className="flex items-center gap-2.5 text-base font-medium text-white/50">
              <MapPin className="h-4 w-4 shrink-0 text-white/30" strokeWidth={1.5} />
              <span>{CHURCH_ADDRESS}</span>
            </div>
            <TransitionLink
              href="/services"
              className="inline-flex items-center gap-2 self-start rounded-full bg-white px-7 py-3 text-sm font-semibold text-stone-900 transition-all hover:bg-stone-100 hover:scale-105 sm:self-auto"
            >
              Plan a Visit <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
            </TransitionLink>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          5. SERMONS — floating thumbnail cards
          ══════════════════════════════════════════════════ */}
      {/* ══════════════════════════════════════════════════
          5. SERMONS — scattered floating cards + magnetic
          ══════════════════════════════════════════════════ */}
      <section
        id="home-sermons"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 md:px-12"
        style={{ background: '#f5f5f4' }}
      >
        {/* Scattered magnetic cards — absolutely positioned around the text */}
        <SermonFloatingCards sermons={sermons} />

        {/* Centre content */}
        <div className="relative z-10 mx-auto w-full max-w-2xl text-center">
          <p className="ob-kicker mb-8" data-gsap-reveal>Messages</p>
          <h2
            className="text-6xl font-medium tracking-tighter text-stone-900 leading-tight md:text-8xl lg:text-9xl mb-8"
            data-apple-blur
          >
            Listen To<br />Sermons
          </h2>
          <p className="ob-body mb-12 max-w-lg mx-auto" data-gsap-reveal data-gsap-delay="0.1">
            Join any of our live services or catch up with any of our previous sermons.
          </p>
          <div data-gsap-reveal data-gsap-delay="0.2">
            <TransitionLink
              href="/sermons"
              className="inline-flex items-center gap-3 rounded-full bg-stone-900 px-10 py-4 text-base font-medium text-white transition-all hover:bg-stone-700 hover:scale-105 hover:shadow-xl"
            >
              <PlayCircle className="h-5 w-5" strokeWidth={1.5} />
              All Sermons
            </TransitionLink>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          6. PARTNER — giant "8" counter + stagger text
          ══════════════════════════════════════════════════ */}
      <section
        id="home-partner"
        className="flex min-h-screen flex-col justify-center overflow-hidden px-6 py-24 md:px-12"
        style={{ background: '#0f0f0f' }}
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">

            {/* Left — giant counter, Apple typographic statement */}
            <div data-apple-slide-left>
              <div className="flex items-end gap-0 leading-none">
                <span
                  className="font-medium text-white"
                  style={{ fontSize: 'clamp(140px, 20vw, 260px)', lineHeight: 1, letterSpacing: '-0.04em' }}
                  data-gsap-counter="8"
                >
                  7
                </span>
              </div>
              <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/30">Years of Ministry</p>
            </div>

            {/* Right — stagger reveal */}
            <div data-apple-slide-right>
              <p className="ob-kicker mb-6">Partnership</p>
              <h2 className="ob-display text-white mb-8" data-gsap-words>
                Partner With Onebody
              </h2>
              <div className="ob-divider mb-8" style={{ background: 'rgba(255,255,255,0.1)' }} />
              <div data-gsap-stagger>
                <p className="ob-body-dark mb-0">
                  We have done a lot in the last 8 years as a ministry with the help of countless
                  individuals and families God has sent our way.
                </p>
                <p className="ob-body-dark mb-0 mt-4">
                  There&apos;s a lot more God wants to do through us. We believe we have a very fertile
                  ground God personally tills — every seed sown grows tremendously well on it.
                </p>
                <div className="mt-10">
                  <TransitionLink
                    href="/giving"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                  >
                    Here&apos;s How <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                  </TransitionLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          7. LOVA — clip-path wipe on each benefit item
          ══════════════════════════════════════════════════ */}
      <section
        id="home-lova"
        className="flex min-h-screen flex-col justify-center overflow-hidden bg-white px-6 py-24 md:px-12"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-start">

            {/* Left */}
            <div className="lg:sticky lg:top-1/4">
              <p className="ob-kicker mb-6" data-gsap-reveal>Discipleship</p>
              <h2 className="ob-display text-stone-900 mb-8" data-gsap-words>
                The Love Vision Academy
              </h2>
              <div className="ob-divider mb-8" />
              <p className="ob-body mb-10 max-w-md" data-gsap-reveal>
                The Love Vision Academy by Onebody was created to intimate Christians with
                God&apos;s vision for his church — equipping you with adequate Christ and Kingdom
                centred knowledge for purposeful service.
              </p>
              <div data-gsap-reveal data-gsap-delay="0.1">
                <TransitionLink
                  href="/academy"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-900 px-7 py-3 text-sm font-medium text-stone-900 transition-colors hover:bg-stone-900 hover:text-white"
                >
                  Read more <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                </TransitionLink>
              </div>
            </div>

            {/* Right — clip-path wipe per item */}
            <div data-apple-clip-group className="flex flex-col gap-0 pt-2 lg:pt-16">
              {LOVA_BENEFITS.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 border-t border-stone-100 py-8"
                  data-apple-clip
                >
                  <span
                    className="shrink-0 text-xs font-medium uppercase tracking-widest text-stone-300 mt-1"
                    style={{ minWidth: '2rem' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex items-start gap-4">
                    <Heart className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" strokeWidth={1.5} />
                    <p className="text-base font-medium leading-snug text-stone-800">{benefit}</p>
                  </div>
                </div>
              ))}
              {/* closing border */}
              <div className="border-t border-stone-100" />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

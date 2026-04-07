import type { Metadata } from 'next';
import { PlayCircle, ArrowRight, ArrowUpRight } from 'lucide-react';
import { getAllSermons, extractYouTubeId } from '@/lib/sermons';
import SermonFollowUpForm from '@/components/forms/SermonFollowUpForm';
import SermonGallery from '@/components/ui/SermonGallery';

export const metadata: Metadata = {
  title: 'Onebody Church | Sermons',
};

export default function SermonsPage() {
  const sermons = getAllSermons();
  const featured = sermons[0];
  const featuredId = featured ? extractYouTubeId(featured.youtubeId) : '';

  return (
    <>
      {/* 1. HERO */}
      <section
        className="ob-section ob-section-dark flex flex-col justify-end relative overflow-hidden"
        style={{ paddingTop: '9rem' }}
      >
        {/* Background image */}
        <div className="absolute inset-0 -z-0">
          <img
            src="/sermons-live/listen-live-speaker.jpg"
            alt=""
            className="w-full h-full object-cover object-[60%_30%] opacity-20"
            loading="eager"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-[#111111]/40"></div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="flex items-center gap-3 mb-6" data-gsap-hero-reveal>
            <div className="h-2 w-2 rounded-full bg-brand-500 animate-pulse"></div>
            <p className="ob-kicker">Media &amp; Teaching</p>
          </div>
          <h1 className="ob-display text-white max-w-4xl" data-gsap-hero-words>
            Listen. Reflect. Respond.
          </h1>
          <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-10 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl ob-body-dark" data-gsap-hero-reveal>
              The message archive should help someone move from content consumption to actual
              spiritual response. Every sermon points back to the church, to community, and to
              Christ.
            </p>
            <div className="flex flex-wrap gap-4" data-gsap-hero-reveal>
              <a
                href="#featured-message"
                className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-900 transition-colors hover:bg-brand-50"
              >
                Watch featured
                <PlayCircle className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://www.youtube.com/watch?v=Tp8Qa_5WRpQ"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/40"
                target="_blank"
                rel="noreferrer"
              >
                Open on YouTube
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WATCH LIVE */}
      <section className="ob-section ob-section-dark">
        <div className="mx-auto w-full max-w-7xl">
          <p className="ob-kicker mb-5" data-gsap-reveal>
            Live &amp; Audio
          </p>
          <h2 className="ob-display text-white mb-16" data-gsap-words>
            Join us live, wherever you are.
          </h2>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-stretch">
            {/* YouTube Live */}
            <div className="border border-white/10 p-10 flex flex-col gap-8" data-gsap-reveal>
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-brand-500 animate-pulse"></div>
                <p className="ob-kicker text-brand-500">Video — YouTube Live</p>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-white tracking-tight mb-3">Watch the live service</h3>
                <p className="ob-body-dark">
                  We stream every Sunday service live on YouTube. The link always goes to the
                  current live broadcast — no searching required.
                </p>
              </div>
              <div className="mt-auto flex flex-wrap gap-4">
                <a
                  href="https://www.youtube.com/@onebodychurchng/live"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-3 bg-brand-600 px-7 py-4 text-sm font-medium text-white tracking-widest uppercase transition-colors hover:bg-brand-700"
                >
                  Watch Live
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                </a>
                <a
                  href="https://www.youtube.com/@onebodychurchng/streams"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-3 border border-white/20 px-7 py-4 text-sm font-medium text-white/70 tracking-widest uppercase hover:border-white/50 hover:text-white transition-colors"
                >
                  Past Streams
                </a>
              </div>
            </div>

            {/* Mixlr Audio */}
            <div className="border border-white/10 p-10 flex flex-col gap-8" data-gsap-reveal>
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                <p className="ob-kicker text-green-500">Audio — Mixlr</p>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-white tracking-tight mb-3">Listen live on Mixlr</h3>
                <p className="ob-body-dark">
                  Prefer audio only? Tune in through Mixlr during any live service. You can also
                  browse past audio recordings below.
                </p>
              </div>
              {/* Mixlr embed player */}
              <div className="w-full overflow-hidden rounded-sm">
                <iframe
                  src="https://onebodychurchng.mixlr.com/embed"
                  scrolling="no"
                  width="100%"
                  height="120"
                  title="Onebody Church — Mixlr Audio"
                  allow="autoplay"
                  style={{ border: 0 }}
                />
              </div>
              <a
                href="https://onebodychurchng.mixlr.com/recordings"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-white/50 hover:text-white transition-colors"
              >
                Browse recordings →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED MESSAGE */}
      <section id="featured-message" className="ob-section ob-section-light">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-14">
            <p className="ob-kicker mb-5" data-gsap-reveal>
              Featured Message
            </p>
            <h2 className="ob-display" data-gsap-words>
              Watch, reflect, and respond.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="overflow-hidden bg-black" data-gsap-reveal>
              <div className="relative aspect-video">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={featuredId ? `https://www.youtube-nocookie.com/embed/${featuredId}` : ''}
                  title="Featured Onebody sermon"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="space-y-0" data-gsap-stagger>
              <div className="pb-8 border-b border-stone-200">
                <p className="ob-kicker text-stone-400 mb-4">After you watch</p>
                <h3 className="text-2xl font-medium tracking-tight text-stone-900">Bring the message into the week.</h3>
                <p className="mt-3 text-base leading-relaxed text-stone-500">Use the reflection guide below, revisit the key idea, and let the page guide you toward prayer or community.</p>
              </div>
              <div className="py-8 border-b border-stone-200">
                <p className="ob-kicker text-stone-400 mb-4">Next gathering</p>
                <h3 className="text-2xl font-medium tracking-tight text-stone-900">Do not stay online only.</h3>
                <p className="mt-3 text-base leading-relaxed text-stone-500">Let the sermon route people back toward Passion Service, Hope Nights, and real connection.</p>
                <a href="/services#visit" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-600">
                  Plan your visit <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </div>
              <div className="pt-8">
                <p className="ob-kicker text-stone-400 mb-4">Need prayer?</p>
                <h3 className="text-2xl font-medium tracking-tight text-stone-900">Follow up with the team.</h3>
                <p className="mt-3 text-base leading-relaxed text-stone-500">If the message raises a burden or decision, reaching out should be as frictionless as pressing send.</p>
                <a href="mailto:hello@onebodychurch.org?subject=Response%20to%20a%20message" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-600">
                  Email the team <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MESSAGE PATHS */}
      <section className="ob-section ob-section-dark">
        <div className="mx-auto w-full max-w-7xl">
          <p className="ob-kicker mb-5" data-gsap-reveal>
            Message Paths
          </p>
          <h2 className="ob-display text-white mb-5" data-gsap-words>
            Engage by context.
          </h2>
          <p className="ob-body-dark max-w-xl mb-20" data-gsap-reveal>
            Three ways to keep the message active in your life — through Sunday worship, midweek
            strength, or personal response.
          </p>

          <div className="grid grid-cols-1 gap-0 md:grid-cols-3" data-gsap-stagger>
            <div className="py-10 md:py-0 md:pr-16 border-t border-white/10 md:border-t-0 md:border-r md:border-white/10">
              <p className="ob-kicker-dim mb-5">Sunday</p>
              <h3 className="text-2xl font-medium text-white tracking-tight mb-4">Featured Sunday message</h3>
              <p className="ob-body-dark text-base mb-6">Go straight to the current featured sermon and keep the media page focused on what matters most.</p>
              <a href="#featured-message" className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors">
                Watch now <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
            <div className="py-10 md:py-0 md:px-16 border-t border-white/10 md:border-t-0 md:border-r md:border-white/10">
              <p className="ob-kicker-dim mb-5">Midweek</p>
              <h3 className="text-2xl font-medium text-white tracking-tight mb-4">Hope Nights — midweek strength</h3>
              <p className="ob-body-dark text-base mb-6">Midweek teaching becomes more valuable when the site shows exactly how it fits into church life.</p>
              <a href="/services" className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors">
                Service details <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
            <div className="py-10 md:py-0 md:pl-16 border-t border-white/10 md:border-t-0">
              <p className="ob-kicker-dim mb-5">Response</p>
              <h3 className="text-2xl font-medium text-white tracking-tight mb-4">Turn the word into action</h3>
              <p className="ob-body-dark text-base mb-6">Sermon pages should help members share meaningful entry points, pray, and take one concrete next step.</p>
              <a href="#reflection-guide" className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors">
                Reflection guide <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERMON ARCHIVE */}
      <section className="ob-section ob-section-light">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col gap-4 mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="ob-kicker mb-5" data-gsap-reveal>
                Sermon Archive
              </p>
              <h2 className="ob-display" data-gsap-words>
                Every message, on demand.
              </h2>
            </div>
            <a
              href="https://www.youtube.com/@onebodychurchng/streams"
              target="_blank"
              rel="noopener"
              className="ob-kicker text-brand-600 hover:text-brand-700 transition-colors shrink-0"
              data-gsap-reveal
            >
              All sermons on YouTube →
            </a>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" data-gsap-stagger>
            {sermons.map((sermon, i) => {
              const id = extractYouTubeId(sermon.youtubeId);
              const url = sermon.youtubeId.startsWith('http')
                ? sermon.youtubeId
                : `https://www.youtube.com/watch?v=${id}`;
              return (
                <a key={i} href={url} target="_blank" rel="noopener" className="group block">
                  <div className="overflow-hidden aspect-video bg-stone-100 mb-5">
                    <img
                      src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                      alt={sermon.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <p className="ob-kicker text-stone-400 mb-2">{sermon.series} · {sermon.date}</p>
                  <h3 className="text-xl font-medium text-stone-900 tracking-tight group-hover:text-brand-600 transition-colors">{sermon.title}</h3>
                  <p className="mt-1 text-sm text-stone-400">{sermon.speaker}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. COMMUNITY PHOTOS */}
      <SermonGallery />

      {/* 7. REFLECTION GUIDE */}
      <section id="reflection-guide" className="ob-section ob-section-light">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="ob-kicker mb-5" data-gsap-reveal>
                Reflection Guide
              </p>
              <h2 className="ob-display" data-gsap-words>
                Use the message beyond the moment.
              </h2>
              <p className="mt-8 ob-body max-w-md" data-gsap-reveal>
                These prompts keep the page active and useful even when the media archive is still
                small.
              </p>
            </div>

            <div data-accordion-group data-gsap-reveal>
              <details className="site-accordion-minimal">
                <summary className="flex cursor-pointer items-center justify-between gap-4">
                  <span className="text-xl font-medium text-stone-900">What truth about Jesus stood out most?</span>
                  <span className="site-accordion-icon text-2xl leading-none text-brand-600 shrink-0">+</span>
                </summary>
                <div className="accordion-body">
                  Summarize the central truth in one sentence and ask how it corrects, comforts, or redirects your heart.
                </div>
              </details>
              <details className="site-accordion-minimal">
                <summary className="flex cursor-pointer items-center justify-between gap-4">
                  <span className="text-xl font-medium text-stone-900">What response does this message call for?</span>
                  <span className="site-accordion-icon text-2xl leading-none text-brand-600 shrink-0">+</span>
                </summary>
                <div className="accordion-body">
                  Turn the sermon into a specific step: repentance, renewed trust, generosity, witness, or a conversation you need to have.
                </div>
              </details>
              <details className="site-accordion-minimal">
                <summary className="flex cursor-pointer items-center justify-between gap-4">
                  <span className="text-xl font-medium text-stone-900">Who should I share this with?</span>
                  <span className="site-accordion-icon text-2xl leading-none text-brand-600 shrink-0">+</span>
                </summary>
                <div className="accordion-body">
                  Think about one person who might need the encouragement, correction, or invitation the message contains.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOLLOW-UP FORM */}
      <section className="ob-section ob-section-dark">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="ob-kicker mb-5" data-gsap-reveal>
                Need Help?
              </p>
              <h2 className="ob-display text-white" data-gsap-words>
                Let the next action be simple.
              </h2>
              <p className="mt-8 ob-body-dark max-w-md" data-gsap-reveal>
                If someone is helped by a message, they should be one click away from prayer,
                discipleship, or a visit.
              </p>
            </div>
            <SermonFollowUpForm />
          </div>
        </div>
      </section>
    </>
  );
}

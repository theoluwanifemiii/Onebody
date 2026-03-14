import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Onebody',
  description: 'We are a church that believes in and teaches Jesus Christ.',
};

export default function AboutPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="ob-section ob-section-dark flex flex-col justify-end" style={{ paddingTop: '9rem' }}>
        <div className="mx-auto w-full max-w-7xl">
          <p className="ob-kicker mb-6" data-gsap-hero-reveal>Our Story</p>
          <h1 className="ob-display text-white" data-gsap-hero-words>About Onebody</h1>
          <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-10 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl ob-body-dark" data-gsap-hero-reveal>
              We are a church that believes in and teaches Jesus Christ. Here, Jesus is our
              conversation, culture, aspiration, and our everything. You will find Jesus here.
            </p>
            <span className="ob-kicker-dim hidden md:block" data-gsap-hero-reveal>Scroll ↓</span>
          </div>
        </div>
      </section>

      {/* 2. HISTORY */}
      <section className="ob-section ob-section-light">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="ob-kicker mb-8" data-gsap-reveal>Our Origin</p>
              <h2 className="ob-display" data-gsap-words>Since 2019</h2>
              <p className="mt-8 text-lg leading-relaxed text-stone-500 max-w-lg" data-gsap-reveal>
                Onebody opened its doors in Yaba, Lagos because a group of young Christians
                passionate about gospel-centered music and charity wanted to grow deeper in their
                knowledge of Jesus.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-stone-500 max-w-lg" data-gsap-reveal data-gsap-delay="0.1">
                Founded by three friends — Taiwo Oyemade, Kehinde Oyemade, and Olarewaju Omomeji —
                they met at home every Friday for three years before formally opening, writing music
                and hosting retreats together.
              </p>
            </div>
            <div className="lg:border-l lg:border-stone-200 lg:pl-20">
              <div data-gsap-stagger className="space-y-10">
                <div>
                  <p className="text-7xl font-semibold tracking-tighter text-stone-900" data-gsap-counter="2019">2019</p>
                  <p className="mt-3 ob-kicker text-stone-400">Church Opened</p>
                </div>
                <div className="ob-divider" />
                <div>
                  <p className="text-7xl font-semibold tracking-tighter text-stone-900" data-gsap-counter="3">3</p>
                  <p className="mt-3 ob-kicker text-stone-400">Founding Friends</p>
                </div>
                <div className="ob-divider" />
                <div>
                  <p className="text-7xl font-semibold tracking-tighter text-stone-900" data-gsap-counter="4">4</p>
                  <p className="mt-3 ob-kicker text-stone-400">SCAD Stages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GALLERY */}
      <section className="ob-section-dark py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-12 mb-14">
          <p className="ob-kicker-dim mb-4" data-gsap-reveal>About Moments</p>
          <h2 className="ob-display text-white max-w-3xl" data-gsap-words>Worship, friendship, and service.</h2>
        </div>
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-5 px-6 md:px-12" style={{ width: 'max-content' }} data-gsap-strip>
            {[
              { src: '/about-moments/moment-01.jpg', alt: 'Worship moment', mt: false },
              { src: '/home-gallery/photo-01.jpg', alt: 'Community gathering', mt: true },
              { src: '/about-moments/moment-02.jpg', alt: 'Serving together', mt: false },
              { src: '/home-gallery/photo-02.jpg', alt: 'Fellowship', mt: true },
              { src: '/about-moments/moment-03.jpg', alt: 'Congregation', mt: false },
              { src: '/home-gallery/photo-03.jpg', alt: 'Praise and worship', mt: true },
              { src: '/about-moments/moment-04.jpg', alt: 'Church community', mt: false },
              { src: '/home-gallery/photo-04.jpg', alt: 'People together', mt: true },
              { src: '/about-moments/moment-05.jpg', alt: 'Service moment', mt: false },
              { src: '/home-gallery/photo-05.jpg', alt: 'Onebody family', mt: true },
            ].map((img, i) => (
              <figure key={i} className={`flex-none w-[38vw] md:w-[22vw] aspect-[3/4] overflow-hidden bg-stone-800${img.mt ? ' mt-14' : ''}`}>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover grayscale-[30%]" loading="lazy" data-gsap-parallax={img.mt ? '-15' : '-25'} />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VISION & MISSION */}
      <section className="ob-section ob-section-light">
        <div className="mx-auto w-full max-w-7xl">
          <p className="ob-kicker mb-16" data-gsap-reveal>What Drives Us</p>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:divide-x lg:divide-stone-200">
            <div className="lg:pr-20" data-gsap-reveal>
              <p className="ob-kicker text-stone-400 mb-5">Vision</p>
              <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-stone-900 leading-tight">
                To transform people in the cities of Nigeria into agents of gospel renewal through
                the love of Jesus.
              </h3>
            </div>
            <div className="lg:pl-20" data-gsap-reveal data-gsap-delay="0.15">
              <p className="ob-kicker text-stone-400 mb-5">Mission</p>
              <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-stone-900 leading-tight">
                To build a community of disciples through teaching, spiritual music, and city-wide
                mission.
              </h3>
            </div>
          </div>
          <div className="mt-20 overflow-hidden bg-black" data-gsap-reveal>
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/Tp8Qa_5WRpQ?start=1"
                title="Featured Onebody Church video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. VALUES */}
      <section id="values" className="ob-section ob-section-dark" data-value-section>
        <div data-value-cursor style={{ position: 'fixed', top: 0, left: 0, width: '210px', height: '290px', pointerEvents: 'none', zIndex: 9000, opacity: 0, visibility: 'hidden', transform: 'scale(0.88)', overflow: 'hidden' }}>
          {[17, 18, 19, 20].map((n, i) => (
            <img key={i} src={`/home-gallery/photo-${String(n).padStart(2, '0')}.jpg`} alt="" data-value-cursor-img={i} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0, visibility: 'hidden' }} />
          ))}
        </div>
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col gap-4 mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="ob-kicker mb-5" data-gsap-reveal>Key Value</p>
              <h2 className="ob-display text-white" data-gsap-words>Our Values</h2>
            </div>
            <p className="ob-body-dark max-w-xs md:text-right" data-gsap-reveal>
              Love is changing our hearts, lighting eyes, moving hands and leading feet.
            </p>
          </div>
          <div data-gsap-stagger>
            {[
              { num: '01', title: 'Heart', body: 'Love changing hearts through deeper understanding of the gospel.', ref: '1 John 4:9-10' },
              { num: '02', title: 'Eyes', body: 'Love lighting eyes with forgiveness, agreement, and forbearance.', ref: '1 John 2:10-11' },
              { num: '03', title: 'Hand', body: 'Love moving hands toward generosity, welfare, and local charity.', ref: 'Acts 20:35' },
              { num: '04', title: 'Feet', body: 'Love leading feet outward in evangelism, worship, and city witness.', ref: '2 Cor 5:14-15' },
            ].map((v, i) => (
              <div key={i} className={`flex items-start gap-8 py-9 border-t border-white/10${i === 3 ? ' border-b border-white/10' : ''} cursor-none`} data-value-item={i}>
                <span className="ob-kicker-dim w-8 shrink-0 mt-1">{v.num}</span>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight">{v.title}</h3>
                  <p className="mt-3 ob-body-dark max-w-xl">{v.body}</p>
                </div>
                <span className="hidden md:block ob-kicker-dim self-center">{v.ref}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONVICTIONS */}
      <section className="ob-section ob-section-light">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="ob-kicker mb-5" data-gsap-reveal>What Shapes Us</p>
              <h2 className="ob-display" data-gsap-words>Core convictions.</h2>
              <p className="mt-8 ob-body max-w-md" data-gsap-reveal>
                These convictions give visitors theological and cultural clarity before they ever step into a service.
              </p>
            </div>
            <div data-accordion-group data-gsap-reveal>
              {[
                { q: 'Jesus-centered teaching', a: 'We want the message and teachings of Jesus Christ to remain central in the life of the church, not peripheral.' },
                { q: 'Music and worship as witness', a: 'Music is not a side identity for us. It has always been one of the ways the Lord has used Onebody to preach Christ and gather people.' },
                { q: 'Discipleship with direction', a: 'SCAD and LOVA exist because we believe disciples should be sought, converted, assimilated, and deployed with clear intention.' },
                { q: 'Love made practical', a: 'Gospel renewal should be visible in generosity, local charity, service, and the way we treat people in our city.' },
              ].map((item, i) => (
                <details key={i} className="site-accordion-minimal">
                  <summary className="flex cursor-pointer items-center justify-between gap-4">
                    <span className="text-xl font-medium text-stone-900">{item.q}</span>
                    <span className="site-accordion-icon text-2xl leading-none text-red-600 shrink-0">+</span>
                  </summary>
                  <div className="accordion-body">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. SCAD */}
      <section className="ob-section ob-section-dark">
        <div className="mx-auto w-full max-w-7xl">
          <p className="ob-kicker mb-5" data-gsap-reveal>Renewed Discipleship</p>
          <h2 className="ob-display text-white mb-5" data-gsap-words>SCAD</h2>
          <p className="ob-body-dark max-w-xl mb-20" data-gsap-reveal>
            &ldquo;Therefore go and make disciples of all nations…&rdquo; burns in our hearts. We have refined our discipleship model around four stages.
          </p>
          <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4" data-gsap-stagger>
            {[
              { letter: 'S', title: 'Seeking', body: 'Through music, visual content, affinity groups, and special events, we always seek new souls.' },
              { letter: 'C', title: 'Converting', body: 'In our weekly gatherings and home meetings, we create real opportunities for conversions.' },
              { letter: 'A', title: 'Assimilating', body: 'An 8-module, 16-week discipleship program — The Love Vision Academy — assimilates new members.' },
              { letter: 'D', title: 'Deploying', body: 'Every disciple goes out and seeks new souls through the grace and gifts of the Holy Spirit.' },
            ].map((s) => (
              <div key={s.letter}>
                <p className="text-[7rem] font-bold tracking-tighter leading-none text-white/8">{s.letter}</p>
                <h3 className="mt-5 text-2xl font-medium text-white tracking-tight">{s.title}</h3>
                <p className="mt-3 ob-body-dark text-base">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PASTORS */}
      <section className="ob-section ob-section-light">
        <div className="mx-auto w-full max-w-7xl">
          <p className="ob-kicker mb-16" data-gsap-reveal>Our Pastors</p>
          <div className="grid grid-cols-1 gap-14 md:grid-cols-3" data-gsap-stagger>
            {[
              { img: '/home-gallery/photo-09.jpg', name: 'Taiwo Oyemade', role: 'Church Pastor', mt: false },
              { img: '/home-gallery/photo-10.jpg', name: 'John Kenny', role: 'Worship Pastor', mt: true },
              { img: '/home-gallery/photo-11.jpg', name: 'Omomeji Olarewaju', role: 'Admin Pastor', mt: false },
            ].map((p) => (
              <div key={p.name} className={p.mt ? 'md:mt-20' : ''}>
                <div className="aspect-[3/4] overflow-hidden bg-stone-100">
                  <img src={p.img} alt={`Pastor ${p.name}`} className="w-full h-full object-cover object-center" loading="lazy" />
                </div>
                <h4 className="mt-6 text-2xl font-medium text-stone-900 tracking-tight">{p.name}</h4>
                <p className="mt-1 ob-kicker text-stone-400">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="ob-section ob-section-dark border-t border-white/10">
        <div className="mx-auto w-full max-w-7xl">
          <p className="ob-kicker mb-8" data-gsap-reveal>Take The Next Step</p>
          <h2 className="ob-display text-white max-w-4xl mb-20" data-gsap-words>See the church, then come meet the church.</h2>
          <div className="grid grid-cols-1 gap-0 md:grid-cols-3" data-gsap-stagger>
            <a href="/services#visit" className="group py-10 md:py-0 md:pr-16 border-t border-white/10 md:border-t-0 md:border-r md:border-white/10">
              <p className="ob-kicker-dim group-hover:text-red-500 transition-colors duration-200">Plan a Visit</p>
              <h3 className="mt-5 text-2xl font-medium text-white tracking-tight leading-snug">See service times, directions, and visit details.</h3>
              <span className="mt-6 inline-flex items-center gap-2 text-sm text-white/30 group-hover:text-white transition-colors duration-200">Visit →</span>
            </a>
            <a href="/sermons#featured-message" className="group py-10 md:py-0 md:px-16 border-t border-white/10 md:border-t-0 md:border-r md:border-white/10">
              <p className="ob-kicker-dim group-hover:text-red-500 transition-colors duration-200">Watch a Message</p>
              <h3 className="mt-5 text-2xl font-medium text-white tracking-tight leading-snug">Hear the teaching and keep engaging through the week.</h3>
              <span className="mt-6 inline-flex items-center gap-2 text-sm text-white/30 group-hover:text-white transition-colors duration-200">Watch →</span>
            </a>
            <a href="/academy#apply" className="group py-10 md:py-0 md:pl-16 border-t border-white/10 md:border-t-0">
              <p className="ob-kicker-dim group-hover:text-red-500 transition-colors duration-200">Join LOVA</p>
              <h3 className="mt-5 text-2xl font-medium text-white tracking-tight leading-snug">Step into a clearer discipleship pathway.</h3>
              <span className="mt-6 inline-flex items-center gap-2 text-sm text-white/30 group-hover:text-white transition-colors duration-200">Apply →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

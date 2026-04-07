import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Onebody Charity — Empowering Teenagers Across Southwest Nigeria',
  description:
    'Join OneBody Charity as we inspire indigent teenagers across SouthWest Nigeria in their educational journey through education and back-to-school pack initiatives.',
};

export default function CharityPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="ob-section ob-section-dark">
        <div className="mx-auto w-full max-w-7xl">
          <p className="ob-kicker mb-8" data-gsap-reveal>
            Onebody Charity
          </p>
          <h1 className="ob-display text-white max-w-5xl" data-gsap-hero-words>
            Empowering Teenagers for a Brighter Future
          </h1>
          <p className="mt-10 ob-body-dark max-w-xl" data-gsap-hero-reveal data-gsap-delay="0.3">
            Join OneBody Charity as we inspire indigent teenagers across SouthWest Nigeria in their
            educational journey. We believe that through education, these kids can escape poverty
            and grow up to become responsible members of society.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-5" data-gsap-hero-reveal data-gsap-delay="0.5">
            <a
              href="#donate"
              className="inline-flex items-center gap-3 rounded-none bg-brand-600 px-8 py-4 text-sm font-medium text-white tracking-widest uppercase transition-colors hover:bg-brand-700"
            >
              Donate Now
            </a>
            <a
              href="#initiative"
              className="text-sm tracking-widest uppercase text-white/60 hover:text-white transition-colors"
            >
              Learn More ↓
            </a>
          </div>
        </div>
      </section>

      {/* 2. INITIATIVE */}
      <section id="initiative" className="ob-section ob-section-light">
        <div className="mx-auto w-full max-w-7xl grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="ob-kicker mb-5" data-gsap-reveal>
              Back-to-School Initiative
            </p>
            <h2 className="ob-display mb-8" data-gsap-words>
              Empowering the Future.
            </h2>
            <p className="ob-body mb-6" data-gsap-reveal>
              At OneBody Charity, we understand that times are tough, especially for families
              preparing their children for school. Many teenagers across Southwest Nigeria face
              challenges obtaining essential writing materials for the new school year.
            </p>
            <p className="ob-body" data-gsap-reveal>
              That&apos;s why we&apos;ve launched our Back-to-School Pack Initiative — to help ease this
              burden and keep every child in the classroom, not on the streets.
            </p>
          </div>
          <div className="overflow-hidden aspect-4/5 bg-stone-100" data-gsap-reveal>
            <img
              src="/charity/ND2A5919.jpg"
              alt="OneBody Charity — Teenagers in education"
              className="w-full h-full object-cover"
              loading="lazy"
              data-gsap-parallax="-25"
            />
          </div>
        </div>
      </section>

      {/* 3. VIDEO */}
      <section className="ob-section ob-section-dark">
        <div className="mx-auto w-full max-w-7xl">
          <p className="ob-kicker mb-5" data-gsap-reveal>
            Watch
          </p>
          <h2 className="ob-display text-white mb-14" data-gsap-words>
            See our work in action.
          </h2>
          <div
            className="relative w-full overflow-hidden bg-stone-900"
            style={{ aspectRatio: '16/9' }}
            data-gsap-reveal
          >
            <iframe
              src="https://www.youtube.com/embed/NtgRBxSnzY8"
              title="Onebody Charity — Back-to-School Initiative"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 4. VISION & MISSION */}
      <section className="ob-section ob-section-dark">
        <div className="mx-auto w-full max-w-7xl">
          <p className="ob-kicker mb-16" data-gsap-reveal>
            What Drives Us
          </p>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-32">
            <div data-gsap-reveal>
              <p className="ob-kicker mb-6 text-brand-500">Our Vision</p>
              <h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight">
                To help teenagers and young adults unlock a prosperous future through education.
              </h3>
            </div>
            <div data-gsap-reveal>
              <p className="ob-kicker mb-6 text-brand-500">Our Mission</p>
              <ul className="space-y-6">
                <li className="flex items-start gap-5 border-t border-white/10 pt-6">
                  <span className="ob-kicker-dim w-6 shrink-0 mt-0.5">01</span>
                  <p className="ob-body-dark">
                    Provide back-to-school packs for teenagers in secondary schools across
                    Southwest Nigeria.
                  </p>
                </li>
                <li className="flex items-start gap-5 border-t border-white/10 pt-6">
                  <span className="ob-kicker-dim w-6 shrink-0 mt-0.5">02</span>
                  <p className="ob-body-dark">
                    Organise digital skill awareness and acquisition programs for young adults
                    entering the workforce.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STATS */}
      <section className="ob-section ob-section-light">
        <div className="mx-auto w-full max-w-7xl">
          <p className="ob-kicker mb-16" data-gsap-reveal>
            2025 / 2026 Target
          </p>
          <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4" data-gsap-stagger>
            <div className="pr-8 lg:pr-16 border-r border-stone-200">
              <p className="text-7xl font-semibold tracking-tighter text-stone-900" data-gsap-counter="1000">
                0
              </p>
              <p className="mt-4 ob-kicker text-stone-400">School Packs</p>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed">Back-to-school packs for indigent teenagers.</p>
            </div>
            <div className="px-8 lg:px-16 border-r border-stone-200">
              <p className="text-7xl font-semibold tracking-tighter text-stone-900" data-gsap-counter="25">
                0
              </p>
              <p className="mt-4 ob-kicker text-stone-400">Million Naira</p>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed">Fundraising goal to meet our 2025 target.</p>
            </div>
            <div className="px-8 lg:px-16 border-r border-stone-200">
              <p className="text-7xl font-semibold tracking-tighter text-stone-900" data-gsap-counter="6">
                0
              </p>
              <p className="mt-4 ob-kicker text-stone-400">SW States</p>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed">Reaching teenagers across Southwest Nigeria.</p>
            </div>
            <div className="pl-8 lg:pl-16">
              <p className="text-7xl font-semibold tracking-tighter text-stone-900" data-gsap-counter="2">
                0
              </p>
              <p className="mt-4 ob-kicker text-stone-400">Programs</p>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed">School packs and digital skills acquisition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMMUNITY PHOTOS */}
      <section className="ob-section-dark py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-12 mb-12">
          <p className="ob-kicker mb-4" data-gsap-reveal>
            Community Impact
          </p>
          <h2 className="ob-display text-white max-w-2xl" data-gsap-words>
            Education changes everything.
          </h2>
        </div>
        <div data-gsap-strip className="flex gap-4 w-max">
          <figure className="overflow-hidden bg-stone-800 w-72 h-96 group shrink-0">
            <img src="/charity/ND2A5932.jpg" alt="Community" className="w-full h-[115%] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          </figure>
          <figure className="overflow-hidden bg-stone-800 w-72 h-96 group shrink-0 mt-12">
            <img src="/charity/ND2A5809.jpg" alt="Youth" className="w-full h-[115%] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          </figure>
          <figure className="overflow-hidden bg-stone-800 w-72 h-96 group shrink-0">
            <img src="/charity/ND2A5934.jpg" alt="Together" className="w-full h-[115%] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          </figure>
          <figure className="overflow-hidden bg-stone-800 w-72 h-96 group shrink-0 mt-12">
            <img src="/charity/ND2A5929.jpg" alt="Growing" className="w-full h-[115%] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          </figure>
          <figure className="overflow-hidden bg-stone-800 w-72 h-96 group shrink-0">
            <img src="/charity/ND2A5742.jpg" alt="Future" className="w-full h-[115%] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          </figure>
          <figure className="overflow-hidden bg-stone-800 w-72 h-96 group shrink-0 mt-12">
            <img src="/charity/ND2A5731.jpg" alt="Education" className="w-full h-[115%] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* 7. FULL STORY */}
      <section className="ob-section ob-section-light">
        <div className="mx-auto w-full max-w-7xl grid grid-cols-1 gap-20 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <p className="ob-kicker mb-5" data-gsap-reveal>
              The Story
            </p>
            <h2 className="ob-display lg:sticky lg:top-32" data-gsap-words>
              Why we do this every year.
            </h2>
          </div>
          <div className="space-y-8" data-gsap-reveal>
            <p className="ob-body">
              At ONEBODY Charity, we understand that times are tough, especially for indigent
              families who want to give their children an education. As a result, many teenagers
              across Southwest Nigeria face the challenge of obtaining essential materials for the
              new school year.
            </p>
            <p className="ob-body">
              Some of them will have to skip classes to work in order to acquire these items. While
              some who are discouraged will drop out altogether.
            </p>
            <p className="ob-body">
              That&apos;s why every year, we give out Back-to-School Packs to indigent teenagers to
              help motivate them to keep learning. Our target for 2025 is to give{' '}
              <strong className="font-semibold text-stone-900">1,000 school packs</strong> to teenagers
              who need them most.
            </p>
            <div className="border-l-2 border-brand-600 pl-6">
              <p className="text-xl font-medium text-stone-900 leading-snug">
                &ldquo;Education is the most powerful weapon which you can use to change the world.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. HOW TO HELP / DONATE */}
      <section id="donate" className="ob-section ob-section-dark">
        <div className="mx-auto w-full max-w-7xl grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="ob-kicker mb-5" data-gsap-reveal>
              How You Come In
            </p>
            <h2 className="ob-display text-white" data-gsap-words>
              Your gift keeps a child in school.
            </h2>
            <p className="mt-8 ob-body-dark max-w-md" data-gsap-reveal>
              In order to achieve our target of providing 1,000 back-to-school packs for indigent
              teenagers across Southwest Nigeria, we are raising{' '}
              <strong className="text-white">₦25,000,000</strong>. Your contribution will go a long
              way in helping us meet this target.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-5" data-gsap-reveal>
              <a
                href="https://paystack.shop/pay/onebodycharity"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-3 rounded-none bg-brand-600 px-8 py-4 text-sm font-medium text-white tracking-widest uppercase transition-colors hover:bg-brand-700"
              >
                Donate Now
              </a>
              <a
                href="https://paystack.shop/pay/onebodycharity"
                target="_blank"
                rel="noopener"
                className="text-sm tracking-widest uppercase text-white/60 hover:text-white transition-colors"
              >
                Contact Us →
              </a>
            </div>
          </div>

          {/* Donation impact breakdown — timeline */}
          <div data-gsap-steep-stagger className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10"></div>

            {/* Item 1 */}
            <div className="relative flex gap-8 py-10">
              <div className="shrink-0 w-8 flex justify-center pt-2 relative z-10">
                <div className="w-3 h-3 rounded-full bg-brand-600 ring-4 ring-brand-600/20"></div>
              </div>
              <div className="flex-1">
                <p className="ob-kicker-dim mb-2">1 Student</p>
                <p className="text-4xl font-semibold text-white tracking-tighter">₦2,500</p>
                <p className="mt-3 ob-body-dark max-w-sm">Cover one full back-to-school pack for an indigent teenager.</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="relative flex gap-8 py-10 border-t border-white/10">
              <div className="shrink-0 w-8 flex justify-center pt-2 relative z-10">
                <div className="w-3 h-3 rounded-full bg-brand-600 ring-4 ring-brand-600/20"></div>
              </div>
              <div className="flex-1">
                <p className="ob-kicker-dim mb-2">10 Students</p>
                <p className="text-5xl font-semibold text-white tracking-tighter">₦25,000</p>
                <p className="mt-3 ob-body-dark max-w-sm">Equip an entire classroom with the tools they need to learn.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="relative flex gap-8 py-10 border-t border-white/10">
              <div className="shrink-0 w-8 flex justify-center pt-2 relative z-10">
                <div className="w-3 h-3 rounded-full bg-brand-600 ring-4 ring-brand-600/20"></div>
              </div>
              <div className="flex-1">
                <p className="ob-kicker-dim mb-2">100 Students</p>
                <p className="text-6xl font-semibold text-white tracking-tighter">₦250,000</p>
                <p className="mt-3 ob-body-dark max-w-sm">Transform a school community and inspire a generation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

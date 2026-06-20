import type { Metadata } from 'next';
import CopyAccountButton from '@/components/forms/CopyAccountButton';
import InternationalAccounts from '@/components/forms/InternationalAccounts';

export const metadata: Metadata = {
  title: 'Giving — Onebody Church',
  description:
    'God loves a cheerful giver. Give to Onebody Church and support the mission, Sunday gatherings, discipleship, and community outreach.',
};

function AccountCard({ bank, accountName, accountNumber }: { bank: string; accountName: string; accountNumber: string }) {
  return (
    <div className="border border-white/10 p-8 space-y-6">
      <div className="border-b border-white/10 pb-6">
        <p className="ob-kicker-dim mb-2">Bank</p>
        <p className="text-xl font-medium text-white tracking-tight">{bank}</p>
      </div>
      <div className="border-b border-white/10 pb-6">
        <p className="ob-kicker-dim mb-2">Account Name</p>
        <p className="text-xl font-medium text-white tracking-tight">{accountName}</p>
      </div>
      <div>
        <p className="ob-kicker-dim mb-2">Account Number</p>
        <p className="text-3xl font-semibold text-white tracking-widest mb-4">{accountNumber}</p>
        <CopyAccountButton accountNumber={accountNumber} />
      </div>
    </div>
  );
}

export default function GivingPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="ob-section ob-section-dark" style={{ paddingTop: '144px' }}>
        <div className="mx-auto w-full max-w-7xl">
          <p className="ob-kicker mb-8" data-gsap-reveal>
            2 Corinthians 9:7
          </p>
          <h1 className="ob-display text-white max-w-4xl" data-gsap-hero-words>
            Your cheerful giving will definitely make a difference.
          </h1>
          <p className="mt-10 ob-body-dark max-w-xl" data-gsap-hero-reveal data-gsap-delay="0.3">
            God loves a cheerful giver. We invite you to join us in spreading love, supporting
            our church&apos;s mission, and making a lasting impact.
          </p>
          <div className="mt-12" data-gsap-hero-reveal data-gsap-delay="0.5">
            <a
              href="#give"
              className="inline-flex items-center gap-3 rounded-none bg-brand-600 px-8 py-4 text-sm font-medium text-white tracking-widest uppercase transition-colors hover:bg-brand-700"
            >
              Give Now ↓
            </a>
          </div>
        </div>
      </section>

      {/* 2. WHY GIVE */}
      <section className="ob-section ob-section-light">
        <div className="mx-auto w-full max-w-7xl grid grid-cols-1 gap-16 lg:grid-cols-[3fr_2fr] lg:items-center">
          <div className="min-w-0">
            <p className="ob-kicker mb-5" data-gsap-reveal>
              Why Give
            </p>
            <h2 className="ob-display mb-8" data-gsap-words>
              Every contribution counts.
            </h2>
            <p className="ob-body mb-6" data-gsap-reveal>
              Your giving fuels our efforts to serve, inspire, and bring people to meet with
              Christ. It supports everything from our Sunday gatherings and discipleship programs
              to our community outreach across the city.
            </p>
            <p className="ob-body" data-gsap-reveal>
              When you give, you are not just supporting a church — you are partnering with God&apos;s
              work in the lives of people, families, and a generation.
            </p>
          </div>

          {/* Scripture pull quote */}
          <div className="border-l-2 border-brand-600 pl-10" data-gsap-reveal>
            <blockquote className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight leading-snug">
              &ldquo;Each of you should give what you have decided in your heart to give, not reluctantly
              or under compulsion, for God loves a cheerful giver.&rdquo;
            </blockquote>
            <p className="mt-6 ob-kicker text-stone-400">2 Corinthians 9:7</p>
          </div>
        </div>
      </section>

      {/* 3. GIVE */}
      <section id="give" className="ob-section ob-section-dark">
        <div className="mx-auto w-full max-w-7xl">
          <p className="ob-kicker mb-5" data-gsap-reveal>
            Bank Transfer
          </p>
          <h2 className="ob-display text-white mb-16" data-gsap-words>
            Give directly to the church.
          </h2>

          {/* All accounts */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr]" data-gsap-reveal>
            {/* Church */}
            <div>
              <p className="ob-kicker mb-6">Church</p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <AccountCard bank="First Bank" accountName="Onebody Church" accountNumber="2034723621" />
                <AccountCard bank="Sterling Bank" accountName="Onebody Church" accountNumber="0128161734" />
              </div>
            </div>

            {/* Charity */}
            <div>
              <p className="ob-kicker mb-6">Charity</p>
              <AccountCard bank="First Bank" accountName="Onebody Church" accountNumber="2047343092" />
            </div>
          </div>

          <InternationalAccounts />

          <p className="mt-12 text-sm text-white/40 leading-relaxed max-w-xl">
            After your transfer, please send your name and amount to our WhatsApp or email so
            we can acknowledge your giving. Thank you.
          </p>
        </div>
      </section>

      {/* 4. COMMUNITY PHOTOS */}
      <section className="ob-section-light py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-12 mb-12">
          <p className="ob-kicker mb-4" data-gsap-reveal>
            Our Community
          </p>
          <h2 className="ob-display max-w-2xl" data-gsap-words>
            A church that gathers and gives together.
          </h2>
        </div>
        <div data-gsap-strip className="flex gap-4 w-max">
          {[
            { src: 'photo-17', offset: false },
            { src: 'photo-18', offset: true },
            { src: 'photo-19', offset: false },
            { src: 'photo-20', offset: true },
            { src: 'photo-01', offset: false },
            { src: 'photo-02', offset: true },
            { src: 'photo-03', offset: false },
            { src: 'photo-04', offset: true },
            { src: 'photo-05', offset: false },
            { src: 'photo-06', offset: true },
            { src: 'photo-07', offset: false },
          ].map(({ src, offset }) => (
            <figure key={src} className={`overflow-hidden bg-stone-200 w-72 h-96 group shrink-0${offset ? ' mt-12' : ''}`}>
              <img src={`/home-gallery/${src}.jpg`} alt="Onebody community" className="w-full h-[115%] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import { ArrowRight, Map, Sun, Moon, MapPin } from 'lucide-react';
import VisitForm from '@/components/forms/VisitForm';

export const metadata: Metadata = {
  title: 'Plan Your Visit | Onebody Church',
  description:
    'Service times, directions, and everything you need before your first visit to Onebody Church in Yaba, Lagos.',
};

export default function ServicesPage() {
  return (
    <>
      {/* 1. HERO */}
      <section
        data-cursor-trail-hero
        className="ob-section ob-section-light flex flex-col justify-end"
        style={{ paddingTop: '9rem' }}
      >
        <div className="mx-auto w-full max-w-7xl">
          <p className="ob-kicker mb-6" data-gsap-hero-reveal>
            Plan Your Visit
          </p>
          <h1 className="ob-display" data-gsap-hero-words>
            Gather with us in Yaba.
          </h1>
          <div className="mt-10 flex flex-col gap-8 border-t border-stone-200 pt-10 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl ob-body" data-gsap-hero-reveal>
              This page answers the practical questions people have before they show up: when to
              come, where to go, what the room feels like, and how to reach someone if they need
              help.
            </p>
            <div className="flex flex-wrap gap-4" data-gsap-hero-reveal>
              <a
                href="#visit"
                className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-800"
              >
                Tell us you are coming <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=20+Adebiyi+Street+off+Lawani+Street+Akoka+Yaba+Lagos"
                className="inline-flex items-center gap-2 rounded-full border border-stone-200 px-6 py-3 text-sm font-medium text-stone-900 transition-colors hover:border-stone-300"
                target="_blank"
                rel="noreferrer"
              >
                Open directions <Map className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICE TIMES */}
      <section className="ob-section ob-section-dark">
        <div className="mx-auto w-full max-w-7xl">
          <p className="ob-kicker mb-16" data-gsap-reveal>
            When We Gather
          </p>
          <div className="grid grid-cols-1 gap-0 md:grid-cols-3" data-gsap-stagger>
            <div className="py-10 md:py-0 md:pr-16 border-t border-white/10 md:border-t-0 md:border-r md:border-white/10">
              <Sun className="h-7 w-7 text-orange-400 mb-8" strokeWidth={1.5} />
              <h2 className="text-3xl font-medium text-white tracking-tight">Passion Service</h2>
              <p className="mt-2 ob-kicker-dim">Sunday Morning</p>
              <p className="mt-6 text-5xl font-semibold text-white tracking-tighter">9:00 AM</p>
            </div>
            <div className="py-10 md:py-0 md:px-16 border-t border-white/10 md:border-t-0 md:border-r md:border-white/10">
              <Moon className="h-7 w-7 text-brand-400 mb-8" strokeWidth={1.5} />
              <h2 className="text-3xl font-medium text-white tracking-tight">Hope Nights</h2>
              <p className="mt-2 ob-kicker-dim">Wednesday Evening</p>
              <p className="mt-6 text-5xl font-semibold text-white tracking-tighter">6:00 PM</p>
            </div>
            <div className="py-10 md:py-0 md:pl-16 border-t border-white/10 md:border-t-0">
              <MapPin className="h-7 w-7 text-brand-400 mb-8" strokeWidth={1.5} />
              <h2 className="text-3xl font-medium text-white tracking-tight">Address</h2>
              <p className="mt-2 ob-kicker-dim">Akoka Yaba, Lagos</p>
              <p className="mt-6 text-lg leading-relaxed text-white/60">
                20 Adebiyi Street,<br />
                off Lawani Street,<br />
                Akoka Yaba, Lagos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DIRECTIONS + MAP */}
      <section className="ob-section ob-section-light">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="ob-kicker mb-5" data-gsap-reveal>
                Directions
              </p>
              <h2 className="ob-display" data-gsap-words>
                Get there without guessing.
              </h2>
              <p className="mt-8 ob-body max-w-md" data-gsap-reveal>
                The address matters, but the real friction-reducer is confidence. Save the route
                before leaving, and if you need help, reach out before service starts.
              </p>
              <div className="mt-10 space-y-4" data-gsap-stagger>
                <div className="border-b border-stone-200 pb-4">
                  <p className="text-sm font-medium text-stone-900">Location</p>
                  <p className="mt-1 text-sm text-stone-500">
                    20 Adebiyi Street, off Lawani Street, Akoka Yaba, Lagos
                  </p>
                </div>
                <div className="border-b border-stone-200 pb-4">
                  <p className="text-sm font-medium text-stone-900">Need help finding us?</p>
                  <p className="mt-1 text-sm text-stone-500">
                    Email hello@onebodychurch.org and someone can help with directions before you
                    head out.
                  </p>
                </div>
              </div>
              <div className="mt-10 flex flex-wrap gap-4" data-gsap-reveal>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=20+Adebiyi+Street+off+Lawani+Street+Akoka+Yaba+Lagos"
                  className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-800"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Google Maps <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </a>
                <a
                  href="mailto:hello@onebodychurch.org"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-200 px-5 py-3 text-sm font-medium text-stone-900 transition-colors hover:border-stone-300"
                >
                  Email the team
                </a>
              </div>
            </div>
            <div
              className="overflow-hidden bg-stone-100"
              style={{ aspectRatio: '4/3' }}
              data-gsap-reveal
            >
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps?q=20%20Adebiyi%20Street%20off%20Lawani%20Street%20Akoka%20Yaba%20Lagos&output=embed"
                title="Map to Onebody Church"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT TO EXPECT */}
      <section className="ob-section ob-section-dark" data-value-section>
        <div
          data-value-cursor
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '210px',
            height: '290px',
            pointerEvents: 'none',
            zIndex: 9000,
            opacity: 0,
            visibility: 'hidden',
            transform: 'scale(0.88)',
            overflow: 'hidden',
          }}
        >
          {[
            { src: '/home-gallery/photo-01.jpg', idx: 0 },
            { src: '/home-gallery/photo-02.jpg', idx: 1 },
            { src: '/home-gallery/photo-03.jpg', idx: 2 },
            { src: '/home-gallery/photo-04.jpg', idx: 3 },
          ].map(({ src, idx }) => (
            <img
              key={idx}
              src={src}
              alt=""
              data-value-cursor-img={idx}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0,
                visibility: 'hidden',
              }}
            />
          ))}
        </div>
        <div className="mx-auto w-full max-w-7xl">
          <p className="ob-kicker mb-5" data-gsap-reveal>
            What To Expect
          </p>
          <h2 className="ob-display text-white mb-5" data-gsap-words>
            Clear expectations build confidence.
          </h2>
          <p className="ob-body-dark max-w-xl mb-20" data-gsap-reveal>
            The point of the visit page is not just logistics. It is reducing first-time anxiety
            and making it obvious that real people will receive guests well.
          </p>
          <div data-gsap-stagger>
            {[
              {
                num: '01',
                title: 'Warm welcome',
                body: 'Arrive a little early and our team can help you settle in, find a seat, and answer first-time questions.',
              },
              {
                num: '02',
                title: 'Christ-centered worship',
                body: 'We gather around prayer, music, Scripture, and teaching that keeps Jesus at the center of everything.',
              },
              {
                num: '03',
                title: 'Come as you are',
                body: 'You do not need insider language or a perfect backstory to walk in. The space is accessible and sincere.',
              },
              {
                num: '04',
                title: 'Next step support',
                body: 'If you want to keep growing after your first visit, we can point you toward sermons, discipleship, and LOVA.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-8 py-9 border-t border-white/10${i === 3 ? ' border-b border-white/10' : ''} cursor-none`}
                data-value-item={i}
              >
                <span className="ob-kicker-dim w-8 shrink-0 mt-1">{item.num}</span>
                <div>
                  <h3 className="text-2xl font-medium text-white tracking-tight">{item.title}</h3>
                  <p className="mt-3 ob-body-dark max-w-xl">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMMUNITY PHOTOS */}
      <section className="ob-section-light py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-12 mb-12">
          <p className="ob-kicker mb-4" data-gsap-reveal>
            Our Community
          </p>
          <h2 className="ob-display max-w-2xl" data-gsap-words>
            A family that gathers, worships, and serves.
          </h2>
        </div>
        <div className="overflow-x-auto no-scrollbar">
          <div
            className="flex gap-5 px-6 md:px-12"
            style={{ width: 'max-content' }}
            data-gsap-strip
          >
            {[
              { src: '/home-gallery/photo-06.jpg', alt: 'Onebody gathering', mt: false },
              { src: '/home-gallery/photo-07.jpg', alt: 'Church worship', mt: true },
              { src: '/home-gallery/photo-08.jpg', alt: 'Community life', mt: false },
              { src: '/home-gallery/photo-12.jpg', alt: 'Sunday service', mt: true },
              { src: '/home-gallery/photo-13.jpg', alt: 'People of Onebody', mt: false },
              { src: '/home-gallery/photo-14.jpg', alt: 'Church family', mt: true },
            ].map((img, i) => (
              <figure
                key={i}
                className={`flex-none w-[48vw] md:w-[28vw] aspect-4/3 overflow-hidden bg-stone-100${img.mt ? ' mt-10' : ''}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 6. VISIT FAQ */}
      <section className="ob-section ob-section-light">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="ob-kicker mb-5" data-gsap-reveal>
                Visit FAQ
              </p>
              <h2 className="ob-display" data-gsap-words>
                Answer the questions people usually keep to themselves.
              </h2>
              <p className="mt-8 ob-body max-w-md" data-gsap-reveal>
                A strong church site anticipates practical questions and answers them plainly
                instead of forcing someone to ask by email.
              </p>
            </div>
            <div data-accordion-group data-gsap-reveal>
              {[
                {
                  q: 'What should I wear?',
                  a: 'Come as you are. The aim is not to impress anyone with a dress code but to gather with openness before God.',
                },
                {
                  q: 'Should I come early if it is my first time?',
                  a: 'Yes. Arriving 10 to 15 minutes early gives you space to settle in, meet someone from the team, and avoid rushing into the room.',
                },
                {
                  q: 'Can I start with Wednesday instead of Sunday?',
                  a: 'Yes. Hope Nights are a good way to enter the rhythm of the church if midweek is the easiest first step for you.',
                },
                {
                  q: 'What if I need help with directions before I come?',
                  a: 'Email hello@onebodychurch.org before you set out. The team can help you confirm the route and answer any final questions.',
                },
              ].map((item, i) => (
                <details key={i} className="site-accordion-minimal">
                  <summary className="flex cursor-pointer items-center justify-between gap-4">
                    <span className="text-xl font-medium text-stone-900">{item.q}</span>
                    <span className="site-accordion-icon text-2xl leading-none text-brand-600 shrink-0">
                      +
                    </span>
                  </summary>
                  <div className="accordion-body">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. VISIT FORM */}
      <section id="visit" className="ob-section ob-section-dark">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="ob-kicker mb-5" data-gsap-reveal>
                Tell Us You Are Coming
              </p>
              <h2 className="ob-display text-white" data-gsap-words>
                Make the first hello easier.
              </h2>
              <p className="mt-8 ob-body-dark max-w-md" data-gsap-reveal>
                This form opens your mail app with the details already filled in — a simple bridge
                until a fuller follow-up system exists.
              </p>
              <div className="mt-12 space-y-4 text-sm leading-relaxed text-white/40" data-gsap-reveal>
                <p>1. Send your details through the form.</p>
                <p>2. The mail opens with your visit information ready to send.</p>
                <p>3. A team member can follow up before the service if needed.</p>
              </div>
            </div>
            <VisitForm />
          </div>
        </div>
      </section>
    </>
  );
}

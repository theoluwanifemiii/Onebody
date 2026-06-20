import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import AcademyApplicationForm from '@/components/forms/AcademyApplicationForm';

export const metadata: Metadata = {
  title: 'The Love Vision Academy (LOVA) — Onebody Church, Yaba',
  description:
    'LOVA exists to intimate believers with God\'s vision for His church through Christ-centered teaching, identity formation, and practical ministry direction.',
};

export default function AcademyPage() {
  return (
    <>
      {/* 1. HERO */}
      <section
        className="ob-section ob-section-dark flex flex-col justify-end"
        style={{ paddingTop: '144px' }}
      >
        <div className="mx-auto w-full max-w-7xl">
          <p className="ob-kicker mb-6" data-gsap-hero-reveal>
            The Love Vision Academy
          </p>
          <h1 className="ob-display text-white" data-gsap-hero-words>
            Grow in Christ. Serve with clarity.
          </h1>
          <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-10 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl ob-body-dark" data-gsap-hero-reveal>
              LOVA exists to intimate believers with God&apos;s vision for His church through
              Christ-centered teaching, identity formation, and practical ministry direction.
            </p>
            <div className="flex flex-wrap gap-4" data-gsap-hero-reveal>
              <a
                href="#apply"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-900 transition-colors hover:bg-stone-100"
              >
                Apply for the next cohort
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:hello@onebodychurch.org?subject=Question%20about%20LOVA"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/40"
              >
                Ask a question
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COHORT STATS */}
      <section className="ob-section ob-section-light">
        <div className="mx-auto w-full max-w-7xl">
          <p className="ob-kicker mb-5" data-gsap-reveal>
            Cohort Snapshot
          </p>
          <p className="ob-body max-w-xl mb-11 text-stone-500" data-gsap-reveal>
            Applications are open on a rolling basis. Email us to ask about the next cohort&apos;s
            start date.
          </p>
          <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4" data-gsap-stagger>
            <div className="pr-8 lg:pr-16 border-r border-stone-200">
              <p className="text-7xl font-semibold tracking-tighter text-stone-900" data-gsap-counter="8">
                8
              </p>
              <p className="mt-4 ob-kicker text-stone-400">Modules</p>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed">Built around doctrine, identity, and Kingdom culture.</p>
            </div>
            <div className="px-8 lg:px-16 border-r border-stone-200">
              <p className="text-7xl font-semibold tracking-tighter text-stone-900" data-gsap-counter="8">
                8
              </p>
              <p className="mt-4 ob-kicker text-stone-400">Weeks</p>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed">Formation that moves beyond inspiration into practice.</p>
            </div>
            <div className="px-8 lg:px-16 border-r border-stone-200">
              <p className="text-7xl font-semibold tracking-tighter text-stone-900" data-gsap-counter="3">
                3
              </p>
              <p className="mt-4 ob-kicker text-stone-400">Tracks</p>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed">Biblical Foundation, Kingdom Culture, Ministry Practice.</p>
            </div>
            <div className="pl-8 lg:pl-16">
              <p className="text-7xl font-semibold tracking-tighter text-stone-900" data-gsap-counter="1">
                1
              </p>
              <p className="mt-4 ob-kicker text-stone-400">Pathway</p>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed">Connects teaching to service in the life of the church.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMMUNITY PHOTOS */}
      <section className="ob-section-stone py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-12 mb-12">
          <p className="ob-kicker mb-4" data-gsap-reveal>
            Growing Together
          </p>
          <h2 className="ob-display max-w-2xl" data-gsap-words>
            Discipleship shaped in community.
          </h2>
        </div>
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4" data-gsap-stagger>
            <figure className="overflow-hidden bg-stone-200 aspect-square group">
              <img src="/home-gallery/photo-06.jpg" alt="LOVA community" className="w-full h-[115%] object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" data-gsap-parallax="-20" />
            </figure>
            <figure className="overflow-hidden bg-stone-200 aspect-square mt-8 group">
              <img src="/home-gallery/photo-07.jpg" alt="Learning together" className="w-full h-[115%] object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" data-gsap-parallax="-20" />
            </figure>
            <figure className="overflow-hidden bg-stone-200 aspect-square group">
              <img src="/home-gallery/photo-08.jpg" alt="Discipleship in action" className="w-full h-[115%] object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" data-gsap-parallax="-20" />
            </figure>
            <figure className="overflow-hidden bg-stone-200 aspect-square mt-8 group">
              <img src="/home-gallery/photo-12.jpg" alt="Academy graduates" className="w-full h-[115%] object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" data-gsap-parallax="-20" />
            </figure>
            <figure className="overflow-hidden bg-stone-200 aspect-square group">
              <img src="/home-gallery/photo-13.jpg" alt="Onebody family" className="w-full h-[115%] object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" data-gsap-parallax="-20" />
            </figure>
            <figure className="overflow-hidden bg-stone-200 aspect-square mt-8 group">
              <img src="/home-gallery/photo-14.jpg" alt="Community worship" className="w-full h-[115%] object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" data-gsap-parallax="-20" />
            </figure>
            <figure className="overflow-hidden bg-stone-200 aspect-square group">
              <img src="/home-gallery/photo-15.jpg" alt="Church gathering" className="w-full h-[115%] object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" data-gsap-parallax="-20" />
            </figure>
            <figure className="overflow-hidden bg-stone-200 aspect-square mt-8 group">
              <img src="/home-gallery/photo-16.jpg" alt="People of Onebody" className="w-full h-[115%] object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" data-gsap-parallax="-20" />
            </figure>
          </div>
        </div>
      </section>

      {/* 4. LEARNING TRACKS */}
      <section className="ob-section ob-section-dark">
        <div className="mx-auto w-full max-w-7xl">
          <p className="ob-kicker mb-5" data-gsap-reveal>
            What You Will Learn
          </p>
          <h2 className="ob-display text-white mb-5" data-gsap-words>
            Formation, not just information.
          </h2>
          <p className="ob-body-dark max-w-xl mb-20" data-gsap-reveal>
            A pathway built to move disciples from knowledge into practice, and from the classroom
            into the city.
          </p>
          <div className="grid grid-cols-1 gap-0 md:grid-cols-3" data-gsap-stagger>
            <div className="py-10 md:py-0 md:pr-16 border-t border-white/10 md:border-t-0 md:border-r md:border-white/10">
              <p className="ob-kicker mb-8">Track 01</p>
              <h3 className="text-2xl font-medium text-white tracking-tight">Biblical Foundation</h3>
              <p className="mt-4 ob-body-dark">
                Understand the gospel, core Christian doctrine, and how Scripture shapes daily
                worship, obedience, and leadership.
              </p>
            </div>
            <div className="py-10 md:py-0 md:px-16 border-t border-white/10 md:border-t-0 md:border-r md:border-white/10">
              <p className="ob-kicker mb-8">Track 02</p>
              <h3 className="text-2xl font-medium text-white tracking-tight">Kingdom Culture</h3>
              <p className="mt-4 ob-body-dark">
                Build habits, convictions, and relational maturity that reflect the life and love
                of Jesus in community.
              </p>
            </div>
            <div className="py-10 md:py-0 md:pl-16 border-t border-white/10 md:border-t-0">
              <p className="ob-kicker mb-8">Track 03</p>
              <h3 className="text-2xl font-medium text-white tracking-tight">Ministry Practice</h3>
              <p className="mt-4 ob-body-dark">
                Translate learning into service, witness, and practical participation in the work
                of the local church.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PATHWAY */}
      <section id="pathway" className="ob-section ob-section-light">
        <div className="mx-auto w-full max-w-7xl">
          <p className="ob-kicker mb-5" data-gsap-reveal>
            Pathway
          </p>
          <h2 className="ob-display mb-5" data-gsap-words>
            How the academy moves a disciple forward.
          </h2>
          <p className="ob-body max-w-xl mb-20" data-gsap-reveal>
            People should understand what the academy is for, what shape the journey takes, and
            what comes out on the other side.
          </p>
          <div className="relative grid lg:grid-cols-[1fr_380px] lg:gap-24 lg:items-start">
            {/* Steps */}
            <div data-gsap-stagger>
              <div className="flex items-start gap-8 py-9 border-t border-stone-200 cursor-default group/step" data-pathway-step="0">
                <span className="ob-kicker text-stone-300 w-16 shrink-0 mt-1 transition-colors duration-300 group-hover/step:text-brand-600">Step 01</span>
                <div>
                  <h3 className="text-3xl font-medium text-stone-900 tracking-tight transition-colors duration-300 group-hover/step:text-brand-600">Rooted in truth</h3>
                  <p className="mt-3 ob-body max-w-xl">Start with Scripture, the gospel, and a deeper understanding of Christ and His church.</p>
                </div>
              </div>
              <div className="flex items-start gap-8 py-9 border-t border-stone-200 cursor-default group/step" data-pathway-step="1">
                <span className="ob-kicker text-stone-300 w-16 shrink-0 mt-1 transition-colors duration-300 group-hover/step:text-brand-600">Step 02</span>
                <div>
                  <h3 className="text-3xl font-medium text-stone-900 tracking-tight transition-colors duration-300 group-hover/step:text-brand-600">Formed in community</h3>
                  <p className="mt-3 ob-body max-w-xl">Let doctrine shape habits, culture, relationships, worship, and the way you love the city.</p>
                </div>
              </div>
              <div className="flex items-start gap-8 py-9 border-y border-stone-200 cursor-default group/step" data-pathway-step="2">
                <span className="ob-kicker text-stone-300 w-16 shrink-0 mt-1 transition-colors duration-300 group-hover/step:text-brand-600">Step 03</span>
                <div>
                  <h3 className="text-3xl font-medium text-stone-900 tracking-tight transition-colors duration-300 group-hover/step:text-brand-600">Released into service</h3>
                  <p className="mt-3 ob-body max-w-xl">Finish with clearer conviction, stronger identity, and readiness for meaningful ministry engagement.</p>
                </div>
              </div>
            </div>

            {/* Sticky image preview — swaps on step hover */}
            <div className="hidden lg:block lg:sticky lg:top-32">
              <div className="relative aspect-3/4 overflow-hidden bg-stone-100">
                <img src="/home-gallery/photo-09.jpg" alt="Rooted in truth" className="absolute inset-0 w-full h-full object-cover" data-pathway-img="0" style={{ opacity: 0, transform: 'scale(1.06)' }} loading="lazy" />
                <img src="/home-gallery/photo-10.jpg" alt="Formed in community" className="absolute inset-0 w-full h-full object-cover" data-pathway-img="1" style={{ opacity: 0, transform: 'scale(1.06)' }} loading="lazy" />
                <img src="/home-gallery/photo-11.jpg" alt="Released into service" className="absolute inset-0 w-full h-full object-cover" data-pathway-img="2" style={{ opacity: 0, transform: 'scale(1.06)' }} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="ob-section ob-section-dark">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="ob-kicker mb-5" data-gsap-reveal>
                LOVA FAQ
              </p>
              <h2 className="ob-display text-white" data-gsap-words>
                Answer the questions that affect commitment.
              </h2>
              <p className="mt-8 ob-body-dark max-w-md" data-gsap-reveal>
                If someone is considering discipleship, the site should explain the rhythm and
                remove avoidable uncertainty.
              </p>
            </div>
            <div data-accordion-group data-gsap-reveal>
              <details className="site-accordion-dark">
                <summary className="flex cursor-pointer items-center justify-between gap-4">
                  <span className="text-xl font-medium">Who is LOVA for?</span>
                  <span className="site-accordion-icon text-2xl leading-none shrink-0">+</span>
                </summary>
                <div className="accordion-body">
                  LOVA is for believers who want to grow in Christ-centered understanding, identity, and practical service within the church.
                </div>
              </details>
              <details className="site-accordion-dark">
                <summary className="flex cursor-pointer items-center justify-between gap-4">
                  <span className="text-xl font-medium">What kind of commitment does it require?</span>
                  <span className="site-accordion-icon text-2xl leading-none shrink-0">+</span>
                </summary>
                <div className="accordion-body">
                  The academy is structured over 8 weeks. Applicants should expect a rhythm of teaching, reflection, and active engagement.
                </div>
              </details>
              <details className="site-accordion-dark">
                <summary className="flex cursor-pointer items-center justify-between gap-4">
                  <span className="text-xl font-medium">What happens after the academy?</span>
                  <span className="site-accordion-icon text-2xl leading-none shrink-0">+</span>
                </summary>
                <div className="accordion-body">
                  Graduates should leave with clearer doctrine, stronger conviction, and greater readiness for ministry and witness.
                </div>
              </details>
              <details className="site-accordion-dark">
                <summary className="flex cursor-pointer items-center justify-between gap-4">
                  <span className="text-xl font-medium">How do I ask about the next cohort?</span>
                  <span className="site-accordion-icon text-2xl leading-none shrink-0">+</span>
                </summary>
                <div className="accordion-body">
                  We run cohorts on a rolling basis rather than fixed annual dates. Use the application form below or email hello@onebodychurch.org and we will tell you when the next cohort starts.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* 7. APPLICATION */}
      <section id="apply" className="ob-section ob-section-light">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="ob-kicker mb-5" data-gsap-reveal>
                Application
              </p>
              <h2 className="ob-display" data-gsap-words>
                Start the conversation.
              </h2>
              <p className="mt-8 ob-body max-w-md" data-gsap-reveal>
                Apply for the next cohort by sending your details. The team will reach out with
                timing, next steps, and answers to any questions.
              </p>
              <AcademyApplicationForm />
            </div>

            <div className="space-y-10" data-gsap-stagger>
              <div>
                <p className="ob-kicker mb-6">What You Leave With</p>
                <div className="space-y-5 text-base leading-relaxed text-stone-600 border-t border-stone-200 pt-6">
                  <p className="flex items-start gap-3">
                    <span className="text-brand-600 mt-0.5 shrink-0">—</span>
                    A deeper grasp of the gospel and God&apos;s vision for His church.
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-brand-600 mt-0.5 shrink-0">—</span>
                    Clearer identity in Christ and stronger Kingdom-shaped habits.
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-brand-600 mt-0.5 shrink-0">—</span>
                    Practical readiness for meaningful service in the local church and the city.
                  </p>
                </div>
              </div>
              <div className="border-t border-stone-200 pt-10">
                <p className="ob-kicker mb-5">Partner With The Mission</p>
                <h3 className="text-2xl font-medium tracking-tight text-stone-900">Support discipleship at Onebody.</h3>
                <p className="mt-4 text-base leading-relaxed text-stone-500">
                  Support the work of teaching and formation by partnering with the mission.
                </p>
                <a
                  href="mailto:hello@onebodychurch.org?subject=Supporting%20LOVA"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-600"
                >
                  Ask how to give
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

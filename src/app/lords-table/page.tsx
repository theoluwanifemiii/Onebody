import type { Metadata } from 'next';
import { ArrowRight, ArrowDown } from 'lucide-react';

export const metadata: Metadata = {
  title: "The Lord's Table | Onebody Church",
  description:
    "A return to what Jesus instituted — not a quickie event, but a full, meal-shaped act of remembrance, unity, and anticipation of the Messianic Banquet.",
};

export default function LordsTablePage() {
  return (
    <>
      {/* 1. HERO */}
      <section
        className="ob-section ob-section-dark flex flex-col justify-end"
        style={{ paddingTop: '9rem' }}
      >
        <div className="mx-auto w-full max-w-7xl">
          <p className="ob-kicker mb-6" data-gsap-hero-reveal>
            Resource
          </p>
          <h1 className="ob-display text-white" data-gsap-hero-words>
            The Lord&apos;s Table.
          </h1>
          <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-10 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl ob-body-dark" data-gsap-hero-reveal>
              A return to what Jesus instituted — not a quickie event, but a full, meal-shaped act
              of remembrance, unity, and anticipation of the Messianic Banquet.
            </p>
            <div className="flex flex-wrap gap-4" data-gsap-hero-reveal>
              <a
                href="#the-meal"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-900 transition-colors hover:bg-stone-100"
              >
                Read the scripture basis
                <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OPENING */}
      <section className="ob-section ob-section-light">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div data-gsap-reveal>
              <p className="ob-kicker mb-5">The Problem</p>
              <h2 className="ob-display">Reduced to anything but remembrance.</h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-stone-600" data-gsap-reveal>
              <p>
                The Lord&apos;s Table — commonly referred to as Holy Communion — as practiced in many
                churches today has lost its essence. It has been turned into warfare meetings or
                another mechanism to get things from God, especially in the Pentecostal setting.
                This significant spiritual event has been oversimplified at precisely the moment the
                church needs to find its center again.
              </p>
              <p className="italic border-l-2 border-red-600 pl-5 text-stone-500">
                &ldquo;By this shall all men know that ye are my disciples, when ye love one another.&rdquo;
                <span className="not-italic block mt-1 text-sm text-stone-400">John 13:35</span>
              </p>
              <p>
                Although what we practice today has similarities to what Scripture establishes —
                the significance of the Bread and Wine, the most important elements, has been upheld
                — completeness requires all parts. Just as a body is complete when all parts are
                present and functioning, the Lord&apos;s Table is meant to be experienced in its fullness.
                At Onebody we seek to re-establish it as the Lord instituted it: with meaning,
                purpose, completeness, and the genuine excitement of the entire spiritual event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SCRIPTURE BASIS */}
      <section id="the-meal" className="ob-section ob-section-dark">
        <div className="mx-auto w-full max-w-7xl">
          <p className="ob-kicker mb-5" data-gsap-reveal>
            What Scripture Shows
          </p>
          <h2 className="ob-display text-white mb-20" data-gsap-words>
            Jesus followed an order. So did the apostles.
          </h2>

          <div data-gsap-stagger>
            {/* Step 1 */}
            <div className="flex items-start gap-8 py-10 border-t border-white/10">
              <span className="ob-kicker text-stone-600 w-16 shrink-0 mt-1">01</span>
              <div>
                <h3 className="text-2xl font-medium text-white tracking-tight">It was a meal</h3>
                <p className="mt-4 ob-body-dark max-w-2xl">
                  The word &ldquo;meal&rdquo; appears throughout Luke 22:7–20 and Matthew 26:18–19. Jesus and
                  His disciples ate together as one at a table (Luke 22:14, 21). The apostles did
                  the same — Acts 2:42 records the four fundamental activities of the early church:
                  devotion to the apostles&apos; teaching, fellowship, the sharing of meals, and prayer.
                  In Acts 20:7 they gathered weekly at the Lord&apos;s Supper.
                </p>
                <p className="mt-3 ob-kicker text-stone-500">Luke 22:7–20 · Matt 26:18–19 · Acts 2:42 · Acts 20:7 · 1 Cor 11:23</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-8 py-10 border-t border-white/10">
              <span className="ob-kicker text-stone-600 w-16 shrink-0 mt-1">02</span>
              <div>
                <h3 className="text-2xl font-medium text-white tracking-tight">It was frequent — very frequent</h3>
                <p className="mt-4 ob-body-dark max-w-2xl">
                  Acts 2:42 and Acts 20:7 make clear that this meal was a fundamental part of
                  weekly Christian community life. The early church was highly localized and
                  participatory — the Lord&apos;s Table was not an occasional observance but a regular,
                  unifying act that held the community together.
                </p>
                <p className="mt-3 ob-kicker text-stone-500">Acts 2:42 · Acts 20:7</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-8 py-10 border-t border-white/10">
              <span className="ob-kicker text-stone-600 w-16 shrink-0 mt-1">03</span>
              <div>
                <h3 className="text-2xl font-medium text-white tracking-tight">The progression of the event</h3>
                <p className="mt-4 ob-body-dark max-w-2xl">
                  In Luke 22:17, Jesus took a first cup and gave thanks — the last time he drank
                  wine on earth. He made clear he would not taste it again until the Kingdom of God
                  had come. This cup is distinct from the cup of the new covenant.
                </p>
                <p className="mt-4 ob-body-dark max-w-2xl">
                  Then, in the middle of the meal, he broke bread and explained its meaning
                  (Matt 26:26). After the meal was over, he took a second cup — the one representing
                  the new covenant sealed by his blood. Paul makes this sequence explicit in
                  1 Cor 11:25: &ldquo;after supper.&rdquo; The evening concluded with a song (Matt 26:30).
                </p>
                <p className="mt-3 ob-kicker text-stone-500">Luke 22:17 · Matt 26:26 · 1 Cor 11:25 · Matt 26:30</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-8 py-10 border-y border-white/10">
              <span className="ob-kicker text-stone-600 w-16 shrink-0 mt-1">04</span>
              <div>
                <h3 className="text-2xl font-medium text-white tracking-tight">The fulfillment of its meaning</h3>
                <p className="mt-4 ob-body-dark max-w-2xl">
                  Jesus opened the night with &ldquo;until its meaning is fulfilled in the Kingdom of God.&rdquo;
                  The meal is a constant reminder of the Messianic Banquet — the physical table that
                  will be set when the Lord returns. In Luke 22:28–30 he promises that those who
                  remained true to him in his trials would sit at that table again with him in his
                  Kingdom, and even be given thrones.
                </p>
                <p className="mt-4 ob-body-dark max-w-2xl">
                  One strategy of the enemy has been to reduce this event to something quick and
                  misdirected — because a properly observed Lord&apos;s Table is precisely the weekly
                  act that keeps the reality of what is ahead alive in the believer&apos;s heart. It
                  was also a powerful uniting platform where offenses were settled and the fire of
                  love was re-ignited.
                </p>
                <p className="mt-3 ob-kicker text-stone-500">Luke 22:28–30 · 1 Cor 11:25–33</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY WE ARE DOING THIS */}
      <section className="ob-section ob-section-light">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div data-gsap-reveal>
              <p className="ob-kicker mb-5">Why Onebody Is Doing This</p>
              <h2 className="ob-display">Restoring the table to its fullness.</h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-stone-600" data-gsap-reveal>
              <p>
                The most senior ministers of the community were responsible for the actual sharing
                — a direct echo of Jesus&apos; words that same night in Luke 22:27. The early apostles
                did not stop serving tables because one person could not do it; they simply needed
                to prioritize prayer and teaching where their absence was already causing visible
                gaps (Acts 6:1).
              </p>
              <p>
                We are recreating and re-establishing this meal because weekly participation in
                it was the early church&apos;s way of declaring strong commitment to the Christian
                community — and because it is the one practice that most consistently pointed
                believers toward what was waiting for them ahead.
              </p>
              <p>
                We will continue to make changes as the Lord leads us until we get it right,
                because He clearly instituted it and clearly intends for it to be observed in
                its fullness.
              </p>
              <p className="italic border-l-2 border-red-600 pl-5 text-stone-500">
                &ldquo;For I received from the Lord what I also passed on to you...&rdquo;
                <span className="not-italic block mt-1 text-sm text-stone-400">1 Corinthians 11:23</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="ob-section ob-section-dark">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div data-gsap-reveal>
              <p className="ob-kicker mb-5">Join the Conversation</p>
              <h2 className="ob-display text-white">Gather with us and experience it.</h2>
              <p className="mt-8 ob-body-dark max-w-md">
                The Lord&apos;s Table is observed in our Sunday gatherings. Come and participate in
                what we are learning to restore together.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/services#visit"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-900 transition-colors hover:bg-stone-100"
                >
                  Plan a visit
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </a>
                <a
                  href="mailto:hello@onebodychurch.org?subject=Question%20about%20the%20Lord%27s%20Table"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/40"
                >
                  Ask a question
                </a>
              </div>
            </div>
            <div className="space-y-4 text-sm text-stone-500" data-gsap-stagger>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-medium mb-1">Key Scriptures</p>
                <p className="ob-body-dark">Luke 22:7–20 · Matthew 26:18–30 · 1 Corinthians 11:23–33 · Acts 2:42 · Acts 20:7</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-medium mb-1">The Messianic Banquet</p>
                <p className="ob-body-dark">Luke 22:28–30 — the promise of the Table that awaits in the Kingdom.</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-medium mb-1">The Four Acts of the Early Church</p>
                <p className="ob-body-dark">Teaching · Fellowship · Breaking of bread · Prayer (Acts 2:42)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

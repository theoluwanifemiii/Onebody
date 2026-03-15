'use client';

import { useEffect, useRef } from 'react';

const STEPS = [
  {
    letter: 'S',
    title: 'Seeking',
    body: 'Through music, visual content, affinity groups, and special events, we always seek new souls.',
  },
  {
    letter: 'C',
    title: 'Converting',
    body: 'In our weekly gatherings and home meetings, we create real opportunities for conversions.',
  },
  {
    letter: 'A',
    title: 'Assimilating',
    body: 'An 8-module, 16-week discipleship program — The Love Vision Academy — assimilates new members.',
  },
  {
    letter: 'D',
    title: 'Deploying',
    body: 'Every disciple goes out and seeks new souls through the grace and gifts of the Holy Spirit.',
  },
];

export default function ScadTimeline() {
  const sectionRef  = useRef<HTMLElement>(null);
  const lineRef     = useRef<HTMLDivElement>(null);
  const nodesRef    = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let tl: { kill: () => void } | null = null;

    (async () => {
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger }  = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;
      const line    = lineRef.current;
      const nodes   = nodesRef.current.filter(Boolean);
      if (!section || !line || !nodes.length) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 65%',
          end: 'bottom 55%',
          scrub: 1.4,
        },
      });

      // Line draws left → right
      timeline.fromTo(
        line,
        { scaleX: 0 },
        { scaleX: 1, ease: 'none', duration: 4 },
        0
      );

      // Each node reveals as the line reaches it
      nodes.forEach((node, i) => {
        timeline.fromTo(
          node,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          i * (4 / (STEPS.length - 1)) * 0.9
        );
      });

      tl = timeline as unknown as { kill: () => void };
    })();

    return () => {
      // Kill the ScrollTrigger and timeline directly — no gsap.context to avoid removeChild
      tl?.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="ob-section ob-section-dark"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <p className="ob-kicker mb-5" data-gsap-reveal>Renewed Discipleship</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <h2 className="ob-display text-white" data-gsap-words>SCAD</h2>
          <p className="ob-body-dark max-w-sm md:text-right" data-gsap-reveal>
            &ldquo;Therefore go and make disciples of all nations…&rdquo; burns in our hearts. We have refined our discipleship model around four stages.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Row 1: ghost letters — uniform height so line position is predictable */}
          <div className="grid grid-cols-1 md:grid-cols-4 mb-0">
            {STEPS.map((step, i) => (
              <div
                key={step.letter + '-letter'}
                ref={(el) => { if (el) nodesRef.current[i] = el; }}
                className="flex items-end justify-start md:justify-center pb-4 opacity-0"
              >
                <p
                  className="leading-none font-bold tracking-tighter text-white/8 select-none"
                  style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', lineHeight: 1 }}
                >
                  {step.letter}
                </p>
              </div>
            ))}
          </div>

          {/* Row 2: horizontal line + dots — sits flush below the letters */}
          <div className="relative hidden md:block" style={{ height: '1.1rem' }}>
            {/* Ghost track */}
            <div
              className="absolute top-1/2 left-0 right-0 -translate-y-1/2"
              style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }}
            />
            {/* Animated red line */}
            <div
              ref={lineRef}
              className="absolute top-1/2 left-0 right-0 -translate-y-1/2 origin-left"
              style={{ height: '1px', background: 'rgba(220,38,38,0.7)', transform: 'scaleX(0)' }}
            />
            {/* Dots evenly spaced across the 4 columns */}
            {STEPS.map((step, i) => (
              <div
                key={step.letter + '-dot'}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
                style={{ left: `${(i / (STEPS.length - 1)) * 100}%` }}
              >
                <div
                  className="w-[1.1rem] h-[1.1rem] rounded-full border-2 border-red-600 bg-stone-950"
                  style={{ boxShadow: '0 0 0 4px rgba(220,38,38,0.12)' }}
                />
              </div>
            ))}
          </div>

          {/* Row 3: title + body */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4 mt-8">
            {STEPS.map((step, i) => (
              <div key={step.letter + '-text'} className="flex flex-col items-start md:items-center md:text-center">
                <h3 className="text-xl md:text-2xl font-medium text-white tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="ob-body-dark text-sm leading-relaxed max-w-55">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

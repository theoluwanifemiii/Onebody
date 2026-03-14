'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, X, Heart, Mail } from 'lucide-react';
import TransitionLink from '@/components/ui/TransitionLink';

type PageKey = 'home' | 'about' | 'services' | 'sermons' | 'academy' | 'charity' | 'giving' | 'blog';

const NAV_LINKS: { key: PageKey; href: string; label: string }[] = [
  { key: 'about', href: '/about', label: 'About' },
  { key: 'sermons', href: '/sermons', label: 'Sermons' },
  { key: 'academy', href: '/academy', label: 'LOVA' },
  { key: 'charity', href: '/charity', label: 'Charity' },
];

function getPageKey(pathname: string): PageKey {
  if (pathname === '/') return 'home';
  const segment = pathname.split('/')[1] as PageKey;
  return segment || 'home';
}

export default function SiteHeader() {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();
  const current = getPageKey(pathname);
  const visitHref = pathname === '/services' ? '#visit' : '/services#visit';

  useEffect(() => {
    document.body.classList.toggle('mobile-nav-open', expanded);
    return () => { document.body.classList.remove('mobile-nav-open'); };
  }, [expanded]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => { if (e.key === 'Escape') setExpanded(false); };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Close nav on route change
  useEffect(() => { setExpanded(false); }, [pathname]);

  return (
    <nav className="fixed top-0 z-50 w-full px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-stone-200/60 bg-white/80 px-6 py-3 shadow-sm backdrop-blur-md">
        <TransitionLink href="/" className="flex items-center">
          <img src="/onebody-logo.png" alt="Onebody Church logo" className="h-8 w-auto rounded-md object-contain" />
        </TransitionLink>

        <div className="hidden items-center gap-6 text-stone-600 md:flex">
          {NAV_LINKS.map((link) => (
            <TransitionLink
              key={link.key}
              href={link.href}
              className={link.key === current ? 'text-sm text-stone-900' : 'text-sm transition-colors hover:text-stone-900'}
              aria-current={link.key === current ? 'page' : undefined}
            >
              {link.label}
            </TransitionLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <TransitionLink
            href="/giving"
            className="rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
          >
            Give
          </TransitionLink>
          <TransitionLink
            href={visitHref}
            className="group flex items-center gap-2 rounded-full bg-stone-900 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-stone-800 hover:pl-4 hover:pr-6"
          >
            Plan a Visit
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
          </TransitionLink>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 text-stone-900 md:hidden"
          aria-expanded={expanded}
          aria-controls="mobile-site-nav"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
        </button>
      </div>

      {/* Full-page mobile nav overlay */}
      <div
        id="mobile-site-nav"
        className={`${expanded ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} fixed inset-0 z-40 flex flex-col bg-stone-950 transition-opacity duration-300 md:hidden`}
      >
        {/* Top bar inside overlay */}
        <div className="flex items-center justify-between px-6 py-5">
          <TransitionLink href="/" onClick={() => setExpanded(false)}>
            <img src="/onebody-logo.png" alt="Onebody Church logo" className="h-8 w-auto rounded-md object-contain brightness-0 invert" />
          </TransitionLink>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white"
            onClick={() => setExpanded(false)}
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Nav links */}
        <div className="flex flex-1 flex-col justify-center px-8">
          <p className="mb-8 text-xs font-medium uppercase tracking-[0.24em] text-red-500">Navigation</p>
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <TransitionLink
                key={link.key}
                href={link.href}
                className={`group flex items-center justify-between border-b border-white/10 py-5 text-3xl font-medium tracking-tight ${link.key === current ? 'text-white' : 'text-stone-400'}`}
                aria-current={link.key === current ? 'page' : undefined}
                onClick={() => setExpanded(false)}
              >
                {/* Vertical roll-over label */}
                <span className="overflow-hidden leading-none" style={{ height: '1.1em' }}>
                  <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
                    <span className="block" style={{ height: '1.1em', lineHeight: '1.1em' }}>{link.label}</span>
                    <span className={`block ${link.key === current ? 'text-white' : 'text-white'}`} style={{ height: '1.1em', lineHeight: '1.1em' }}>{link.label}</span>
                  </span>
                </span>
                <ArrowRight className="h-5 w-5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" strokeWidth={1.5} />
              </TransitionLink>
            ))}
          </div>
        </div>

        {/* Bottom actions */}
        <div className="grid grid-cols-2 gap-3 px-8 pb-10">
          <TransitionLink
            href="/giving"
            className="flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-4 py-4 text-sm font-medium text-white transition-colors hover:bg-red-700"
            onClick={() => setExpanded(false)}
          >
            <Heart className="h-4 w-4" strokeWidth={1.5} />
            Give
          </TransitionLink>
          <TransitionLink
            href={visitHref}
            className="flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-4 py-4 text-sm font-medium text-white transition-colors hover:bg-white/10"
            onClick={() => setExpanded(false)}
          >
            <Mail className="h-4 w-4" strokeWidth={1.5} />
            Plan a Visit
          </TransitionLink>
        </div>
      </div>
    </nav>
  );
}

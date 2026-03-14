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

      {/* Mobile backdrop */}
      <div
        className={expanded
          ? 'pointer-events-auto fixed inset-0 bg-stone-950/20 opacity-100 transition-opacity duration-300 md:hidden'
          : 'pointer-events-none fixed inset-0 bg-stone-950/20 opacity-0 transition-opacity duration-300 md:hidden'}
        onClick={() => setExpanded(false)}
      />

      {/* Mobile nav panel */}
      <div
        id="mobile-site-nav"
        className={`${expanded ? 'pointer-events-auto visible translate-y-0 opacity-100' : 'pointer-events-none invisible -translate-y-3 opacity-0'} fixed inset-x-6 top-24 rounded-[2rem] border border-stone-200 bg-white p-5 shadow-2xl shadow-stone-900/10 transition-all duration-300 md:hidden`}
      >
        <div className="mb-5 flex items-center justify-between border-b border-stone-100 pb-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-red-600">Onebody Church</p>
            <p className="mt-1 text-sm text-stone-500">Find your next step.</p>
          </div>
          <TransitionLink
            href={visitHref}
            className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white"
            onClick={() => setExpanded(false)}
          >
            Visit
          </TransitionLink>
        </div>

        <div className="flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <TransitionLink
              key={link.key}
              href={link.href}
              className={link.key === current
                ? 'rounded-2xl bg-red-50 px-4 py-3 text-base font-medium text-stone-900'
                : 'rounded-2xl px-4 py-3 text-base text-stone-700 transition-colors hover:bg-stone-50 hover:text-stone-900'}
              aria-current={link.key === current ? 'page' : undefined}
              onClick={() => setExpanded(false)}
            >
              {link.label}
            </TransitionLink>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 border-t border-stone-100 pt-5">
          <TransitionLink
            href="/giving"
            className="flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-4 py-3 text-sm font-medium text-white"
            onClick={() => setExpanded(false)}
          >
            <Heart className="h-4 w-4" strokeWidth={1.5} />
            Give
          </TransitionLink>
          <a
            href="mailto:hello@onebodychurch.org"
            className="flex items-center justify-center gap-2 rounded-2xl border border-stone-200 px-4 py-3 text-sm font-medium text-stone-800"
            onClick={() => setExpanded(false)}
          >
            <Mail className="h-4 w-4" strokeWidth={1.5} />
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

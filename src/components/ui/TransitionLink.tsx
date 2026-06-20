'use client';

import { useRouter, usePathname } from 'next/navigation';
import { MouseEvent, ReactNode, AnchorHTMLAttributes } from 'react';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

export default function TransitionLink({ href, children, onClick, ...props }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const isExternal =
    href.startsWith('http') ||
    href.startsWith('//') ||
    href.startsWith('mailto') ||
    href.startsWith('tel') ||
    href.startsWith('#');

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || isExternal) return;

    e.preventDefault();

    // Same page — skip transition to avoid overlay getting stuck
    const hrefPathname = href.split('?')[0].split('#')[0];
    if (hrefPathname === pathname) {
      router.push(href);
      return;
    }

    const overlay = document.getElementById('page-transition');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // scroll: false — Next's automatic scroll-into-view on navigation can
    // target the wrong DOM node on this site (it's picked the wrong
    // <section> before, landing mid-page). PageTransition handles scrolling
    // to top itself once the new page has mounted.
    if (!overlay || prefersReduced) {
      router.push(href, { scroll: false });
      return;
    }

    // Dynamic import GSAP to avoid SSR issues
    import('gsap').then(({ default: gsap }) => {
      gsap.set(overlay, { autoAlpha: 1, yPercent: 100 });
      gsap.to(overlay, {
        yPercent: 0,
        duration: 0.35,
        ease: 'expo.inOut',
        onComplete: () => router.push(href, { scroll: false }),
      });
    });
  };

  if (isExternal) {
    return <a href={href} onClick={onClick} {...props}>{children}</a>;
  }

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}

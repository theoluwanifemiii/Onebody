'use client';

import { useRouter } from 'next/navigation';
import { MouseEvent, ReactNode, AnchorHTMLAttributes } from 'react';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

export default function TransitionLink({ href, children, onClick, ...props }: Props) {
  const router = useRouter();

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

    const overlay = document.getElementById('page-transition');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!overlay || prefersReduced) {
      router.push(href);
      return;
    }

    // Dynamic import GSAP to avoid SSR issues
    import('gsap').then(({ default: gsap }) => {
      gsap.set(overlay, { autoAlpha: 1, yPercent: 100 });
      gsap.to(overlay, {
        yPercent: 0,
        duration: 0.35,
        ease: 'expo.inOut',
        onComplete: () => router.push(href),
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

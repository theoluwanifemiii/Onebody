'use client';

import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';

let DevImageTools: ComponentType = () => null;

if (process.env.NODE_ENV !== 'production') {
  DevImageTools = dynamic(
    // @ts-ignore – local-only dev module not tracked in git
    () => import('@/components/dev/DevImageTools'),
    { ssr: false }
  ) as ComponentType;
}

export default function DevToolsLoader() {
  return <DevImageTools />;
}

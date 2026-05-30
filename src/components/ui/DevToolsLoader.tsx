'use client';

import dynamic from 'next/dynamic';

const DevImageTools =
  process.env.NODE_ENV !== 'production'
    ? dynamic(() => import('@/components/dev/DevImageTools'), { ssr: false })
    : () => null;

export default function DevToolsLoader() {
  return <DevImageTools />;
}

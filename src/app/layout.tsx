import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import SiteHeader from '@/components/layout/SiteHeader';
import ConditionalFooter from '@/components/layout/ConditionalFooter';
import PageTransition from '@/components/ui/PageTransition';
import FlashAd from '@/components/ui/FlashAd';
import GsapEffects from '@/components/effects/GsapEffects';
import HomePageEffects from '@/components/effects/HomePageEffects';
import DevImageTools from '@/components/dev/DevImageTools';
import './globals.css';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Onebody Church',
  description: 'A Jesus-centered church in Yaba where worship, teaching, discipleship, and service shape how we gather and how we love our city.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${cormorant.variable} flex min-h-screen flex-col antialiased`} suppressHydrationWarning>
        <PageTransition />
        <FlashAd />
        <SiteHeader />
        <main className="flex flex-1 flex-col">
          {children}
        </main>
        <ConditionalFooter />
        <GsapEffects />
        <HomePageEffects />
        {process.env.NODE_ENV === 'development' && <DevImageTools />}
      </body>
    </html>
  );
}

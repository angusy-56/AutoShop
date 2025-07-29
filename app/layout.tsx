import './globals.css';
import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Mean Streets Performance - Automotive Repair',
  description: 'Performance-grade repairs. Neighborhood-level care. Fast, fair, and performance-tuned automotive repair services.',
  keywords: 'auto repair, automotive, performance tuning, brakes, diagnostics, oil change, maintenance',
  openGraph: {
    title: 'Mean Streets Performance - Automotive Repair',
    description: 'Performance-grade repairs. Neighborhood-level care.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
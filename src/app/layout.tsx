import type { Metadata, Viewport } from 'next';
import { Outfit, Playfair_Display } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#e25822',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Sikhi Connect - Premium Gurbani, Nitnem & Hukamnama App',
  description:
    'Sikhi Connect is a premium Sikh companion app featuring an advanced Gurbani Reader, personalized Nitnem schedules, live Darbar Sahib streaming, historical insights, and an intelligent Gurbani AI assistant. Join the waitlist today.',
  keywords: [
    'Sikhi Connect',
    'Gurbani Reader',
    'Nitnem App',
    'Daily Hukamnama',
    'Darbar Sahib Live',
    'Sikh History',
    'Gurbani AI',
    'Sikhi App',
    'Sundar Gutka',
    'Kirtan Player',
  ],
  authors: [{ name: 'Sikhi Connect Team' }],
  metadataBase: new URL('https://sikhiconnect.app'),
  openGraph: {
    title: 'Sikhi Connect - Connect with Gurbani, Nitnem, and History',
    description:
      'Experience Sikhi Connect: A premium Sikh companion application featuring Gurbani AI, Nitnem, Daily Hukamnama, Live Kirtan, and historical stories. Sign up for early access.',
    url: 'https://sikhiconnect.app',
    siteName: 'Sikhi Connect',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sikhi Connect - Connecting Hearts with Gurbani & History',
    description:
      'Join the waitlist for the ultimate Sikhi companion app. Advanced Gurbani Reader, Nitnem, live streams, and Gurbani AI.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} scroll-smooth antialiased`}
    >
      <body className="bg-background text-foreground min-h-screen selection:bg-saffron-500 selection:text-white flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}

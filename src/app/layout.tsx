import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Professional Arborist Services in Atlanta, Roswell & Metro Area | Dream of the Monarch Butterfly',
  description: 'Expert tree care services in Roswell, Johns Creek, Alpharetta, Marietta, Sandy Springs, Smyrna, Atlanta & Cumming. Licensed arborists for pruning, removal & emergency services.',
  icons: {
    icon: 'https://res.cloudinary.com/di4phdven/image/upload/f_jpg,q_auto/v1745939117/IMG_1263_xgijg2.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-monarch-offwhite">
        <LocalBusinessSchema />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

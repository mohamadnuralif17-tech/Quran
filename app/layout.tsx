import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Quran Hub - Al-Quran Digital',
  description: 'Website interaktif untuk membaca dan mempelajari Al-Quran dengan terjemahan bahasa Indonesia',
  keywords: ['Quran', 'Al-Quran', 'Digital', 'Islamic', 'Terjemahan'],
  authors: [{ name: 'Mohamad Nur Alif', url: 'https://github.com/mohamadnuralif17-tech' }],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://quran-hub.vercel.app',
    title: 'Quran Hub - Al-Quran Digital',
    description: 'Baca dan pelajari Al-Quran dengan terjemahan Indonesia',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50 transition-colors duration-300`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-quran-primary dark:bg-quran-secondary text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Tentang Quran Hub</h3>
            <p className="text-sm opacity-90">
              Platform digital untuk membaca dan mempelajari Al-Quran dengan terjemahan bahasa Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-quran-accent transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/bookmarks" className="hover:text-quran-accent transition">
                  Bookmarks
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-quran-accent transition">
                  Tentang
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kontak</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/mohamadnuralif17-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-quran-accent transition"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:mohamadnuralif17@gmail.com"
                  className="hover:text-quran-accent transition"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-opacity-20 mb-4" />

        {/* Copyright */}
        <div className="text-center text-sm opacity-75">
          <p>
            © {currentYear} Quran Hub. Dibuat dengan ❤️ oleh{' '}
            <a
              href="https://github.com/mohamadnuralif17-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-quran-accent transition"
            >
              Mohamad Nur Alif
            </a>
          </p>
          <p className="mt-2 text-xs opacity-60">
            Data dari Quran.com API
          </p>
        </div>
      </div>
    </footer>
  );
}

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useQuranStore } from '@/store/quranStore';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useQuranStore();

  return (
    <header className="bg-quran-primary dark:bg-quran-secondary text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-quran-accent rounded-lg flex items-center justify-center">
            <span className="text-quran-primary font-bold text-lg">ق</span>
          </div>
          <span className="font-bold text-xl hidden sm:inline">Quran Hub</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-quran-accent transition">
            Home
          </Link>
          <Link href="/bookmarks" className="hover:text-quran-accent transition">
            Bookmarks
          </Link>
          <Link href="/about" className="hover:text-quran-accent transition">
            Tentang
          </Link>
        </div>

        {/* Dark Mode Toggle & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-quran-secondary dark:bg-quran-primary hover:bg-opacity-80 transition"
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-quran-secondary px-4 py-2 space-y-2">
          <Link href="/" className="block py-2 hover:text-quran-accent">
            Home
          </Link>
          <Link href="/bookmarks" className="block py-2 hover:text-quran-accent">
            Bookmarks
          </Link>
          <Link href="/about" className="block py-2 hover:text-quran-accent">
            Tentang
          </Link>
        </div>
      )}
    </header>
  );
}

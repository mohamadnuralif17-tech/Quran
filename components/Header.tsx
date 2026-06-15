'use client';

import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  onDarkModeToggle: () => void;
}

export default function Header({ darkMode, onDarkModeToggle }: HeaderProps) {
  return (
    <header className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-quran-primary text-white'} shadow-lg`}>
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">🕌 Quran Hub</h1>
            <p className="text-sm opacity-90">Baca dan Pelajari Al-Quran Digital</p>
          </div>
          <button
            onClick={onDarkModeToggle}
            className="p-2 rounded-full hover:bg-opacity-80 transition"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}

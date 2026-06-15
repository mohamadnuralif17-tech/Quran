'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import SurahList from '@/components/SurahList';
import QuranReader from '@/components/QuranReader';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  const [selectedSurah, setSelectedSurah] = useState<number | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <main className={darkMode ? 'dark-mode' : ''}>
      <Header darkMode={darkMode} onDarkModeToggle={() => setDarkMode(!darkMode)} />
      <div className="container mx-auto px-4 py-8">
        <SearchBar />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <SurahList onSelectSurah={setSelectedSurah} />
          {selectedSurah ? (
            <QuranReader surahNumber={selectedSurah} />
          ) : (
            <div className="lg:col-span-2 flex items-center justify-center h-96 bg-white dark:bg-gray-900 rounded-lg shadow-md">
              <p className="text-center text-gray-500">Pilih Surah untuk memulai membaca Al-Quran</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

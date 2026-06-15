'use client';

import { useState, useEffect } from 'react';
import { useQuran } from '@/hooks/useQuran';
import { quranApi } from '@/lib/quranApi';
import { useQuranStore } from '@/store/quranStore';

interface Verse {
  number: number;
  text: string;
  numberInSurah: number;
}

interface Chapter {
  number: number;
  name: string;
  englishName: string;
  numberOfAyahs: number;
  revelation: {
    order: number;
    type: string;
  };
}

export default function QuranReader() {
  const { chapters, loading, error } = useQuran();
  const { bookmarks, addBookmark, removeBookmark } = useQuranStore();
  const [selectedSurah, setSelectedSurah] = useState<number>(1);
  const [verses, setVerses] = useState<Verse[]>([]);
  const [surahDetail, setSurahDetail] = useState<Chapter | null>(null);
  const [versesLoading, setVersesLoading] = useState(false);

  // Fetch verses ketika surah berubah
  useEffect(() => {
    const fetchVerses = async () => {
      try {
        setVersesLoading(true);
        const versesData = await quranApi.getVerses(selectedSurah);
        const detailData = await quranApi.getChapter(selectedSurah);
        setVerses(versesData);
        setSurahDetail(detailData);
      } catch (err) {
        console.error('Error fetching verses:', err);
      } finally {
        setVersesLoading(false);
      }
    };

    if (selectedSurah) {
      fetchVerses();
    }
  }, [selectedSurah]);

  const handleBookmarkToggle = (ayahNumber: number) => {
    if (bookmarks.includes(ayahNumber)) {
      removeBookmark(ayahNumber);
    } else {
      addBookmark(ayahNumber);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-quran-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat data Quran...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Sidebar - Daftar Surah */}
      <div className="lg:col-span-1">
        <div className="sticky top-20 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 max-h-96 overflow-y-auto">
          <h2 className="font-bold text-lg mb-4 text-quran-primary dark:text-quran-accent">
            Daftar Surah
          </h2>
          <div className="space-y-2">
            {chapters.map((chapter) => (
              <button
                key={chapter.number}
                onClick={() => setSelectedSurah(chapter.number)}
                className={`w-full text-left p-3 rounded-lg transition ${
                  selectedSurah === chapter.number
                    ? 'bg-quran-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <div className="font-semibold text-sm">{chapter.name}</div>
                <div className="text-xs opacity-70">{chapter.englishName}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content - Isi Surah */}
      <div className="lg:col-span-3">
        {surahDetail && (
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
            {/* Header Surah */}
            <div className="mb-8 pb-6 border-b dark:border-gray-700">
              <h1 className="text-4xl font-bold text-quran-primary dark:text-quran-accent mb-2">
                {surahDetail.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {surahDetail.englishName} • {surahDetail.numberOfAyahs} Ayat
              </p>
              <div className="flex gap-4 text-sm">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded">
                  {surahDetail.revelation.type === 'Meccan' ? 'Makkiyah' : 'Madaniyah'}
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded">
                  Urutan: {surahDetail.revelation.order}
                </span>
              </div>
            </div>

            {/* Verses */}
            {versesLoading ? (
              <div className="text-center py-8">
                <p className="text-gray-600 dark:text-gray-400">Memuat ayat...</p>
              </div>
            ) : (
              <div className="space-y-6">
                {verses.map((verse) => (
                  <div
                    key={verse.number}
                    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className="inline-block bg-quran-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {verse.numberInSurah}
                      </span>
                      <button
                        onClick={() => handleBookmarkToggle(verse.number)}
                        className={`text-2xl transition ${
                          bookmarks.includes(verse.number) ? 'text-yellow-500' : 'text-gray-400'
                        }`}
                        title="Tambahkan ke bookmark"
                      >
                        ★
                      </button>
                    </div>
                    <p className="arabic-text mb-4 text-quran-primary dark:text-gray-100">
                      {verse.text}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      <span className="font-semibold text-quran-primary dark:text-quran-accent">Terjemahan:</span> Ayat ini berisi pesan
                      penting tentang keimanan kepada Allah.
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

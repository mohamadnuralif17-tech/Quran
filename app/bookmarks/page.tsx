'use client';

import { useState, useEffect } from 'react';
import { useQuranStore } from '@/store/quranStore';
import { quranApi } from '@/lib/quranApi';
import Link from 'next/link';

interface BookmarkedVerse {
  number: number;
  text: string;
  surahNumber: number;
  surahName: string;
  ayahNumber: number;
}

export default function BookmarksPage() {
  const { bookmarks, removeBookmark } = useQuranStore();
  const [bookmarkedVerses, setBookmarkedVerses] = useState<BookmarkedVerse[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBookmarkedVerses = async () => {
      if (bookmarks.length === 0) {
        setBookmarkedVerses([]);
        return;
      }

      try {
        setLoading(true);
        // Fetch semua chapters
        const chapters = await quranApi.getChapters();

        // Fetch verses untuk setiap chapter
        const verses: BookmarkedVerse[] = [];
        for (const chapter of chapters) {
          const chapterVerses = await quranApi.getVerses(chapter.number);
          for (const verse of chapterVerses) {
            if (bookmarks.includes(verse.number)) {
              verses.push({
                number: verse.number,
                text: verse.text,
                surahNumber: chapter.number,
                surahName: chapter.name,
                ayahNumber: verse.numberInSurah,
              });
            }
          }
        }
        setBookmarkedVerses(verses);
      } catch (error) {
        console.error('Error fetching bookmarked verses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookmarkedVerses();
  }, [bookmarks]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-quran-primary dark:text-quran-accent mb-2">
          Bookmark Saya
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Ayat-ayat yang telah Anda tandai untuk dibaca kemudian
        </p>
      </div>

      {bookmarks.length === 0 ? (
        <div className="text-center py-12 bg-white dark:bg-gray-900 rounded-lg">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Anda belum memiliki bookmark
          </p>
          <Link
            href="/"
            className="inline-block bg-quran-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition"
          >
            Mulai Membaca
          </Link>
        </div>
      ) : (
        <div>
          <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
            <p className="text-blue-800 dark:text-blue-200">
              Total bookmark: <span className="font-bold">{bookmarks.length}</span> ayat
            </p>
          </div>

          {loading ? (
            <div className="text-center py-8">
              <p className="text-gray-600 dark:text-gray-400">Memuat bookmark...</p>
            </div>
          ) : (
            <div className="space-y-4">
              {bookmarkedVerses.map((verse) => (
                <div
                  key={verse.number}
                  className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg transition"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <Link
                        href={`/?surah=${verse.surahNumber}`}
                        className="text-quran-primary dark:text-quran-accent hover:underline font-semibold"
                      >
                        {verse.surahName}
                      </Link>
                      <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">
                        Ayat {verse.ayahNumber}
                      </span>
                    </div>
                    <button
                      onClick={() => removeBookmark(verse.number)}
                      className="text-red-500 hover:text-red-700 transition text-lg"
                      title="Hapus bookmark"
                    >
                      ✕
                    </button>
                  </div>
                  <p className="arabic-text mb-3 text-quran-primary dark:text-gray-100">
                    {verse.text}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Terjemahan: Ayat ini memiliki makna yang mendalam dan penting untuk dipahami.
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

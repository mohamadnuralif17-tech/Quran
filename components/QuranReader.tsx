'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Bookmark, Volume2 } from 'lucide-react';

interface Ayah {
  number: number;
  text: string;
  numberInSurah: number;
}

interface SurahInfo {
  name: string;
  englishName: string;
  ayahs: Ayah[];
}

interface QuranReaderProps {
  surahNumber: number;
}

export default function QuranReader({ surahNumber }: QuranReaderProps) {
  const [surah, setSurah] = useState<SurahInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [bookmarks, setBookmarks] = useState<number[]>([]);

  useEffect(() => {
    const fetchSurah = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.quran.com/api/v4/chapters/${surahNumber}`);
        const ayahsResponse = await axios.get(`https://api.quran.com/api/v4/verses?chapter_number=${surahNumber}&language=id`);
        
        setSurah({
          name: response.data.chapter.name,
          englishName: response.data.chapter.translated_name,
          ayahs: ayahsResponse.data.verses || [],
        });
        setLoading(false);
      } catch (err) {
        setError('Gagal memuat Surah');
        setLoading(false);
        console.error(err);
      }
    };

    fetchSurah();
  }, [surahNumber]);

  const toggleBookmark = (ayahNumber: number) => {
    setBookmarks((prev) =>
      prev.includes(ayahNumber)
        ? prev.filter((n) => n !== ayahNumber)
        : [...prev, ayahNumber]
    );
  };

  if (loading) return <div className="text-center text-lg">Memuat Surah...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;
  if (!surah) return null;

  return (
    <div className="lg:col-span-2">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-quran-primary mb-2">Surah {surah.englishName}</h2>
        <p className="text-gray-500 mb-6">{surah.name} - {surah.ayahs.length} Ayah</p>

        <div className="space-y-6">
          {surah.ayahs.map((ayah) => (
            <div key={ayah.number} className="ayah-container border-l-4 border-quran-primary">
              <div className="flex justify-between items-start mb-4">
                <span className="text-sm font-semibold text-quran-primary">Ayah {ayah.numberInSurah}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleBookmark(ayah.number)}
                    className={`p-2 rounded transition ${
                      bookmarks.includes(ayah.number)
                        ? 'bg-quran-accent text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    <Bookmark size={20} />
                  </button>
                  <button className="p-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 transition">
                    <Volume2 size={20} />
                  </button>
                </div>
              </div>
              <p className="quran-text mb-4 text-2xl leading-relaxed">{ayah.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

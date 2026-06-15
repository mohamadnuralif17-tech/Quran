'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

interface Surah {
  number: number;
  name: string;
  englishName: string;
  numberOfAyahs: number;
  revelation: {
    order: number;
    type: string;
  };
}

interface SurahListProps {
  onSelectSurah: (surahNumber: number) => void;
}

export default function SurahList({ onSelectSurah }: SurahListProps) {
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await axios.get('https://api.quran.com/api/v4/chapters');
        setSurahs(response.data.chapters || []);
        setLoading(false);
      } catch (err) {
        setError('Gagal memuat daftar Surah');
        setLoading(false);
        console.error(err);
      }
    };

    fetchSurahs();
  }, []);

  if (loading) return <div className="text-center">Memuat Surah...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="lg:col-span-1">
      <h2 className="text-2xl font-bold mb-4 text-quran-primary">Daftar Surah</h2>
      <div className="space-y-2 max-h-96 overflow-y-auto bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md">
        {surahs.map((surah) => (
          <button
            key={surah.number}
            onClick={() => onSelectSurah(surah.number)}
            className="w-full text-left p-3 rounded hover:bg-quran-accent hover:text-white transition duration-200 border-l-4 border-quran-primary hover:border-quran-accent"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-sm">Surah {surah.number}. {surah.name}</p>
                <p className="text-xs opacity-75">{surah.englishName} ({surah.numberOfAyahs} ayah)</p>
              </div>
              <span className="text-lg">{surah.revelation.type === 'Meccan' ? '🕌' : '📖'}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

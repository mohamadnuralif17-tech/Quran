import { useState, useEffect } from 'react';
import { quranApi } from '@/lib/quranApi';

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

interface UseQuranReturn {
  chapters: Chapter[];
  loading: boolean;
  error: string | null;
}

export const useQuran = (): UseQuranReturn => {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        setLoading(true);
        const data = await quranApi.getChapters();
        setChapters(data);
        setError(null);
      } catch (err) {
        setError('Gagal memuat data Quran');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchChapters();
  }, []);

  return { chapters, loading, error };
};

import axios from 'axios';

const API_BASE_URL = 'https://api.quran.com/api/v4';

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

interface Verse {
  number: number;
  text: string;
  numberInSurah: number;
  translations?: Array<{
    text: string;
    language: string;
  }>;
}

export const quranApi = {
  // Fetch semua Surah
  async getChapters(): Promise<Chapter[]> {
    try {
      const response = await axios.get(`${API_BASE_URL}/chapters`);
      return response.data.chapters || [];
    } catch (error) {
      console.error('Error fetching chapters:', error);
      throw error;
    }
  },

  // Fetch detail Surah
  async getChapter(chapterNumber: number): Promise<Chapter> {
    try {
      const response = await axios.get(`${API_BASE_URL}/chapters/${chapterNumber}`);
      return response.data.chapter;
    } catch (error) {
      console.error(`Error fetching chapter ${chapterNumber}:`, error);
      throw error;
    }
  },

  // Fetch verses dengan terjemahan
  async getVerses(chapterNumber: number, language: string = 'id'): Promise<Verse[]> {
    try {
      const response = await axios.get(`${API_BASE_URL}/verses?chapter_number=${chapterNumber}&language=${language}`);
      return response.data.verses || [];
    } catch (error) {
      console.error(`Error fetching verses for chapter ${chapterNumber}:`, error);
      throw error;
    }
  },

  // Search verses
  async searchVerses(query: string, language: string = 'id'): Promise<Verse[]> {
    try {
      const response = await axios.get(`${API_BASE_URL}/search?q=${query}&language=${language}`);
      return response.data.results || [];
    } catch (error) {
      console.error('Error searching verses:', error);
      throw error;
    }
  },
};

import { create } from 'zustand';

interface QuranStore {
  darkMode: boolean;
  bookmarks: number[];
  currentSurah: number | null;
  toggleDarkMode: () => void;
  addBookmark: (ayahNumber: number) => void;
  removeBookmark: (ayahNumber: number) => void;
  setCurrentSurah: (surahNumber: number) => void;
}

export const useQuranStore = create<QuranStore>((set) => ({
  darkMode: false,
  bookmarks: [],
  currentSurah: null,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  addBookmark: (ayahNumber) =>
    set((state) => ({
      bookmarks: [...state.bookmarks, ayahNumber],
    })),
  removeBookmark: (ayahNumber) =>
    set((state) => ({
      bookmarks: state.bookmarks.filter((n) => n !== ayahNumber),
    })),
  setCurrentSurah: (surahNumber) => set({ currentSurah: surahNumber }),
}));

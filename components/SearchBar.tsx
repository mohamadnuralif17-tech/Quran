'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Mencari:', searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="mb-8">
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Cari Ayat, Surah, atau Kata Kunci..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-quran-primary"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-quran-primary text-white rounded-lg hover:bg-quran-secondary transition"
        >
          Cari
        </button>
      </div>
    </form>
  );
}

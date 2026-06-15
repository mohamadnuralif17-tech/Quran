export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-quran-primary dark:text-quran-accent mb-4">
          Tentang Quran Hub
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Platform digital interaktif untuk membaca dan mempelajari Al-Quran
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Tentang Project */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-quran-primary dark:text-quran-accent mb-4">
            🎯 Misi Kami
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Quran Hub bertujuan untuk menyediakan platform yang mudah digunakan untuk membaca dan
            mempelajari Al-Quran dengan terjemahan bahasa Indonesia. Kami percaya bahwa teknologi
            dapat membantu mempermudah akses ke pengetahuan ilmu.
          </p>
        </div>

        {/* Fitur Utama */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-quran-primary dark:text-quran-accent mb-4">
            ✨ Fitur Utama
          </h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>✓ Baca semua 114 Surah Al-Quran</li>
            <li>✓ Terjemahan bahasa Indonesia</li>
            <li>✓ Sistem bookmark untuk ayat favorit</li>
            <li>✓ Mode gelap untuk kenyamanan membaca</li>
            <li>✓ Interface responsif untuk semua device</li>
          </ul>
        </div>
      </div>

      {/* Teknologi */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-quran-primary dark:text-quran-accent mb-4">
          🛠️ Teknologi yang Digunakan
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded">
            <p className="font-semibold text-quran-primary dark:text-quran-accent">Next.js</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">React Framework</p>
          </div>
          <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded">
            <p className="font-semibold text-quran-primary dark:text-quran-accent">TypeScript</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Type Safety</p>
          </div>
          <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded">
            <p className="font-semibold text-quran-primary dark:text-quran-accent">Tailwind CSS</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Styling</p>
          </div>
          <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded">
            <p className="font-semibold text-quran-primary dark:text-quran-accent">Zustand</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">State Management</p>
          </div>
          <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded">
            <p className="font-semibold text-quran-primary dark:text-quran-accent">Axios</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">HTTP Client</p>
          </div>
          <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded">
            <p className="font-semibold text-quran-primary dark:text-quran-accent">Quran API</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Data Source</p>
          </div>
        </div>
      </div>

      {/* Creator */}
      <div className="bg-gradient-to-r from-quran-primary to-quran-secondary text-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">👨‍💻 Pembuat</h2>
        <div className="mb-4">
          <p className="text-xl font-semibold mb-2">Mohamad Nur Alif</p>
          <p className="opacity-90">Full Stack Developer | Open Source Enthusiast</p>
        </div>
        <div className="space-y-2 text-sm">
          <p>
            GitHub:{' '}
            <a
              href="https://github.com/mohamadnuralif17-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80 transition"
            >
              @mohamadnuralif17-tech
            </a>
          </p>
          <p>
            Email:{' '}
            <a
              href="mailto:mohamadnuralif17@gmail.com"
              className="underline hover:opacity-80 transition"
            >
              mohamadnuralif17@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-quran-primary dark:text-quran-accent mb-6">
          ❓ Pertanyaan Umum
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
              Apakah Quran Hub gratis?
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Ya, Quran Hub sepenuhnya gratis dan tidak memiliki iklan. Platform ini dibuat dengan
              tujuan untuk memudahkan akses ke Al-Quran bagi semua orang.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
              Dari mana data Al-Quran berasal?
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Data Al-Quran berasal dari Quran.com API, yang merupakan sumber data Quran yang
              terpercaya dan komprehensif.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
              Bagaimana cara berkontribusi?
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Anda dapat berkontribusi dengan membuat fork repository di GitHub dan membuat pull
              request. Semua kontribusi sangat dihargai!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

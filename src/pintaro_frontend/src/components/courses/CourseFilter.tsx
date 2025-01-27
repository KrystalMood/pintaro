import { FC } from 'react';

interface CourseFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const CourseFilter: FC<CourseFilterProps> = ({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery
}) => {
  const categories = [
    'Semua Kursus',
    'Pengembangan Web',
    'Desain Grafis',
    'Pemasaran Digital',
    'Pengembangan Diri'
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative flex-1 max-w-lg">
          <input
            type="text"
            placeholder="Cari kursus..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category.toLowerCase())}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
                ${selectedCategory === category.toLowerCase()
                  ? 'bg-[#2c2c2c] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseFilter; 
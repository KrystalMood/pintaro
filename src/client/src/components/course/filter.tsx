import { FC } from "react";
import { CourseFilter } from "@/types/courses";

const Filter: FC<CourseFilter> = ({ selectedCategory, setSelectedCategory, searchQuery, setSearchQuery }) => {
  const categories = ["Semua Kursus", "Pengembangan Web", "Desain Grafis", "Pemasaran Digital", "Pengembangan Diri"];

  return (
    <div className="flex flex-col gap-4 xl:flex-row xl:items-center">
      <label className="relative w-full flex-1">
        <input
          type="text"
          placeholder="Cari kursus..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-md border border-gray-300 py-2 pr-4 pl-12 focus:ring-2 focus:ring-gray-400 focus:outline-none"
        />
        <i className="fa-solid fa-search absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
      </label>
      <nav className="flex flex-nowrap gap-2 overflow-x-auto whitespace-nowrap [scrollbar-width:_none]">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category.toLowerCase())}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${selectedCategory === category.toLowerCase() ? "bg-[#2c2c2c] text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}
          >
            {category}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Filter;
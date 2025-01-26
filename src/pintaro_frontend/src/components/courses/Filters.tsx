import { FC } from 'react';

interface FiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filter: 'all' | 'free' | 'paid';
  setFilter: (filter: 'all' | 'free' | 'paid') => void;
}

const Filters: FC<FiltersProps> = ({ searchQuery, setSearchQuery, filter, setFilter }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
      <input
        type="text"
        placeholder="Search courses..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full md:w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
      />
      <div className="mt-4 md:mt-0">
        <label className="mr-4">
          <input
            type="radio"
            name="filter"
            value="all"
            checked={filter === 'all'}
            onChange={() => setFilter('all')}
            className="mr-1"
          />
          All
        </label>
        <label className="mr-4">
          <input
            type="radio"
            name="filter"
            value="free"
            checked={filter === 'free'}
            onChange={() => setFilter('free')}
            className="mr-1"
          />
          Free
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="paid"
            checked={filter === 'paid'}
            onChange={() => setFilter('paid')}
            className="mr-1"
          />
          Paid
        </label>
      </div>
    </div>
  );
};

export default Filters; 
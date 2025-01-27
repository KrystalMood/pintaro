import { FC, useState } from 'react';
import { courses } from '../../data/courses';
import CourseCard from './CourseCard';
import CourseFilter from './CourseFilter';

const CourseList: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div className="py-4 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CourseFilter 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="px-6 py-3 bg-[#2c2c2c] text-white rounded-md hover:bg-gray-800 transition-colors">
            Muat Lebih Banyak
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseList; 
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Course } from '../../types/course';

interface CourseCardProps {
  course: Course;
}

const CourseCard: FC<CourseCardProps> = ({ course }) => {
  return (
    <Link to={`/courses/${course.id}`} className="block group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
        <div className="relative h-48">
          <img
            src={course.imageUrl}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-10 transition-all duration-300" />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#2c2c2c] transition-colors">
            {course.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">
            {course.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-gray-900">
              IDR {course.price.toLocaleString()}
            </span>
            <button className="px-4 py-2 bg-[#2c2c2c] text-white rounded-md hover:bg-gray-800 transition-colors">
              Daftar
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard; 
import { FC } from 'react';
import { Course } from '../../types/course';

interface CourseCardProps {
    course: Course;
}

export const CourseCard: FC<CourseCardProps> = ({ course }) => {
    return (
        <div className="flex-none w-80 snap-start p-2">
            <div className="bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 min-h-[450px] flex flex-col">
                <div className="relative h-72 w-full p-2">
                    <img
                        src={course.imageUrl}
                        alt={course.title}
                        className="h-full w-full object-cover rounded-sm"
                    />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {course.title}
                    </h3>
                    <p className="text-lg font-bold text-gray-900 mb-2">
                        IDR {course.price.toLocaleString()}
                    </p>
                    <p className="text-gray-600 text-sm">
                        {course.description}
                    </p>
                </div>
            </div>
        </div>
    );
}; 
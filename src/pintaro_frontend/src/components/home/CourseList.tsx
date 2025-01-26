import { FC } from 'react';
import { courses } from '../../data/courses';
import { CourseCard } from './CourseCard';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';

export const CourseList: FC = () => {
    const scrollRef = useInfiniteScroll(1);

    return (
        <div className="py-24 bg-white">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Ratusan Kursus</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto italic">
                        Temukan apa yang kamu butuhkan, kapanpun dan di manapun.
                        Jelajahi berbagai topik, dari keterampilan teknis hingga pengembangan diri.
                    </p>
                </div>

                <div className="relative">
                    <div 
                        ref={scrollRef}
                        className="flex overflow-x-auto gap-8 pb-6 -mx-4 px-4 snap-x scrollbar-hide"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        {[...courses, ...courses].map((course, index) => (
                            <CourseCard 
                                key={`${course.id}-${index}`}
                                course={course}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}; 
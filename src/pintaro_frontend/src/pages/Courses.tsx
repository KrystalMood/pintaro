import { FC } from 'react';
import RootLayout from '../layouts/RootLayout';
import CourseHero from '../components/courses/Hero';
import CourseList from '../components/courses/CourseList';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const Courses: FC = () => {
  useDocumentTitle('Courses');

  return (
    <RootLayout>
      <CourseHero />
      <CourseList />
    </RootLayout>
  );
};

export default Courses; 
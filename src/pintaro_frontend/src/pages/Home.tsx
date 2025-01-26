import { FC } from 'react';
import Hero from '../components/home/Hero';
import SmartCertificate from '../components/home/SmartCertificate';
import { CourseList } from '../components/home/CourseList';
import RootLayout from '../layouts/RootLayout';

const Home: FC = () => {
  return (
    <RootLayout>
      <Hero />
      <SmartCertificate />
      <CourseList />
    </RootLayout>
  );
};

export default Home;
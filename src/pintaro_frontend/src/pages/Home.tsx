import { FC } from 'react';
import Hero from '../components/Hero';
import RootLayout from '../layouts/RootLayout';

const Home: FC = () => {
  return (
    <RootLayout>
      <Hero />
    </RootLayout>
  );
};

export default Home;
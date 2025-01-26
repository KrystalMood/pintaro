import { FC } from 'react';
import Hero from '../components/home/Hero';
import SmartCertificate from '../components/home/SmartCertificate';
import RootLayout from '../layouts/RootLayout';

const Home: FC = () => {
  return (
    <RootLayout>
      <Hero />
      <SmartCertificate />
    </RootLayout>
  );
};

export default Home;
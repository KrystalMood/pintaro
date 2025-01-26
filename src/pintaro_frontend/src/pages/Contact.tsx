import { FC } from 'react';
import RootLayout from '../layouts/RootLayout';
import Hero from '../components/contact/Hero';
import Form from '../components/contact/Form';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const Contact: FC = () => {
  useDocumentTitle('Contact');

  return (
    <RootLayout>
      <Hero />
      <Form />
    </RootLayout>
  );
};

export default Contact; 
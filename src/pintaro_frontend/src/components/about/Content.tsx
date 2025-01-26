import { FC } from 'react';
import { Link } from 'react-router-dom';
import WhyUs from './Why-Us';
import Technology from './Technology';

const Content: FC = () => {
  return (
    <div className="bg-white">
      <WhyUs />
      <Technology />
    </div>
  );
};

export default Content; 
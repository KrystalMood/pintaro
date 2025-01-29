import { FC } from 'react';
import MenuCard from './MenuCard';
import { learningActivities, otherActivities } from '../../data/menuItems';

const MenuSection: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <MenuCard title="Aktivitas Belajar" items={learningActivities} />
        <MenuCard title="Aktivitas Lain" items={otherActivities} />
      </div>
      <div className="text-center text-sm text-gray-500 mt-8">
        © 2025 Pintaro Indonesia | Pintaro is a trademark of PT Misinformatika
      </div>
    </div>
  );
};

export default MenuSection; 
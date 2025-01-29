import { FC } from 'react';
import { MenuItem } from '../../types/menu';

interface MenuCardProps {
  title: string;
  items: MenuItem[];
}

const MenuCard: FC<MenuCardProps> = ({ title, items }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-xl text-gray-900 font-semibold mb-4">{title}</h2>
    <div className='h-px bg-gray-300 my-4'></div>
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="flex items-center justify-between group cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors">
          <div className="flex items-center space-x-3">
            <span className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </span>
            <div>
              <h3 className="font-medium text-gray-900">{item.label}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          </div>
          <span className="text-gray-400 group-hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default MenuCard; 
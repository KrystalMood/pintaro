import { FC } from 'react';
import { Link } from 'react-router-dom';

const DesktopNavigation: FC = () => {
  return (
    <>
      <div className="flex items-center relative">
        <div className='absolute -left-4 top-1/2 -translate-y-1/2 h-8 w-8 bg-gray-200'></div>
        <Link to="/" className="text-xl tracking-[0.15em] font-[500] text-black z-10">
          PINTARO
        </Link>
      </div>

      <div className="hidden md:flex items-center flex-1 max-w-xs mx-8">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Apa yang ingin anda pelajari?"
            className="w-full border border-gray-300 rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="hidden md:flex md:items-center md:space-x-8">
        <Link to="/courses" className="text-gray-600 hover:text-gray-900">Courses</Link>
        <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
        <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
      </div>

      <div className="hidden md:flex items-center space-x-2">
        <Link to="/masuk" className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-md">
          Masuk
        </Link>
        <Link to="/daftar" className="bg-[#2c2c2c] text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
          Daftar
        </Link>
      </div>
    </>
  );
};

export default DesktopNavigation; 
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface MobileNavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const MobileNavigation: FC<MobileNavigationProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <div className="flex items-center md:hidden ">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden shadow-md absolute top-16 left-0 right-0 bg-white border-b border-gray-100`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <div className="px-3 py-2">
            <input
              type="text"
              placeholder="Apa yang ingin anda pelajari?"
              className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <Link to="/courses" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            Courses
          </Link>
          <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            About
          </Link>
          <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            Contact
          </Link>
          <div className="px-3 py-2 space-y-1">
            <Link to="/masuk" className="block w-full text-center px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50">
              Masuk
            </Link>
            <Link to="/daftar" className="block w-full text-center px-4 py-2 rounded-md text-white bg-[#2c2c2c] hover:bg-gray-800">
              Daftar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation; 
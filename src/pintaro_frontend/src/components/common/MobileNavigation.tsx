import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchIcon } from '../icons/SearchIcon';
import { CloseIcon } from '../icons/CloseIcon';
import { MenuIcon } from '../icons/MenuIcon';
import { useAuth } from '../../context/AuthContext';

interface MobileNavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const MobileNavigation: FC<MobileNavigationProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      setIsMenuOpen(false);
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <>
      <div className="flex items-center md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <span className="sr-only">Open main menu</span>
          <MenuIcon className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} />
          <CloseIcon className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} />
        </button>
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden shadow-md absolute top-16 left-0 right-0 bg-white border-b border-gray-100`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <div className="px-3 py-2 flex items-center relative">
            <div className="text-gray-400 absolute left-6 top-1/2 -translate-y-1/2">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Apa yang ingin anda pelajari?"
              className="w-full border border-gray-300 rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
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
            {user ? (
              <>
                <Link to="/profile" className="block w-full text-center px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-center px-4 py-2 rounded-md text-white bg-[#2c2c2c] hover:bg-gray-800"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/masuk" className="block w-full text-center px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50">
                  Masuk
                </Link>
                <Link to="/daftar" className="block w-full text-center px-4 py-2 rounded-md text-white bg-[#2c2c2c] hover:bg-gray-800">
                  Daftar
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation; 
import { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MobileMenu from "@/shared/mobile-menu";
import { useAuth } from "@/context/auth";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => setIsScrolled(window.scrollY > 0));
    return () => window.removeEventListener("scroll", () => setIsScrolled(window.screenY > 0));
  }, []);

  const handleLogout = async () => {
    try {
      logout();
      navigate("/");
    } catch (error) {
      console.error("Terjadi kesalahan: ", error);
    }
  };

  return (
    <header className={`fixed top-0 right-0 left-0 z-50 mx-auto flex h-16 w-screen items-center justify-between gap-x-16 border-b border-gray-100 bg-white px-4 transition-shadow duration-300 sm:px-6 lg:px-8 ${isScrolled ? "shadow-md" : ""}`}>
      <Link to="/">
        <img src="/ico/logo.png" alt="Logo" className="w-32" />
      </Link>
      <section className="relative mx-8 hidden w-full flex-1 items-center lg:flex">
        <label htmlFor="desktop_search" className="hidden" />
        <input
          type="search"
          name="desktop_search"
          id="desktop_search"
          placeholder="Apa yang ingin anda pelajari?"
          className="w-full rounded-full border border-gray-300 px-4 py-2 pl-12 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none"
        />
        <i className="fa-solid fa-search absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
      </section>
      <nav className="hidden gap-8 lg:flex lg:items-center">
        {["About", "Contact", "Courses"].map((list, index) => (
          <Link key={index} to={`/${list.toLowerCase()}`} className="text-gray-600 transition-colors duration-300 hover:text-gray-900">
            {list}
          </Link>
        ))}
      </nav>
      
      {isAuthenticated ? (
        <div className="hidden lg:flex items-center gap-4">
          <div className="relative group">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <i className="fa-regular fa-user text-lg" />
              <i className="fa-solid fa-chevron-down text-xs" />
            </button>
            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-1">
              <div className="py-1" role="menu">
                <Link 
                  to="/profile" 
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  <i className="fa-solid fa-user w-4" />
                  Profile
                </Link>
                <Link 
                  to="/settings?=profile" 
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  <i className="fa-solid fa-gear w-4" />
                  Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  <i className="fa-solid fa-right-from-bracket w-4" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Link to="/login" className="hidden rounded-md bg-[#2c2c2c] px-4 py-2 text-white transition-colors hover:bg-gray-800 lg:inline">
          Login
        </Link>
      )}

      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:ring-inset lg:hidden">
        <i className={`fa-solid fa-bars !m-auto ${isMenuOpen ? "!hidden" : "!block"} p-1`} />
        <i className={`fa-solid fa-x !m-auto ${isMenuOpen ? "!block" : "!hidden"} p-1`} />
      </button>
      <MobileMenu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} isAuthenticated={isAuthenticated} onLogout={handleLogout} />
    </header>
  );
};

export default Header;
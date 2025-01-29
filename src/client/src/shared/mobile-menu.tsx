import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from '../../context/auth';
import { IMobileMenu } from "@/types/beranda";

const MobileMenu: FC<IMobileMenu> = ({ isMenuOpen, setIsMenuOpen }) => {
  // const { user, logout } = useAuth();
  const navigate = useNavigate();

  const HandleLogout = async () => {
    try {
      // await logout();
      setIsMenuOpen(false);
      navigate("/");
    } catch (error) {
      console.error("Terjadi kesalahan saat keluar dari akun: ", error);
    }
  };

  return (
    <section className={`${isMenuOpen ? "block" : "hidden"} absolute top-16 right-0 left-0 space-y-1 border-b border-gray-100 bg-white px-2 pt-2 pb-3 shadow-md md:hidden`}>
      <span className="relative flex items-center px-3 py-2">
        <i className="fa-solid fa-search absolute top-1/2 left-6 -translate-y-1/2 text-gray-400" />
        <input
          type="search"
          placeholder="Apa yang ingin anda pelajari?"
          className="w-full rounded-full border border-gray-300 px-4 py-2 pl-10 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none"
        />
      </span>
      {["About", "Contact", "Courses"].map((list, index) => (
        <Link
          key={index}
          to={`/${list.toLowerCase()}`}
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
        >
          {list}
        </Link>
      ))}
      <Link to="/login" className="mx-3 my-2 block rounded-md bg-[#2c2c2c] py-2 text-center text-white hover:bg-gray-800">
        Login
      </Link>
    </section>
  );
};

export default MobileMenu;
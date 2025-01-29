import { FC } from "react";
import { Link } from "react-router-dom";
import Main from "@/layouts/main";

const NotFound: FC = () => {
  return (
    <Main title="404" description="Oops, the page you were looking for was not found!">
      <section className="container flex min-h-screen flex-col items-center justify-center px-4 py-40 text-center sm:px-6 lg:px-8 lg:py-20">
        <div className="flex cursor-default flex-col items-center justify-center space-x-4 lg:flex-row">
          <h3 className="text-4xl font-bold">404</h3>
          <span className="hidden h-10 w-0.5 bg-slate-300 lg:inline" />
          <h3 className="mt-2 text-2xl lg:mt-0 lg:text-4xl">
            Halaman Tidak Ditemukan
          </h3>
        </div>
        <Link to="/" className="mt-8 flex items-center rounded-md bg-[#2c2c2c] px-5 py-3 text-white transition-colors duration-300 hover:bg-slate-700">
          <i className="fa-regular fa-house" />
          &emsp;Kembali Ke Beranda
        </Link>
      </section>
    </Main>
  );
};

export default NotFound;
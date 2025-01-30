import { FC } from "react";
import { Link } from "react-router-dom";

const Hero: FC = () => {
  return (
    <section className="mx-auto mt-28 mb-20 flex items-center justify-between bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-0">
      <div className="w-full text-center lg:w-1/2 lg:text-left">
        <h1 className="cursor-default text-4xl font-bold tracking-tight text-gray-900 lg:text-6xl">
          Tentang Pintaro
        </h1>
        <h3 className="mt-3 cursor-default text-2xl font-light text-gray-600 italic lg:text-3xl">
          Membangun Komunitas Pintar
        </h3>
        <h5 className="mt-6 cursor-default text-justify text-lg leading-relaxed text-gray-500 [text-align-last:_center] lg:text-left lg:[text-align-last:_left]">
          Pintaro adalah platform pendidikan digital yang menggabungkan
          teknologi blockchain dengan pembelajaran interaktif. Kami berkomitmen
          untuk menyediakan akses pendidikan berkualitas yang dapat diverifikasi
          dan diakui secara global.
        </h5>
        <span className="mt-8 flex flex-col items-center gap-4 lg:flex-row">
          <Link to="/login" className="inline-flex items-center rounded-md border border-transparent bg-[#2c2c2c] px-8 py-3 text-base font-medium text-white transition-colors hover:bg-gray-800">
            Bergabung Sekarang
          </Link>
          <Link to={`/courses`} className="inline-flex items-center rounded-md border border-gray-300 bg-white px-8 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50">
            Pelajari Lebih Lanjut
          </Link>
        </span>
      </div>
      <div className="relative hidden w-1/2 pl-12 lg:inline">
        <span className="absolute -inset-4 top-2 mx-auto h-full w-full bg-gradient-to-r from-[#f7b32b] to-[#f9c55d] opacity-30 blur-2xl" />
        <img src="/img/tentang-kami/hero.png" alt="Tentang Pintaro" className="relative h-full w-full rounded-lg object-contain" />
      </div>
    </section>
  );
};

export default Hero;
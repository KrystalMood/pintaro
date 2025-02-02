import { FC } from "react";
import { Link } from "react-router-dom";

const Hero: FC = () => {
  return (
    <section className="w-[90%] mx-auto mt-12 flex items-center justify-between bg-white px-4 py-40 sm:px-6 lg:px-8 lg:py-20">
      <div className="text-center lg:text-left">
        <h1 className="cursor-default text-5xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
          Jadilah Pintar
        </h1>
        <h3 className="mt-2 cursor-default text-3xl font-light text-gray-600 italic">
          Di manapun, kapanpun.
        </h3>
        <h5 className="mt-5 mb-10 max-w-lg cursor-default text-justify text-lg text-gray-500 [text-align-last:_center] lg:max-w-xl lg:text-left lg:[text-align-last:_left]">
          Temukan apa yang kamu butuhkan, kapanpun dan di manapun. Jelajahi
          berbagai topik, dari keterampilan teknis hingga pengembangan diri.
        </h5>
        <Link to={`/register`} className="rounded-md border border-transparent bg-[#2c2c2c] px-8 py-4 text-base font-medium text-white transition-colors hover:bg-gray-800">
          Gabung Gratis
        </Link>
      </div>
      <img
        src="/img/beranda/hero.png"
        alt="Selamat datang di Pintaro!"
        className="hidden lg:inline"
      />
    </section>
  );
};

export default Hero;
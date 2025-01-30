import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="container h-fit w-full cursor-default bg-[#2c2c2c] px-4 pt-40 pb-28 text-white sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
        Selamat datang! ツ
      </h1>
      <h5 className="mt-4 text-lg md:text-xl lg:text-2xl">
        Mulai petualangan belajarmu hari ini.
      </h5>
    </section>
  );
};

export default Hero;
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="mx-auto flex min-h-[50vh] w-full max-w-2xl cursor-default flex-col items-center bg-white pt-48 pb-32 text-center">
      <h1 className="mb-4 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
        Hubungi Kami
      </h1>
      <h3 className="mt-3 mb-6 text-3xl font-light text-gray-600 italic">
        Kami Siap Membantu
      </h3>
      <h5 className="text-lg leading-relaxed text-gray-500">
        Punya pertanyaan atau butuh bantuan? Tim kami siap membantu Anda.
        Silakan isi formulir di bawah ini dan kami akan menghubungi Anda
        secepatnya.
      </h5>
    </section>
  );
};

export default Hero;
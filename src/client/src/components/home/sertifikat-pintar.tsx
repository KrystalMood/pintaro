import { FC } from "react";
import { Link } from "react-router-dom";

const SertifikatPintar: FC = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-8 bg-gradient-to-br from-[#f7b32b] to-[#f9c55d] px-4 py-12 sm:px-6 sm:py-24 lg:flex-row lg:gap-12 lg:px-8">
      <div className="mb-8 w-full max-w-xl text-center md:w-auto lg:mb-0 lg:text-left">
        <h2 className="mb-4 cursor-default text-3xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl">
          Sertifikat Pintar
          <br />
          <span className="text-white">dengan Blockchain</span>
        </h2>
        <h5 className="mb-6 cursor-default px-4 text-lg text-gray-800 sm:px-0 sm:text-xl">
          Lebih terjangkau, validasi cepat, dan aman dengan teknologi
          blockchain.
        </h5>
      </div>
      <div className="w-full max-w-md px-4 text-center sm:px-0 lg:w-auto lg:text-left">
        <h3 className="mb-4 cursor-default text-xl font-semibold text-gray-900 sm:text-2xl">
          Apa itu smart certificate?
        </h3>
        <h5 className="mb-8 cursor-default text-base leading-relaxed text-gray-700 sm:text-lg">
          Bayangkan kamu dapat mengirimkan sertifikat digital tanpa repot dengan
          validasi yang cepat dan tidak dapat dipalsukan. Smart certificate
          menjadikan semua ini mungkin.
        </h5>
        <Link
          to="/learn-more"
          className="flex transform items-center justify-center rounded-xl bg-[#2c2c2c] px-6 py-3 text-sm text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-gray-800 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
        >
          Pelajari Selengkapnya &ensp;
          <i className="fa-solid fa-chevron-right pt-1 text-xs" />
        </Link>
      </div>
    </section>
  );
};

export default SertifikatPintar;
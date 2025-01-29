import { FC } from "react";
import { Link } from "react-router-dom";
import { fitur } from "@/data/tentang-kami";

const TeknologiBlockchain: FC = () => {
  return (
    <section className="bg-gray-50 px-4 py-24 sm:px-6 lg:px-8">
      <h2 className="mb-4 cursor-default text-center text-4xl font-bold text-gray-900">
        Mengapa Memilih Pintaro?
      </h2>
      <h4 className="mx-auto mb-16 max-w-2xl cursor-default text-center text-xl text-gray-600 italic">
        Platform pembelajaran yang dirancang untuk membantu Anda mencapai
        potensi maksimal dengan teknologi terkini.
      </h4>
      {fitur.map((features, index) => (
        <figure key={index} className="mb-6 flex transform items-start space-x-4 rounded-lg bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
          <i className={`${features.icon} mt-1 text-xl text-[#f7b32b]`} />
          <figcaption className="cursor-default">
            <h4 className="mb-2 text-xl font-semibold text-gray-900">
              {features.title}
            </h4>
            <h5 className="text-gray-600">{features.description}</h5>
          </figcaption>
        </figure>
      ))}
      <Link
        to="/daftar"
        className="mx-auto flex w-fit items-center rounded-md bg-[#2c2c2c] px-8 py-3 text-base font-medium text-white transition-all duration-300 ease-in-out hover:bg-gray-800"
        aria-label="Mulai belajar sekarang"
      >
        Mulai Belajar Sekarang&ensp;
        <i className="fa-solid fa-arrow-right" />
      </Link>
    </section>
  );
};

export default TeknologiBlockchain;
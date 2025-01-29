import { FC } from "react";
import { alasan } from "@/data/tentang-kami";

const MengapaMemilihPintaro: FC = () => {
  return (
    <section className="bg-gray-50 px-4 py-24 sm:px-6 lg:px-8">
      <h2 className="mb-4 cursor-default text-center text-4xl font-bold text-gray-900">
        Mengapa Memilih Pintaro?
      </h2>
      <h4 className="mx-auto mb-16 max-w-2xl cursor-default text-center text-xl text-gray-600 italic">
        Platform pembelajaran yang dirancang untuk membantu Anda mencapai
        potensi maksimal dengan teknologi terkini.
      </h4>
      <div className="grid grid-cols-1 gap-8 place-items-center lg:grid-cols-3">
        {alasan.map((reason, index) => (
          <figure key={index} className="rounded-lg h-full bg-white p-8 shadow-md transition-shadow hover:shadow-xl">
            <i className={`${reason.icon} mb-6 text-4xl text-[#f7b32b]`} />
            <h4 className="mb-4 cursor-default text-2xl font-semibold text-gray-900">
              {reason.title}
            </h4>
            <h5 className="cursor-default leading-relaxed text-gray-600">
              {reason.description}
            </h5>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default MengapaMemilihPintaro;
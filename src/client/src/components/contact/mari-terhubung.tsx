import { FC } from "react";

const MariTerhubung: FC = () => {
  return (
    <article className="cursor-default rounded-t-xl bg-[#2c2c2c] p-8 pb-10 text-white lg:rounded-l-3xl lg:p-12">
      <h3 className="mb-8 text-3xl font-bold">Mari Terhubung</h3>
      <h5 className="mb-12 text-gray-300">
        Kami siap membantu Anda. Silakan hubungi kami melalui form ini atau
        melalui kontak di bawah ini.
      </h5>
      <div className="space-y-6">
        <span className="flex items-center space-x-4">
          <i className="fa-regular fa-envelope rounded-full bg-[#f7b32b]/20 p-3 text-xl text-[#f7b32b]" />
          <address className="cursor-default">
            <h6 className="text-sm text-gray-400">Email</h6>
            <h6 className="text-white">contact@pintaro.com</h6>
          </address>
        </span>
        <span className="flex items-center space-x-4">
          <i className="fa-regular fa-location-dot rounded-full bg-[#f7b32b]/20 px-3.5 py-3 text-xl text-[#f7b32b]" />
          <address className="cursor-default">
            <h6 className="text-sm text-gray-400">Lokasi</h6>
            <h6 className="text-white">Malang, Indonesia</h6>
          </address>
        </span>
      </div>
    </article>
  );
};

export default MariTerhubung;
import { FC } from 'react';

const Hero: FC = () => {
  return (
    <div className="relative min-h-[50vh] bg-white overflow-hidden flex items-center pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-4">
              Hubungi Kami
            </h1>
            <h2 className="mt-3 text-3xl font-light italic text-gray-600 mb-6">
              Kami Siap Membantu
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Punya pertanyaan atau butuh bantuan? Tim kami siap membantu Anda.
              Silakan isi formulir di bawah ini dan kami akan menghubungi Anda
              secepatnya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 
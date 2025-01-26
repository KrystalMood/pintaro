import { FC } from 'react';
import { Link } from 'react-router-dom';
import aboutImage from '../../../public/img/auth.png';

const Hero: FC = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="flex items-center justify-center lg:justify-between">
            <div className="text-center lg:text-left max-w-xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900">
                Tentang Pintaro
              </h1>
              <h2 className="mt-3 text-3xl font-light italic text-gray-600">
                Membangun Komunitas Pintar
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-500">
                Pintaro adalah platform pendidikan digital yang menggabungkan teknologi blockchain 
                dengan pembelajaran interaktif. Kami berkomitmen untuk menyediakan akses pendidikan 
                berkualitas yang dapat diverifikasi dan diakui secara global.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/daftar"
                  className="inline-flex items-center px-8 py-3 border border-transparent 
                    text-base font-medium rounded-md text-white bg-[#2c2c2c] 
                    hover:bg-gray-800 transition-colors"
                >
                  Bergabung Sekarang
                </Link>
                <a
                  href="#learn-more"
                  className="inline-flex items-center px-8 py-3 border border-gray-300 
                    text-base font-medium rounded-md text-gray-700 bg-white 
                    hover:bg-gray-50 transition-colors"
                >
                  Pelajari Lebih Lanjut
                </a>
              </div>
            </div>

            <div className="hidden lg:block w-1/2 pl-12">
              <div className="relative">
                <div className="absolute -inset-4">
                  <div className="w-full h-full mx-auto opacity-30 blur-lg filter bg-gradient-to-r from-[#F7B32B] to-[#F9C55D]" />
                </div>
                <img 
                  src={aboutImage} 
                  alt="About Pintaro" 
                  className="relative w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Hero; 
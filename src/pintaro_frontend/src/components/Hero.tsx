import { FC } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../public/hero.png';
const Hero: FC = () => {
  return (
    <div className="relative bg-white overflow-hidden h-full">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 flex items-center justify-between mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="text-left">
              <h1 className="text-7xl font-bold tracking-tight text-gray-900">
                Jadilah Pintar
              </h1>
              <h2 className="mt-3 text-3xl font-light italic text-gray-600">
                Di manapun, kapanpun.
              </h2>
              <p className="mt-5 text-lg text-gray-500 max-w-xl">
                Temukan apa yang kamu butuhkan, kapanpun dan di manapun.
                Jelajahi berbagai topik, dari keterampilan teknis hingga pengembangan
                diri.
              </p>
              <div className="mt-8">
                <Link
                  to="/register"
                  className="inline-flex items-center px-8 py-3 border border-transparent 
                    text-base font-medium rounded-md text-white bg-[#2c2c2c] 
                    hover:bg-gray-800 transition-colors"
                >
                  Gabung Gratis
                </Link>
              </div>
            </div>

            <div>
              <img src={heroImage} alt="Hero" className="w-full h-full object-contain" />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Hero; 
import { FC } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../../public/img/hero.png';

const Hero: FC = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative z-10 bg-white">
          <main className="flex items-center justify-center lg:justify-between">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900">
                Jadilah Pintar
              </h1>
              <h2 className="mt-3 text-3xl font-light italic text-gray-600">
                Di manapun, kapanpun.
              </h2>
              <p className="mt-5 text-lg text-gray-500 max-w-lg lg:max-w-xl">
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

            <div className="hidden lg:block">
              <img src={heroImage} alt="Hero" className="w-full h-full object-contain" />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Hero; 
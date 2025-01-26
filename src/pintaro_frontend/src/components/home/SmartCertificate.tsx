import { FC } from 'react';
import { Link } from 'react-router-dom';

const SmartCertificate: FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#F7B32B] to-[#F9C55D] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="mb-8 md:mb-0 max-w-xl">
            <h2 className="text-5xl font-bold mb-2 text-gray-900 leading-tight">
              Sertifikat Pintar<br />
              <span className="text-white">dengan Blockchain</span>
            </h2>
            <p className="text-xl mb-6 text-gray-800">
              Lebih terjangkau, validasi cepat, dan aman dengan teknologi blockchain.
            </p>
          </div>
          
          <div className="max-w-md">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Apa itu smart certificate?
            </h3>
            <p className="text-lg mb-8 text-gray-700 leading-relaxed">
              Bayangkan kamu dapat mengirimkan sertifikat digital tanpa repot dengan validasi yang cepat dan tidak dapat dipalsukan. Smart certificate menjadikan semua ini mungkin.
            </p>
            <Link 
              to="/learn-more"
              className="inline-flex items-center px-8 py-4 bg-[#2c2c2c] text-white rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              <span>Pelajari Selengkapnya</span>
              <svg 
                className="ml-2 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartCertificate; 
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Technology: FC = () => {
    const features = [
        {
            title: "Verifikasi Instan",
            description: "Sertifikat dapat diverifikasi secara instan oleh siapapun tanpa proses yang rumit.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#F7B32B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Tidak Dapat Dipalsukan",
            description: "Teknologi blockchain menjamin keaslian setiap sertifikat yang diterbitkan.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#F7B32B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            )
        },
        {
            title: "Diakui Global",
            description: "Sertifikat dapat diakses dan diverifikasi dari mana saja di seluruh dunia.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#F7B32B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
            )
        }
    ];

    return (
        <div className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Teknologi Blockchain untuk Pendidikan
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto italic">
                        Sertifikat digital yang aman dan terverifikasi dengan teknologi blockchain
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
                    <div className="space-y-6">
                        {features.map((feature, index) => (
                            <div 
                                key={feature.title}
                                className="relative group"
                            >
                                <div className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-200">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 mt-1">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-600">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center lg:text-center">
                        <Link
                            to="/daftar"
                            className="inline-flex items-center px-8 py-3 border border-transparent 
                                text-base font-medium rounded-md text-white bg-[#2c2c2c] 
                                hover:bg-gray-800 transition-all duration-300 transform hover:scale-105
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            aria-label="Mulai belajar sekarang"
                        >
                            Mulai Belajar Sekarang
                            <svg 
                                className="ml-2 -mr-1 h-5 w-5" 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 20 20" 
                                fill="currentColor"
                            >
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technology;
import { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../components/auth/Image';

interface AuthLayoutProps {
    title: string;
    subtitle: string;
    children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ title, subtitle, children }) => {
    const navigate = useNavigate();

    return (
        <div className="h-screen flex overflow-hidden">
            <div className="w-full lg:w-[47%] flex items-center justify-center p-8">
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-6 left-6 text-gray-600 hover:text-gray-900 focus:outline-none"
                    aria-label="Kembali"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                </button>
                <div className="w-full max-w-md">
                    <h1 className="text-5xl font-bold mb-5">{title}</h1>
                    <h2 className="text-3xl mb-4 font-light text-gray-800">{subtitle}</h2>
                    {children}
                </div>
            </div>

            <div className="hidden lg:block lg:w-[53%] h-full">
                <Image />
            </div>
        </div>
    );
};

export default AuthLayout; 
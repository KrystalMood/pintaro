import Image from './Image';
import AuthForm from './Form';

export default function Masuk(): JSX.Element {
    return (
        <div className="h-screen flex overflow-hidden">
            <div className="w-full lg:w-[45%] flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    <h1 className="text-5xl font-bold mb-5">Mau Belajar Apa Hari ini?</h1>
                    <h2 className="text-3xl mb-4 font-light text-gray-800">Selamat datang kembali.</h2>
                    <AuthForm type="masuk" />
                </div>
            </div>

            <div className="hidden lg:block lg:w-[55%] h-full">
                <Image />
            </div>
        </div>
    )
}
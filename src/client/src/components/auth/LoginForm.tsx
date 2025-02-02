import { FC } from "react";
import { Link } from "react-router-dom";

interface LoginFormProps {
  onMetaMaskLogin: () => Promise<void>;
  isLoading?: boolean;
}

const LoginForm: FC<LoginFormProps> = ({ onMetaMaskLogin, isLoading = false }) => {
  return (
    <div className="w-full max-w-md space-y-8 px-4 sm:px-6">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Jadi Pintar dengan Pintaro
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Jelajahi berbagai kursus dari kami yang dapat menunjang keterampilan
          Anda di era Society 5.0
        </p>
      </div>

      <div className="mt-8">
        <button
          type="button"
          onClick={onMetaMaskLogin}
          disabled={isLoading}
          className="group relative flex w-full justify-center items-center space-x-3 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:from-slate-900 hover:to-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <>
              <img src="/img/autentikasi/metamask.jpg" alt="MetaMask" className="h-6 w-6 rounded-full" />
              <span>Lanjutkan dengan MetaMask</span>
            </>
          )}
        </button>
      </div>

      <div className="mt-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-4 text-sm text-slate-500 uppercase tracking-wider font-medium">
              Informasi Tambahan
            </span>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-slate-500">
          Dengan masuk, Anda menyetujui{" "}
          <Link
            to="/terms-of-service"
            className="font-medium text-slate-700 hover:text-slate-900 underline transition-colors duration-300"
          >
            Ketentuan Layanan
          </Link>{" "}
          kami
        </div>

        <Link
          to="/"
          className="mt-8 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors duration-300 group"
        >
          <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Kembali Ke Beranda</span>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm; 
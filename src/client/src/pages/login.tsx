import { FC } from "react";
import { Link } from "react-router-dom";
import Main from "@/layouts/main";

const Login: FC = () => {
  return (
    <Main auth={true} title="Login" description="Log in to your account to access courses, exclusive materials, and more. Start your learning journey with Pintaro today!">
      <main className="flex items-center justify-between">
        <form action="" method="POST" className="h-full w-1/2 cursor-default px-12 py-24">
          <h1 className="text-5xl font-bold">Jadi Pintar dengan Pintaro</h1>
          <h5 className="mt-4 italic">
            Jelajahi berbagai kursus dari kami yang dapat menunjang keterampilan
            Anda di era Society 5.0
          </h5>
          <button
            type="submit"
            onClick={() => {}}
            className="mt-8 flex w-full cursor-pointer items-center justify-center space-x-4 rounded-lg bg-slate-900 py-4 font-bold text-slate-50 transition-colors duration-300 lg:hover:bg-slate-700"
          >
            <img src="/img/autentikasi/metamask.jpg" alt="" className="w-6" />
            <h5>Lanjutkan dengan MetaMask</h5>
          </button>
          <div className="relative mt-8 flex w-full items-center justify-center">
            <span className="absolute h-0.25 w-full bg-slate-300" />
            <h5 className="z-10 bg-white px-4 font-bold">ATAU</h5>
          </div>
          <button
            type="submit"
            onClick={() => {}}
            className="mt-8 flex w-full cursor-pointer items-center justify-center space-x-4 rounded-lg border-2 border-slate-900 py-4 font-bold text-slate-900 transition-colors duration-300 lg:hover:bg-slate-900 lg:hover:text-slate-50"
          >
            <i className="fa-brands fa-google" />
            <h5>Lanjutkan dengan Google</h5>
          </button>
          <h6 className="mt-8 text-center text-sm italic">
            By logging in, you agree to our&nbsp;
            <Link to="/terms-of-service" className="underline transition-colors duration-300 lg:hover:text-slate-700">
              Terms of Service
            </Link>
          </h6>
          <Link to="/" className="mt-8 flex items-center justify-center lg:hover:text-slate-700 lg:hover:underline">
            <i className="fa-solid fa-arrow-left mt-0.5" />
            <h5>&emsp;Kembali Ke Beranda</h5>
          </Link>
        </form>
        <section className="hidden w-1/2 lg:inline">
          <img src="/img/autentikasi/masuk.png" alt="Selamat datang di Pintaro!" />
        </section>
      </main>
    </Main>
  );
};

export default Login;
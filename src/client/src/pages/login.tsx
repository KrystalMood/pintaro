import { FC, useState } from "react";
import { Link } from "react-router-dom";
import Main from "@/layouts/main";
import LoginForm from "@/components/auth/LoginForm";
import { useAuth } from "@/context/auth";

const Login: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();

  const handleMetaMaskLogin = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      if (!window.ethereum) {
        throw new Error("METAMASK_NOT_INSTALLED");
      }

      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });

      const account = accounts[0];
      
      if (account) {
        login(account);
      }
    } catch (error) {
      console.error('MetaMask login failed:', error);
      if (error instanceof Error) {
        if (error.message === "METAMASK_NOT_INSTALLED") {
          setError("MetaMask tidak terinstall. Silakan instal MetaMask terlebih dahulu.");
        } else {
          setError("Gagal terhubung ke MetaMask. Silakan coba lagi.");
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Main 
      auth={true} 
      title="Login" 
      description="Log in to your account to access courses, exclusive materials, and more. Start your learning journey with Pintaro today!"
    >
      <div className="min-h-screen flex flex-col lg:flex-row">
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 bg-white">
          {error && (
            <div className="absolute top-4 left-4 right-4 flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50">
              <div className="ms-3 text-sm font-medium">
                {error}
                {error.includes("not installed") && (
                  <a
                    href="https://metamask.io/download/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline hover:no-underline ms-2"
                  >
                    Install MetaMask
                  </a>
                )}
              </div>
            </div>
          )}
          <LoginForm onMetaMaskLogin={handleMetaMaskLogin} isLoading={isLoading} />
        </div>

        <div className="hidden lg:flex flex-1 bg-slate-50">
          <div className="relative w-full h-full">
            <img 
              src="/img/autentikasi/masuk.png" 
              alt="Selamat datang di Pintaro!" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 to-slate-900/0" />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Login;
import InputForm from '../common/InputForm';
import Image from '../../../public/ico/metamask.ico';

interface FormProps {
  type: 'daftar' | 'masuk';
}

export default function AuthForm({ type }: FormProps): JSX.Element {
  const isRegister = type === 'daftar';
  
  return (
    <div className="w-full p-6 shadow-md rounded-md border border-gray-300">
      <form className="w-full flex flex-col space-y-3">
        <InputForm label="Email" type="email" />
        {isRegister && <InputForm label="Username" type="text" />}
        <InputForm label="Password" type="password" />
        {isRegister && <InputForm label="Confirm Password" type="password" />}

        <button 
          type="submit" 
          className="w-full p-2 bg-[#2c2c2c] text-white rounded-md hover:bg-gray-800 transition-colors"
        >
          {isRegister ? 'Daftar' : 'Masuk'}
        </button>
      </form>

      <div className="flex items-center my-4">
        <div className="flex-1 h-px bg-gray-300"></div>
        <p className="mx-4 text-gray-500">atau</p>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <div className="w-full flex items-center justify-center">
        <button
          type="button"
          className="w-full inline-flex p-2 items-center justify-center text-gray-800 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
        >
          <span className="relative">
            <img src={Image} alt="Metamask" className="w-5 h-5 mr-2 absolute -left-8 top-1/2 -translate-y-1/2" />
            {isRegister ? 'Daftar' : 'Masuk'} dengan Metamask
          </span>
        </button>
      </div>
    </div>
  );
}
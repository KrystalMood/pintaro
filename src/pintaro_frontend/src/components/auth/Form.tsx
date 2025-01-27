import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import InputForm from '../common/InputForm';
import Image from '../../../public/ico/metamask.ico';

interface FormProps {
  type: 'daftar' | 'masuk';
}

export default function AuthForm({ type }: FormProps): JSX.Element {
  const navigate = useNavigate();
  const { login, register } = useAuth();
  const isRegister = type === 'daftar';

  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      if (isRegister) {
        if (formData.password !== formData.confirmPassword) {
          setError('Password dan konfirmasi password tidak cocok.');
          return;
        }
        await register(formData.email, formData.username, formData.password);
      } else {
        await login(formData.email, formData.password);
      }
      navigate('/dashboard');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Terjadi kesalahan. Silakan coba lagi.');
    }
  }
  
  return (
    <div className="w-full p-6 shadow-lg rounded-xl border border-gray-300">
      {error && (
        <div className='mb-4 p-3 bg-red-100 text-red-700 rounded-md'>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-4">
        <InputForm 
        label="Email" 
        type="email" 
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        />
        {isRegister && (
          <InputForm 
            label="Username" 
            type="text" 
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
          />
        )}
        <InputForm 
          label="Password" 
          type="password" 
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        {isRegister && (
          <InputForm 
            label="Confirm Password" 
            type="password" 
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            required
          />
        )}

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
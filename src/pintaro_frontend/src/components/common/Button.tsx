import { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-md transition-colors';
  const variantStyles = variant === 'primary'
    ? 'bg-[#2c2c2c] text-white hover:bg-gray-800'
    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100';

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button; 
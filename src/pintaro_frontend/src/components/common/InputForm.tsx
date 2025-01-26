import { InputHTMLAttributes } from 'react';

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export default function InputForm({ label, type = 'text', ...props }: InputFormProps): JSX.Element {
    return (
        <div className="w-full">
            <label htmlFor={props.id} className="block text-gray-800 mb-1">{label}</label>
            <input 
                type={type}
                id={props.id || label.toLowerCase()}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                {...props}
            />
        </div>
    )
}
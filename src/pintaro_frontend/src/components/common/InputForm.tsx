import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    isTextArea?: boolean;
    textAreaProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
}

export default function InputForm({ label, type = 'text', isTextArea = false, textAreaProps, ...props }: InputFormProps): JSX.Element {
    return (
        <div className="w-full">
            <label htmlFor={props.id} className="block text-gray-800 mb-1">{label}</label>
            {isTextArea ? (
                <textarea
                    id={props.id || label.toLowerCase()}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                    {...textAreaProps}
                />
            ) : (
                <input 
                    type={type}
                    id={props.id || label.toLowerCase()}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                    {...props}
                />
            )}
        </div>
    )
}
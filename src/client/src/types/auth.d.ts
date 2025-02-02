import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export interface AuthUser {
  id: string;
  email: string;
  username: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  isTextArea?: boolean;
  textAreaProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
}
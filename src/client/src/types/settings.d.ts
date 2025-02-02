import { SelectHTMLAttributes } from "react";

export interface PrivacyData {
  nomor_telepon?: string;
  tempat_tinggal?: string;
  tempat_lahir?: string;
  tanggal_lahir: number;
  pendidikan_terakhir?: string;
  pekerjaan?: string;
  perusahaan?: string;
}

export interface PhoneNumber {
  name: string;
  phone: string;
  emoji: string;
}

export interface Profile {
  nama_lengkap: string;
  nama_pengguna: string;
  email: string;
  headline?: string;
  tentang_saya?: string;
}

export interface SelectOptions extends SelectHTMLAttributes<HTMLSelectElement> {
  title: string;
  label: string;
  options: string[];
  default?: string;
}
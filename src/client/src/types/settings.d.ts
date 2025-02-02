import { SelectHTMLAttributes } from "react";

export interface PrivacyData {
  nomor_telepon: string;
  tempat_tinggal: string;
  tempat_lahir: string;
  tanggal_lahir: number;
  pendidikan_terakhir: string;
  pekerjaan: string;
  perusahaan: string;
}

export interface PhoneNumber {
  name: string;
  phone: string;
  emoji: string;
}

export interface Profile {
  walletAddress: string;
  nonce?: string;
  chainId?: number;
  networkVersion?: string;
  username: string;
  email: string;
  fullName: string;
  avatarUrl?: string;

  enrolledCourses?: string[];
  completedCourses?: string[];
  certificates?: {
    courseId: string;
    tokenId: string;
    issuedAt: number;
    transactionHash: string;
  };

  headline?: string;
  bio?: string;
  skills?: string[];
  expertise?: string[];

  reputation?: number;
  badges?: string[];
  forumPosts?: number;

  notificationSettings?: {
    email: boolean;
    browser: boolean;
    courseUpdates: boolean;
    communityMessages: boolean;
  };

  createdAt?: number;
  updatedAt?: number;
  lastUpdated?: number;
}

export interface SelectOptions extends SelectHTMLAttributes<HTMLSelectElement> {
  title: string;
  label: string;
  options: string[];
  default?: string;
}
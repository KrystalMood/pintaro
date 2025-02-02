import React, { ChangeEvent, useEffect, useState } from "react";
import InputForm from "@/shared/input-form";
import { Profile } from "@/types/settings";
import { useAuth } from "@/context/auth";
import axios from "axios";
import { createActor } from "@/lib/internet-computer";

interface VariantResponse<T> {
  ok?: T;
  err?: string;
}

interface ActorResult<T> {
  _tag: 'ok' | 'err';
  ok?: T;
  err?: string;
}

const ProfileSettings = () => {
  const { walletAddress } = useAuth();
  const [formData, setFormData] = useState<Profile>({
    walletAddress: walletAddress || "",
    username: "",
    email: "",
    fullName: "",
    nonce: undefined,
    chainId: undefined,
    networkVersion: undefined,
    enrolledCourses: [],
    completedCourses: [],
    certificates: undefined,
    avatarUrl: undefined,
    headline: undefined,
    bio: undefined,
    skills: [],
    expertise: [],
    reputation: 0,
    badges: [],
    forumPosts: 0,
    notificationSettings: {
      email: true,
      browser: true,
      courseUpdates: true,
      communityMessages: true
    },
    createdAt: Date.now(),
    updatedAt: Date.now(),
    lastUpdated: Date.now()
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [skillInput, setSkillInput] = useState("");
  const [expertiseInput, setExpertiseInput] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      if (!walletAddress) {
        setError("Wallet address is required to fetch profile data");
        return;
      }

      if (!/^0x[a-fA-F0-9]{40}$/.test(walletAddress)) {
        setError("Invalid wallet address format");
        return;
      }

      try {
        const actor = await createActor();
        const result = await actor.getProfile(walletAddress) as VariantResponse<Profile>;
        
        if ('ok' in result && result.ok) {
          const profile = result.ok;
          const transformedProfile = {
            ...profile,
            nonce: Array.isArray(profile.nonce) ? profile.nonce[0] : undefined,
            chainId: Array.isArray(profile.chainId) ? profile.chainId[0] : undefined,
            networkVersion: Array.isArray(profile.networkVersion) ? profile.networkVersion[0] : undefined,
            avatarUrl: Array.isArray(profile.avatarUrl) ? profile.avatarUrl[0] : undefined,
            certificates: Array.isArray(profile.certificates) ? profile.certificates[0] : undefined,
            headline: Array.isArray(profile.headline) ? profile.headline[0] : undefined,
            bio: Array.isArray(profile.bio) ? profile.bio[0] : undefined,
            enrolledCourses: profile.enrolledCourses || [],
            completedCourses: profile.completedCourses || [],
            skills: profile.skills || [],
            expertise: profile.expertise || [],
            badges: profile.badges || [],
            notificationSettings: {
              email: profile.notificationSettings?.email ?? true,
              browser: profile.notificationSettings?.browser ?? true,
              courseUpdates: profile.notificationSettings?.courseUpdates ?? true,
              communityMessages: profile.notificationSettings?.communityMessages ?? true
            }
          };
          
          setFormData(transformedProfile);
          if (transformedProfile.avatarUrl) {
            setSelectedImage(transformedProfile.avatarUrl);
          }
        } else if ('err' in result) {
          if (result.err === "Profile not found") {
            const newProfile = {
              ...formData,
              walletAddress,
              createdAt: Date.now(),
              updatedAt: Date.now(),
              lastUpdated: Date.now()
            };
            const createResult = await actor.createProfile(walletAddress, {
              ...newProfile,
              nonce: [],
              chainId: [],
              networkVersion: [],
              avatarUrl: [],
              certificates: [],
              headline: [],
              bio: [],
              enrolledCourses: [],
              completedCourses: [],
              skills: [],
              expertise: [],
              badges: [],
              forumPosts: 0,
              reputation: 0,
              notificationSettings: {
                email: true,
                browser: true,
                courseUpdates: true,
                communityMessages: true
              }
            }) as VariantResponse<Profile>;
            
            if ('ok' in createResult && createResult.ok) {
              const transformedNewProfile = {
                ...createResult.ok,
                nonce: Array.isArray(createResult.ok.nonce) ? createResult.ok.nonce[0] : undefined,
                chainId: Array.isArray(createResult.ok.chainId) ? createResult.ok.chainId[0] : undefined,
                networkVersion: Array.isArray(createResult.ok.networkVersion) ? createResult.ok.networkVersion[0] : undefined,
                avatarUrl: Array.isArray(createResult.ok.avatarUrl) ? createResult.ok.avatarUrl[0] : undefined,
                certificates: Array.isArray(createResult.ok.certificates) ? createResult.ok.certificates[0] : undefined,
                headline: Array.isArray(createResult.ok.headline) ? createResult.ok.headline[0] : undefined,
                bio: Array.isArray(createResult.ok.bio) ? createResult.ok.bio[0] : undefined
              };
              setFormData(transformedNewProfile);
            } else {
              throw new Error(createResult.err || "Failed to create profile");
            }
          } else {
            throw new Error(result.err);
          }
        }
      } catch (error: any) {
        console.error("Error mengambil profil:", error);
        const errorMessage = error.message || "Gagal memuat data profil. Silakan coba lagi nanti.";
        setError(errorMessage);
      }
    };

    fetchProfileData();
  }, [walletAddress]);

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!walletAddress) {
      const errorMsg = "Wallet address tidak tersedia. Silakan hubungkan wallet Anda terlebih dahulu.";
      console.error(errorMsg);
      setError(errorMsg);
      return;
    }

    if (!formData.username || !formData.email || !formData.fullName) {
      setError("Mohon lengkapi data profil (nama lengkap, email, dan username) sebelum mengunggah foto.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setError("Ukuran file terlalu besar. Maksimal 2MB diperbolehkan.");
      return;
    }

    if (!file.type.startsWith("image/")) {
      setError("Tipe file tidak valid. Mohon unggah gambar.");
      return;
    }

    try {
      setIsUploading(true);
      setError(null);
      
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
        try {
          console.log("Starting image upload process for wallet:", walletAddress);
          const base64Image = reader.result as string;
          
          const actor = await createActor();
          console.log("Actor created successfully");

          const profileResult = await actor.getProfile(walletAddress) as VariantResponse<Profile>;
          
          if (!('ok' in profileResult)) {
            const now = Date.now();
            const newProfile = {
              walletAddress,
              username: formData.username,
              email: formData.email,
              fullName: formData.fullName,
              nonce: [],
              chainId: [],
              networkVersion: [],
              avatarUrl: [],
              enrolledCourses: [],
              completedCourses: [],
              certificates: [],
              headline: [],
              bio: [],
              skills: [],
              expertise: [],
              badges: [],
              forumPosts: 0,
              reputation: 0,
              notificationSettings: {
                email: true,
                browser: true,
                courseUpdates: true,
                communityMessages: true
              },
              createdAt: now,
              updatedAt: now,
              lastUpdated: now
            };

            const createResult = await actor.createProfile(walletAddress, newProfile) as VariantResponse<Profile>;
            if (!('ok' in createResult)) {
              throw new Error(createResult.err || "Gagal membuat profil");
            }
          }

          const uploadResult = await actor.uploadProfileImage(walletAddress, base64Image) as VariantResponse<string>;
          
          if ('ok' in uploadResult && uploadResult.ok) {
            console.log("Image uploaded successfully:", uploadResult.ok);
            setSelectedImage(uploadResult.ok);
            setFormData(prev => ({
              ...prev,
              avatarUrl: uploadResult.ok
            }));
          } else {
            throw new Error(uploadResult.err || "Gagal mengunggah gambar");
          }
        } catch (error: any) {
          console.error("Error in image upload process:", error);
          throw error;
        } finally {
          setIsUploading(false);
        }
      };

      reader.onerror = (error) => {
        console.error("FileReader error:", error);
        setError("Gagal membaca file gambar. Silakan coba lagi.");
        setIsUploading(false);
      };

    } catch (error: any) {
      console.error("Error in main try-catch:", error);
      setError(`Gagal memproses gambar: ${error.message}`);
      setIsUploading(false);
    }
  };

  const handleAddSkill = () => {
    if (skillInput.trim() && !formData.skills?.includes(skillInput.trim())) {
      setFormData(prev => ({
        ...prev,
        skills: [...(prev.skills || []), skillInput.trim()]
      }));
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills?.filter(skill => skill !== skillToRemove) || []
    }));
  };

  const handleAddExpertise = () => {
    if (expertiseInput.trim() && !formData.expertise?.includes(expertiseInput.trim())) {
      setFormData(prev => ({
        ...prev,
        expertise: [...(prev.expertise || []), expertiseInput.trim()]
      }));
      setExpertiseInput("");
    }
  };

  const handleRemoveExpertise = (expertiseToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      expertise: prev.expertise?.filter(exp => exp !== expertiseToRemove) || []
    }));
  };

  const validateForm = () => {
    if (!formData.username || !formData.email || !formData.fullName) {
      setError("Mohon isi semua kolom yang wajib diisi");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Format email tidak valid");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!walletAddress) return;

    try {
      if (!validateForm()) return;

      setIsSaving(true);
      setError(null);

      const now = Date.now();
      const profileData = {
        walletAddress: formData.walletAddress,
        username: formData.username,
        email: formData.email,
        fullName: formData.fullName,
        nonce: formData.nonce ? [formData.nonce] : [],
        chainId: formData.chainId ? [formData.chainId] : [],
        networkVersion: formData.networkVersion ? [formData.networkVersion] : [],
        avatarUrl: formData.avatarUrl ? [formData.avatarUrl] : [],
        enrolledCourses: formData.enrolledCourses || [],
        completedCourses: formData.completedCourses || [],
        certificates: formData.certificates ? [{
          courseId: formData.certificates.courseId || "",
          tokenId: formData.certificates.tokenId || "",
          issuedAt: formData.certificates.issuedAt || now,
          transactionHash: formData.certificates.transactionHash || ""
        }] : [],
        headline: formData.headline ? [formData.headline] : [],
        bio: formData.bio ? [formData.bio] : [],
        skills: formData.skills || [],
        expertise: formData.expertise || [],
        reputation: formData.reputation || 0,
        badges: formData.badges || [],
        forumPosts: formData.forumPosts || 0,
        notificationSettings: {
          email: formData.notificationSettings?.email ?? true,
          browser: formData.notificationSettings?.browser ?? true,
          courseUpdates: formData.notificationSettings?.courseUpdates ?? true,
          communityMessages: formData.notificationSettings?.communityMessages ?? true
        },
        createdAt: formData.createdAt || now,
        updatedAt: now,
        lastUpdated: now
      };

      console.log("Sending profile data:", profileData);
      const actor = await createActor();

      console.log("Checking if profile exists for wallet:", walletAddress);
      const checkResult = await actor.getProfile(walletAddress) as VariantResponse<Profile>;
      console.log("Profile check result:", checkResult);
      
      let result: VariantResponse<Profile>;
      if ('err' in checkResult) {
        if (checkResult.err === "Profile not found") {
          console.log("Profile not found, creating new profile...");
          result = await actor.createProfile(walletAddress, profileData) as VariantResponse<Profile>;
          console.log("Create profile result:", result);
        } else {
          throw new Error(`Error checking profile: ${checkResult.err}`);
        }
      } else if ('ok' in checkResult) {
        console.log("Profile exists, updating...");
        result = await actor.updateProfile(walletAddress, profileData) as VariantResponse<Profile>;
        console.log("Update profile result:", result);
      } else {
        throw new Error("Invalid response from server");
      }
      
      if ('ok' in result && result.ok) {
        console.log("Profile operation successful:", result.ok);
        setFormData(result.ok);
        alert("Profil berhasil diperbarui!");
      } else if ('err' in result) {
        console.error("Profile operation failed:", result.err);
        throw new Error(result.err || "Gagal memperbarui profil");
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error: any) {
      console.error("Error memperbarui profil:", error);
      setError(error.message || "Gagal memperbarui profil. Silakan coba lagi.");
    } finally {
      setIsSaving(false);
    }
  };

  useEffect(() => {
    return () => {
      if (selectedImage && selectedImage.startsWith('blob:')) {
        URL.revokeObjectURL(selectedImage);
      }
    };
  }, [selectedImage]);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm">
      <div className="p-6 space-y-8">
        <div className="border-b border-gray-200 pb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <i className="fas fa-user-circle text-primary"></i>
            Pengaturan Profil
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Perbarui informasi profil Anda untuk mempersonalisasi pengalaman Anda
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 text-red-700 p-4 rounded-lg flex items-center gap-2">
            <i className="fas fa-exclamation-circle"></i>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8 w-full">
          <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
            <label className="block text-sm font-semibold text-gray-700 mb-4">
              Foto Profil
            </label>
            <div className="flex items-center gap-8">
              <div className="relative group">
                <div className="h-36 w-36 rounded-full bg-white flex items-center justify-center overflow-hidden ring-4 ring-white shadow-lg">
                  {selectedImage ? (
                    <img 
                      src={selectedImage} 
                      alt="Profil" 
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <i className="fas fa-user text-5xl text-gray-300" />
                  )}
                </div>
                <div className="absolute inset-0 rounded-full bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <label 
                    htmlFor="avatarUrl" 
                    className="text-white text-sm font-medium hover:underline"
                  >
                    <i className="fas fa-camera mr-2" />
                    Ganti Foto
                  </label>
                </div>
              </div>
              <div className="space-y-3">
                <input
                  type="file"
                  accept="image/*"
                  name="avatarUrl"
                  id="avatarUrl"
                  onChange={handleImageChange}
                  disabled={isUploading}
                  className="hidden"
                />
                <div className="space-y-2">
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <i className="fas fa-info-circle text-primary"></i>
                    Direkomendasikan: JPG atau PNG persegi, minimal 400x400 piksel
                  </p>
                  <p className="text-xs text-gray-500">
                    Ukuran file maksimal: 2MB
                  </p>
                </div>
                {isUploading && (
                  <div className="flex items-center gap-2 text-primary">
                    <i className="fas fa-spinner fa-spin"></i>
                    <span className="text-sm">Mengunggah...</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <InputForm
              label="Nama Lengkap"
              name="fullName"
              value={formData.fullName}
              onChange={e => setFormData({ ...formData, fullName: e.target.value })}
              required
              placeholder="Masukkan nama lengkap Anda"
              className="w-full"
            />

            <InputForm
              label="Nama Pengguna"
              name="username"
              value={formData.username}
              onChange={e => setFormData({ ...formData, username: e.target.value })}
              required
              placeholder="Pilih nama pengguna"
              className="w-full"
            />

            <InputForm
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              required
              placeholder="Masukkan email Anda"
              className="w-full"
            />

            <InputForm
              label="Judul Profesional"
              name="headline"
              value={formData.headline || ""}
              onChange={e => setFormData({ ...formData, headline: e.target.value })}
              placeholder="contoh: Pengembang Full Stack"
              className="w-full"
            />
          </div>

          <div className="flex items-center justify-between mt-2">
            <div className="text-sm text-gray-500">
              * Nama lengkap, nama pengguna, dan email wajib diisi sebelum mengunggah foto profil
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-700">
              Bio
            </label>
            <textarea
              name="bio"
              value={formData.bio || ""}
              onChange={e => setFormData({ ...formData, bio: e.target.value })}
              rows={4}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="Ceritakan tentang diri Anda..."
              maxLength={500}
            />
            <p className="text-sm text-gray-500 text-right">
              {(formData.bio?.length || 0)}/500 karakter
            </p>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-semibold text-gray-700">
              Keterampilan
            </label>
            <div className="flex flex-wrap gap-2">
              {formData.skills?.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(skill)}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    <i className="fas fa-times" />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSkill())}
                placeholder="Tambah keterampilan"
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <button
                type="button"
                onClick={handleAddSkill}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                Tambah
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-semibold text-gray-700">
              Bidang Keahlian
            </label>
            <div className="flex flex-wrap gap-2">
              {formData.expertise?.map((exp) => (
                <span
                  key={exp}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800"
                >
                  {exp}
                  <button
                    type="button"
                    onClick={() => handleRemoveExpertise(exp)}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    <i className="fas fa-times" />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={expertiseInput}
                onChange={(e) => setExpertiseInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddExpertise())}
                placeholder="Tambah bidang keahlian"
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <button
                type="button"
                onClick={handleAddExpertise}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                Tambah
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-semibold text-gray-700">
              Preferensi Notifikasi
            </label>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.notificationSettings?.email}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    notificationSettings: {
                      ...prev.notificationSettings!,
                      email: e.target.checked
                    }
                  }))}
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-sm text-gray-700">Notifikasi Email</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.notificationSettings?.browser}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    notificationSettings: {
                      ...prev.notificationSettings!,
                      browser: e.target.checked
                    }
                  }))}
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-sm text-gray-700">Notifikasi Browser</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.notificationSettings?.courseUpdates}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    notificationSettings: {
                      ...prev.notificationSettings!,
                      courseUpdates: e.target.checked
                    }
                  }))}
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-sm text-gray-700">Pembaruan Kursus</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.notificationSettings?.communityMessages}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    notificationSettings: {
                      ...prev.notificationSettings!,
                      communityMessages: e.target.checked
                    }
                  }))}
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-sm text-gray-700">Pesan Komunitas</span>
              </label>
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              className="px-6 py-3 rounded-lg text-gray-700 font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
              onClick={() => window.history.back()}
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className={`inline-flex items-center px-6 py-3 rounded-lg text-black border border-gray-300 font-medium transition-all
                ${isSaving 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-primary hover:bg-primary-dark active:transform active:scale-95'
                }`}
            >
              {isSaving ? (
                <span className="flex items-center gap-2">
                  <i className="fas fa-spinner fa-spin"></i>
                  Menyimpan...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <i className="fas fa-save"></i>
                  Simpan Perubahan
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
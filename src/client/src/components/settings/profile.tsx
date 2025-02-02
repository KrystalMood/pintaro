import { ChangeEvent, useState } from "react";
import InputForm from "@/shared/input-form";
import { Profile } from "@/types/settings";

const ProfileSettings = () => {
  const [formData, setFormData] = useState<Profile>({ nama_lengkap: "", nama_pengguna: "", email: "", headline: "", tentang_saya: "" });
  const [selectedImage, setSelectedImage] = useState<null | string>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    if (file) setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <section className="flex w-full flex-1 flex-col rounded-md border-2 border-[#d9d9d9] px-6 py-4 shadow-lg lg:w-fit">
      <h3 className="cursor-default text-2xl font-semibold">User Profile</h3>
      <hr className="mt-3 border border-[#d9d9d9]" />
      <form action={``} method="POST" className="my-4 space-y-6">
        <label htmlFor="foto_diri" className="mb-2 block font-medium text-gray-800">
          Foto Diri <span className="text-red-500">*</span>
        </label>
        <fieldset className="my-4 flex items-center space-x-8">
          {selectedImage && <img src={selectedImage} alt="Foto Diri" className="h-40 w-40 rounded-full object-cover"/>}
          <section>
            <label htmlFor="foto_diri" className="inline-block cursor-pointer rounded-lg bg-slate-950 px-4 py-2 text-slate-50 transition-all duration-300 ease-in-out hover:bg-slate-700">
              Pilih Foto
            </label>
            <input
              type="file"
              accept="image/*"
              name="foto_diri"
              id="foto_diri"
              onChange={handleImageChange}
              className="hidden"
            />
            <h5 className="mt-3 cursor-default text-sm text-gray-500/50">
              Gambar profil Anda sebaiknya memiliki rasio 1:1 dan berukuran tidak lebih dari 2MB.
            </h5>
          </section>
        </fieldset>
        <InputForm
          label="Nama Lengkap"
          placeholder="Masukkan nama lengkap Anda"
          autoComplete="off"
          onChange={e => setFormData({ ...formData, nama_lengkap: e.target.value })}
          value={formData.nama_lengkap}
        />
        <InputForm
          label="Nama Pengguna"
          placeholder="Masukkan nama pengguna Anda"
          autoComplete="off"
          onChange={e => setFormData({ ...formData, nama_pengguna: e.target.value })}
          value={formData.nama_pengguna}
        />
        <InputForm
          label="Email"
          placeholder="Masukkan email Anda"
          autoComplete="off"
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          value={formData.email}
        />
        <InputForm
          label="Headline"
          placeholder="Masukkan headline Anda"
          autoComplete="off"
          onChange={e => setFormData({ ...formData, headline: e.target.value })}
          value={formData.headline}
        />
        <InputForm
          label="Tentang Saya"
          isTextArea
          textAreaProps={{
            autoComplete: "off",
            maxLength: 1000,
            onChange: e => setFormData({ ...formData, tentang_saya: e.target.value }),
            required: true,
            rows: 3,
            value: formData.tentang_saya,
          }}
        />
        <button type="submit" className="cursor-pointer rounded-lg bg-slate-950 px-6 py-3 text-slate-50 transition-all duration-300 ease-in-out hover:bg-slate-700">
          Simpan Perubahan
        </button>
      </form>
    </section>
  );
};

export default ProfileSettings;
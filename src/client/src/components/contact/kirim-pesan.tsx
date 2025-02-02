import { FC, FormEvent, useState } from "react";
import InputForm from "@/shared/input-form";

const KirimPesan: FC = () => {
  const [formData, setFormData] = useState({ nama_lengkap: "", email: "", subjek: "", pesan: "" });

  return (
    <form onSubmit={(e: FormEvent) => e.preventDefault()} className="rounded-b-xl bg-slate-50 p-8 pb-10 lg:rounded-r-3xl lg:p-12">
      <h3 className="mb-8 cursor-default text-3xl font-bold text-gray-900">
        Kirim Pesan
      </h3>
      <div className="space-y-6">
        <span className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <InputForm
            label="Nama Lengkap"
            onChange={e => setFormData({ ...formData, nama_lengkap: e.target.value })}
            placeholder="Masukkan nama lengkap Anda"
            value={formData.nama_lengkap}
            required
          />
          <InputForm
            label="Email"
            type="email"
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            placeholder="Masukkan email Anda"
            value={formData.email}
            required
          />
        </span>
        <InputForm
          label="Subjek"
          onChange={e => setFormData({ ...formData, subjek: e.target.value })}
          placeholder="Masukkan subjek"
          value={formData.subjek}
          required
        />
        <InputForm
          label="Pesan"
          isTextArea
          textAreaProps={{
            maxLength: 2000,
            onChange: e => setFormData({ ...formData, pesan: e.target.value }),
            required: true,
            rows: 4,
            value: formData.pesan,
          }}
        />
        <button
          type="submit"
          className="w-full cursor-pointer rounded-xl bg-[#2c2c2c] px-8 py-4 font-medium text-white transition-all duration-200 hover:scale-[1.02] hover:bg-gray-800 focus:ring-2 focus:ring-[#F7B32B] focus:ring-offset-2 focus:outline-none active:scale-[0.98]"
        >
          Kirim Pesan
        </button>
      </div>
    </form>
  );
};

export default KirimPesan;
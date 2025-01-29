import { FC, FormEvent, useState } from "react";
import InputForm from "@/shared/input-form";

const KirimPesan: FC = () => {
  const [formData, setFormData] = useState<{ name: string; email: string; subject: string; message: string; }>({ name: "", email: "", subject: "", message: "" });

  return (
    <form onSubmit={(e: FormEvent) => e.preventDefault()} className="rounded-b-xl bg-slate-50 p-8 pb-10 lg:rounded-r-3xl lg:p-12">
      <h3 className="mb-8 cursor-default text-3xl font-bold text-gray-900">
        Kirim Pesan
      </h3>
      <div className="space-y-6">
        <span className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <InputForm
            label="Nama Lengkap"
            type="text"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <InputForm
            label="Email"
            type="email"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </span>
        <InputForm
          label="Subjek"
          type="text"
          value={formData.subject}
          onChange={e => setFormData({ ...formData, subject: e.target.value })}
          required
        />
        <InputForm
          label="Pesan"
          isTextArea
          textAreaProps={{
            value: formData.message,
            onChange: e => setFormData({ ...formData, message: e.target.value }),
            rows: 4,
            maxLength: 2000,
            required: true,
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
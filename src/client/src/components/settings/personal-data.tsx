import { useEffect, useState } from "react";
import { useCountries } from "@/hooks/get-countries";
import { PrivacyData } from "@/types/settings";
import InputForm from "@/shared/input-form";
import SelectOptions from "@/shared/select-options";

const PersonalDataSettings = () => {
  const [formData, setFormData] = useState<PrivacyData>({ nomor_telepon: "", tempat_tinggal: "", tempat_lahir: "", tanggal_lahir: 0, pendidikan_terakhir: "", pekerjaan: "", perusahaan: "" });
  const [selectedCountry, setSelectedCountry] = useState<null | string>(null);
  const { countries } = useCountries();

  useEffect(() => {
    if (countries.length > 0) setSelectedCountry(countries[0].phone);
  }, [countries]);

  return (
    <section className="flex w-full flex-1 flex-col rounded-md border-2 border-[#d9d9d9] px-6 py-4 shadow-lg lg:w-fit">
      <h3 className="cursor-default text-2xl font-semibold">User Profile</h3>
      <hr className="mt-3 border border-[#d9d9d9]" />
      <form action={``} method="POST" className="my-4 space-y-6">
        <fieldset className="flex w-full flex-col">
          <label htmlFor="nomor_telepon" className="mb-2 font-medium text-gray-800">
            Nomor Telepon <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2">
            <label htmlFor="kode_telepon" className="hidden" />
            <select
              name="kode_telepon"
              id="kode_telepon"
              className="w-fit appearance-none rounded-md border border-none bg-[#d9d9d9] px-3 py-2.5 focus:outline-none"
              onChange={e => setSelectedCountry(e.target.value)}
            >
              {countries.map((country) => (
                <option key={country.phone} value={country.phone}>
                  {country.emoji}&ensp;{country.phone}
                </option>
              ))}
            </select>
            <input
              type="text"
              inputMode="numeric"
              name="nomor_telepon"
              id="nomor_telepon"
              className="flex-1 rounded-md border border-gray-300 px-3.5 py-2.5 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none"
              onChange={e => setFormData({ ...formData, nomor_telepon: `${selectedCountry}${e.target.value}` })}
              value={formData.nomor_telepon!.replace(selectedCountry || "", "")}
            />
          </div>
        </fieldset>
        <InputForm
          type="date"
          label="Tanggal Lahir"
          onChange={e => setFormData({ ...formData, tanggal_lahir: Number(e.target.value) })}
          value={formData.tanggal_lahir}
        />
        <SelectOptions
          title="Pendidikan Terakhir"
          label="pendidikan_terakhir"
          options={["SMP", "SMA", "D1", "D2", "D3", "D4", "S1", "S2", "S3"]}
          default="S1"
          onChange={e => setFormData({ ...formData, pendidikan_terakhir: e.target.value })}
          value={formData.pendidikan_terakhir}
        />
        <SelectOptions
          title="Pekerjaan/Profesi Saat Ini"
          label="pekerjaan"
          options={["Pelajar/Mahasiswa"]}
          default="Pelajar/Mahasiswa"
          onChange={e => setFormData({ ...formData, pekerjaan: e.target.value })}
          value={formData.pekerjaan}
        />
        <SelectOptions
          title="Perusahaan/Institusi Saat Ini"
          label="perusahaan"
          options={["IPB University"]}
          default="IPB University"
          onChange={e => setFormData({ ...formData, perusahaan: e.target.value })}
          value={formData.perusahaan}
        />
        <button type="submit" className="cursor-pointer rounded-lg bg-slate-950 px-6 py-3 text-slate-50 transition-all duration-300 ease-in-out hover:bg-slate-700">
          Simpan Perubahan
        </button>
      </form>
    </section>
  );
};

export default PersonalDataSettings;
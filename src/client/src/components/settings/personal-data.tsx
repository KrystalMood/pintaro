import { useEffect, useState } from "react";
import { useCountries } from "@/hooks/get-countries";
import { PrivacyData } from "@/types/settings";
import InputForm from "@/shared/input-form";
import SelectOptions from "@/shared/select-options";

const PersonalDataSettings = () => {
  const [formData, setFormData] = useState<PrivacyData>({
    nomor_telepon: "",
    tempat_tinggal: "",
    tempat_lahir: "",
    tanggal_lahir: 0,
    pendidikan_terakhir: "",
    pekerjaan: "",
    perusahaan: ""
  });
  const [selectedCountry, setSelectedCountry] = useState<null | string>(null);
  const { countries } = useCountries();

  useEffect(() => {
    if (countries.length > 0) setSelectedCountry(countries[0].phone);
  }, [countries]);

  return (
    <div className="p-6 space-y-8">
      <div className="border-b border-gray-200 pb-6">
        <h2 className="text-2xl font-bold text-gray-900">Personal Data</h2>
        <p className="mt-1 text-sm text-gray-500">
          Manage your personal information and preferences
        </p>
      </div>

      <form className="space-y-8">
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
          
          <div className="space-y-2">
            <label htmlFor="nomor_telepon" className="block text-sm font-medium text-gray-700">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <select
                name="kode_telepon"
                id="kode_telepon"
                className="w-fit rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
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
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
                onChange={e => setFormData({ ...formData, nomor_telepon: `${selectedCountry}${e.target.value}` })}
                value={formData.nomor_telepon!.replace(selectedCountry || "", "")}
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="tempat_tinggal" className="block text-sm font-medium text-gray-700">
              Current Address
            </label>
            <textarea
              id="tempat_tinggal"
              name="tempat_tinggal"
              rows={3}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="Enter your current address"
              value={formData.tempat_tinggal}
              onChange={e => setFormData({ ...formData, tempat_tinggal: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="tempat_lahir" className="block text-sm font-medium text-gray-700">
                Place of Birth
              </label>
              <input
                type="text"
                id="tempat_lahir"
                name="tempat_lahir"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Enter your place of birth"
                value={formData.tempat_lahir}
                onChange={e => setFormData({ ...formData, tempat_lahir: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="tanggal_lahir" className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                id="tanggal_lahir"
                name="tanggal_lahir"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
                value={formData.tanggal_lahir ? new Date(formData.tanggal_lahir).toISOString().split('T')[0] : ''}
                onChange={e => setFormData({ ...formData, tanggal_lahir: new Date(e.target.value).getTime() })}
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">Professional Information</h3>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="pendidikan_terakhir" className="block text-sm font-medium text-gray-700">
                Latest Education
              </label>
              <select
                id="pendidikan_terakhir"
                name="pendidikan_terakhir"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
                value={formData.pendidikan_terakhir}
                onChange={e => setFormData({ ...formData, pendidikan_terakhir: e.target.value })}
              >
                <option value="">Select education level</option>
                {[
                  { id: 1, level: "SMP" },
                  { id: 2, level: "SMA" },
                  { id: 3, level: "D1" },
                  { id: 4, level: "D2" },
                  { id: 5, level: "D3" },
                  { id: 6, level: "D4" },
                  { id: 7, level: "S1" },
                  { id: 8, level: "S2" },
                  { id: 9, level: "S3" }
                ].map((education) => (
                  <option key={education.id} value={education.level}>{education.level}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="pekerjaan" className="block text-sm font-medium text-gray-700">
                Current Occupation
              </label>
              <input
                type="text"
                id="pekerjaan"
                name="pekerjaan"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Enter your current occupation"
                value={formData.pekerjaan}
                onChange={e => setFormData({ ...formData, pekerjaan: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="perusahaan" className="block text-sm font-medium text-gray-700">
                Company/Institution
              </label>
              <input
                type="text"
                id="perusahaan"
                name="perusahaan"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Enter your company or institution"
                value={formData.perusahaan}
                onChange={e => setFormData({ ...formData, perusahaan: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-6 border-t border-gray-200">
          <button
            type="submit"
            className="px-6 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDataSettings;
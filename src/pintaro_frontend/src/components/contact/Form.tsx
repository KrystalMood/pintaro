import { FC, FormEvent, useState } from 'react';
import InputForm from '../common/InputForm';

const ContactForm: FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#F7B32B]/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-[#F7B32B]/10 rounded-full blur-3xl" />

                    <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="bg-[#2c2c2c] p-12 text-white">
                                <h2 className="text-3xl font-bold mb-8">Mari Terhubung</h2>
                                <p className="text-gray-300 mb-12">
                                    Kami siap membantu Anda. Silakan hubungi kami melalui form ini atau
                                    melalui kontak di bawah ini.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-[#F7B32B]/20 p-3 rounded-full">
                                            <svg className="w-6 h-6 text-[#F7B32B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Email</p>
                                            <p className="text-white">contact@pintaro.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="bg-[#F7B32B]/20 p-3 rounded-full">
                                            <svg className="w-6 h-6 text-[#F7B32B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Lokasi</p>
                                            <p className="text-white">Jakarta, Indonesia</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-12">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-8">Kirim Pesan</h3>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <InputForm
                                            label="Nama Lengkap"
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                        />
                                        <InputForm
                                            label="Email"
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                        />
                                    </div>

                                    <InputForm
                                        label="Subjek"
                                        type="text"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        required
                                    />

                                    <InputForm
                                        label="Pesan"
                                        isTextArea
                                        textAreaProps={{
                                            value: formData.message,
                                            onChange: (e) => setFormData({ ...formData, message: e.target.value }),
                                            rows: 4,
                                            required: true
                                        }}
                                    />

                                    <button
                                        type="submit"
                                        className="w-full px-8 py-4 bg-[#2c2c2c] text-white rounded-xl
                      hover:bg-gray-800 transform hover:scale-[1.02] active:scale-[0.98]
                      transition-all duration-200 font-medium
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F7B32B]"
                                    >
                                        Kirim Pesan
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
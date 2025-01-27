import AuthLayout from '../../layouts/AuthLayout';
import AuthForm from './Form';

export default function Masuk(): JSX.Element {
    return (
        <AuthLayout
            title="Mau Belajar Apa Hari ini?"
            subtitle="Selamat datang kembali."
        >
            <AuthForm type="masuk" />
        </AuthLayout>
    );
}
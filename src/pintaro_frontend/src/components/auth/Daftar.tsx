import AuthLayout from '../../layouts/AuthLayout';
import AuthForm from './Form';

export default function Daftar(): JSX.Element {
    return (
        <AuthLayout
            title="Jadi Pintar Dengan Pintaro"
            subtitle="Daftar gratis."
        >
            <AuthForm type="daftar" />
        </AuthLayout>
    );
}
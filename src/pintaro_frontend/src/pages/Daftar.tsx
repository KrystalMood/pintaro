import Daftar from '../components/auth/Daftar';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function DaftarPage(): JSX.Element {
    useDocumentTitle('Daftar');

    return (
        <Daftar />
    )
}
import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';
import LoadingSpinner from '../common/LoadingSpinner';

export default function PrivateRoute({ children }: { children: React.ReactNode }) {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <LoadingSpinner />;
    }
    if (!user) {
        return <Navigate to="/masuk" />;
    }

    return <>{children}</>;
}
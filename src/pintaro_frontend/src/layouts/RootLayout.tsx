import { FC, ReactNode } from 'react';
import Navigation from '../components/Navigation';

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </div>
    );
};

export default RootLayout;
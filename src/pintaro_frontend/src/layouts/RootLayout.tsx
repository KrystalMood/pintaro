import { FC, ReactNode } from 'react';
import Navigation from '../components/common/Navigation';

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
    return (
        <div className="bg-white">
            <Navigation />
            {children}

        </div>
    );
};

export default RootLayout;
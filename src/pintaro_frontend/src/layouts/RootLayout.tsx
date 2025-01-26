import { FC, ReactNode } from 'react';
import Navigation from '../components/common/Navigation';
import Footer from '../components/common/Footer';

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
    return (
        <div className="bg-white">
            <Navigation />
            {children}
            <Footer />
        </div>
    );
};

export default RootLayout;
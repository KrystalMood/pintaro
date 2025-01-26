import RootLayout from "../layouts/RootLayout";
import Header from "../components/dashboard/Header";
import MenuSection from "../components/dashboard/MenuSection";

export default function Dashboard(): JSX.Element {
    return (
        <RootLayout>
            <Header />
            <MenuSection />
        </RootLayout>
    )
}
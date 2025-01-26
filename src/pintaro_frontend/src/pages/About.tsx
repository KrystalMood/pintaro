import Content from "../components/about/Content";
import Hero from "../components/about/Hero";

import RootLayout from "../layouts/RootLayout";

export default function AboutPage() {
    return (
        <RootLayout>
            <Hero />
            <Content />
        </RootLayout>
    );
}
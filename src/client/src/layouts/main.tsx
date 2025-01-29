import { FC, ReactNode } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "@/shared/header";
import Footer from "@/shared/footer";

const Main: FC<{ auth?: boolean, title: string; description: string; children: ReactNode }> = ({ auth = false, title, description, children }) => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta name="og:title" content={`${title} | Pintaro`} />
          <meta name="twitter:title" content={`${title} | Pintaro`} />
          <meta name="description" content={`${description}`} />
          <meta name="og:description" content={`${description}`} />
          <meta name="twitter:description" content={`${description}`} />
          <title>{title} | Pintaro</title>
        </Helmet>
      </HelmetProvider>
      {auth ? null : <Header />}
      {children}
      {auth ? null : <Footer />}
    </>
  );
};

export default Main;
import { FC } from "react";
import Main from "@/layouts/main";
import Hero from "@/components/home/hero";
import SertifikatPintar from "@/components/home/sertifikat-pintar";
import DaftarKursus from "@/components/home/daftar-kursus";

const Home: FC = () => {
  return (
    <Main title="Home" description="Join our Web3 online course and master blockchain, smart contracts, decentralized applications (dApps), and more. Get certified and start your journey in the future of technology today!">
      <Hero />
      <SertifikatPintar />
      <DaftarKursus />
    </Main>
  );
};

export default Home;
import { FC } from "react";
import Main from "@/layouts/main";
import Hero from "@/components/about/hero";
import MengapaMemilihPintaro from "@/components/about/mengapa-memilih-pintaro";
import TeknologiBlockchain from "@/components/about/teknologi-blockchain";

const About: FC = () => {
  return (
    <Main title="About" description="Discover why you should choose Pintaro! We offer innovative, secure, and trusted blockchain-based solutions. Learn about our advantages and join the digital revolution.">
      <Hero />
      <MengapaMemilihPintaro />
      <TeknologiBlockchain />
    </Main>
  );
};

export default About;
import { FC } from "react";
import Main from "@/layouts/main";
import Hero from "@/components/contact/hero";
import MariTerhubung from "@/components/contact/mari-terhubung";
import KirimPesan from "@/components/contact/kirim-pesan";

const Contact: FC = () => {
  return (
    <Main title="Contact" description="Contact us for inquiries, collaborations, or further information. Our team is ready to assist you. Send a message now and let's connect!">
      <Hero />
      <section className="relative mx-auto mb-16 grid grid-cols-1 overflow-hidden px-8 backdrop-blur-xl lg:mb-24 lg:grid-cols-2">
        <MariTerhubung />
        <KirimPesan />
      </section>
    </Main>
  );
};

export default Contact;
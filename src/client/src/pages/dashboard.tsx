import { FC } from "react";
import Main from "@/layouts/main";
import Hero from "@/components/dashboard/hero";
import Menu from "@/components/dashboard/menu";

const Dashboard: FC = () => {
  return (
    <Main title="Dashboard" description="">
      <Hero />
      <Menu />
      <address className="mb-8 cursor-default px-4 text-center text-sm text-gray-500 not-italic sm:px-6 lg:px-8">
        © 2025 Pintaro Indonesia | Pintaro is a trademark of PT Misinformatika
      </address>
    </Main>
  );
};

export default Dashboard;
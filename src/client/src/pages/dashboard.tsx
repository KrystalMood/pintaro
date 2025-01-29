import { FC } from "react";
import Main from "@/layouts/main";
import Header from "@/components/dashboard/Header";
import MenuSection from "@/components/dashboard/MenuSection";

const Dashboard: FC = () => {
  return (
    <Main title="" description="">
      <Header />
      <MenuSection />
    </Main>
  );
}

export default Dashboard;
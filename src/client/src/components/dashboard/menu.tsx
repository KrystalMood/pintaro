import { FC } from "react";
import { learning_activities, other_activities } from "@/data/dashboard";
import Kartu from "@/components/dashboard/kartu";

const Menu: FC = () => {
  return (
    <main className="container mx-auto mb-10 grid grid-cols-1 gap-8 px-4 py-8 lg:grid-cols-2">
      <Kartu title="Aktivitas Belajar" items={learning_activities} />
      <Kartu title="Aktivitas Lain" items={other_activities} />
    </main>
  );
};

export default Menu;
import { FC } from "react";
import { useInfiniteScroll } from "@/hooks/use-infinite-scroll";
import { courses } from "@/data/beranda";
import KartuKursus from "@/components/home/kartu-kursus";

const DaftarKursus: FC = () => {
  const infiniteScroll = useInfiniteScroll(1);

  return (
    <section className="flex flex-col items-center justify-center bg-white px-4 py-16 text-center sm:px-6 lg:px-8">
      <h2 className="mb-4 cursor-default text-4xl font-bold text-gray-900">
        Ratusan Kursus
      </h2>
      <h5 className="mx-auto mb-10 max-w-2xl cursor-default text-xl text-gray-600 italic">
        Temukan apa yang kamu butuhkan, kapanpun dan di manapun. Jelajahi
        berbagai topik, dari keterampilan teknis hingga pengembangan diri.
      </h5>
      <div
        ref={infiniteScroll}
        className="scrollbar-hide flex w-full snap-x gap-8 overflow-x-auto px-6 pb-6 [scrollbar-width:_none]"
        style={{ scrollBehavior: "smooth" }}
      >
        {[...courses, ...courses].map((course, index) => <KartuKursus key={`${course.id}-${index}`} course={course} />)}
      </div>
    </section>
  );
};

export default DaftarKursus;
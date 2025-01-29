import { FC } from "react";
import { Course } from "@/types/beranda";

const KartuKursus: FC<{ course: Course }> = ({ course }) => {
  return (
    <figure className="w-80 flex-none snap-start">
      <a href={`/${course.title.toLowerCase().replace(/ /g, "-")}`} className="flex min-h-[450px] flex-col rounded-sm bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
        <img src={course.image} alt={course.title} className="h-72 w-full object-cover p-4" />
        <figcaption className="flex flex-1 flex-col p-6">
          <h3 className="mb-2 text-xl font-semibold text-gray-900">
            {course.title}
          </h3>
          <h3 className="mb-2 text-lg font-bold text-gray-900">
            IDR {course.price.toLocaleString()}
          </h3>
          <h6 className="text-sm text-gray-600">{course.description}</h6>
        </figcaption>
      </a>
    </figure>
  );
};

export default KartuKursus;
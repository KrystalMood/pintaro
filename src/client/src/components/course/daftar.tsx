import { FC } from "react";
import { Link } from "react-router-dom";
import { Course } from "@/types/kursus";

const CourseCard: FC<{ course: Course }> = ({ course }) => {
  return (
    <Link to={`/courses/${course.id}`}>
      <figure className="group flex h-full flex-col justify-between overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl">
        <img src={course.image} alt={course.title} className="h-48 w-full object-cover" />
        <figcaption className="flex h-full flex-col items-start px-6 pt-4">
          <h4 className="mb-1 text-xl font-semibold text-gray-900 group-hover:text-[#2c2c2c]">
            {course.title}
          </h4>
          <h5 className="mb-4 text-sm text-gray-600">{course.description}</h5>
        </figcaption>
        <span className="flex items-center justify-between px-6 pb-6">
          <h4>IDR {course.price.toLocaleString()}</h4>
          <button className="cursor-pointer rounded-md bg-[#2c2c2c] px-5 py-2 text-white transition-colors hover:bg-gray-700">
            Daftar
          </button>
        </span>
      </figure>
    </Link>
  );
};

export default CourseCard;
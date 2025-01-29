import { FC, useState } from "react";
import { courses } from "@/data/beranda";
import Main from "@/layouts/main";
import Hero from "@/components/course/hero";
import Filter from "@/components/course/filter";
import CourseCard from "@/components/course/daftar";

const Course: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <Main title="Course" description="Explore our wide range of top courses! Find the perfect course tailored to your interests and needs. Filter by category or search for specific courses. Start your learning journey today!">
      <Hero />
      <section className="mx-auto max-w-7xl bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <Filter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => <CourseCard key={course.id} course={course} />)}
        </div>
        <div className="flex w-full items-center">
          <button
            onClick={() => {}}
            className="mx-auto mt-10 cursor-pointer rounded-md bg-[#2c2c2c] px-6 py-3 text-white transition-colors hover:bg-gray-700"
          >
            Muat Lebih Banyak
          </button>
        </div>
      </section>
    </Main>
  );
};

export default Course;
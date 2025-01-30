import { FC } from "react";
import { Card } from "@/types/dashboard";

const Kartu: FC<Card> = ({ title, items }) => (
  <article className="rounded-lg bg-white p-6 shadow-md">
    <h2 className="mb-4 text-xl font-semibold text-gray-900">{title}</h2>
    <hr className="my-4 h-px bg-gray-300" />
    {items.map((item, index) => (
      <figure key={index} className="group mb-4 flex cursor-pointer items-center justify-between space-x-4 rounded-md p-2 transition-colors first:mt-0 last:mb-0 hover:bg-gray-50">
        <section className="flex w-full items-center space-x-4">
          <i className="fa-solid fa-star !hidden text-gray-900 lg:!inline" />
          <figcaption className="text-justify w-full">
            <h4 className="font-medium text-gray-900">{item.label}</h4>
            <h5 className="text-sm text-gray-500">{item.description}</h5>
          </figcaption>
        </section>
        <i className="fa-solid fa-chevron-right !my-auto text-gray-400 group-hover:text-gray-600" />
      </figure>
    ))}
  </article>
);

export default Kartu;
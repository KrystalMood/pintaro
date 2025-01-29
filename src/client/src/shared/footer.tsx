import { FC } from "react";
import { Link } from "react-router-dom";
import { social_media } from "@/data/beranda";

const Footer: FC = () => {
  return (
    <footer className="mx-auto grid w-[92.5%] grid-cols-1 place-items-start gap-y-10 border-t-1 border-gray-300 bg-white py-16 sm:grid-cols-2 lg:w-[95%] lg:grid-cols-4 xl:place-items-center">
      <section className="self-start justify-self-start">
        <Link to="/">
          <img src="/ico/logo.png" alt="Logo" className="w-48" />
        </Link>
        {social_media.map((link, index) => (
          <Link to={`/${link.link}`} key={index}>
            <span className="sr-only">{link.title}</span>
            <i className={`${link.icon} ${index === 0 ? "ml-0" : "ml-4"} mx-2 mt-4 rounded-md bg-slate-200 p-2`} />
          </Link>
        ))}
      </section>
      <section>
        <h3 className="mb-4 cursor-default text-sm font-semibold tracking-wider text-gray-900 uppercase">
          Use cases
        </h3>
        <ul className="space-y-3">
          {["UI design", "UX design", "Wireframing", "Diagramming", "Brainstorming", "Online Whiteboard", "Team Collaboration"].map((item, index) => (
            <li key={index}>
              <Link to={`/${item.toLowerCase().replace(/ /g, "-")}`} className="text-base text-gray-600 hover:text-gray-900">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3 className="mb-4 cursor-default text-sm font-semibold tracking-wider text-gray-900 uppercase">
          Explore
        </h3>
        <ul className="space-y-3">
          {["Design", "Prototyping", "Development Features", "Design Systems", "Collaboration Features", "Design Process", "FigJam"].map((item, index) => (
            <li key={index}>
              <Link to={`/${item.toLowerCase().replace(/ /g, "-")}`} className="text-base text-gray-600 hover:text-gray-900">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3 className="mb-4 cursor-default text-sm font-semibold tracking-wider text-gray-900 uppercase">
          Resources
        </h3>
        <ul className="space-y-3">
          {["Blog", "Best Practices", "Colors", "Color Wheel", "Support", "Developers", "Resource Library"].map((item, index) => (
            <li key={index}>
              <Link to={`/${item.toLowerCase().replace(/ /g, "-")}`} className="text-base text-gray-600 hover:text-gray-900">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
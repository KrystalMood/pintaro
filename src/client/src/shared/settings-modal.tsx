import { Link, useLocation } from "react-router-dom";

const SettingsModal = () => {
  const location = useLocation();
  const current_page = location.search.split("=")[1];

  return (
    <section className="flex w-full flex-col rounded-md border-2 border-[#d9d9d9] px-6 py-4 shadow-lg lg:w-fit">
      <h3 className="cursor-default text-2xl font-semibold">Settings</h3>
      <hr className="mt-3 border border-[#d9d9d9]" />
      <div className="my-4 flex flex-col space-y-4">
        {["Profile", "Personal Data"].map((list, index) => {
          const active_page = current_page === list.toLowerCase().replace(/ /g, "-");
          return (
            <Link key={index} to={`/settings?=${list.toLowerCase().replace(/ /g, "-")}`}>
              <h4 className={`pr-20 pl-4 ${active_page ? "rounded-lg bg-slate-900 py-3 text-white" : null}`}>
                {list}
              </h4>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default SettingsModal;
import { FC } from "react";
import { SelectOptions as Props } from "@/types/settings";

const SelectOptions: FC<Props> = ({ title, label, options, default: _default, value, onChange, ...props }) => {
  return (
    <fieldset className="flex w-full flex-col">
      <label htmlFor={props.id || label} className="mb-2 font-medium text-gray-800">
        {title} <span className="text-red-500">*</span>
      </label>
      <select
        name={props.id || label.toLowerCase().replace(/ /g, "_")}
        id={props.id || label.toLowerCase().replace(/ /g, "_")}
        className="appearance-none rounded-md px-3.5 py-2.5 ring ring-slate-950"
        value={value || _default}
        onChange={onChange}
        {...props}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </fieldset>
  );
};

export default SelectOptions;
import { FC } from "react";
import { InputFormProps as Props } from "@/types/auth";

const InputForm: FC<Props> = ({ label, type = "text", isTextArea = false, textAreaProps, ...props }) => {
  return (
    <fieldset className="flex w-full flex-col">
      <label htmlFor={props.id || label.toLowerCase().replace(/ /g, "_")} className="mb-2 font-medium text-gray-800">
        {label} <span className="text-red-500">*</span>
      </label>
      {isTextArea ? (
        <textarea
          name={props.id || label.toLowerCase().replace(/ /g, "_")}
          id={props.id || label.toLowerCase().replace(/ /g, "_")}
          className="w-full resize-none rounded-md border border-gray-300 px-3.5 py-2.5 [scrollbar-width:_none] focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none"
          {...textAreaProps}
        />
      ) : (
        <input
          type={type}
          name={props.id || label.toLowerCase().replace(/ /g, "_")}
          id={props.id || label.toLowerCase().replace(/ /g, "_")}
          className="w-full rounded-md border border-gray-300 px-3.5 py-2.5 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none"
          {...props}
        />
      )}
    </fieldset>
  );
};

export default InputForm;
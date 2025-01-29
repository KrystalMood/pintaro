import { InputFormProps } from "@/types/autentikasi";

const InputForm = ({ label, type = "text", isTextArea = false, textAreaProps, ...props }: InputFormProps): JSX.Element => {
  return (
    <fieldset className="w-full">
      <label htmlFor={props.id} className="mb-1 block text-gray-800">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          id={props.id || label.toLowerCase().replace(/ /g, "_")}
          className="w-full resize-none rounded-md border border-gray-300 p-2 [scrollbar-width:_none] focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none"
          {...textAreaProps}
        />
      ) : (
        <input
          type={type}
          id={props.id || label.toLowerCase().replace(/ /g, "_")}
          className="w-full rounded-md border border-gray-300 p-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none"
          {...props}
        />
      )}
    </fieldset>
  );
};

export default InputForm;
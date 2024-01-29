// inputfield.jsx
import { useForm } from "react-hook-form";

function InputField({ type, placeholder, name }) {
  // Add "name" as a prop
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <>
      <input
        className="w-full text-black bg-blue font-semibold placeholder-opaque-black p-3 mt-5 rounded-md"
        type={type}
        placeholder={placeholder}
        {...register(name, {
          // Use the "name" prop for registration
          required: true,
          maxLength: 100,
          pattern:
            type === "phone"
              ? new RegExp(
                  "^(?:(?:(?:\\+?234(?:\\h1)?|01)\\h*)?(?:\\(\\d{3}\\)|\\d{3})|\\d{4})(?:\\W*\\d{3})?\\W*\\d{4}$"
                )
              : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
        })}
      />
      {errors[name.toLowerCase()] && ( // Use "name" for error display
        <p className="mt-1 text-red-400">
          {errors[name.toLowerCase()].type === "required" &&
            "This field is required."}
          {errors[name.toLowerCase()].type === "maxLength" &&
            "Max length is 100 char."}
        </p>
      )}
    </>
  );
}

export default InputField;

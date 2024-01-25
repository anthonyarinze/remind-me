import { useForm } from "react-hook-form";

function InputField({ type, placeholder }) {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <>
      <input
        className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5 rounded-sm"
        type={type}
        placeholder={placeholder}
        {...register("name", {
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
      {errors[type.toLowerCase()] && (
        <p className="mt-1 text-red-400">
          {errors[type.toLowerCase()].type === "required" &&
            "This field is required."}
          {errors[type.toLowerCase()].type === "maxLength" &&
            "Max length is 100 char."}
        </p>
      )}
    </>
  );
}

export default InputField;

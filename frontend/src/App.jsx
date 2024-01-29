import { useForm, Controller } from "react-hook-form";
import Accordion from "./components/Accordion";
import SubmitButton from "./components/SubmitButton";
import axios from "axios";

function App() {
  const { control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data); // Now, it should print the values entered in the form
      await axios.post("http://localhost:3001/submit-form", data);
      // Handle successful submission, e.g., clear form fields or show success message
    } catch (error) {
      console.error(error);
      // Handle errors, e.g., display error messages
    }
  };

  return (
    <main className="bg-alt flex h-dvh w-dvw items-center justify-center text-main">
      <div className="bg-main p-5 my-5 items-center justify-start h-5/6 flex flex-col w-5/6 rounded-md">
        <div>
          <h1 className="mt-5 font-bold text-center">
            Keep In Contact With Your Loved Ones
          </h1>
          <form
            className="mb-5"
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
          >
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className="w-full text-black bg-blue font-semibold placeholder-opaque-black p-3 mt-5 rounded-md"
                  placeholder="Enter your email"
                  type="email"
                />
              )}
            />
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className="w-full text-black bg-blue font-semibold placeholder-opaque-black p-3 mt-5 rounded-md"
                  placeholder="Enter the phone number"
                  type="tel"
                />
              )}
            />
            <Controller
              name="subject"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className="w-full text-black bg-blue font-semibold placeholder-opaque-black p-3 mt-5 rounded-md"
                  placeholder="Enter the email"
                  type="text"
                />
              )}
            />

            <SubmitButton />
          </form>
          <Accordion
            title="Learn More"
            content="When clicked, the submit button will register the entered info with our services and you'll be reminded to contact the individual whose data you provided in an email we'll send to you. The reminders will be weekly, beginning 24hrs from now and every week after."
          />
        </div>
      </div>
    </main>
  );
}

export default App;

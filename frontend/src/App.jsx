import { useForm } from "react-hook-form";
import Accordion from "./components/Accordion";
import InputField from "./components/InputField";
import SubmitButton from "./components/SubmitButton";
import axios from "axios";

function App() {
  const { trigger } = useForm();

  const onSubmit = async (data) => {
    const isValid = await trigger();
    if (!isValid) {
      // e.preventDefault();
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/submit-form",
        data
      );
      console.log(response.data);
    } catch (error) {
      console.error("error submitting form: ", error);
    }
  };

  return (
    <main className="bg-alt flex h-dvh w-dvw items-center justify-center text-main">
      {/* main div */}
      <div className="bg-main p-5 items-center justify-start h-5/6 flex flex-col w-5/6 rounded-md">
        <div>
          <h1 className="mt-5 font-bold text-center">
            Keep In Contact With Your Loved Ones
          </h1>
          <form
            className="mb-5"
            // target="_blank"
            onSubmit={onSubmit}
            // action="https://formsubmit.co/"
            action="http://localhost:3001/submit-form" // Update this URL
            method="POST"
          >
            <InputField type="phone" placeholder="Enter Phone Number" />
            <InputField type="email" placeholder="Enter Email" />
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

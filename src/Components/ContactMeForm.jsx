import { useRef, useState } from "react";
import Button from "../util/Button";
import emailjs from "@emailjs/browser";
import { Alert } from "@mui/material";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../util/emailServices";

const ContactMeForm = () => {
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setMessage("Message sent successfully!");
        setTimeout(() => {
          setMessage("");
        }, 3000);
        formRef.current.reset();
      },
      (error) => {
        console.log(error.text);
        setError("Error sending message. Please try again later!");
        setTimeout(() => {
          setError("");
        }, 3000);
      }
    );
    setSending(false);
  };

  return (
    <div className="relative min-w-96 md:min-w-50w lg:min-w-30w mx-auto p-4 bg-gradient-to-b from-dark-violet to-violet  rounded-md shadow-md">
      <div className="absolute top-0 left-0 right-0 flex justify-center -mt-7">
        <Alert
          severity={`${(error && "error") || (message && "success")}`}
          className="whitespace-nowrap"
        >
          {error || message}
        </Alert>
      </div>
      <form ref={formRef} onSubmit={sendEmail}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-white text-sm font-bold mb-2 "
          ></label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:border-crimson  bg-black"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          ></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none  focus:border-crimson bg-black"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          ></label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none  focus:border-crimson  bg-black"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <Button type="submit">
            {sending ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactMeForm;

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const SendEmail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_197j0nc", "template_n4yqy8h", form.current, {
        publicKey: "AlcbSQ4yxyriroyN2",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="w-3/4 mx-auto">
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-xl">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="from_name"
            className="input input-bordered"
            required
          />
        </div>
        {/* <label>Name</label>
        <input type="text" name="user_name" /> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-xl">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="from_email"
            className="input input-bordered"
            required
          />
        </div>
        {/* <label>Email</label>
        <input type="email" name="user_email" /> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-xl">
              Doctors SUggestion for You
            </span>
          </label>
          <textarea
            name="message"
            placeholder="Doctors Suggestion"
            className="textarea textarea-bordered textarea-sm w-full "
          ></textarea>
        </div>

        {/* <label>Message</label>
        <textarea name="message" /> */}
        <input
          className="mt-3 p-2 bg-purple-100 text-lg text-blue-700 font-medium btn btn-outline border-0 border-t-4 border-b-4 mb-5 w-24"
          type="submit"
          value="Send"
          name="message"
        />
      </form>
    </div>
  );
};

export default SendEmail;

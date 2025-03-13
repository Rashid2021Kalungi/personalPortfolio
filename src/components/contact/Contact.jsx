import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img
          src="https://as1.ftcdn.net/v2/jpg/05/93/12/50/1000_F_593125041_8VRfaQfrBc4KFlgstGKLM41N0QxSMLX7.jpg"
          alt=""
        />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea name="" id="" placeholder="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thank you for your feedback</span>}
        </form>
      </div>
    </div>
  );
}

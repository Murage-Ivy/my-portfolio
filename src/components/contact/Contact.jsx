import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
function Contact() {
  const [result, setResult] = useState(false);
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const form = useRef();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormInfo({ ...formInfo, [name]: value });
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_esftb5p",
        "template_6r20gb8",
        form.current,
        "TO4wW2R4H-RMCxHN3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFormInfo({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div id="contacts">
      <h3>Send a Message</h3>
      <form className="form" onSubmit={sendEmail} ref={form}>
        <img src="../assets/Images/contact.svg" alt="contact" />
        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            placeholder="Enter your name"
            value={formInfo.name}
            name="name"
            onChange={handleChange}
          />
          <br />
          <label>Email</label>
          <br />
          <input
            type="email"
            placeholder="Enter your email"
            value={formInfo.email}
            name="email"
            onChange={handleChange}
          />
          <br />
          <label>Message</label>
          <br />
          <textarea
            placeholder="Enter Your message"
            rows="4"
            cols="100"
            value={formInfo.message}
            name="message"
            onChange={handleChange}
          />
          <button className="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;

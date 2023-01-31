import React, { useState } from "react";
import "./Contact.css";
function Contact() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormInfo({ ...formInfo, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted successfully");
    setFormInfo({
      name: "",
      email: "",
      message: "",
    });
  }
  return (
    <div id="contacts">
      <h3>Send a Message</h3>
      <form className="form" onSubmit={handleSubmit}>
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

import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div id="contacts">
      <h3>Send a Message</h3>
      <form className="form">
        <label>Name</label>
        <br />
        <input type="text" placeholder="Enter your name" />
        <br />
        <label>Email</label>
        <br />
        <input type="email" placeholder="Enter your email" />
        <br />
        <label>Message</label>
        <br />
        <textarea placeholder="Enter Your message" rows="4" cols="100" />
      </form>
    </div>
  );
}

export default Contact;

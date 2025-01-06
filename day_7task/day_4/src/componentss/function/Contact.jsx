
import React, { useState } from "react";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}! We received your message.`);
    setName("");
    setEmail("");
  };

  return (
    <footer className="contact-footer">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <p>&copy; {new Date().getFullYear()} My Company. All Rights Reserved.</p>
    </footer>
  );
};

export default Contact;

import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit() {
    setMessage("Thank you, " + name + "!");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Contact Page</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>SUBMIT</button>
      <h3 style={{ color: "green" }}>{message}</h3>
    </div>
  );
}

export default Contact;

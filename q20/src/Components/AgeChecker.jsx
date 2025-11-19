import React, { useState } from "react";

function AgeChecker() {
  const [age, setAge] = useState("");        // store user input
  const [message, setMessage] = useState(""); // store the result message

  function handleCheck() {
    const num = Number(age); // convert input text to number

    if (num < 18) setMessage("You are a Minor");
    else if (num < 60) setMessage("You are an Adult");
    else setMessage("You are a Senior Citizen");
  }

  return (
    <div style={{ textAlign: "center", margin: "20px auto", width:"300px" , border:"1px solid black", padding:"10px"}}>
      <input
        type="number"
        placeholder="Enter age"
        onChange={(event) => setAge(event.target.value)} // update the age when user types
      />
      <button onClick={handleCheck}>Check</button>
      <h3 style={{ color: "green", background:"yellow"}}>{message}</h3> {/* show message here */}
    </div>
  );
}

export default AgeChecker;


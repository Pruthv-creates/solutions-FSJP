import React from "react";

function Home() {
  function showMessage() {
    alert("Hello from Home Page!");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome to the Home Page</h2>
      <button onClick={showMessage}>Click Me</button>
    </div>
  );
}

export default Home;

import "./App.css";
import { useState } from "react";

function App() {
  const [message, setmessage] = useState("");
  const [response, setresponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => setresponse(data.message));
  };

  const handleChange = (e) => {
    setmessage(e.target.value);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <textarea value={message} onChange={handleChange}></textarea>
        <button type="submit">Submit</button>
      </form>

      <div>{response}</div>
    </div>
  );
}

export default App;

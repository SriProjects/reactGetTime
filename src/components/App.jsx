import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();

  let [currentTime, setTime] = useState(time);
  function getTime() {
    setTime((currentTime = new Date().toLocaleTimeString()));
  }

  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;

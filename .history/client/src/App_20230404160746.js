import React, { useState, useEffect } from "react";
import Header from "./scenes/Header";

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch("/time")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
  }, []);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;

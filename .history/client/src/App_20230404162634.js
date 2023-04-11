import React, { useState, useEffect } from "react";
import Header from "./scenes/Header";
import background from "./assets/background1080blurred.jpg";
function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div>
        <Header />
      </div>
    </div>
  );
}

export default App;

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
        height: 100vh
      }}
    >
      <Header />
      <div></div>
    </div>
  );
}

export default App;

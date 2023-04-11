import React, { useState, useEffect } from "react";
import Header from "./scenes/Header";
import backgroundImage from "./assets/background1080blurred.jpg";
function App() {
  return (
    <div className="App">
      <div src={backgroundImage}>
        <Header />
      </div>
    </div>
  );
}

export default App;

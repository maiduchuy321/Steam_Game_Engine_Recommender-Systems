import React, { useState, useEffect } from "react";
import Header from "./scenes/Header";
import backgroundImage from "./assets/background1080blurred.jpg";
function App() {
  return (
    <div className="App">
      <backgroundImage />
      <Header />
    </div>
  );
}

export default App;

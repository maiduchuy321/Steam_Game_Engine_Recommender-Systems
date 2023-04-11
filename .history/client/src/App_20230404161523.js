import React, { useState, useEffect } from "react";
import Header from "./scenes/Header";

function App() {
  const backgroundImage = {
    backgroundImage: `url('./assets/background1080blurred.jpg')`,
    backgroundSize: "cover",
    height: "100vh",
  };
  return (
    <div className="App">
      <div style={backgroundImage}></div>;
      <Header />
    </div>
  );
}

export default App;

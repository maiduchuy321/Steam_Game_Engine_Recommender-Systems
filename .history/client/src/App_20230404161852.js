import React, { useState, useEffect } from "react";
import Header from "./scenes/Header";
import Background from "./assets/background1080blurred.jpg";
function App() {
  const backgroundImage = {
    backgroundImage: `url('./')`,
    backgroundSize: "cover",
    height: "100vh",
  };
  return (
    <div className="App">
      <Background />
      <Header />
    </div>
  );
}

export default App;

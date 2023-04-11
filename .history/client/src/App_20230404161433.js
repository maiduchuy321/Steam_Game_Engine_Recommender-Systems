import React, { useState, useEffect } from "react";
import Header from "./scenes/Header";

function App() {
  const backgroundImage = {
    backgroundImage: `url('path/to/image.jpg')`,
    backgroundSize: "cover",
    height: "100vh",
  };
  return (
    <div className="App">
      <div style={backgroundImage}>Hello World!</div>;
      <Header />
    </div>
  );
}

export default App;

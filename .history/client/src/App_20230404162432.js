import React, { useState, useEffect } from "react";
import Header from "./scenes/Header";
import background from "./assets/background1080blurred.jpg";
function App() {
  return (
    <div className="App">
      <div style={{ backgroundImage: `url(${background})` }}>
        <Header />
      </div>
    </div>
  );
}

export default App;

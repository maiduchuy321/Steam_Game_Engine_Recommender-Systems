import React from "react";
import Header from "./scenes/Header";
import Landing from "./scenes/Landing";
import background from "./assets/background1080blurred.jpg";
function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Header />
      <Landing />
    </div>
  );
}

export default App;

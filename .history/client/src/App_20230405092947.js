import React from "react";
import Header from "./scenes/Header";
import Landing from "./scenes/Landing";
import Footer from "./scenes/Footer";
import background from "./assets/background1080blurred.jpg";
function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
      }}
    >
      <Header />
      <Landing />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

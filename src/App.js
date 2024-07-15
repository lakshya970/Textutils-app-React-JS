import "./App.css";

import Navbar from "./components/Navbar";
import Navform from "./components/Navform";
import React, { useState } from "react";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(" ");

  const showAlert = (msg, type) => {
    setalert({
      message: msg,
      type: type,
    });
  };

  const modet = () => {
    console.log("click");
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enable", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "success");
    }
  };

  return (
    <>
      <Navbar title="TextUtitls" mode={mode} togglemode={modet} />;
      {/* <Navabout /> */}
      <div className="container">
        <Navform heading="Enter the your text" mode={mode} />
      </div>
    </>
  );
}

export default App;

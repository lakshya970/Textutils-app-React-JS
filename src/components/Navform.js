import React, { useState } from "react";

export default function Navform(props) {
  const clickbtn = () => {
    console.log("click");
    let a = text.toUpperCase();
    settext(a);
  };

  const showtext = (event) => {
    console.log("value was change");
    settext(event.target.value);
  };
  const clicklowbtn = () => {
    console.log("click low");
    let low = text.toLowerCase();
    settext(low);
  };

  const deletebtn = () => {
    console.log("delete");
    settext("");
  };
  const [text, settext] = useState("");
  return (
    <div>
      <div
        className={`form-group text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
      >
        <h1>{props.heading} </h1>
        <textarea
          className="form-control"
          value={text}
          placeholder="Enter Text"
          onChange={showtext}
          id="mybox"
          rows="8"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "black",
            color: props.mode === "light" ? "black" : "white",
          }}
        ></textarea>
        <button
          className="btn btn-primary my-4"
          onClick={clickbtn}
          showalert={props.change}
        >
          Convrt to uppecase
        </button>
        <button className="btn btn-secondary my-4 mx-4" onClick={clicklowbtn}>
          Convrt the lowrcase
        </button>
        <button className="btn btn-danger my-4 " onClick={deletebtn}>
          Delete
        </button>
      </div>

      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} charectors
        </p>
      </div>
    </div>
  );
}

import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

//inline style
const customStyle = {
  color: "red",
  fontSize: "10px",
  border: "1px solid"
};

customStyle.border = "0px";

//Render dữ liệu vào id=root trong file index.html
createRoot(document.getElementById("root")).render(
  <div>
    <h1 className="heading">Hello</h1>
    <p> This is paragraph </p>
    <h6 style={customStyle}> This year: {new Date().getFullYear()} </h6>
  </div>
);

//Render dữ liệu vào id=picture trong file index.html
createRoot(document.getElementById("picture")).render(
  <div>
    <img src={"https://picsum.photos/200/300?grayscale"} />
    <img src={"https://picsum.photos/200/300/?blur=2"} />
  </div>
);

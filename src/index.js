import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <div>
    <h1 className="heading">Hello</h1>
    <p> This is paragraph </p>
    <h6> This year: {new Date().getFullYear()} </h6>
  </div>
);

createRoot(document.getElementById("picture")).render(
  <div>
    <img src={"https://picsum.photos/200/300?grayscale"} />
    <img src={"https://picsum.photos/200/300/?blur=2"} />
  </div>
);

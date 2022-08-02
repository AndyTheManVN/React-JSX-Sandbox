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
customStyle.color = "blue";

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

// Practise 1: show greeting text and change color follow time
const currentTime = new Date().getHours();
let greetingsShow;

const greentingStyle = {
  fontSize: "10px"
};

if (currentTime < 12) {
  greetingsShow = "Good morning";
  greentingStyle.color = "blue";
} else if (greetingsShow < 18) {
  greetingsShow = "Good afternoon";
  greentingStyle.color = "yellow";
} else {
  greetingsShow = "Good night";
  greentingStyle.color = "red";
}

createRoot(document.getElementById("greetings")).render(
  <h3 style={greentingStyle}>{greetingsShow}</h3>
);

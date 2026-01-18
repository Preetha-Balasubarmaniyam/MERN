import React from "react";
import ReactDOM from "react-dom/client";
const headingElement= React.createElement("h1",null,"React using vite Bundler");
const Root= ReactDOM.createRoot(document.getElementById("root"));
Root.render(headingElement);
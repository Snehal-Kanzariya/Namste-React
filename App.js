import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id: "heading1"}, "Namste React");
const heading2 = React.createElement("h2", {id: "heading2"}, "Namste React heading 2");
const container = React.createElement("div", {id: "container"}, [heading, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
import React from "react";
import * as ReactDom from "react-dom/client";
import MainRoute from "./routes";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(React.createElement(MainRoute));

import React from "react";
import ReactDom from "react-dom";

import "./styles.css";
import App from "./components/App.js";
import FriendsList from "./components/FriendsList.js";

document.addEventListener("DOMContentLoaded", ()=> {
  const reactNode = document.getElementById("react-node");

  if(reactNode){
    ReactDom.render(
      <App />
      , reactNode
    )
  }
})

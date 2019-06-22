import React from "react";
import "./style.css";

function Container(props) {
  return <main className="row">{props.children}</main>;
}

export default Container;

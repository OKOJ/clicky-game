import React from "react";
import Message from "../Message";
import "./style.css";


function Nav(props) {
  return (
    <nav className="navbar">
      
         
        <div className="brand">Red Flag Clicky Game</div>
        <div className="navbar-item">
        <Message score={props.score} topScore={props.topScore} /></div>
        <div className="navbar-score">
          Score:<span> {props.score}</span><br></br>     Your Top Score: <span>{props.topScore}</span></div>
       
    </nav>
  );
}

export default Nav;

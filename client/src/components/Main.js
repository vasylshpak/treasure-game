import React, { Component } from "react";
import "./board.css";
import { Link } from "react-router-dom";
class Main extends Component {
  constructor(props, fullName, Button) {
    super(props);
    this.fullName = fullName;
  }
  state = {
    message: "",
    responseToPost: "",
  };
  temp() {
    return null;
  }
  render() {
    return (
      <div>
        <p>{"FullName"}</p>
        <button color="primary" onClick={this.temp}>
          <Link to="/api/game/id">
            <p>Start New Game</p>
          </Link>
        </button>
      </div>
    );
  }
}

export default Main;

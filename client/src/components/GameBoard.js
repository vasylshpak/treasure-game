import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Score from "./Score";
import { Link } from "react-router-dom";
class GameBoard extends Component {
  constructor(props, fullName, Button) {
    super(props);
    this.apiFunction = this.apiFunction.bind(this);
  }
  apiFunction() {
    console.log(
      "this function should reveal the Cell,and ask Server what is behind this sell, and ++ the result of current player"
    );
  }
  render() {
    const treas = [
      2,
      3,
      2,
      "T",
      3,
      3,
      "T",
      3,
      3,
      2,
      2,
      3,
      2,
      2,
      1,
      3,
      "T",
      3,
      2,
      1,
      2,
      3,
      "T",
      3,
      2,
    ];
    const renderTreas = treas.map((item) => (
      <div className="boardCell" onClick={this.apiFunction}>
        {item}
      </div>
    ));
    return (
      <div>
        <h1>Game Board page</h1>
        <div className="wrapper">{renderTreas}</div>
        <button color="primary" onClick={this.temp}>
          <Link to="/api/score">
            <p>GO TO THE SCORE</p>
          </Link>
        </button>
        <p>{"message"}</p>
        <p>
          You did {"gameResult.moves"} move and you have completed{" "}
          {"gameResult.turns"} turns.
        </p>
      </div>
    );
  }
}

export default GameBoard;

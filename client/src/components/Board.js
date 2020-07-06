import React, { Component } from "react";
import "./board.css";
class Board extends Component {
  constructor(props, fullName, Button) {
    super(props);
    this.apiFunction = this.apiFunction.bind(this);
    this.fullName = fullName;
  }
  state = {
    message: "",
    responseToPost: "",
  };
  temp() {
    return null;
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
        <p>{"fullanam"}</p>
        <button color="primary" onClick={this.temp}>
          Start New Game
        </button>
        <p>
          <span>Top Ten:</span>
        </p>
        {/*<p>
          {
              gameResult.topTen.map((score, index) => {
                  return <span key={'score_' + index} className="top-score">{score}</span>
              })
          }
      </p>*/}
        <p>{"message"}</p>
        <p>
          You did {"gameResult.moves"} move and you have completed{" "}
          {"gameResult.turns"} turns.
        </p>
        <p>im board</p>
        <div className="wrapper">{renderTreas}</div>
      </div>
    );
  }
}

export default Board;

class GameService {
  constructor(gameCache, id) {
    this.gameCache = {};
  }

  createGame(userName) {
    const id = this.generateId();
    const game = new Game(id, userName);
    this.gameCache[id] = game;
    game.init();
    return this._convert(game);
  }

  getGame(id) {
    const game = this.gameCache[id];
    return this._convert(game);
  }

  makeTurn(id, turns) {
    console.log(turns);
    const game = this.gameCache[id];
    for (let i = 0; i < turns.length; i++) {
      let turn = turns[i];
      game.cells[turn.i][turn.j].opened = true;
    }
    game.turnsCounter++;
    game.finished = this.isFinished(game);
    console.log(game);
    return this._convert(game);
  }

  isFinished(game) {
    for (let i = 0; i < game.cells.length; i++) {
      for (let j = 0; j < game.cells.length; j++) {
        if (game.cells[i][j].value == "T" && !game.cells[i][j].opened) {
          return false;
        }
      }
    }
    return true;
  }

  generateId() {
    return Math.random().toString(36).substring(7);
  }

  _convert(game) {
    let result = {};
    result.cells = [];
    result.id = game.id;
    result.finished = game.finished;
    result.turnsCounter = game.turnsCounter;
    for (let i = 0; i < game.cells.length; i++) {
      result.cells[i] = new Array(5);
      for (let j = 0; j < game.cells.length; j++) {
        result.cells[i][j] = game.cells[i][j].opened
          ? game.cells[i][j].value
          : null;
      }
    }
    return result;
  }
}

class Game {
  constructor(id, userName) {
    this.id = id;
    this.userName = userName;
    this.size = 5;
    this.maxTreasures = 3;
    this.turnsCounter = 0;
    this.cells;
  }

  init() {
    this.cells = new Array(this.size);
    for (let i = 0; i < this.size; i++) {
      this.cells[i] = new Array(this.size);
      for (let j = 0; j < this.size; j++) {
        this.cells[i][j] = { value: "", opened: false };
      }
    }
    this.fillRandomData();
    console.log(this.cells);
  }
  fillRandomData() {
    const numbers = Array.from(Array(25).keys());
    for (let i = 0; i < this.maxTreasures; i++) {
      const randomIndex = Math.floor(Math.random() * (numbers.length - 1));
      const value = numbers.splice(randomIndex, 1)[0];
      const i = Math.floor(value / 5);
      const j = value % 5;
      this.cells[i][j].value = "T";
    }

    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        if (this.cells[i][j].value == "T") {
          continue;
        }
        if (
          this.isTreasure(i, j + 1) ||
          this.isTreasure(i + 1, j) ||
          this.isTreasure(i, j - 1) ||
          this.isTreasure(i - 1, j)
        ) {
          this.cells[i][j].value = "3";
        } else if (
          this.isTreasure(i - 1, j + 1) ||
          this.isTreasure(i + 1, j + 1) ||
          this.isTreasure(i + 1, j - 1) ||
          this.isTreasure(i - 1, j - 1)
        ) {
          this.cells[i][j].value = "2";
        } else {
          this.cells[i][j].value = "1";
        }
      }
    }
  }

  isTreasure(i, j) {
    if (i < 0 || i >= this.size || j < 0 || j >= this.size) {
      return false;
    }
    return this.cells[i][j].value == "T";
  }
}
module.exports = { GameService, Game };

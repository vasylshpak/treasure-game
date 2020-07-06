class GameService {
  constructor(gameMap, id) {
    this.id = id;
    this.gameMap = {};
  }

  createGame(userName) {
    //create id
    const id = this.generateId();
    const game = new Game(id, userName);
    this.gameMap[id] = game;
    game.init();
    return game;
  }

  getGame(id) {
    return this.gameMap[id];
  }

  makeTurn(id, calls) {
    return this.gameMap[id];
  }

  generateId() {
    return Math.random().toString(36).substring(7);
  }
}

class Game {
  constructor(id, userName) {
    this.id = id;
    this.userName = userName;
    this.size = 5;
    this.maxTreasures = 3;
    this.cells;
  }

  init() {
    this.cells = new Array(this.size);
    for (let i = 0; i < this.size; i++) {
      this.cells[i] = new Array(this.size);

      for (let j = 0; j < this.size; j++) {
        this.cells[i][j] = { value: "" };
      }
    }

    this.fillRandomData();
    //console.log(this.cells);
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
    if (i < 0 || i >= this.size) {
      return false;
    }
    if (j < 0 || j >= this.size) {
      return false;
    }
    return this.cells[i][j].value == "T";
  }
}
module.exports = { GameService, Game };

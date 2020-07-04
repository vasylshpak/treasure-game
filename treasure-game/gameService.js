class GameService {
  constructor(gameMap, id) {
    this.id = id;
    this.gameMap = {};
  }

  createGame(userName) {
    const id = this.generateId();
    const game = new Game(id, userName);
    this.gameMap[id] = game;
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
  }
}

class Cell {
  constructor(x, y, value) {
    this.x = x;
    this.y = y;
    this.value = value;
  }
}

module.exports = GameService;

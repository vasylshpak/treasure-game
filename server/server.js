const { GameService, Game } = require("./gameService");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { count } = require("console");
const gameService = new GameService();
const game = new Game();

const app = express();
const port = process.env.PORT || 5000;

console.log(gameService.topGames());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.post("/api/game", (req, res) => {
  res.send(gameService.createGame(req.body.username));
});

app.post(`/api/game/:id/turn`, (req, res) => {
  const id = req.params.id;
  res.send(gameService.makeTurn(id, req.body.turns));
});

app.get("/api/game/:id", (req, res) => {
  const id = req.params.id;
  const game = gameService.getGame(id);
  res.send(game);
});

app.get("/api/score", (req, res) => {
  res.send(gameService.topGames(10));
});

app.get("/api/score/:id", (req, res) => {
  const id = req.params.id;
  res.send(gameService.gamesScore(id));
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));

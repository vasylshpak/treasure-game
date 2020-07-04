const GameService = require("./gameService");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const gameService = new GameService();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.post("/api/game", (req, res) => {
  res.send(gameService.createGame(req.body.username));
});

app.get("/api/game/:id", (req, res) => {
  const id = req.params.id;
  const game = gameService.getGame(id);
  res.send(game);
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));

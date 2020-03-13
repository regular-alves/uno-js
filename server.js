import express from "express";
import http from "http";
import socketio from "socket.io";

import createGame from "./public/game.js";
import createPlayer from "./public/player.js";
import dealer from "./public/dealer.js";
import deck from "./public/deck.js";

const app = express();
const server = http.createServer(app);
const sockets = socketio(server);

const game = createGame();

dealer.setDeck(deck);

app.use(express.static("public"));

sockets.on("connection", socket => {
  game.setPlayer(createPlayer(socket.id, socket.id));

  sockets.on("disconnect", () => {
    game.removePlayer(socket.id);
  });

  if (game.getPlayers().length > 1) {
    game.setPlayers(dealer.dealCards(game.getPlayers()));
    console.log(game);

    sockets.emit("setup", game);
  }
});

server.listen(3000, () => {
  console.log("> server listen on port 3000");
});

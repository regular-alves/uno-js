import express from "express";
import http from "http";
import socketio from "socket.io";

import createGame from "./public/game.js";
import createPlayer from "./public/player.js";
import createDealer from "./public/dealer.js";
import deck from "./public/deck.js";

const app = express();
const server = http.createServer(app);
const sockets = socketio(server);

const dealer = createDealer(deck);
const game = createGame();

app.use(express.static("public"));

sockets.on("connection", socket => {
  game.setPlayer(createPlayer(socket.id, socket.id));

  sockets.on("disconnect", () => {
    game.removePlayer(socket.id);
  });

  sockets.on("player-movement", command => {
    console.log(command);
  });

  if (game.getPlayers().length > 1) {
    game.setPlayers(dealer.dealCards(game.getPlayers()));
    sockets.emit("setup", {
      number: game.number,
      color: game.color,
      direction: game.direction,
      turn: game.turn,
      trash: game.trash,
      cards: game.getPlayer(socket.id)
    });
  }
});

server.listen(3000, () => {
  console.log("> server listen on port 3000");
});

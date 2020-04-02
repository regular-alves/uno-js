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

  if (game.getPlayers().length > 1) {
    game.setPlayers(dealer.dealCards(game.getPlayers()));
    game.change(sockets);
  }

  socket.on("disconnect", () => {
    game.removePlayer(socket.id);
  });

  socket.on("player-movement", command => {
    let player = game.getPlayer(command.player);

    if (!player) return;

    let card = player.removeCard(command.card);

    dealer.discart(game, card).change(sockets);
  });
});

server.listen(3000, () => {
  console.log("> server listen on port 3000");
});

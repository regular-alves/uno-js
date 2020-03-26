import createPlayer from "./player.js";

const createGame = function() {
  let players = [];
  let trash = [];
  let number = null;
  let color = null;
  let direction = 1;
  let turn = 0;

  function setPlayer(player) {
    players.forEach((element, key) => {
      if (element.id == player.id) {
        player[key] = player;

        return players;
      }
    });

    return players.push(player);
  }

  function setPlayers(list) {
    list.forEach(element => setPlayer(element));
  }

  function getPlayers() {
    return players;
  }

  function getPlayer(id) {
    for (let i = 0; i < players.length; i++) {
      if (players[i].id == id) return players[i];
    }

    return false;
  }

  function removePlayer(id) {
    let newPlayers = [];

    players.forEach(element => {
      if (element.id != id) {
        newPlayers.push(element);
      }
    });

    players = newPlayers;
  }

  function trashing(play) {
    let player = getPlayer(play.player);
    console.log(player);
    let last = trash[trash.length - 1];

    if (!number && !color) {
      trash.push(card);

      color = card.color;
      number = card.number;

      card.action(dealer, this);

      return true;
    }

    if (
      (number && card.number && number == card.number) ||
      (color && card.color && color == card.color)
    ) {
      trash.push(card);

      color = card.color;
      number = card.number;

      card.action(dealer, this);

      return true;
    }

    if (card.name == "choose_color") {
      trash.push(card);

      color = card.color;
      number = card.number;

      card.action(dealer, this);

      return true;
    }

    if (card.name == "four_cards") {
      trash.push(card);

      color = card.color;
      number = card.number;

      card.action(dealer, this);

      return true;
    }

    return false;
  }

  function revert() {
    console.log("game.revert.direction > ", direction);
    direction = direction < 0 ? 1 : -1;
    console.log("game.revert.direction > ", direction);
  }

  function next() {
    turn += direction;

    if (direction > 0 && players.length <= turn) {
      turn = 0;
    } else if (direction < 0 && turn < 0) {
      turn = players.length - 1;
    }
  }

  return {
    setPlayer,
    setPlayers,
    trashing,
    getPlayers,
    getPlayer,
    removePlayer,
    revert,
    next,
    players,
    trash,
    color,
    number,
    direction,
    turn
  };
};

export default createGame;

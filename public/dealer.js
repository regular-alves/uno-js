export default function createDealer(cards) {
  let deck = shuffleCards(cards);

  function shuffleCards(deck) {
    let currentIndex = deck.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = deck[currentIndex];
      deck[currentIndex] = deck[randomIndex];
      deck[randomIndex] = temporaryValue;
    }

    return deck;
  }

  function getCard(qty = 1) {
    return deck.shift();
  }

  function dealCards(players) {
    for (var i = 0; i < players.length; i++) {
      while (players[i].cards.length < 7) {
        players[i].addCard(getCard());
      }
    }

    return players;
  }

  function discart(game, card) {
    if (!game.number && !game.color) {
      game.trash.push(card);

      game.color = card.color;
      game.number = card.number;

      [game, deck] = card.action(this, game);

      game.next();
    } else if (
      (game.number && card.number && game.number == card.number) ||
      (game.color && card.color && game.color == card.color)
    ) {
      game.trash.push(card);

      game.color = card.color;
      game.number = card.number;

      [game, deck] = card.action(this, game);

      game.next();
    } else if (card.name == "choose_color") {
      game.trash.push(card);

      game.color = card.color;
      game.number = card.number;

      [game, deck] = card.action(this, game);

      game.next();
    } else if (card.name == "four_cards") {
      game.trash.push(card);

      game.color = card.color;
      game.number = card.number;

      [game, deck] = card.action(this, game);

      game.next();
    }

    return game;
  }

  return {
    discart,
    getCard,
    shuffleCards,
    dealCards
  };
}

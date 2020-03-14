export default function createDealer() {
  let deck = [];

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

  function setDeck(deck) {
    deck = shuffleCards(deck);
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

  return {
    getCard,
    shuffleCards,
    setDeck,
    dealCards
  };
}

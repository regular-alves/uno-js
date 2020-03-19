export default function createDealer(deck) {
  deck = shuffleCards(deck);

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
    console.log(deck);
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
    dealCards
  };
}

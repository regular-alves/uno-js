var dealer = {};

dealer.shuffleCards = function(deck) {
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
};

dealer.setDeck = function(deck) {
  this.deck = this.shuffleCards(deck);
};

dealer.getCard = function() {
  return this.deck.shift();
};

dealer.dealCards = function(players) {
  for (var i = 0; i < players.length; i++) {
    while (players[i].cards.length < 7) {
      players[i].addCard(this.getCard());
    }
  }

  return players;
};

export default dealer;

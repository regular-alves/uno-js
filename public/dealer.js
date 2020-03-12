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
  console.log("Dealer.dealCards.start > ", players);

  for (var i = 0; i < players.length; i++) {
    let current_player = players[i];

    console.log("Dealer.dealCards.for.current_player > ", current_player);

    while (current_player.cards.length < 7) {
      current_player.addCard(this.getCard());
    }

    players[i] = current_player;
  }

  console.log("Dealer.dealCards.end > ", players);

  return players;
};

export default dealer;

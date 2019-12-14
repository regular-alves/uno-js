var dealer = {};

dealer.shuffleCards = function( deck ) {
	var currentIndex = deck.length, temporaryValue, randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = deck[currentIndex];
		deck[currentIndex] = deck[randomIndex];
		deck[randomIndex] = temporaryValue;
	}

	return deck;
}

dealer.setDeck = function( deck ) {
	this.deck = this.shuffleCards(deck);
}

dealer.dealCards = function( players ) {
	console.log(players);

	for (var i = players.length - 1; i >= 0; i--) {
		var player = players[i];

		while (player.cards.length<7) {
			player.cards.push(this.deck.shift());
		}

		players[i] = player;
	}

	return players;
}
var player = {
	id: '',
	name: '',
	cards: []
};

player.play = function( number ) {
	if(!this.cards[number])
		return false;

	let card = this.cards[number];

	console.log('player.play.cards.length > ', this.cards.length );

	this.cards.splice(number, 1);

	console.log('player.play.cards.length > ', this.cards.length );

	return card;
}

player.addCard = function(card) {
	this.cards.push(card);
}
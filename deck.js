var deck = [];
let colors = ['red', 'blue', 'green', 'yellow'];

for (var i = 0; i < 4; i++) {
	let new_card = Object.assign({}, card);

	new_card.id = 'choose_color_' + i;
	new_card.color = null;
	new_card.number = null;
	new_card.name = 'choose_color';

	new_card.action = function(dealer, game) {
		game.color = prompt('Escolha uma cor');
	}

	deck.push(new_card);
}

for (var i = 0; i < 4; i++) {
	let new_card = Object.assign({}, card);

	new_card.id = 'four_cards_' + i;
	new_card.color = null;
	new_card.number = null;
	new_card.name = 'four_cards';

	new_card.action = function(dealer, game) {
		let players = game.getPlayers();
		
		game.next();

		for (var i = 0; i < 4; i++) {
			players[game.turn].cards.push(dealer.getCard());
		}

		game.color = prompt('Escolha uma cor');
	}

	deck.push(new_card);
}


for (var key = 0; key < colors.length; key++) {
	let color = colors[key];

	for (var i = 0; i < 10; i++) {
		let new_card = Object.assign({}, card);

		new_card.id = color + '-' + i + '-0';
		new_card.color = color;
		new_card.number = i;
		new_card.name = color + '-' + i;

		deck.push(new_card);

		new_card = Object.assign({}, card);

		new_card.id = color + '-' + i + '-1';
		new_card.color = color;
		new_card.number = i;
		new_card.name = color + '-' + i;

		deck.push(new_card);
	}

	let new_card = Object.assign({}, card);

	new_card.id = color + '-revert';
	new_card.color = color;
	new_card.number = null;
	new_card.name = 'revert-' + color;
	new_card.action = function(dealer, game) {
		game.revert();
	}

	deck.push(new_card);

	new_card = Object.assign({}, card);

	new_card.id = color + '-block';
	new_card.color = color;
	new_card.number = null;
	new_card.name = 'block-' + color;
	new_card.action = function(dealer, game) {
		game.next();
	}

	deck.push(new_card);

	new_card = Object.assign({}, card);

	new_card.id = color + '-two-cards';
	new_card.color = color;
	new_card.number = null;
	new_card.name = 'two-cards-' + color;
	new_card.action = function(dealer, game) {
		let players = game.getPlayers();
		game.next();

		for (var i = 0; i < 2; i++) {
			players[game.turn].cards.push(dealer.getCard());
		}
	}

	deck.push(new_card);
}
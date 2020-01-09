var game = {
	players: [],
	trash: [],
	color: null,
	number: null,
	direction: 1,
	turn: 0
};

game.setPlayer = function(id = '', name = '') {
	let new_player = Object.assign({}, player);

	new_player.id = id;
	new_player.name = name;
	new_player.cards = [];

	console.log('game.setPlayer.new_player > ', new_player);

	this.players.push(new_player);

	console.log('game.setPlayer.players > ', this.players.length, '>', this.players);
}

game.setPlayers = function(players) {
	console.log('game.setPlayers.players > ', this.players);
	this.players = players;
}

game.getPlayers = function() {
	return this.players;
}

game.trashing = function( card ) {
	let last = this.trash[ this.trash.length - 1 ];

	if( !this.number && !this.color ) {
		this.trash.push(card);

		this.color = card.color;
		this.number = card.number;

		card.action(dealer, this);

		return true;
	}

	if( ( this.number && card.number && (this.number == card.number) ) || ( this.color && card.color && (this.color == card.color) ) ) {
		this.trash.push(card);

		this.color = card.color;
		this.number = card.number;

		card.action(dealer, this);

		return true;
	}

	if( card.name=='choose_color' ) {
		this.trash.push(card);

		this.color = card.color;
		this.number = card.number;

		card.action(dealer, this);

		return true;
	}

	if( card.name=='four_cards' ) {
		this.trash.push(card);

		this.color = card.color;
		this.number = card.number;

		card.action(dealer, this);

		return true;		
	}

	return false;
}

game.revert = function() {
	this.direction = this.direction>0 ? 1 : -1;
}

game.next = function() {
	this.turn += this.direction;

	if( this.direction>0 && this.players.length <= this.turn ){
		this.turn = 0;
	}else if(this.direction<0 && this.turn<0) {
		this.turn = this.players.length - 1;
	}
}
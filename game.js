var game = {};

game.setPlayer = function(id = '', name = '') {
	if(!this.players)
		this.players = [];

	this.players.push({
		id,
		name,
		cards: [],
	});
}

game.setPlayers = function(players) {
	this.players = players;
}

game.getPlayers = function() {
	return this.players;
}
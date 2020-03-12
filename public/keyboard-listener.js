export default function createKeyboardListener() {
  function keyPressHandle(e) {
    if (isNaN(e.key)) return;

    let players = game.getPlayers();
    let turn_player = players[game.turn];

    if (!turn_player) return;

    let card = turn_player.removeCard(e.key);

    if (!card) return;

    if (game.trashing(card)) {
      console.log(turn_player.name, card, " > ", true);
      game.next();
    } else {
      console.log(turn_player.name, card, " > ", false);
      turn_player.addCard(card);
    }

    console.log("document.listerner.keyup.after.game > ", game);
    console.log("\n\n");
  }

  document.addEventListener("keyup", this.keyPressHandle);
}

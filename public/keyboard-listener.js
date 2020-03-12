export default function createKeyboardListener(document) {
  const state = {
    player: null,
    observers: []
  };

  function setPlayer(id) {
    state.player = id;
  }

  function subscribe(func) {
    state.observers.push(func);
  }

  function trigger(command) {
    state.observers.forEach(observersFunction => {
      observersFunction(command);
    });
  }

  document.addEventListener("keyup", keyPressHandle);

  function keyPressHandle(e) {
    if (isNaN(e.key)) return;

    let players = game.getPlayers();
    let turn_player = players[game.turn];

    if (!turn_player) return;

    let card = turn_player.removeCard(e.key);

    if (!card) return;

    trigger({ player: state.player, card });

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

  return {
    setPlayer,
    subscribe
  };
}

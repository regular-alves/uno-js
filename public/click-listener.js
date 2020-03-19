export default function createClickListener(document) {
  let state = {
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

  const cards = document.getElementsByClassName("card");

  console.log(cards.length);

  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", keyPressHandle);
  }

  function keyPressHandle(e) {
    trigger({
      player: state.player,
      card: e.target.getAttribute("data-card-index")
    });
    return;

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

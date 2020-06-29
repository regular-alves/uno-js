export default function createClickListener(document) {
  let state = {
    player: null,
    observers: []
  };

  function setPlayer(id) {
    state.player = id;
  }

  function subscribe(list, func) {
    if (state.observers[list] == undefined) state.observers[list] = [];

    state.observers[list].push(func);
  }

  function trigger(list, command) {
    if (state.observers[list] == undefined) state.observers[list] = [];

    state.observers[list].forEach((observersFunction) => {
      observersFunction(command);
    });
  }

  const cards = document.getElementsByClassName("card");

  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", cardPressHandle);
  }

  document
    .getElementsByClassName("buy")[0]
    .addEventListener("click", buyCardPressHandle);

  function buyCardPressHandle(e) {
    console.log("buy", {
      player: state.player,
    });

    trigger("buy", {
      player: state.player,
    });
    return;
  }

  function cardPressHandle(e) {
    trigger("cards", {
      player: state.player,
      card: e.target.getAttribute("data-card-index"),
    });
    return;
  }

  function clearQueue(list) {
    state.observers[list] = [];
  }

  return {
    setPlayer,
    subscribe,
    clearQueue,
  };
}

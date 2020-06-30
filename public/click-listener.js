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

  function cards() {
    const cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", cardPressHandle);
    }
  }

  function buyButton() {
    document
      .getElementById("buy")
      .addEventListener("click", buyCardPressHandle);
  }

  function nextButton() {
    document
      .getElementById("next")
      .addEventListener("click", nextCardPressHandle);
  }

  function buyCardPressHandle(e) {
    console.log("buy", {
      player: state.player,
    });

    trigger("buy", {
      player: state.player,
    });
    return;
  }

  function nextCardPressHandle(e) {
    console.log("next", {
      player: state.player,
    });

    trigger("next", {
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
    buyButton,
    cards,
    clearQueue,
    nextButton,
  };
}

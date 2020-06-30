export default function createClientGame(params, document) {
  const number = params.number;
  const color = params.color;
  const direction = params.direction;
  const turn = params.turn;
  const trash = params.trash;
  const cards = params.cards;

  function render() {
    console.log(trash);

    if (cards != undefined) {
      let cardList = [];

      cards.forEach((card, i) => cardList.push(card.render(i)));
      document.getElementById("cards").innerHTML = cardList.join("");
    }

    if (trash != undefined) {
      let trashList = [];

      trash.forEach((card, i) => trashList.push(card.render(i)));
      document.getElementById("trash").innerHTML = trashList.join("");
    }
  }

  function nextTurnButton() {
    document.getElementById("next").classList.remove("disabled");
    document.getElementById("buy").classList.add("disabled");
  }

  return {
    number,
    color,
    direction,
    turn,
    trash,
    cards,
    render,
    nextTurnButton,
  };
}

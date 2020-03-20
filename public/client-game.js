export default function createClientGame(params, document) {
  const number = params.number;
  const color = params.color;
  const direction = params.direction;
  const turn = params.turn;
  const trash = params.trash;
  const cards = params.cards;

  function render() {
    let cardList = [];

    if (cards == undefined) return;

    cards.forEach((card, i) => cardList.push(card.render(i)));
    document.getElementById("cards").innerHTML = cardList.join("");
  }

  return {
    number,
    color,
    direction,
    turn,
    trash,
    cards,
    render
  };
}

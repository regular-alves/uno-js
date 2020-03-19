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

    cards.forEach((card, index) => {
      cardList.push(
        '<li class="card color-' +
          card.color +
          '" data-card-name="' +
          card.color +
          '" data-card-number="' +
          card.number +
          '" data-card-index="' +
          index +
          '" alt="' +
          card.name +
          '">'
      );

      if (card.number) {
        cardList.push("<span class='card-number'>" + card.number + "</span>");
      }

      if (card.number) {
        cardList.push("<span class='card-number'>" + card.number + "</span>");
      }
      cardList.push("</li>");
    });

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

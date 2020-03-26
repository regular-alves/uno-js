const createPlayer = (id, name) => {
  let cards = [];

  let removeCard = index => {
    if (!cards[index]) return false;

    let card = cards[index];

    console.log("player.play.cards.length > ", cards.length);

    cards.splice(index, 1);

    console.log("player.play.cards.length > ", cards.length);

    return card;
  };

  let addCard = card => {
    cards.push(card);
  };

  return {
    id,
    name,
    cards,
    removeCard,
    addCard
  };
};

export default createPlayer;

const createPlayer = (id, name) => {
  let cards = [];

  let removeCard = index => {
    if (!cards[index]) return false;

    let card = cards[index];

    cards.splice(index, 1);

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

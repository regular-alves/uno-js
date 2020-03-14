const createPlayer = (id, name) => {
  let cards = [];

  let removeCard = index => {
    if (!this.cards[index]) return false;

    let card = this.cards[index];

    console.log("player.play.cards.length > ", this.cards.length);

    this.cards.splice(index, 1);

    console.log("player.play.cards.length > ", this.cards.length);

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

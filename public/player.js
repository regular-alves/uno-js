function createPlayer(id, name) {
  let play = number => {
    if (!this.cards[number]) return false;

    let card = this.cards[number];

    console.log("player.play.cards.length > ", this.cards.length);

    this.cards.splice(number, 1);

    console.log("player.play.cards.length > ", this.cards.length);

    return card;
  };

  let addCard = card => {
    this.cards.push(card);
  };

  return {
    id,
    name,
    cards: [],
    play,
    addCard
  };
}

export default createPlayer;

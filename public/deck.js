import createCard from "./card.js";

var deck = [];
let colors = ["red", "blue", "green", "yellow"];

for (var i = 0; i < 4; i++) {
  deck.push(
    createCard(
      "choose_color_" + i,
      null,
      null,
      "choose_color",
      (dealer, game) => {
        game.color = prompt("Escolha uma cor");

        return [game, dealer.deck];
      }
    )
  );
}

for (var i = 0; i < 4; i++) {
  deck.push(
    createCard("four_cards_" + i, null, null, "four_cards", (dealer, game) => {
      let players = game.getPlayers();

      game.next();

      for (var i = 0; i < 4; i++) {
        players[game.turn].cards.push(dealer.getCard());
      }

      game.color = prompt("Escolha uma cor");

      return [game, dealer.deck];
    })
  );
}

for (var key = 0; key < colors.length; key++) {
  let color = colors[key];

  for (var i = 0; i < 10; i++) {
    deck.push(createCard(color + "-" + i + "-0", color, i, color + "-" + i));
    deck.push(createCard(color + "-" + i + "-1", color, i, color + "-" + i));
  }

  deck.push(
    createCard(
      color + "-revert",
      color,
      null,
      "revert-" + color,
      (dealer, game) => {
        game.revert();

        return [game, dealer.deck];
      }
    )
  );

  deck.push(
    createCard(
      color + "-block",
      color,
      null,
      "block-" + color,
      (dealer, game) => {
        game.next();

        return [game, dealer.deck];
      }
    )
  );

  deck.push(
    createCard(
      color + "-two-cards",
      color,
      null,
      "two-cards-" + color,
      (dealer, game) => {
        let players = game.getPlayers();
        game.next();

        for (var i = 0; i < 2; i++) {
          players[game.turn].cards.push(dealer.getCard());
        }

        return [game, dealer.deck];
      }
    )
  );
}

export default deck;

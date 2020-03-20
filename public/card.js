export default function createCard(id, color, number, name, action = null) {
  function render(index) {
    let html = [];

    html.push(
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
      html.push("<span class='card-number'>" + card.number + "</span>");
    }

    if (card.number) {
      html.push("<span class='card-number'>" + card.number + "</span>");
    }

    html.push("</li>");

    return html.join("");
  }

  return {
    id,
    color,
    number,
    name,
    action,
    render
  };
}

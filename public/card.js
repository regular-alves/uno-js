export default function createCard(id, color, number, name, action = null) {
  function render(index) {
    let html = [];

    html.push(
      '<li class="card color-' +
        color +
        " " +
        name +
        '" data-card-name="' +
        color +
        '" data-card-number="' +
        number +
        '" data-card-index="' +
        index +
        '" alt="' +
        name +
        '">'
    );

    if (number != null)
      html.push("<span class='card-number'>" + number + "</span>");

    if (number != null)
      html.push("<span class='card-number'>" + number + "</span>");

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

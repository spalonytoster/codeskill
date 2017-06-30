function render(template, ctx) {
  let expressionRegex = /(\$\{(\w+(\.\w+)*)\})/g;
  let match, matches = [];
  while (match = expressionRegex.exec(template)) {
    matches.push(match);
  }
  console.log(matches);
}

module.exports = { render };

function render(template, ctx) {
  let expressionRegex = /(\$\{(\w+(\.\w+)*)\})/g;
  let match, matches = [];
  while (match = expressionRegex.exec(template)) {
    matches.push(match);
  }
  matches.forEach(match => {
    let expression = match[0]; // '${osoba}'
    let propertiesSeparatedBydots = match[2]; // 'osoba.imie'
    let value = ctx;
    propertiesSeparatedBydots.split('.').forEach(key => {
      value = value[key];
    });
    template = template.replace(expression, value);
  });
  return template;
}

module.exports = { render };

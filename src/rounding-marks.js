'use strict';

/* unsigned values only */
function ceiling(value, tolerance) {
  let result = 0;
  while (result < value) {
    result += tolerance;
  }
  return Number.parseFloat(result.toFixed(2), 10);
}

/* unsigned values only */
function floor(value, tolerance) {
  let result = 0;
  while (result < value-tolerance) {
    result += tolerance;
  }
  return Number.parseFloat(result.toFixed(2), 10);
}

function roundMark(mark, tolerance) {
  let result = mark;
  if (mark % tolerance === 0) {
    return result;
  }

  let floorValue = floor(mark, tolerance);
  let ceilingValue = ceiling(mark, tolerance);

  if (mark - floorValue < ceilingValue - mark) {
    return floorValue;
  }
  else {
    return ceilingValue;
  }
}

module.exports = { roundMark };

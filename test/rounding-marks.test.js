/* global it, describe */
'use strict';
const expect = require('chai').expect;
const app = require('../src/rounding-marks.js');

describe('Mark rounding function', () => {
  it('Should round marks', () => {
    expect(app.roundMark(2.5, 1)).to.be.equal(3);
    expect(app.roundMark(2.3, 0.5)).to.be.equal(2.5);
    expect(app.roundMark(1.3, 0.6)).to.be.equal(1.2);
    expect(app.roundMark(1.23, 0.05)).to.be.equal(1.25);
    expect(app.roundMark(1.2, 0.05)).to.be.equal(1.2);
  });
});

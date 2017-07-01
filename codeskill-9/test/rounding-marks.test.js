/* global it, describe, context */
'use strict';
const expect = require('chai').expect;
const app = require('../src/rounding-marks.js');

describe('Mark rounding function', () => {
  context('Given mark: 2.5 and toleracne: 1', () => {
    it('Should round to 3', () => {
      expect(app.roundMark(2.5, 1)).to.be.equal(3);
    });
  });

  context('Given mark: 2.3 and toleracne: 0.5', () => {
    it('Should round to 2.5', () => {
      expect(app.roundMark(2.3, 0.5)).to.be.equal(2.5);
    });
  });

  context('Given mark: 1.3 and toleracne: 0.6', () => {
    it('Should round to 1.2', () => {
      expect(app.roundMark(1.3, 0.6)).to.be.equal(1.2);
    });
  });

  context('Given mark: 1.23 and toleracne: 0.05', () => {
    it('Should round to 1.25', () => {
      expect(app.roundMark(1.23, 0.05)).to.be.equal(1.25);
    });
  });

  context('Given mark: 1.2 and toleracne: 0.05', () => {
    it('Should round to 1.2', () => {
      expect(app.roundMark(1.2, 0.05)).to.be.equal(1.2);
    });
  });
});

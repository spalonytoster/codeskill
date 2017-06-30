/* global it, describe, context */
'use strict';
const expect = require('chai').expect;
const app = require('../src/template-engine.js');

const ctx = {
  imie: 'Ala',
  taniec: 'fokstrota'
};

const ctx2 = {
  osoba: {
    imie: 'Ala'
  }
};

describe('Template engine', () => {
  context('Given context as ' + JSON.stringify(ctx), () => {
    it('Should parse', () => {
      let template = '${imie} ma kota. Lubi tanczyc ${taniec}';
      let expected = 'Ala ma kota';
      expect(app.render(template, ctx)).to.be.equal(expected);
    });
  });
  context('Given context as ' + JSON.stringify(ctx2), () => {
    it('Should parse', () => {
      let template = '${osoba.imie} ma kota';
      let expected = 'Ala ma kota';
      expect(app.render(template, ctx2)).to.be.equal(expected);
    });
  });
});

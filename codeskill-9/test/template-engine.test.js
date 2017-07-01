/* global it, describe, context */
'use strict';
const expect = require('chai').expect;
const app = require('../src/template-engine.js');

const ctx1 = {
  imie: 'Ala'
};

const ctx2 = {
  osoba: {
    imie: 'Ala'
  }
};

const ctx3 = {
  imie: 'Ala',
  taniec: 'fokstrota'
};

const ctx4 = {
  osoby: [{
    imie: 'Ala'
  }, {
    imie: 'Iwona'
  }]
};

describe('Template engine', () => {
  context('Given context as ' + JSON.stringify(ctx1), () => {
    let template = '${imie} ma kota';
    let expected = `${ctx1.imie} ma kota`;
    it(`Should transform '${template}' to '${expected}'`, () => {
      expect(app.render(template, ctx1)).to.be.equal(expected);
    });
  });

  context(`Given context as ${JSON.stringify(ctx2)}`, () => {
    let template = '${osoba.imie} ma kota';
    let expected = 'Ala ma kota';
    it(`Should transform '${template}' to '${expected}'`, () => {
      expect(app.render(template, ctx2)).to.be.equal(expected);
    });
  });

  context('Given context as ' + JSON.stringify(ctx3), () => {
    let template = '${imie} ma kota. Lubi tanczyc ${taniec}';
    let expected = 'Ala ma kota. Lubi tanczyc fokstrota';
    it(`Should transform '${template}' to '${expected}'`, () => {
      expect(app.render(template, ctx3)).to.be.equal(expected);
    });
  });

  context('Given context as ' + JSON.stringify(ctx4), () => {
    let template1 = '${osoby.0.imie} ma kota';
    let expected1 = 'Ala ma kota';
    
    let template2 = '${osoby.1.imie} ma kota';
    let expected2 = 'Iwona ma kota';
    it(`Should transform '${template1}' to '${expected1}'`, () => {
      expect(app.render(template1, ctx4)).to.be.equal(expected1);
    });
    it(`Should transform '${template2}' to '${expected2}'`, () => {
      expect(app.render(template2, ctx4)).to.be.equal(expected2);
    });
  });
});

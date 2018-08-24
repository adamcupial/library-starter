/* global describe, it, before */

import chai from 'chai';
import { add, substract } from '../src/simple.js';

chai.expect();

const expect = chai.expect;

describe('Simple maths', () => {
  describe('add', () => {
    it('Given two numbers it should return their sum', () => {
      expect(add(1, 2)).to.be.equal(3);
      expect(add(1, 1)).to.be.equal(2);
      expect(add(-10, 10)).to.be.equal(0);
    });

    it('Given not a number it should throw ValidationError', () => {
      expect(() => add('z', 'y')).to.throw(Error);
    });
  });

  describe('substract', () => {
    it('Given two numbers it should return the proper value', () => {
      expect(substract(1, 2)).to.be.equal(-1);
      expect(substract(1, 1)).to.be.equal(0);
      expect(substract(-10, 10)).to.be.equal(-20);
    });

    it('Given not a number it should throw ValidationError', () => {
      expect(() => substract('z', 'y')).to.throw(Error);
    });
  });
});

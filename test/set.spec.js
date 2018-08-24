/* global describe, it, before */

import chai from 'chai';
import { Set } from '../src/set.js';

chai.expect();

const expect = chai.expect;

describe('Set maths', () => {
  describe('union', () => {
    it('Can perform union of two sets', () => {
      const x = new Set([1, 2]);
      const y = new Set([2, 3]);
      const xy = x.union(y);

      expect(xy).to.be.instanceOf(Set);
      expect([...xy]).to.deep.equal([1, 2, 3]);
    });
  });

  describe('intersection', () => {
    it('Can perform intersection of two sets', () => {
      const a = new Set([1, 2]);
      const b = new Set([2, 3]);
      const c = new Set([9, 10]);
      const ab = a.intersection(b);
      const ba = b.intersection(a);
      const ac = a.intersection(c);

      expect(ab).to.be.instanceOf(Set);
      expect(ba).to.be.instanceOf(Set);
      expect(ac).to.be.instanceOf(Set);

      expect([...ab]).to.deep.equal([2]);
      expect([...ba]).to.deep.equal([2]);
      expect([...ac]).to.deep.equal([]);
    });
  });

  describe('difference', () => {
    it('Can perform set difference', () => {
      const a = new Set([1, 2]);
      const b = new Set([2, 3]);
      const c = new Set([9, 10]);
      const ab = a.difference(b);
      const ba = b.difference(a);
      const ac = a.difference(c);
      const aa = a.difference(a);

      expect(ab).to.be.instanceOf(Set);
      expect(ba).to.be.instanceOf(Set);
      expect(ac).to.be.instanceOf(Set);
      expect(aa).to.be.instanceOf(Set);

      expect([...ab]).to.deep.equal([1]);
      expect([...ba]).to.deep.equal([3]);
      expect([...ac]).to.deep.equal([1, 2]);
      expect([...aa]).to.deep.equal([]);
    });
  });

  describe('isIn', () => {
    it('Can check for existance in set', () => {
      const x = new Set([1, 2, 3]);

      expect(x.isIn(1)).to.equal(true);
      expect(x.isIn(5)).to.equal(false);
    });
  });

  describe('subsets and supersets', () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([2, 3]);

    it('Can check if set is subset', () => {
      expect(b.isSubset(a)).to.equal(true);
      expect(a.isSubset(b)).to.equal(false);
    });

    it('Can check if set is superset', () => {
      expect(b.isSuperset(a)).to.equal(false);
      expect(a.isSuperset(b)).to.equal(true);
    });
  });
});

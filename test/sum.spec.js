import { expect } from 'chai';
import { Sum } from '../lib';

describe('While importing Sum from OpenBox', function() {

  describe('when I create a Sum containing a 1', function() {
    it('I should get a Sum instance containing a 1', () => {
      expect(
        Sum(1)
        .inspect()
      ).to.be.equal('Sum(1)');
    });

    it('I should be able to use Sum.concat() to add the values of Sums together', () => {
      expect(
        Sum(1)
        .concat(Sum(1))
        .inspect()
      ).to.be.equal('Sum(2)');
    });

    it('I should be able to use Sum.fold() to apply a function and get back a normal value', () => {
      expect(
        Sum(1)
        .fold()
      ).to.be.equal(1);
    });

    it('I should be able to concat with an identity and not change the value', () => {
      expect(
        Sum(1)
        .concat(Sum.empty())
        .fold()
      ).to.be.equal(1);
    });
  });

});

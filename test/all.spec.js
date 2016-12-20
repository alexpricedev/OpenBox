import { expect } from 'chai';
import { All } from '../lib';

describe('While importing All from OpenBox', function() {

  describe('when I create an All containing a true', function() {
    it('I should get an All instance containing a true', () => {
      expect(
        All(true)
        .inspect()
      ).to.be.equal('All(true)');
    });

    it('I should get a truthy boolean value from concating true', () => {
      expect(
        All(true)
        .concat(All(true))
        .inspect()
      ).to.be.equal('All(true)');
    });

    it('I should get a falsy boolean value from concating false', () => {
      expect(
        All(true)
        .concat(All(false))
        .inspect()
      ).to.be.equal('All(false)');
    });

    it('I should be able to use All.fold() to get back a normal value', () => {
      expect(
        All(true)
        .fold()
      ).to.be.true;
    });

    it('I should be able to concat with an identity and not change the value', () => {
      expect(
        All(true)
        .concat(All.empty())
        .fold()
      ).to.be.true;
    });
  });

  describe('when I create an All containing a false', function() {
    it('I should get an All instance containing a false', () => {
      expect(
        All(false)
        .inspect()
      ).to.be.equal('All(false)');
    });

    it('I should get a falsy boolean value from concating true', () => {
      expect(
        All(false)
        .concat(All(true))
        .inspect()
      ).to.be.equal('All(false)');
    });

    it('I should get a falsy boolean value from concating false', () => {
      expect(
        All(false)
        .concat(All(false))
        .inspect()
      ).to.be.equal('All(false)');
    });

    it('I should be able to concat with an identity and not change the value', () => {
      expect(
        All(false)
        .concat(All.empty())
        .fold()
      ).to.be.false;
    });
  });

});

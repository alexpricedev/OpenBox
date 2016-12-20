import { expect } from 'chai';
import { Any } from '../lib';

describe('While importing Any from OpenBox', function() {

  describe('When I create an Any containing a true', function() {
    it('I should get an Any instance containing a true', () => {
      expect(
        Any(true)
        .inspect()
      ).to.be.equal('Any(true)');
    });

    it('I should get a truthy boolean value from concating true', () => {
      expect(
        Any(true)
        .concat(Any(true))
        .inspect()
      ).to.be.equal('Any(true)');
    });

    it('I should get a truthy boolean value from concating false', () => {
      expect(
        Any(true)
        .concat(Any(false))
        .inspect()
      ).to.be.equal('Any(true)');
    });

    it('I should be able to use Any.fold() to get back a normal value', () => {
      expect(
        Any(true)
        .fold()
      ).to.be.true;
    });

    it('I should be able to concat with an identity and not change the value', () => {
      expect(
        Any(true)
        .concat(Any.empty())
        .fold()
      ).to.be.true;
    });
  });

  describe('when I create an Any containing a false', function() {
    it('I should get an Any instance containing a false', () => {
      expect(
        Any(false)
        .inspect()
      ).to.be.equal('Any(false)');
    });

    it('I should get a truthy boolean value from concating true', () => {
      expect(
        Any(false)
        .concat(Any(true))
        .inspect()
      ).to.be.equal('Any(true)');
    });

    it('I should get a falsy boolean value from concating false', () => {
      expect(
        Any(false)
        .concat(Any(false))
        .inspect()
      ).to.be.equal('Any(false)');
    });

    it('I should be able to concat with an identity and not change the value', () => {
      expect(
        Any(false)
        .concat(Any.empty())
        .fold()
      ).to.be.false;
    });
  });

});

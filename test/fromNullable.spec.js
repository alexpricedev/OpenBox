import { expect } from 'chai';
import { Left, Right, fromNullable } from '../lib';

describe('When using fromNullable', function() {

  describe('when I pass null to fromNullable', function() {
    it('I should get a Left instance', () => {
      expect(
        fromNullable(null)
        .inspect()
      ).to.be.equal('Left(null)')
    });
  });

  describe('when I pass undefined to fromNullable', function() {
    it('I should get a Left instance', () => {
      expect(
        fromNullable(undefined)
        .inspect()
      ).to.be.equal('Left(null)')
    });
  });

  describe('when I pass a value to fromNullable', function() {
    it('I should get a Right instance containing that value', () => {
      expect(
        fromNullable(0)
        .inspect()
      ).to.be.equal('Right(0)')
    });

    it('I should get a Right instance containing that value', () => {
      expect(
        fromNullable('')
        .fold(
          e => 'Error',
          x => x
        )
      ).to.be.equal('')
    });

    it('I should get a Right instance containing that value', () => {
      expect(
        fromNullable(false)
        .inspect()
      ).to.be.equal('Right(false)')
    });
  });

});

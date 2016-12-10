import { expect } from 'chai';
import { Left, Right } from '../lib';

describe('While importing Left and Right from SimpleFJS', function() {

  describe('when I create a Left containing a 1', function() {
    it('I should get a Left instance containing a 1', () => {
      expect(
        Left(1)
        .inspect()
      ).to.be.equal('Left(1)');
    });

    it('Left.map() shouldn\'t apply a function to the value', () => {
      expect(
        Left(1)
        .map(x => x + 1)
        .inspect()
      ).to.be.equal('Left(1)');
    });

    it('When using fold, the first param should be applied to the value and return the new value', () => {
      expect(
        Left(1)
        .fold(
          x => x + 1,
          x => 'not applied'
        )
      ).to.be.equal(2);
    });
  });

  describe('when I create a Right containing a 1', function() {
    it('I should get a Right instance containing a 1', () => {
      expect(
        Right(1)
        .inspect()
      ).to.be.equal('Right(1)');
    });

    it('Right.map() should apply a function to the value', () => {
      expect(
        Right(1)
        .map(x => x + 1)
        .inspect()
      ).to.be.equal('Right(2)');
    });

    it('When using fold, the second param should be applied to the value and return the new value', () => {
      expect(
        Right(1)
        .fold(
          x => 'not applied',
          x => x + 1
        )
      ).to.be.equal(2);
    });
  });

});

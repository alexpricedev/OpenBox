import { expect } from 'chai';
import { Left, Right, tryCatch } from '../lib';

describe('When using tryCatch', function() {

  describe('when I pass a working function to tryCatch', function() {
    it('I should get a right instance', () => {
      expect(
        tryCatch(() => true)
        .inspect()
      ).to.be.equal('Right(true)');
    });
  });

  describe('when I pass a failing function to tryCatch', function() {
    it('I should get a left instance', () => {
      expect(
        tryCatch(() => { throw new Error(9001) })
        .inspect()
      ).to.be.equal('Left(Error: 9001)')
    });
  });

});

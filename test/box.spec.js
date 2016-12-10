import { expect } from 'chai';
import { Box } from '../lib';

describe('While importing Box from SimpleFJS', function() {

  describe('when I create a Box containing a 1', function() {
    it('I should get a Box instance containing a 1', () => {
      expect(
        Box(1)
        .inspect()
      ).to.be.equal('Box(1)');
    });

    it('I should be able to use Box.map() to apply a function to the value of my Box', () => {
      expect(
        Box(1)
        .map(x => x + 1)
        .inspect()
      ).to.be.equal('Box(2)');
    });

    it('I should be able to use Box.fold() to apply a function and get back an un-Boxed value', () => {
      expect(
        Box(1)
        .fold(x => x + 1)
      ).to.be.equal(2);
    });
  });

});

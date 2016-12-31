import { expect } from 'chai';
import { Box } from '../lib';

describe('While importing Box from OpenBox', function() {

  it('Box should be a class', () => {
    expect(new Box).to.be.instanceof(Box);
  });

  it('I should be able to create a Box instance containing a 1', () => {
    const res = new Box(1);
    expect(res).to.be.instanceof(Box);
    expect(res.value).to.be.equal(1);
  });

  it('Box should have an `of` method which _lifts_ a value into a Box', () => {
    const res = Box.of(1);
    expect(res).to.be.instanceof(Box);
    expect(res.value).to.be.equal(1);
  });

  describe('when I create a Box containing a 1', function() {
    const res = Box.of(1);

    it('the `inspect` method should return a String representation of the Box and its value', () => {
      expect(res.inspect()).to.be.equal('Box(1)');
    });

    it('the `toString` method should return a String representation of the value', () => {
      expect(res.toString()).to.be.equal('1');
    });

    it('the `map` method should apply a function to the value of my Box and return a Box instance', () => {
      const res2 = res.map(x => x + 1);
      expect(res2).to.be.instanceof(Box);
      expect(res2.value).to.be.equal(2);
    });

    it('the `fold` method should apply a function to the value of my Box and return the raw value', () => {
      const res2 = res.fold(x => x + 1);
      expect(res2).to.be.equal(2);
    });

    // Fantasy Land specification tests
    // https://github.com/fantasyland/fantasy-land#functor

    it('u.map(a => a) is equivalent to u (identity)', () => {
      const res2 = res.map(a => a);
      expect(res2.inspect()).to.be.equal(res.inspect());
    });

    it('u.map(x => f(g(x))) is equivalent to u.map(g).map(f) (composition)', () => {
      const f = x => x * 2;
      const g = x => x ^ 2;
      const res2 = res.map(x => f(g(x)));
      const res3 = res.map(g).map(f);
      expect(res2.inspect()).to.be.equal(res3.inspect());
    });
  });

});

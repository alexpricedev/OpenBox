/**
 * Sum is a semi-group container for numbers
 */
const Sum = x => ({

  /** Expose the value on the type so we have access to it */
  x,

  /**
   * Concat sums the values of two Sum containers
   * @param {Sum} o - A Sum to add to our `x` value
   * @return {Sum} Sum(x+y) - A Sum instance containing the value of `x` + `y`
   */
  concat: ({ x: y }) => Sum(x + y),

  /**
   * Fold is a way to release `x` from the `Sum`.
   * @return {Number} x
   */
  fold: () => x,

  /**
   * Called by `console.log` and nicely formats our `Sum`.
   * @return {String}
   */
  inspect: () => `Sum(${x})`,
});

export default Sum;

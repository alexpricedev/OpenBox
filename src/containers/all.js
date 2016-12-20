/**
 * All is a semi-group container for booleans.
 */
const All = x => ({

  /** Expose the value on the type so we have access to it */
  x,

  /**
   * Concat applies a logical AND to the values inside two All containers
   * @param {All} o - An All type
   * @return {All} All(x&&y) - An All instance containing result of x AND y
   */
  concat: ({ x: y }) => All(x && y),

  /**
   * Fold is a way to release `x` from the `All`.
   * @return {Number} x
   */
  fold: () => x,

  /**
   * Called by `console.log` and nicely formats our `All`.
   * @return {String}
   */
  inspect: () => `All(${x})`,
});

export default All;

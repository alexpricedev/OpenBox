/**
 * Any is a semi-group (and monoid) container for booleans.
 */
const Any = x => ({

  /** Expose the value on the type so we have access to it */
  x,

  /**
   * Concat applies a logical OR to the values inside two Any containers
   * @param {Any} o - An Any type
   * @return {Any} Any(x||y) - An Any instance containing result of x OR y
   */
  concat: ({ x: y }) => Any(x || y),

  /**
   * Fold is a way to release `x` from the `Any`.
   * @return {Boolean} x
   */
  fold: () => x,

  /**
   * Called by `console.log` and nicely formats our `Any`.
   * @return {String}
   */
  inspect: () => `Any(${x})`,
});

/**
 * The empty method is our identity value which makes Any
 * a monoid.
 */
Any.empty = () => Any(false);

export default Any;

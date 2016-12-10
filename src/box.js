/**
 * Box is a generic container for helping with
 * composition.
 */
const Box = x => ({

  /**
   * Map allows us to apply functions without state.
   * @param {Function} f - A function to apply to `x`
   * @return {Box} Box(x) - A Box instance containing `x`
   */
  map: f => Box(f(x)),

  /**
   * Fold is a way to release `x` from the `Box`.
   * Cannot be chained onto as it doesn't return a `Box`.
   * @param {Function} f - A function to apply to `x`
   * @return {*} x
   */
  fold: f => f(x),

  /**
   * Called by `console.log` and nicely formats our `Box`.
   * @return {String}
   */
  inspect: () => `Box(${x})`,
});

export default Box;

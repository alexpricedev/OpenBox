/*
 * Fuctional Programming Learning
 */

// Box is a generic container
const Box = x => ({
  /*
   * Map allows us to apply functions without
   * state. As it returns a Box it allows
   * chaining (composition).
   */
  map: f => Box(f(x)),

  /*
   * Fold is a way to release the value from
   * the Box. This cannot be chained as it
   * doesn't return a Box.
   */
  fold: f => f(x),

  /*
   * Inspect is a trick to nicely format any Box
   * instances when logged to the console.
   */
  inspect: () => `Box(${x})`,
});

export default Box;

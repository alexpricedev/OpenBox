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

/*
 * This is a good example of how using
 * Box is useful. It shows the different uses
 * of `.map()`.
 */

/*
 *const nextCharForNumberString = str =>
 *  Box(str)
 *    .map(s => s.trim()) // method calls
 *    .map(r => parseInt(r)) // function operators
 *    .map(i => i + 1) // operators
 *    .map(i => String.fromCharCode(i)) // qualified class function
 *
 *    // returns raw value
 *   .fold(s => s.toLowerCase());
 *
 *nextCharForNumberString(' 64 '); // 'a'
 */

export default Box;

// ==============================================
// Either = Right || Left
// Either types help us do pure error handling,
// branching and null checks.
// ==============================================

/**
 * Right is a container which holds a value while computations
 * are going as planned. It allows composition.
 */
const Right = x => ({

  /**
   * Map allows us to apply functions without state.
   * @param {Function} f - A function to apply to `x`
   * @return {Right} Right(f(x)) - A Box instance containing `f(x)`
   */
  map: f => Right(f(x)),

  /**
   * Chain allows us to apply functions without Box-ing the value.
   * This is useful when working with nested Boxes.
   * @param {Function} f - A function to apply to `x`
   * @return {*} f(x) - The result of applying `f` on `x`
   */
  chain: f => f(x),

  /**
   * Fold is a way to release our value from the `Right`.
   * In `Right`, we apply the second param (the right one).
   * @param {Function} f - A function which gets ignored
   * @param {Function} g - The function to apply to `x`
   * @return {*} g(x)
   */
  fold: (f, g) => g(x),

  /*
   * Inspect is a trick to nicely format any Right
   * instances when logged to the console.
   */
  inspect: () => `Right(${x})`,
});

/**
 * Left is a container which holds a value when something
 * has gone wrong during our computations. It doesn't process
 * any compositions sent to it.
 */
const Left = x => ({

  /**
   * In a Left, map doesn't apply our function.
   * @param {Function} f - A function that gets ignored
   * @return {Left} Left(x) - A Left instance containing `x`
   */
  map: f => Left(x),

  /**
   * In a Left, chain doesn't apply our function.
   * @param {Function} f - A function to apply to `x`
   * @return {Left} Left(x) - A Left instance containing `x`
   */
  chain: f => Left(x),

  /**
   * Fold is a way to release `x` from the `Left`.
   * In `Left`, we apply the first param (the left one).
   * @param {Function} f - The function to apply to `x`
   * @param {Function} g - A function which gets ignored
   * @return {*} x
   */
  fold: (f, g) => f(x),

  /**
   * Called by `console.log` and nicely formats our `Left`.
   * @return {String}
   */
  inspect: () => `Left(${x})`,
});

export { Left, Right };

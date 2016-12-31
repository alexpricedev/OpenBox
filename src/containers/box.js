/**
 * Box is a generic container for helping with composition.
 * Box is a *functor* as it has a map method. It should
 * conform to the Fantasy Land
 * [specification](https://github.com/fantasyland/fantasy-land#functor).
 */

class Box {
  constructor(value) {
    this.value = value;
  }
}

/**
 * Of allows us to _lift_ a value into Box. It is a helper method.
 * @param {Function} f - A function to apply to `value`
 * @return {Box} Box(value) - A Box instance containing `value`
 */
Box.prototype.of = Box.of = value => new Box(value);

/**
 * Map allows us to apply functions without state.
 * @param {Function} f - A function to apply to `value`
 * @return {Box} Box(value) - A Box instance containing `value`
 */
Box.prototype.map = Box.map = function map(func) {
  return new Box(func(this.value));
}

/**
 * Fold is a way to release `value` from the Box.
 * @param {Function} f - A function to apply to `value`
 * @return {*} value
 */
Box.prototype.fold = Box.fold = function fold(func) {
  return func(this.value);
}

/**
 * Helper method to get a String for our value.
 * @return {String}
 */
Box.prototype.toString = Box.toString = function toString() {
  return this.value.toString();
}

/**
 * Called by `console.log` and nicely formats our `Box`.
 * @return {String}
 */
Box.prototype.inspect = Box.map = function inspect() {
  return `Box(${this.value})`;
}

export default Box;

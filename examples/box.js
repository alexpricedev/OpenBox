const OpenBox = require('../lib');
const Box = OpenBox.Box;

// ================ Example 1 ==========================
// This is a good example of how using Box is useful.
// It shows the different uses of `.map()` and `.fold()`
// =====================================================

/**
 * Finds the character of a Number in a String.
 * @param {String} str
 * @return {String}
 */
const nextCharForNumberString = str =>
  new Box(str)
  .map(s => s.trim()) // method calls
  .map(r => parseInt(r)) // function operators
  .map(i => i + 1) // operators
  .map(i => String.fromCharCode(i)) // qualified class function
  .fold(s => s.toLowerCase()); // returns raw value

const example1 = nextCharForNumberString(' 64 '); // 'a'

console.log('Char for number string: ', example1);
console.log('-------------');

// ================ Example 2 =======================
// This example shows how we can nest functions in
// a closure to capture varibles.
// ==================================================

/**
 * Turns a currency String to a float.
 * @param {String} str
 * @return {Number}
 */
const moneyToFloat = str =>
  new Box(str.replace(/\$/g, ''))
  .map(r => parseFloat(r));

/**
 * Turns a percentage into a float.
 * @param {String} str
 * @return {Number}
 */
const percentToFloat = str =>
  new Box(str.replace(/\%/g, ''))
  .map(r => parseFloat(r))
  .map(f => f * 0.01);

/**
 * Applies a discount to a price.
 * @param {String} price
 * @param {String} discount
 * @return {Number}
 */
const applyDiscount = (price, discount) =>
  moneyToFloat(price)
  .fold(cost =>
    percentToFloat(discount)
    .fold(discount => cost - cost * discount)
  );

const example2 = applyDiscount('$5.00', '20%'); // 4

console.log('Apply discount: ', example2);

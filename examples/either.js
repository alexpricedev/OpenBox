const OpenBox = require('../lib');
const Left = OpenBox.Left;
const Right = OpenBox.Right;

// ================ Example 1 =========================
// This shows a simple exmaple of using Left and Right
// to handle possible errors inside the function, while
// allowing the handling of the errors to be chosen
// by the calling code.
// ====================================================

/**
 * Gets the hex colour by name. This function will blow up
 * if we ask for a colour we don't have in our object.
 * @param {String} name - The name of the colour you want
 * @return {String} colour - The colour hex
 */
const dumbFindColour = name =>
  ({red: '#ff444', blue: '#3b5998', yellow: '#fff68f'})[name];

// findColour('green').slice(1).toUpperCase(); // error, cannot slice

/**
 * Gets the hex colour by name. It captures a null error by
 * returning a `Left`.
 * @param {String} name - The name of the colour you want
 * @return {Either} leftOrRight - A `Right` of the colour or an empty `Left`
 */
const findColour = name => {
  const found = ({red: '#ff444', blue: '#3b5998', yellow: '#fff68f'})[name];
  return found ? Right(found) : Left(null);
};

const example1 = findColour('green')
                 .map(c => c.slice(1))
                 .fold(
                   e => 'No colour', // catch for our posible null
                   c => c.toUpperCase()
                 );

const example1_1 = findColour('blue')
                   .map(c => c.slice(1))
                   .fold(
                     e => 'No colour', // catch for our posible null
                     c => c.toUpperCase()
                   );

console.log('Find hex for green: ', example1); // 'No colour'
console.log('Find hex for blue: ', example1_1); // 3B5998

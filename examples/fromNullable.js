const OpenBox = require('../lib');
const fromNullable = OpenBox.fromNullable;

// =================== Example 1 ========================
// This example shows how we can use fromNullable to
// handle possible null and undefined errors. Programming
// in this way allows the handling of the errors to be
// done by the calling code.
// ======================================================

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"
];


/**
 * Gets the textual representation of a month from an index
 * @param {Number} monthIndex - The index of the month you want
 * @return {Either} leftOrRight - A `Right` of the month or an empty `Left`
 */
const findMonth = monthIndex => fromNullable(MONTH_NAMES[monthIndex]);


const example1 = findMonth(new Date().getMonth())
                 .fold(
                   e => 'No month',
                   m => m
                 );

const example1_1 = findMonth(12)
                   .fold(
                     e => 'No month',
                     m => m
                   );

console.log('Current month: ', example1);
console.log('December?:     ', example1_1);

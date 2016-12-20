const OpenBox = require('../lib');
const Left = OpenBox.Left;
const Right = OpenBox.Right;
const fromNullable = OpenBox.fromNullable;
const tryCatch = OpenBox.tryCatch;

// =================== Example 1 ========================
// This example shows how we can use fromNullable and
// tryCatch to handle possible null and undefined errors
// and exceptions from dodgy method calls. Programming
// in this way allows the handling of the errors to be
// done by the calling code.
// ======================================================

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"
];

/**
 * Gets the numeric day of the month from a date object.
 * @param {Date} date - The date object you want the day for
 * @return {Either} leftOrRight - A `Right` of the day or an empty `Left`
 */
const findDay = date => tryCatch(() => date.getDate());

/**
 * Gets the month of the year from a date object.
 * @param {Date} date - The date object you want the month for
 * @return {Either} leftOrRight - A `Right` of the month or an empty `Left`
 */
const findMonth = date => tryCatch(() => date.getMonth())
                          .chain(
                            i => fromNullable(MONTH_NAMES[i])
                          );

/**
 * Gets the year of a date object.
 * @param {Date} date - The date object you want the year for
 * @return {Either} leftOrRight - A `Right` of the year or an empty `Left`
 */
const findYear = date => tryCatch(() => date.getFullYear());

/**
 * Formats a Date object into an nice string.
 * @param {Date} date - The date object you want to format
 * @return {String} formattedDate - A textual representation of the date
 */
const formatDate = date => findDay(date)
                           .fold(
                              e => 'Invalid date',
                              d => findMonth(date)
                                   .chain(
                                     m => findYear(date)
                                          .chain(
                                            y => `${d} ${m} ${y}`
                                          )
                                   )
                            );

const example1 = formatDate(new Date());
const example1_1 = formatDate('error');

console.log('Current date: ', example1);
console.log('Error: ', example1_1);

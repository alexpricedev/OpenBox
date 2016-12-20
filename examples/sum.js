const OpenBox = require('../lib');
const Sum = OpenBox.Sum;

// ==================================================
// These simple examples show how the Sum semi-group
// can be used.
// ==================================================

const example1 = Sum(10)
                 .concat(Sum(90));

const example2 = Sum(10)
                 .concat(Sum(-10));

/** Showing associativity */
const example3 = Sum(1)
                 .concat(
                   Sum(2)
                   .concat(Sum(3))
                 );

const example3_2 = Sum(1)
                   .concat(Sum(2))
                   .concat(Sum(3))

console.log('10 + 90: ', example1);
console.log('10 - 10: ', example2);
console.log('1 + (2 + 3)', example3);
console.log('(1 + 2) + 3', example3_2);
console.log('Get value: ', example3_2.fold());

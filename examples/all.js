const OpenBox = require('../lib');
const All = OpenBox.All;

// ==================================================
// These simple examples show how the All semi-group
// can be used.
// ==================================================

const example1 = All(true)
                 .concat(All(true));

const example2 = All(true)
                 .concat(All(false));

/** Showing associativity */
const example3 = All(true)
                 .concat(
                   All(true)
                   .concat(All(false))
                 );

const example3_2 = All(true)
                   .concat(All(true))
                   .concat(All(false))

console.log('true + true: ', example1);
console.log('true + false: ', example2);
console.log('true + (true + false): ', example3);
console.log('(true + true) + false: ', example3_2);
console.log('Get value: ', example3_2.fold());

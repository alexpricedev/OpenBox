const OpenBox = require('../lib');
const Any = OpenBox.Any;

// ==================================================
// These simple examples show how the Any semi-group
// can be used.
// ==================================================

const example1 = Any(true)
                 .concat(Any(true));

const example2 = Any(true)
                 .concat(Any(false));

const example3 = Any(false)
                 .concat(Any(false));

console.log('true + true: ', example1);
console.log('true + false: ', example2);
console.log('false + false: ', example3);

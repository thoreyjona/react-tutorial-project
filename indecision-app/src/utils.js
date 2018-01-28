console.log('utils.js is running');

const square = (x) => x * x;

const add = (a,b) => a + b;

const subtract = (a, b) => a - b;


// Two types of exports:
// one default export, many named exports.

// Named exports or put export in front of the const
export { square, add, subtract as default };



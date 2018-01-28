console.log('utils.js is running');

const square = (x) => x * x;

const add = (a,b) => a + b;

// Named exports
export { square, add };

// Two types of exports:
// one default export, many named exports
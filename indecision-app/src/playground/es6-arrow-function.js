// es5 function
const square = function (x) {
    return x * x;
};
//possible to name es5 functions
function square1(x) {
    return x * x;
};

// es6 arrow function with a body
const squareArrow = (x) => {
    return x * x;
};
console.log(squareArrow(9));

// Arrow function expression syntax
const squareArrow2 = (x) => x * x;

//Challenge
const getFirstName = (name) => {
    return name.split(' ')[0];
};

console.log(getFirstName('Þórey Jóna'))

const getFirstNameExpress = (name) => name.split(' ')[0];

console.log(getFirstNameExpress('Ívar Freyr'));
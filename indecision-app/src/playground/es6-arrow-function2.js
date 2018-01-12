// arguments object - no longer bound with arrow functions

const add = function (a, b) {
    //console.log(arguments); // all ok - should be? IS not
    return a + b;
};
console.log(add(55, 1));

// convert to arrow function
const add2 = (a, b) => {
    //console.log(arguments); // error - arguments not defined
    return a+b;
};
// this keyword - no longer bound

/*const user = {
    name: 'Þórey',
    cities: ['Selfoss', 'Reykjavik'],
    printPlacesLived: function () {
        const that = this;
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach(function (city) {
            //console.log(this.name + ' has lived in ' + this.city); error since this is not accesable
        console.log(that.name + ' has lived in ' + city); // virkar
        })
    }
};*/

//Using arrow functions, type 1 
const user = {
    name: 'Þórey',
    cities: ['Selfoss', 'Reykjavik'],
    printPlacesLived: function () { // Not possible to convert this to arrow function also, this something
        this.cities.forEach((city) => {
            //console.log(this.name + ' has lived in ' + this.city); error since this is not accesable
        console.log(this.name + ' has lived in ' + city);
        })
    }
};

const user2 = {
    name: 'Þórey',
    cities: ['Selfoss', 'Reykjavik'],
    printPlacesLived() { 
        this.cities.forEach((city) => {
            //console.log(this.name + ' has lived in ' + this.city); error since this is not accesable
        console.log(this.name + ' has lived in ' + city);
        })
    }
};
console.log(user2.printPlacesLived());

// No need to use the keyword function any more. 

//map
const user3 = {
    name: 'Þórey',
    cities: ['Selfoss', 'Reykjavik'],
    printPlacesLived() { 
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user3.printPlacesLived());
// map does not affect the original array

//Challenge

const multiplier = {
    numbers: [2, 3, 4],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
}

console.log(multiplier.multiply());
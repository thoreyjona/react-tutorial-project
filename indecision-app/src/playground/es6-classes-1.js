
// Class often have an upper case letter as first, so people know its a class
class Person {
    constructor(name = 'Anonymous') {
        //this.name = name || 'test'; // If name is nothing, it gets set to test, old way.
        this.name = name;
    }
    getGreeting() {
        //return 'Hi. I am ' + this.name + '!'; // Same as below
        return `Hi. I am ${this.name}!`
    }
}

const me = new Person('Þórey Jóna Guðjónsdóttir');
console.log(me.getGreeting());

const other = new Person();
console.log(other.getGreeting());
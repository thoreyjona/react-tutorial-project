const person = {
    name: 'Þórey',
    age: 25,
    location: {
        city: 'Reykjavik',
        temp: 2
    }
};

//const name = person.name;
//const age = person.age;

//Object destructuring
const {name: firstName = 'Anonymous', age} = person;

console.log(`${firstName} is ${age}.`);

console.log(`${person.name} is ${person.age}.`);

const {temp: temperature, city} = person.location;

if(person.location.city && person.location.temp) {
    console.log(`It's ${person.location.temp} in ${person.location.city}`);
}

if(city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
    constructor() {
        this.name = "Mike";
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `Hi. My name is ${this.name}`;
    }
}

// Error!
const oldSyntax = new OldSyntax();
const greeting = oldSyntax.getGreeting;
console.log(greeting());

// ------------

class NewSyntax {
    name = "Jen";
    getGreeting = () => {
        return `Hi. My name is ${this.name}`;
    }
}

// No error!!
const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());
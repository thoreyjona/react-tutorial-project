'use strict';

// Contains our JSX

console.log('App.js is running!');

var app = {
    title: 'Indecision app',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault(); // Stops full page reload

    var option = e.target.elements.option.value; // Get the text written in the box

    if (option) {
        app.options.push(option); // add to the array
        e.target.elements.option.value = ''; // Clear the value
    }
    renderApp();
};

var removeAll = function removeAll() {
    app.options = [];
    renderApp();
};
// null, undefined and boolean expressions do not show {true} - nothing
var appRoot = document.getElementById('app');

var numbers = [55, 101, 1000];

// JSX - Javascript XML (javascript syntax extension)
var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderApp();

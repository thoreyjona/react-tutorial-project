// Contains our JSX

console.log('App.js is running!');

const app = {
    title: 'Indecision app',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault(); // Stops full page reload

    const option = e.target.elements.option.value; // Get the text written in the box

    if (option) {
        app.options.push(option); // add to the array
        e.target.elements.option.value = ''; // Clear the value
    }
    renderApp();
};

const removeAll = () => {
    app.options = [];
    renderApp();
}
// null, undefined and boolean expressions do not show {true} - nothing
const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

// JSX - Javascript XML (javascript syntax extension)
const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderApp();
// With ES6 classes we can have no methods defined, with React components we have to define render 
class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
            <Header />
            <Action />
            <Options />
            <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of computer</h2>
            </div>
        );
    } 
}

class Action extends React.Component{
    render() {
        return (
            <div>
            <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>Options Component here</p>
            </div>
        );

    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <p>AddOption component here</p>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
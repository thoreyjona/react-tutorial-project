// With ES6 classes we can have no methods defined, with React components we have to define render 

const obj = {
    name: "Vikram",
    getName() {
        return this.name;
    }
};

const getName = obj.getName.bind(obj);

class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer.";
        const options = ["Thing one", "Thing two", "Thing four"];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>           
            </div>
        );
    } 
}

class Action extends React.Component{
    handlePick() {
        alert('handlePick');
    }
    render() {
        return (
            <div>
            <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) { // props here is the same as this.props below
        super(props); // Bare minimum to override, need to have access to this.props
        this.handleRemoveAll = this.handleRemoveAll.bind(this); // Making sure that wherever we call handleRemoveAll, 
        // the context is correct
    }
    handleRemoveAll() {
        alert("Remove All clicked");
    }
    // Call bind(this) in onClick event to make sure handleRemoveAll has the same binding as render
    render() {
        return (
            <div>
            <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }                
            </div>
        );

    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        
        const option = e.target.elements.option.value.trim();
        if (option) {
            alert(option);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
                </form>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
            Option: {this.props.optionText}
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
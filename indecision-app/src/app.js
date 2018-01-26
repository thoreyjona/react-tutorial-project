// Stateless functional component
// With ES6 classes we can have no methods defined, with React components we have to define render 
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        }
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        })
    }
    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer.";
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                    handleAddOptions={this.handleAddOption}/>
            </div>
        );
    }
}

const Header = (props) => {
  return (
    <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>           
    </div>
  );
}

const Action = (props) => {
  return (
    <div>
      <button 
        onClick={props.handlePick}       
        disabled={!props.hasOptions}
      >
      What should I do?
      </button>
    </div>
  );
}


//Options is getting rerendered with a new set of props.
//Component like options can not change its own props but new props value
// can be passed from parents and then it is rerendering

const Options = (props) => {
  return (
    <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
        {
            props.options.map((option) => <Option key={option} optionText={option}/>)
        }                
    </div>
  );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();
        
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOptions(option);
        
        this.setState(() => {
            return { error } // shorthand for error:error
        })

    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
                </form>
            </div>
        );
    }
}

const Option = (props) => {
  return (
    <div>
    Option: {props.optionText}
    </div>
  );
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
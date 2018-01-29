// Stateless functional component
// With ES6 classes we can have no methods defined, with React components we have to define render 
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }
    //Lifecycle methods
    componentDidMount() {
      try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
  
        if (options) {
          this.setState(() => ({ options: options }));
        }

      } catch (e) {
        // Do nothing
      }

    }
    // Fires even if options array doesn´t change
    componentDidUpdate(prevProp, prevState) {
      if (prevState.options.length != this.state.options.length){
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
        console.log('saving data');
      }
    }
    // When we switch pages (component disappears )
    componentWillUnmount() {
      console.log('ComponentWillUnmount');
    }
    handleDeleteOptions() {
      this.setState(() => ({ options: [] }));
    }
    // Same as above
    // handleDeleteOptions() {
    //     this.setState(() => {
    //         return {
    //             options: []
    //         }
    //     })
    // }
    handleDeleteOption(optionToRemove) {
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => optionToRemove !== option)
      }));
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

        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }
    render() {
        const subtitle = "Put your life in the hands of a computer.";
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
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
        {props.subtitle && <h2>{props.subtitle}</h2>}           
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision'
};

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
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      {
            props.options.map((option) => (
            <Option key={option} 
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
            />
          ))
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
        
        this.setState(() => ({ error })); 

        if (!error) {
          e.target.elements.option.value = ''; // Clear input 
        }

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
      <button 
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
      
      >
      Remove</button>
    </div>
  );
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
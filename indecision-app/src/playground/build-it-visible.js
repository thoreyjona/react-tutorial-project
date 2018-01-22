class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false,
        };

    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render () {
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
            {
                this.state.visibility && 
                <div> 
                    <p> Hey, these are some details you can now see</p>
                </div>
            }
            </div>
        )
    } 
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

/*const app = {
    tab : "Build it!",
    title: "Visibility Toggle"
}
let visibility = false;
const showDetails = () => {
    visibility = !visibility;
    renderApp();
}
const appRoot = document.getElementById('app');
const renderApp = () => {

    const template = (
        <div>
        <title>{app.tab}</title>
        <h1>{app.title}</h1>
        <button onClick={showDetails}>{visibility ? "Hide Details" : "Show Details"}</button>
        {visibility && (
            <div>
            <p>Hey, these are some details you can now see.</p>
            </div>
        )}
        </div>
    )
    ReactDOM.render(template, appRoot);
}

renderApp();*/

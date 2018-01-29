import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.children}
            <p>footer</p>
        </div>
    );
};

// Children Prop (built in prop)
// We can pass JSX into a component and that component can choose to use it if it wants
ReactDOM.render((
<Layout>
<div>
    <h1>Page Title</h1>
    <p>This is my page</p>
</div>
</Layout>
), document.getElementById('app'));

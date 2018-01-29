import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

// Children Prop (built in prop)
// We can pass JSX into a component and that component can choose to use it if it wants
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

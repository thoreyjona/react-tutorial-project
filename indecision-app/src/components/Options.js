import React from 'react';
import Option from './Option';

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

  export default Options;
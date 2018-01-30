import React from 'react';
import Option from './Option';

//Options is getting rerendered with a new set of props.
//Component like options can not change its own props but new props value
// can be passed from parents and then it is rerendering
const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button
        className="button button--link" 
        onClick={props.handleDeleteOptions}
      >
      Remove All
      </button>
    </div>
    {props.options.length === 0 && <p className="widget__message">Please add an option to get started</p>}
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

export default Options;
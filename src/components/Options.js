import React from 'react';
import Option from './Option';



const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button
        className="button button--link"
        type="button" 
        onClick={ props.handleDeleteOptions }
      >
        Remove All
      </button>
    </div>
    <div className="widget-options">
      { props.options.length === 0 && <p className="widget-options__message">Please add an option to get started.</p> }
      <ol>
        { props.options.map((option, index) => (
          <Option
            key={ index }
            text={ option }
            options={ props.options }
            handleDeleteSingleOption={ props.handleDeleteSingleOption }
          />
        ) ) }
      </ol>
    </div>
  </div>
);
export default Options;
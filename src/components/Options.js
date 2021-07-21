import React from 'react';
import Option from './Option';



const Options = (props) => (
  <div>
    <button 
      className="button button--link"
      type="button" 
      onClick={ props.handleDeleteOptions }
    >
      Remove all options
    </button>
    { props.options.length === 0 && <p>Please add an option to get started.</p> }
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
);
export default Options;
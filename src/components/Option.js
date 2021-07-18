import React from 'react';



const Option = (props) => (
  <li>
    { props.text }
    <button
      type="button"
      onClick={ (e) => props.handleDeleteSingleOption(props.text) }
    >
      Remove
    </button>
  </li>
);
export default Option;
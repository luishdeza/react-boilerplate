import React from 'react';

import Option from './Option';

const Options = (props) => (
  <div>
    <button
      className="button button--link"
      onClick={props.handleDeleteOptions}
    >
      Remove All
    </button>
    {props.options.length == 0 && <p>Please add an option</p>}
    {
    props.options.map((value, index) => 
      <Option 
        key={index} 
        optionText={value} 
        handleDeleteOptionSingular={props.handleDeleteOptionSingular}
      />
    )
    }
  </div>
)

export default Options
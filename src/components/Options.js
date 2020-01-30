import React from 'react';

import Option from './Option';

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length == 0 && <p>Please add an option</p>}
      <ul>
        {
        props.options.map((value, index) => 
          <Option 
            key={index} 
            optionText={value} 
            handleDeleteOptionSingular={props.handleDeleteOptionSingular}
          />
        )
        }
      </ul>
    </div>
  )
}

export default Options
import React from 'react';
import './SimpleButton.css'

const SimpleButton = (props) => (
  <button type="button" className="simple-btn" onClick={()=>props.handleClick()}>
    {props.btnText}
  </button>
);

export default SimpleButton;

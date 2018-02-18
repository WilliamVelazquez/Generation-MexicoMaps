import React from 'react';
import './Band.css';

function Band (props) {
  const {color, height} = props;
  var bandStyle = {
    backgroundColor:color,
    height:height
  };
  return(
    <div
      className="Band"
      style={bandStyle}
    />
  )
}

export default Band;

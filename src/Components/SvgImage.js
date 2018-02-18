import React from 'react';

const SvgImage = (props) => (
  <svg
    fill={props.color}
    height={props.height}
    width={200}
  >
    {props.children}
  </svg>
);

export default SvgImage;

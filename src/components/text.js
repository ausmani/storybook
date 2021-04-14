// @flow
import React from 'react';

const Text = ({value,style,className}) => {
 return (
  <p style={style} className={className}>
      {value}
  </p>
 );
};
export default Text;
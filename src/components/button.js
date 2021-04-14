// @flow
import React from 'react';

const Button = ({value,style,className,onClick}) => {
 return (
  <>
      <button style={style} className={className} onClick={onClick}>{value}</button>
  </>
 );
};
export default Button;
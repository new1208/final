import React from 'react';
export default function Click(props) {

  const handleClick = function() {
    props.update();
  }

  return (
    <button variant="text" onClick={handleClick}>{props.count}</button>    
  );

}
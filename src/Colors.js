import React from 'react';

const Colors = (props)=> {

  console.log(props.colorState)
  return (
    <div id={"color-wash-c"}>
      <div className={`color-wash2 ${props.colorState ? "color-lit" : "color-dim"}`}></div>
      <div  className={`color-wash ${props.colorState ? "color-lit" : "color-dim"}`}  ></div> 
    </div>
  )
}

export default Colors;
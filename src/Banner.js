import React, {useState} from 'react';
import Colors from './Colors'
import bubble from './images/bubble@2x.png'
import squareD from './images/SqareD@2x.png'


const Banner = () => {
  
  const [colorState, setColorState] = useState(false);

  const colorStateToggle = () =>{
    let nextState = !colorState
    setColorState(nextState)
  }

  return (
    <div id="banner-c" className={`dimmer ${colorState ? "dim" : "lit"}`} onMouseEnter={()=> colorStateToggle()} >
      <img className={"squareD"} src={squareD} alt={""} />
      <img className={"bubble"} src={bubble} alt={""} onClick={() => colorStateToggle()} />
      <div className={`ring ${colorState ? "ring-on" : "ring-off"}`} ></div>
      <img className={"water"} src="https://acegif.com/wp-content/gifs/water-18.gif" alt="" ></img>
      <Colors colorState={colorState} />
    </div>
  )
}

export default Banner;
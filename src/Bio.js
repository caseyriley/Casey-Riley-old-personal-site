import React from 'react';
import caseyPick from './images/caseyrileybackandglow.jpg'


const Bio = () => {

  return (
    <>
    <div id={"bio-h1"}>
      <h1 className="bio-h1__h1">Hello, my name is Casey</h1>
    </div>
    <div id={"bio-section"}>
      
      <div id={"pic-c"}>
        <img className="pick__casey" src={caseyPick} alt="" />
      </div>
      <div id={"bio-c"}>
        <p>I am a software developer skilled in React, Javascript,
          CSS, Python, Flask, HTML, SQL, Epress, Nodejs, Redux and more.
        </p>
        
        <p>I have always been the creative type.
          I am a photographer, music producer and
          graphic designer.
          I also like to make laser cut LED art if I have the time.</p>
      
        <p>
          I have recently graduated from a coding bootcamp known as 
          App Academy.
          I love front end web development passionately and am excited for 
          my near future dream job.</p>
        <p>
            Clearly I love the infinite possibilities of
            software however lots of people know me for
            giving them great therapeutic massages. I have
                          over 16 years of experience as a LMT.</p>                  
        <p>
              Outside of my hobbies I love the outdoors and
              living in Portland Oregon gives me lots of
              opportunity for hiking, swimming and all sorts
              of adventures. I have also spent lots of time in
              Thailand, Turkey, Egypt, Malaysia, and Canada.</p>
        <p>
          Please follow me on my adventures as a
          software developer and feel free to contact me.</p>
      </div>
      <div id={"right-column"}></div>
    </div>
    </>
  )
}

export default Bio;


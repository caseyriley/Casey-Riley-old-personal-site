import React, {NavLink, Route, useState} from 'react';
import Contact from './Contact'

const NavBar = () => {

  const [dropD, setdropD] = useState(false);
  const toggleDropdown = () => {
    const nextState = !dropD;
    setdropD(nextState);
  };

  const [transform, setTransform] = useState(false);
  const toggleTransform = () => {
    const nextState = !transform;
    setTransform(nextState);
  };

  return (
    <div id={"navbar-c"} >
      <div className={"navbar-c__link-c"}>
        <div id="tranform-box" onClick={()=>{toggleTransform(); toggleDropdown()}} >
          <div className={`tranform-box__line tranform-box__line-1 ${transform ? "transform-1" : "un-transform"}`} ></div>
          <div className={`tranform-box__line tranform-box__line-2 ${transform ? "transform-2" : "un-transform"}`} ></div>
          <div className={`tranform-box__line tranform-box__line-3 ${transform ? "transform-3" : "un-transform"}`} ></div>
        </div>
        <div id="navbar-c__dropdown" className={`${dropD ? "visible" : "hidden"}`} >
          <div id={"navbar-c__dropdown__white-space"} >
            <a className={'navbar-c__dropdown__nav-link'} href={"https://skywalker3.herokuapp.com/"}>Skywalker</a>
            <a className={'navbar-c__dropdown__nav-link'} href={"https://chatter-clone.herokuapp.com/"}>Chatter</a>
            <a className={'navbar-c__dropdown__nav-link'} href={"https://shimmer.herokuapp.com/"}>Shimmer</a>
            <a className={'navbar-c__dropdown__nav-link'} href={"https://sherwood-wealth-services.herokuapp.com/"}>Sherwood Wealth Management</a>
            <a className={'navbar-c__dropdown__nav-link'} href={"https://www.linkedin.com/in/casey-riley-3396231a1/"} >LinkedIn</a>
            <a className={'navbar-c__dropdown__nav-link'} href={"https://angel.co/u/casey-riley-1"}>AngfelList</a>
            <a className={'navbar-c__dropdown__nav-link'} href={"https://drive.google.com/file/d/1rAsUvHLcgqvYiiP7lhSed1EUnxXYcASQ/view?usp=sharing"}>Resume</a>
            <a className={'navbar-c__dropdown__nav-link'} href={"https://www.linkedin.com/in/casey-riley-3396231a1/"}>Contact</a>
          </div>
        </div>
        
        <a className={"navbar-c__link-c__skywalker"} href="https://skywalker3.herokuapp.com/" >Skywalker</a>
        <a className={"navbar-c__link-c__chatter"} href="https://chatter-clone.herokuapp.com/" >Chatter</a>
        <a className={"navbar-c__link-c__shimmer"} href="https://shimmer.herokuapp.com/" >Shimmer</a>
        <a className={"navbar-c__link-c__sherwood"} href="https://sherwood-wealth-services.herokuapp.com/" >Sherwood Wealth Management</a>
        <a className={"navbar-c__link-c__linkedin"} href={"https://www.linkedin.com/in/casey-riley-3396231a1/"}>LinkedIn</a>
        <a className={"navbar-c__link-c__angellist"} href={"https://angel.co/u/casey-riley-1"}>AngelList</a>
        <a className={"navbar-c__link-c__resume"} href={"https://drive.google.com/file/d/1rAsUvHLcgqvYiiP7lhSed1EUnxXYcASQ/view?usp=sharing"}>Resume</a>
        <a className={'navbar-c__link-c__contact'} href={"https://www.linkedin.com/in/casey-riley-3396231a1/"}>Contact</a>
        {/* <Contact></Contact> */}
      </div>
    </div>
  )
};

export default NavBar;

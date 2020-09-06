import './button.scss'

import Button from 'react-bootstrap/Button'
import React from 'react';

function ButtonFilter(props) {

    return (
      <>
    <Button className={props.activeValue?'activeBtn Buttonfilter':'Buttonfilter'} onClick={(event)=>props.clickbutton(event.target.textContent,  event.target.parentElement.parentElement.parentElement.className)}>{props.children}</Button> 
      </>
    );
  }
  
  export default ButtonFilter;
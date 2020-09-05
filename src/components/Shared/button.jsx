import './button.scss'

import Button from 'react-bootstrap/Button'
import React from 'react';

function ButtonFilter(props) {
    return (
      <>
    <Button className={props.activeValue?'activeBtn Buttonfilter':'Buttonfilter'} onClick={props.clickbutton}>{props.children}</Button> 
      </>
    );
  }
  
  export default ButtonFilter;
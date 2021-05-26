import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container} from 'react-bootstrap'



function Button1 (props){
  return (
  <Container mx='auto'> 
                <div >Button Here:</div>
                <Button  mx='auto' variant="primary" onClick={props.handleClick}>
                  {props.flag ? 'staying up' : 'time for bed'}
                </Button>
  </Container>
  )
}

export default Button1;
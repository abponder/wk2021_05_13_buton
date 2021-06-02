import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container} from 'react-bootstrap'


function Mdn (props){
  return (
  <Container mx='auto'> 
      <h2>The target Attribute</h2>
      <a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</a> 
      <p>If target="_blank", the link will open in a new browser window or tab.</p>
  </Container>
  )
}

export default Mdn;
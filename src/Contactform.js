import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Row, Col, Container, Button} from 'react-bootstrap'

class Contactform extends React.Component {
  state = {
    firstname:"",
    lastname:"",
    email:"",
    showmessage:false
  };

  onchange = (event) => {
    console.log({
      [event.target.name]: event.target.value
    })
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onsubmit = (event) => {
    event.preventDefault()
    this.setState({
      showmessage:true
    })
  }

  render() {
    return (
  <Container>
        <Form onSubmit={this.onsubmit}>
    <Form.Row>
      <Form.Group as={Col} >
        <Form.Label>First Name</Form.Label>
        <Form.Control onChange={this.onchange} name="firstname" type="text" placeholder="Enter First Name" />
      </Form.Group>

        <Form.Group as={Col} >
        <Form.Label>Last Name</Form.Label>
          <Form.Control onChange={this.onchange} name="lastname" type="text" placeholder="Enter Last Name" />
        </Form.Group>
      </Form.Row>

      <Form.Group >
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={this.onchange} name="email" type="email" placeholder="Example@gmails.com" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      {this.state.showmessage && (
          <p>Hi {this.state.firstname} {this.state.lastname}, we'll contact you at {this.state.email}</p>
      )}
    
      </Container>

    );
  }
}

export default Contactform;
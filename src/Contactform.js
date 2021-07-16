import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Row, Col, Container, Button, ListGroup} from 'react-bootstrap'

class Contactform extends React.Component {
  state = {
    firstname:"",
    lastname:"",
    email:"",
    showmessage:false,
    contacts:[]
  };


  componentDidMount(){
    const contacts = localStorage.getItem('contacts')
    console.log(contacts)
    if(!contacts){
      localStorage.setItem('contacts', [])
    }else{
      this.setState({
        contacts:JSON.parse(contacts)
      })
    }
    
  }

  handleDelete = (e, contact) => {
    
    // console.log('handledelete1: ' + e.target)
    console.log('handledelete2: ' + Object.entries(e))
    // console.log('handledelete1.5: ' + (e.detail))
    // console.log('handledelete2: ' + Object.keys(e))
    console.log('handledelete3: ' + JSON.stringify(contact))
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    const updatedcontacts = contacts.filter(ct => {
      return ct.email!== contact.email
    })
    localStorage.setItem('contacts', JSON.stringify(updatedcontacts));
    this.setState({
      contacts:updatedcontacts
    })
  }

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
    const contact = {
      firstname:this.state.firstname,
      lastname:this.state.lastname,
      email:this.state.email}
    this.setState({
      contacts:[
        ...this.state.contacts,
        contact
      ]
    })
    localStorage.setItem('contacts',JSON.stringify([
      ...this.state.contacts,
      contact
    ]))
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
      <Row className="mt-5">
        ...................................................
      </Row>
      <Row>
        <Col>New Contacts</Col>
      </Row>
      <ListGroup>
        {this.state.contacts.length ? (
            <>
              {this.state.contacts.map(contact =>(
                <ListGroup.Item>
                  {contact.firstname}, {contact.lastname}, {contact.email}
                  <Button className="float-right" variant="danger" type="button" 
                          onClick={(e) => this.handleDelete(e,contact)}>
                    delete
                  </Button>
                </ListGroup.Item>

              ))}
            </>
        ):<></>}
      </ListGroup>

  </Container>
  
 


    );
  }
}

export default Contactform;
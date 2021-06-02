import React from 'react';
import logo from './logo.svg';
import imgplaceholder from './366x160.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, CardGroup, Card} from 'react-bootstrap'


function Team (props){
  return (
  <Container mx='auto'> 
      <CardGroup>
          <Card>
            <Card.Img variant="top" src={imgplaceholder} /> 
            {/* relative path */}
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={imgplaceholder} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={imgplaceholder} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
      </CardGroup>
  </Container>
  )
}

export default Team;
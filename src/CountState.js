import React from 'react';
import {Button, Container} from 'react-bootstrap'

class CountState extends React.Component {
  state = {
    count:0
  }
  render() {
    return(
      <Container mx='auto'> 
      {/* <div >Button Here:</div> */}
      <Button  mx='auto' variant="primary" onClick={()=>this.setState({count:this.state.count + 1})}>
        {this.state.count}
      </Button>
      </Container>
    )
  }
}


export default CountState;
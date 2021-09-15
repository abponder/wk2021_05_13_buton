import React, {useState} from 'react';
import {Button, Container} from 'react-bootstrap';


function CountHook () {
    const [count, setCount] = useState(0)
  
    return(
      <Container mx='auto'> 
      <div >Button Here:</div>
      <Button  mx='auto' variant="primary" onClick={()=>setCount(count + 1)} >
        {count}
      </Button>
      </Container>
    )

}


export default CountHook;
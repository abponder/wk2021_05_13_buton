import React from 'react';
import {Table} from 'react-bootstrap'

function CustomTable (props){
  return (
  <div mx='auto'> 
     <Table striped bordered hover size="sm">
        <thead>
          <tr>
          {props.tableheadings.map(heading => (
            <th>{heading}</th>
          ))}
          </tr>
        </thead>
  
          <tbody>
              
              {props.tablerows.map(row => (
                <tr>
                {Object.values(row).map(value=>(
                  <td>{value}</td>
                ))}
                </tr>
          ))}
              
          </tbody>
    
      </Table>

  </div>
  )
}

export default CustomTable;
 

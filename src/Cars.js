import React from 'react';
import {ListGroup, Container, Table} from 'react-bootstrap'
import CustomTable from './CustomTable'

const tableheadings = []
class Cars extends React.Component {
  state = {
    carslist: [{
      "id": 1,
      "first_name": "Charo",
      "last_name": "Reignould",
      "email": "creignould0@cloudflare.com",
      "car_model": "Pathfinder",
      "car_color": null
    }, {
      "id": 2,
      "first_name": "Odelle",
      "last_name": "Edghinn",
      "email": "oedghinn1@ameblo.jp",
      "car_model": "2500",
      "car_color": null
    }, {
      "id": 3,
      "first_name": "Wynn",
      "last_name": "Densumbe",
      "email": "wdensumbe2@dyndns.org",
      "car_model": "Azera",
      "car_color": null
    }, {
      "id": 4,
      "first_name": "Ian",
      "last_name": "Domnick",
      "email": "idomnick3@thetimes.co.uk",
      "car_model": "F250",
      "car_color": null
    }, {
      "id": 5,
      "first_name": "Sly",
      "last_name": "Hunt",
      "email": "shunt4@nhs.uk",
      "car_model": "GT500",
      "car_color": null
    }, {
      "id": 6,
      "first_name": "Drucill",
      "last_name": "Claye",
      "email": "dclaye5@a8.net",
      "car_model": "530",
      "car_color": null
    }, {
      "id": 7,
      "first_name": "Robbin",
      "last_name": "Bemwell",
      "email": "rbemwell6@sphinn.com",
      "car_model": "Maxima",
      "car_color": null
    }, {
      "id": 8,
      "first_name": "Jeanie",
      "last_name": "Carcass",
      "email": "jcarcass7@businesswire.com",
      "car_model": "Express 1500",
      "car_color": null
    }, {
      "id": 9,
      "first_name": "Randolph",
      "last_name": "Glyne",
      "email": "rglyne8@tiny.cc",
      "car_model": "Mirage",
      "car_color": null
    }, {
      "id": 10,
      "first_name": "Salomone",
      "last_name": "Gauld",
      "email": "sgauld9@1688.com",
      "car_model": "Tribute",
      "car_color": null
    }]
  };

  render(){
    return (
    <>
    <Container style={{ marginTop: '2.0rem' }} >
      <CustomTable 
        tableheadings= {["First Name", "Last Name", "Email", "Model", "Color"]}
        tablerows= {this.state.carslist.map(car=>(
          {first_name: car.first_name,
           last_name: car.last_name,
           email: car.email,
           car_model: car.car_model,
           car_color: car.car_color
          }
        ))}
      />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Model</th>
              <th>Color</th>
          </tr>
        </thead>
      
        {this.state.carslist.map(car =>(
          <tbody>
              <tr>
                  <td>{car.first_name}</td>
                  <td>{car.last_name}</td>
                  <td>{car.email}</td>
                  <td>{car.car_model}</td>
                  <td>{car.car_color}</td>
              </tr>
          </tbody>
        ))}
      </Table>
    </Container>
    </>

    )
  }
}

export default Cars;

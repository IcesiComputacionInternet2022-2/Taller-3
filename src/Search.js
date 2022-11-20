import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toucans: []
    };
    this.findToucanAndParents = this.findToucanAndParents.bind(this);
  }

  findToucanAndParents() {
    const toucanName = document.getElementById("name").value;
    if(toucanName === '') {
        return;
    }
    fetch(`http://localhost:8080/toucans/${toucanName}`)
      .then((response) => response.json())
      .then(
        (toucans) => {
          if("message" in toucans) {
            alert(toucans.message)
          } else {
            this.setState({ toucans: toucans });
          }
        },
        (error) => {
          alert(error);
        }
      );
  }

  render() {
    return (
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="container">
          <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
              <table>
                <tr>
                  <td><input id="name" type="text" placeholder="Nombre del tucan" autoComplete="off"/></td>
                  <td><button type="button" onClick={this.findToucanAndParents}>Buscar</button></td>
                </tr>
              </table>
            </div>
            <div class="col-sm"></div>
          </div>
          <Row>
            {this.state.toucans.map((toucan) => (
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                      <Row>
                        <Col xs={4}><h6>Padre: </h6></Col>
                        <Col><label>{toucan.fatherName}</label></Col>
                      </Row>
                      <Row>
                        <Col xs={4}><h6>Madre: </h6></Col>
                        <Col><label>{toucan.motherName}</label></Col>
                      </Row>
                      <Row>
                        <Col xs={4}><h6>Nombre: </h6></Col>
                        <Col><label>{toucan.name}</label></Col>
                      </Row>
                      <Row>
                        <Col xs={4}><h6>Sexo: </h6></Col>
                        <Col><label>{toucan.sex}</label></Col>
                      </Row>
                      <Row>
                        <Col xs={4}><h6>Altura: </h6></Col>
                        <Col><label>{toucan.height}</label></Col>
                      </Row>
                      <Row>
                        <Col xs={4}><h6>Peso: </h6></Col>
                        <Col><label>{toucan.weight}</label></Col>
                      </Row>
                      <Row>
                        <Col xs={4}><h6>Edad: </h6></Col>
                        <Col><label>{toucan.age}</label></Col>
                      </Row>
                      <Row>
                        <Col xs={4}><h6>Llegada: </h6></Col>
                        <Col><label>{toucan.dateOfArrival}</label></Col>
                      </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
}

export default Search;
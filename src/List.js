import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toucans: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/toucans")
      .then((response) => response.json())
      .then(
        (toucans) => {
          this.setState({ toucans: toucans });
        },
        (error) => {
          alert(error);
        }
      );
  }

  render() {
    return (
      <div class="d-flex justify-content-center align-items-center">
        <div class="card card-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Nombre del padre</th>
              <th>Nombre de la madre</th>
              <th>Nombre</th>
              <th>Sexo</th>
              <th>Altura</th>
              <th>Peso</th>
              <th>Edad</th>
              <th>Fecha de llegada</th>
            </tr>
          </thead>
          <tbody>
            {this.state.toucans.map((toucan) => (
            <tr>
              <td>{toucan.fatherName}</td>
              <td>{toucan.motherName}</td>
              <td>{toucan.name}</td>
              <td>{toucan.sex}</td>
              <td>{toucan.height}</td>
              <td>{toucan.weight}</td>
              <td>{toucan.age}</td>
              <td>{toucan.dateOfArrival}</td>
            </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}

export default List;
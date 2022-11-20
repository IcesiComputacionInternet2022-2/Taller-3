import React, { Component } from "react";

class Create extends Component {
  async handleOnSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const toucanData = {
      fatherName: (data.get("fatherName") == '')?null: data.get("fatherName"),
      motherName: (data.get("motherName") == '')?null: data.get("motherName"),
      name: data.get("name"),
      sex: data.get("sex"),
      dateOfArrival: data.get("dateOfArrival"),
      weight: data.get("weight"),
      height: data.get("height"),
      age: data.get("age")
    };
    console.log(toucanData)
    const response = await fetch("http://localhost:8080/toucans", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(toucanData)
    });
    const msg = await response.json();
    if (response.status === 200) {
      alert("Se ha creado el tucan exitosamente")
      e.target.reset();
    } else {
        alert(msg.message);
    }
  }

  render() {
    return (
      <div class="d-flex justify-content-center align-items-center h-100">
        <form onSubmit={this.handleOnSubmit} autoComplete="off">
          <fieldset><legend>Datos del tucan</legend>
          <table>
          <tr>
              <td><label>Nombre del padre: </label></td>
              <td><input type="text" id="fatherName" name="fatherName" class="form-control form-control-lg border border-dark"/></td>
            </tr>
            <tr>
              <td><label>Nombre de la madre: </label></td>
              <td><input type="text" id="motherName" name="motherName" class="form-control form-control-lg border border-dark"/></td>
            </tr>
            <tr>
              <td><label>Nombre: </label></td>
              <td><input type="text" id="name" name="name" class="form-control form-control-lg border border-dark" required/></td>
            </tr>
            <tr>
              <td><label>Sexo: </label></td>
              <td>
              <select id="sex" name="sex" class="form-select border border-dark" style={{ width: 345 + "px" }}>
                <option value={"M"}>Macho</option> <option value={"F"}>Hembra</option>
              </select></td>
            </tr>
            <tr>
              <td><label>Peso: </label></td>
              <td><input type="text" id="weight" name="weight" class="form-control form-control-lg border border-dark" required/></td>
            </tr>
            <tr>
              <td><label>Altura: </label></td>
              <td><input type="text" id="height" name="height" class="form-control form-control-lg border border-dark" required/></td>
            </tr>
            <tr>
              <td><label>Edad: </label></td>
              <td><input type="text" id="age" name="age" class="form-control form-control-lg border border-dark" required/></td>
            </tr>
            <tr>
              <td><label>Fecha de ingreso: </label></td>
              <td><input type="date" id="dateOfArrival" name="dateOfArrival" class="form-control form-control-lg border border-dark" required/></td>
            </tr>
            <tr>
              <td>
                <input type="submit" class="btn btn-lg btn-primary btn-block" style={{ backgroundColor: "#2779e2" }} value="Crear"/>
              </td>
            </tr>
          </table>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Create;
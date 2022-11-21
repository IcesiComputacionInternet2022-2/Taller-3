import { React, Component } from "react";

class CreateTiger extends Component {
    render() {
        return (
            <div>
                <div id="div-create-tiger">
                    <div className="m-0 vh-100  row justify-content-center align-items-center" >
                        <div className="col-5 p-5">
                            <div className="align-middle">
                                <div className="card">
                                    <div className="card-header">
                                        <h2>Informacion Tigre</h2>
                                        <p>Ingrese la informacion del tigre</p>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                <label for="idMother">Mother id:</label>
                                                <input type="text" class="form-control" placeholder="Mother ID" id="idMother" />
                                            </div>
                                            <div className="form-group mt-2">
                                                <label for="idFather">Father id:</label>
                                                <input type="text" class="form-control" placeholder="Father ID" id="idFather" />
                                            </div>
                                            <div className="form-group mt-2">
                                                <label for="name">Name:</label>
                                                <input type="text" class="form-control" placeholder="Name" id="name" />
                                            </div>
                                            <div className="form-group mt-2">
                                                <label for="Gender">Gender:</label>
                                                <select className="form-control" name="tigerSex" id="gender">
                                                    <option selected value='MALE'>MALE</option>
                                                    <option value='FEMALE'>FEMALE</option>
                                                </select>
                                            </div>
                                            <div className="form-group mt-2">
                                                <label for="weight">Weight:</label>
                                                <input type='text' class='form-control' placeholder="Weight" id='weight' />
                                            </div>
                                            <div className="form-group mt-2">
                                                <label for="age">Age:</label>
                                                <input type='text' class='form-control' placeholder="Age" id='age' />
                                            </div>
                                            <div className="form-group mt-2">
                                                <label for="height">Height:</label>
                                                <input type='text' class='form-control' placeholder="Height" id='height' />
                                            </div>
                                            <div className="form-group mt-2">
                                                <label for="arrivedate">Arrivedate (yyyy-mm-dd HH:mm:ss):</label>
                                                <input type='text' class='form-control' placeholder="Date" id='arrivedate' />
                                            </div>
                                            <div className="d-flex justify-content-center mt-3">
                                                <button type="button" className="btn btn-secondary" onClick={createTigerF}>Crear</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div id="div-notify">
                    <div className="d-flex justify-content-center">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title" id="card-title"></h5>
                                <p class="card-text" id="card-content"></p>
                                <button type="button" className="btn btn-secondary" onClick={refreshPage}>Add another tiger</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateTiger

const createTigerF = async () => {

    let url = 'http://localhost:8080/tigers'

    var idMother = document.getElementById('idMother').value
    var idFather = document.getElementById('idFather').value
    var nameTiger = document.getElementById('name').value
    var genderTiger = document.getElementById('gender').value
    var weightTiger = document.getElementById('weight').value
    var ageTiger = document.getElementById('age').value
    var heightTiger = document.getElementById('height').value
    var arriveDateTiger = document.getElementById('arrivedate').value

    idMother = idMother === "" ? null : idMother
    idFather = idFather === "" ? null : idFather

    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify({
            "mother": idMother,
            "father": idFather,
            "name": nameTiger,
            "gender": genderTiger,
            "weight": weightTiger,
            "age": ageTiger,
            "height": heightTiger,
            "arriveDate": arriveDateTiger
        })
    })
    const answer = await res.json()

    if (res.status == 200) {
        document.getElementById('card-title').style.color = "#000000"
        document.getElementById('card-title').innerHTML = "Tiger added correctly"
        document.getElementById('card-content').innerHTML = "The tiger you have tried to add was saved correctly."
        document.getElementById('div-create-tiger').style.display = "none"
        document.getElementById('div-notify').style.display = "block"
    }else{
        document.getElementById('card-title').style.color = "#FF0000"
        document.getElementById('card-title').innerHTML = "Tiger not created : " + answer.code
        document.getElementById('card-content').innerHTML = "Verify the fields you entered \n" + answer.message
        document.getElementById('div-create-tiger').style.display = "none"
        document.getElementById('div-notify').style.display = "block"
    }
}

function refreshPage() {
    document.getElementById('div-create-tiger').style.display = "block"
    document.getElementById('div-notify').style.display = "none"

    document.getElementById('idMother').value = ""
    document.getElementById('idFather').value = ""
    document.getElementById('name').value = ""
    document.getElementById('gender').value = ""
    document.getElementById('weight').value = ""
    document.getElementById('age').value = ""
    document.getElementById('height').value = ""
    document.getElementById('arrivedate').value = ""
}
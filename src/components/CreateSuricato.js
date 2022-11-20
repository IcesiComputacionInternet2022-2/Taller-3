import {React, Component} from "react";
class CreateSuricato extends Component{
    render(){
        return(
            <div >
           
                <div className="m-0 vh-100  row justify-content-center align-items-center" >
                    <div className="col-5 p-5">
                        <div className="align-middle">
                            <div className="card">
                                <div className="card-header">
                                    <h2 className="card-title">Nuevo suricato</h2>
                                    <p></p>
                                    <h4 className="card-subtitle mb-2 text-muted">Llene el formulario con la informacion del nuevo suricato</h4>
                                    
                                </div> 
                                <div className="card-body">
                                <form>      
                                            <h6>Si el suricato no tiene padre o madre asociado dejar el campo vacio</h6>
                                            <hr className="divider"/>
                                            <div className="form-group">
                                                <label for="idFather">Id padre:</label>
                                                <input type="text" class="form-control" placeholder="Identificador" id="fatherId" />
                                            </div>
                                            <div className="form-group mt-3">
                                                <label for="idMother">Id madre:</label>
                                                <input type="text" class="form-control" placeholder="Identificador" id="motherId" />
                                            </div>

                                            <div className="form-group mt-2">
                                                <label for="name">Nombre:</label>
                                                <input type="text" class="form-control" placeholder="Nombre" id="name" />
                                            </div>
                                            <div className="form-group col-md-6">
                                            <label for="inputState">Genero</label>
                                            <select id='gender' class="form-control">
                                                <option selected value="M">Masculino</option>
                                                <option value="F">Femenino</option>
                                            </select>
                                            </div>
                                            <div className="form-group col-md-2">
                                            <label for="age">Edad:</label>
                                            <input type='text' class='form-control' placeholder="Edad" id='age' />
                                            </div> 

                                            <div className="form-group mt-2">
                                                <label for="weight">Peso:</label>
                                                <input type='text' class='form-control' placeholder="Peso" id='weight' />
                                            </div>

                                            <div className="form-group mt-2">
                                                <label for="height">Altura:</label>
                                                <input type='text' class='form-control' placeholder="Altura" id='height' />
                                            </div>
                                            <div className="form-group mt-2">
                                                <label for="arriveDate">Fecha de llegada (yyyy-mm-dd hh:mm:ss):</label>
                                                <input type='text' class='form-control' placeholder="(yyyy-mm-dd hh:mm:ss)" id='arriveDate' />
                                            </div>
                                            <div className="d-flex justify-content-center mt-3">
                                                <button type="button" className="btn btn-secondary" onClick={createNewSuricato}>Crear</button>
                                            </div>

                                            <div>
                                                <h2 className="h2messageSuccess" id="messageSuccess"></h2>
                                                <h2 className="h2messageError" id="messageError"></h2>
                                            </div>
                                        </form>
                                </div>
                            </div> 

                        </div>

                    </div>
                </div>

            </div>
        );
    }
}
export default CreateSuricato
const createNewSuricato = async () => {

    let url = 'http://localhost:8080/suricato'

    var fatherId = document.getElementById('fatherId').value
    var motherId = document.getElementById('motherId').value
    var nameSuricato = document.getElementById('name').value
    var genderSuricato = document.getElementById('gender').value
    var weightSuricato = document.getElementById('weight').value
    var ageSuricato = document.getElementById('age').value
    var heightSuricato = document.getElementById('height').value
    var arriveDateSuricato = document.getElementById('arriveDate').value

    fatherId = fatherId === "" ? null : fatherId
    motherId = motherId === "" ? null : motherId
 

    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify({
            "motherId": motherId,
            "fatherId": fatherId,
            "name": nameSuricato,
            "gender": genderSuricato,
            "weight": weightSuricato,
            "age": ageSuricato,
            "height": heightSuricato,
            "arriveDate": arriveDateSuricato
        })
    })
    const answer = await res.json()
    console.log(res.status)
    document.getElementById('messageSuccess').innerHTML = " "
    document.getElementById('messageError').innerHTML = " "
    if (res.status == 200) {
        document.getElementById('messageSuccess').innerHTML = "Suricato registrado correctamente"
    }else{
        // document.getElementById('messageError').innerHTML = "No se pudo registrar el suricato" + answer.code
        document.getElementById('messageError').innerHTML = "No se pudo registrar el suricato (" + answer.message + ")"

    }
    document.getElementById('motherId').value = ""
    document.getElementById('fatherId').value = ""
    document.getElementById('name').value = ""
    document.getElementById('weight').value = ""
    document.getElementById('age').value = ""
    document.getElementById('height').value = ""
    document.getElementById('arriveDate').value = ""



}


import { React, Component } from "react";
class SearchSuricato extends Component{
    render(){
        return(
            <div>
                <div className="container-lg">
                    <div className="flex-column p-4">
                        <div className="d-flex justify-content-center">
                            <label for="suricatoId">Digita el identificador del suricato que deseas buscar</label>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <input type="text" id="suricatoId" />
                         </div>
                        <div className="d-flex justify-content-center mt-3">
                            <button type="button" className="btn btn-secondary" onClick={handlerF}>Buscar</button>
                           
                        </div>
                        
                        </div>  

                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <h2 className="h2messageError" id="messageError"></h2>
                    </div>
                    
                    <div id="display-div">
                        <div>
                            <div className="d-flex justify-content-center" >

                                <div className="card m-3">
                                    <div className="card-header">
                                    <h2> Suricato</h2>    
                                        <img  width="900" height="900" src="https://acuariosymascotas.com/wp-content/uploads/2021/01/bebe-suricato-1024x732.jpg" class="img-fluid sty-img" />
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item" id="suricId">Id</li>
                                        <li className="list-group-item" id="suricatoName">Nombre</li>
                                        <li className="list-group-item" id="suricatoGender">Genero</li>
                                        <li className="list-group-item" id="suricatoWeight">Peso</li>
                                        <li className="list-group-item" id="suricatoAge">Edad</li>
                                        <li className="list-group-item" id="suricatoHeight">Altura</li>
                                        <li className="list-group-item" id="suricatoArriveDate">Fecha de llegada</li>
                                    </ul>
                                </div>

                                <div className="card m-3">
                                    <div className="card-header">
                                    <h2> Padre</h2>    
                                        <img width="900" height="900"src="https://www.debate.com.mx/__export/1526940256757/sites/debate/img/2018/05/21/suricata_afp.jpg_1902800913.jpg" class="img-fluid sty-img" />
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item" id="fatherId">Id</li>
                                        <li className="list-group-item" id="fatherName">Nombre</li>
                                        <li className="list-group-item" id="fatherGender">Genero</li>
                                        <li className="list-group-item" id="fatherWeight">Peso</li>
                                        <li className="list-group-item" id="fatherAge">Edad</li>
                                        <li className="list-group-item" id="fatherHeight">Altura</li>
                                        <li className="list-group-item" id="fatherArriveDate">Fecha de llegada</li>
                                    </ul>
                                </div>

                                <div className="card m-3">
                                    <div className="card-header">
                                    <h2> Madre</h2>    
                                        <img width="900" height="900"src="https://www.faunia.es/content/dam/fau/images/descubre-faunia/planea-tu-visita/animales/mami%CC%81feros/suricata/Suricata-Animales-Faunia-main.jpg" class="img-fluid sty-img" />
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item" id="motherId">Id</li>
                                        <li className="list-group-item" id="motherName">Nombre</li>
                                        <li className="list-group-item" id="motherGender">Genero</li>
                                        <li className="list-group-item" id="motherWeight">Peso</li>
                                        <li className="list-group-item" id="motherAge">Edad</li>
                                        <li className="list-group-item" id="motherHeight">Altura</li>
                                        <li className="list-group-item" id="motherArriveDate">Fecha de llegada</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}
export default SearchSuricato;

const handlerF = async () => {

    var suricatoId = document.getElementById('suricatoId')
  
    let url = 'http://localhost:8080/suricato/' + suricatoId.value
  
    const res = await fetch(url)
    const answer = await res.json()
  
    if (res.status != 200) {
      document.getElementById('messageError').innerHTML = 'No se encontro ningun suricato con este Identificador '
      
    } else {
      asignInfo(answer)
      
    }
   
  }
  
  function asignInfo(answer) {
    document.getElementById('suricId').innerHTML = "Id: " + answer.id
    document.getElementById('suricatoName').innerHTML = "Nombre: " + answer.name
    document.getElementById('suricatoGender').innerHTML = "Genero: " + answer.gender
    document.getElementById('suricatoWeight').innerHTML = "Peso: " + answer.weight
    document.getElementById('suricatoAge').innerHTML = "Edad: " + answer.age
    document.getElementById('suricatoHeight').innerHTML = "Altura: " + answer.height
    document.getElementById('suricatoArriveDate').innerHTML = "Llegada: " + answer.arriveDate
  
    if (answer.mother == undefined) {
      document.getElementById('motherId').innerHTML = "No hay ninguna madre asociada" 
      document.getElementById('motherName').innerHTML = " " 
      document.getElementById('motherGender').innerHTML = "   " 
      document.getElementById('motherWeight').innerHTML = "  " 
      document.getElementById('motherAge').innerHTML = " " 
      document.getElementById('motherHeight').innerHTML = "  "
      document.getElementById('motherArriveDate').innerHTML = " " 
    } else {
  
      document.getElementById('motherId').innerHTML = "Id: " + answer.mother.id
      document.getElementById('motherName').innerHTML = "Nombre: " + answer.mother.name
      document.getElementById('motherGender').innerHTML = "Genero: " + answer.mother.gender
      document.getElementById('motherWeight').innerHTML = "Peso: " + answer.mother.weight
      document.getElementById('motherAge').innerHTML = "Edad: " + answer.mother.age
      document.getElementById('motherHeight').innerHTML = "Altura: " + answer.mother.height
      document.getElementById('motherArriveDate').innerHTML = "Llegada: " + answer.mother.arriveDate

    }
  
    if (answer.father == undefined) {
        document.getElementById('fatherId').innerHTML = "No hay ningun padre asociado" 
        document.getElementById('fatherName').innerHTML = " " 
        document.getElementById('fatherGender').innerHTML = "   " 
        document.getElementById('fatherWeight').innerHTML = "  " 
        document.getElementById('fatherAge').innerHTML = " " 
        document.getElementById('fatherHeight').innerHTML = "  "
        document.getElementById('fatherArriveDate').innerHTML = " " 
    } else {
  
      document.getElementById('fatherId').innerHTML = "ID: " + answer.father.id
      document.getElementById('fatherName').innerHTML = "Nombre: " + answer.father.name
      document.getElementById('fatherGender').innerHTML = "Genero: " + answer.father.gender
      document.getElementById('fatherWeight').innerHTML = "Peso: " + answer.father.weight
      document.getElementById('fatherAge').innerHTML = "Edad: " + answer.father.age
      document.getElementById('fatherHeight').innerHTML = "Altura: " + answer.father.height
      document.getElementById('fatherArriveDate').innerHTML = "Llegada: " + answer.father.arriveDate
    }
    // <li className="list-group-item" id="fatherId">Id</li>
    // <li className="list-group-item" id="fatherName">Nombre</li>
    // <li className="list-group-item" id="fatherGender">Genero</li>
    // <li className="list-group-item" id="fatherWeight">Peso</li>
    // <li className="list-group-item" id="fatherAge">Edad</li>
    // <li className="list-group-item" id="fatherHeight">Altura</li>
    // <li className="list-group-item" id="fatherArriveDate">Fecha de llegada</li>
  }
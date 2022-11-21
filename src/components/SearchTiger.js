import { React, Component } from "react";

class SearchTiger extends Component {

  render() {
    return (
      <div>
        <div className="container-lg">
          <div className="flex-column p-4">
            <div className="d-flex justify-content-center">
              <label for="idTiger">Ingrese el nombre del tigre que desea buscar</label>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <input type="text" id="idTiger" />
            </div>
            <div className="d-flex justify-content-center mt-3">
              <button type="button" className="btn btn-secondary" onClick={handlerF}>Buscar</button>
            </div>
          </div>
        </div>
        <div id="display-div">
          <div>
            <div className="d-flex justify-content-center" >
              <div class="card m-3">
                <div className="text-center">Father</div>
                <div class="card-body d-flex">
                  <div className="m-2">
                    <img src="https://cdn0.bioenciclopedia.com/es/posts/9/5/0/tigre_de_bengala_59_600.jpg" class="img-fluid sty-img" />
                  </div>
                  <div className="m-2">
                  <p id="message-father">This tiger has no father</p>
                    <ul id="info-father">
                      <li id="idFather"></li>
                      <li id="nameFather"></li>
                      <li id="genderFather"></li>
                      <li id="weightFather"></li>
                      <li id="ageFather"></li>
                      <li id="heightFather"></li>
                      <li id="arriveDateFather"></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card m-3">
                <div className="text-center">Mother</div>
                <div class="card-body d-flex">
                  <div className="m-2">
                    <img src="https://www.anipedia.net/imagenes/caracteristicas-generales-de-los-tigres.jpg" class="img-fluid sty-img" />
                  </div>
                  
                  <div className="m-2">
                    <p id="message-mom">This tiger has no mother</p>
                    <ul id="info-mother">
                      <li id="idMother"></li>
                      <li id="nameMother"></li>
                      <li id="genderMother"></li>
                      <li id="weightMother"></li>
                      <li id="ageMother"></li>
                      <li id="heightMother"></li>
                      <li id="arriveDateMother"></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-center">
              <div class="card m-3">
                <div className="text-center">Son</div>
                <div class="card-body d-flex">
                  <div className="m-2">
                    <img src="https://animapedia.org/wp-content/uploads/2018/12/tigre.jpg" class="img-fluid sty-img" />
                  </div>
                  <div className="m-2">
                    <ul id="nn">
                      <li id="id"></li>
                      <li id="nameTiger"></li>
                      <li id="genderTiger"></li>
                      <li id="weightTiger"></li>
                      <li id="ageTiger"></li>
                      <li id="heightTiger"></li>
                      <li id="arriveDateTiger"></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="error-div">
          <div className="d-flex justify-content-center">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title" id="card-title"></h5>
                <p class="card-text" id="card-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchTiger

const handlerF = async () => {

  var idTiger = document.getElementById('idTiger')

  let url = 'http://localhost:8080/tigers/' + idTiger.value

  const res = await fetch(url)
  const answer = await res.json()

  if (res.status != 200) {
    document.getElementById('display-div').style.display = "none"
    document.getElementById('error-div').style.display = "inline"
    document.getElementById('card-title').style.color = '#FF0000'
    document.getElementById('card-title').innerHTML = 'Tiger Not Found : ' + answer.code
    document.getElementById('card-text').innerHTML = 'The searched tiger does not exist, please verify the name you entered. \n' + answer.message
  } else {
    document.getElementById('error-div').style.display = "none"
    document.getElementById('display-div').style.display = "inline"
    asignInfo(answer)
  }
}

function asignInfo(answer) {
  document.getElementById('id').innerHTML = "ID: " + answer.id
  document.getElementById('nameTiger').innerHTML = "Name: " + answer.name
  document.getElementById('genderTiger').innerHTML = "Gender: " + answer.gender
  document.getElementById('weightTiger').innerHTML = "Weight: " + answer.weight
  document.getElementById('ageTiger').innerHTML = "Age: " + answer.age
  document.getElementById('heightTiger').innerHTML = "Height: " + answer.height
  document.getElementById('arriveDateTiger').innerHTML = "Arrive Date: " + answer.arriveDate

  if (answer.mother == undefined) {
    document.getElementById('message-mom').style.display = "block"
    document.getElementById('info-mother').style.display = "none"
  } else {
    document.getElementById('info-mother').style.display = "block"
    document.getElementById('message-mom').style.display = "none"

    document.getElementById('idMother').innerHTML = "ID: " + answer.mother.id
    document.getElementById('nameMother').innerHTML = "Name: " + answer.mother.name
    document.getElementById('genderMother').innerHTML = "Gender: " + answer.mother.gender
    document.getElementById('weightMother').innerHTML = "Weight: " + answer.mother.weight
    document.getElementById('ageMother').innerHTML = "Age: " + answer.mother.age
    document.getElementById('heightMother').innerHTML = "Height: " + answer.mother.height
    document.getElementById('arriveDateMother').innerHTML = "Arrive Date: " + answer.mother.arriveDate
  }

  if (answer.father == undefined) {
    document.getElementById('message-father').style.display = "block"
    document.getElementById('info-father').style.display = "none"
  } else {
    document.getElementById('info-father').style.display = "block"
    document.getElementById('message-father').style.display = "none"

    document.getElementById('idFather').innerHTML = "ID: " + answer.father.id
    document.getElementById('nameFather').innerHTML = "Name: " + answer.father.name
    document.getElementById('genderFather').innerHTML = "Gender: " + answer.father.gender
    document.getElementById('weightFather').innerHTML = "Weight: " + answer.father.weight
    document.getElementById('ageFather').innerHTML = "Age: " + answer.father.age
    document.getElementById('heightFather').innerHTML = "Height: " + answer.father.height
    document.getElementById('arriveDateFather').innerHTML = "Arrive Date: " + answer.father.arriveDate
  }
}
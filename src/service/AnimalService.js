import axios from 'axios'

export class AnimalService{

    baseUrl = "http://localhost:8080/animals"

    getAll(){
        return axios.get(this.baseUrl)
        .then(res => res.data)
        .catch(function (error) {
            this.displayError(error)
        });
    }

    create(animal){
        return axios.post(this.baseUrl, animal)
        .then(res => res.data)
        .catch(function (error) {
            this.displayError(error)
        });
    }

    findByName(name){
        return axios.get(this.baseUrl + '/name/' + name)
        .then(res => res.data)
        .catch(function (error) {
            this.displayError(error)
        });
    }


    displayError(error){
        const errorCode  = error.response.data.errorCode
            const errorMessage = error.response.data.errorMessage
            alert(errorCode + ': ' + errorMessage)
    }

}
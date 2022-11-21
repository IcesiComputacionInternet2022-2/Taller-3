import React from "react";
import Table from './Info';

async function getPrayer(url){
    let res = await fetch(url)
    let response = await res.json()
    return response
}

const swan = {
    "id": "",
    "fatherID": "",
    "motherID": "",
    "name": "",
    "sex": "",
    "weight": 0,
    "age": 0,
    "height": 0,
    "arrivalDate": ""
   
  };

const titles = () => {
    return Object.keys(swan);
  }

export default class create extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            data: []
        }
    }

    handleChange = e=> {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit = async e=>{
        e.preventDefault();
        let call = await getPrayer("http://localhost:8080/zoo-Web/"+this.state.name)    
        const {message} = call
        if (message) alert(message)
        else this.setState({
            data: call
        })
    }

    render(){
        return (
            <div>
                <h1>FIND SWAN</h1>
                <form onSubmit={this.handleSubmit}>
                <input type = "text" required value = {this.name} onChange ={this.handleChange}/>
                <br></br>
                <button className="btn btn-primary" style={{'background-color': 'black'}}>FIND</button>
                </form>
                <br></br>
                <Table theadData={titles()} tbodyData={this.state.data}/>
            </div>
            
        )
    }
}
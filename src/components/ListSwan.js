import React from "react";
import Table from './Info';

async function getting(url){
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
            data : []
        }
    }

    

    data = async ()=>{
        let res = await getting("http://localhost:8080/zoo-Web")
        console.log(res)
        
        this.setState({
            data: res
        })
    
    }

    render(){
        this.data()
        return (
            <div className="container">
                <h1>SWANS</h1>
              <Table theadData={titles()} tbodyData={this.state.data}/>
            </div>
          );
    }
}
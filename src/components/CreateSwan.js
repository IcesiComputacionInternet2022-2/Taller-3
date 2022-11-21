import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

async function postFunction(url,obj){
    let res = await fetch(url,{
        method : "POST",
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body : JSON.stringify(obj)
    })
    let response = await res.json()
    return response
}

export default class create extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name : "",
            fatherid:"",
            motherid:"",
            sex: "F",
            age:"",
            height:"",
            weight:"",
            arrivalDate: new Date()
        }
        this.settingDate = this.settingDate.bind(this);
    }

    handleSubmit = async e=>{
        e.preventDefault();
        let call = await postFunction("http://localhost:8080/zoo-Web",this.createNewJson())    
        const {message,name} = call
        if (message) alert(message)
        else alert("Created new swan "+name)
    }

    toJSONLocal(date) {
        var current  = new Date(date);
        current.setMinutes(date.getMinutes() - date.getTimezoneOffset());
        return current.toJSON().slice(0, 10);
    }

    createNewJson(){
        return {
            name : this.state.name,
            fatherid: this.state.fatherid,
            motherid: this.state.motherid,
            sex: this.state.sex,
            age:this.state.age,
            height:this.state.height,
            weight:this.state.weight,
            arrivalDate: this.toJSONLocal(this.state.arrivalDate)+" 00:00:00"
        }
    }

    handleChange = e=> {
        switch (e.target.name){
            case "name": this.setState({
                name: e.target.value
            });
            break;
            case "sex": this.setState({
                sex: e.target.value,
            });
            break;
            case "age": this.setState({
                age: e.target.value
            });
            break;
            case "height": this.setState({
                height: e.target.value
            });
            break;
            case "weight": this.setState({
                weight: e.target.value
            });
            break;
            case "fatherid": this.setState({
                fatherid: e.target.value
            });
            break;
            case "motherid": this.setState({
                motherid: e.target.value
            });
            break;
            default:
            break;
        }
    }

    settingDate(arrivalDate) {
        this.setState({
          arrivalDate: arrivalDate
        })
      }


    render(){
        return (
            <div>
                <h2>Create a swan</h2>
                <form onSubmit={this.handleSubmit}>
                <br></br>
                <br></br>
                <b style={{'padding':'0 20px'}}>Name: </b>
                <input name="name" type = "text" required  value = {this.name}  onChange ={this.handleChange}/>
                <br></br>
                <br></br>
                <b style={{'padding':'0 20px'}}>Sex: </b>
                <label>
                    <select name="sex" value={this.state.sex} onChange={this.handleChange} >
                    <option value="M">MALE</option>
                    <option value="F">FEMALE</option>
                    </select>
                </label>
                <b style={{'padding':'0 20px'}}>Age: </b>
                <input name="age" type = "number" required  value = {this.age} onChange ={this.handleChange}/>
                <br></br>
                <br></br>
                <b style={{'padding':'0 20px'}}>Weight:   </b>
                <input name="weight" type = "number" required value = {this.weight} 
                onChange ={this.handleChange}/>
                <b style={{'padding':'0 20px'}}>Height:   </b>
                <input name="height" type = "number" required  value = {this.height} onChange ={this.handleChange}/>
                <br></br>
                <br></br>
                <b style={{'padding':'0 20px'}}>Arrival Date:   </b>
                <DatePicker name="arrivalDate" selected={ this.state.arrivalDate } onChange={ this.handlearrivalDateChange } dateFormat="yyyy-MM-dd"
                />
                <br></br>
                <br></br>
                <b>Father id:   </b>
                <input name="fatherid" type = "text"  value = {this.fatherid}  onChange ={this.handleChange}/>
                <b style={{'padding':'0 20px'}}>Mother id:   </b>
                <input name="motherid" type = "text" value = {this.motherid}  onChange ={this.handleChange}/>
                <br></br>
                <br></br>
                <label style={{color:'white'}}>ssssssssssssssssssssssssss</label><button className="btn btn-primary" style={{'background-color': 'black','padding':'0 50px'}} >Create</button>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                </form>
            </div>
            
        )
    }
}
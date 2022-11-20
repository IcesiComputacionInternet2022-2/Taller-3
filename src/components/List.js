
import React from "react"
import {getPrayer} from '../util/communicator'
import './css/List.css'


export default class List extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data : []
        }
    }

    getData = async ()=>{
        let res = await getPrayer("http://localhost:8081/animals")
        
        
        this.setState({
            data: res
        })
    
    }

    render(){
        this.getData()
        return ( 
            <div>
                
                <h1 className="text-center mt-5">
                    Animals
                </h1>
                <div >
                <table className = "table table-hover w-75 m-auto mt-3 border text-center p-1 shadow p-3">
                <thead className = "bg-success">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Father Id</th>
                        <th scope="col">Mother Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Height</th>
                        <th scope="col">Arrival date</th>
                        <th scope="col">Sex</th>
                    </tr>
                </thead>
                    
                       <tbody>
                       {this.state.data.map(e=><tr>
                        <td >
                           { e.id}
                        </td>
                        <td >
                           { e.fatherId}
                        </td>
                        <td >
                           { e.motherId}
                        </td>
                        <td>
                            {e.name}
                        </td>
                        <td>
                           { e.age}
                        </td>
                        <td>
                            {e.weight}
                        </td>
                        <td>
                           { e.height}
                        </td>
                        <td>
                            {e.arrivalDate}
                        </td>
                        <td>
                            {e.sex}
                        </td>
                    </tr>)}
                       </tbody>
                </table>
                </div>
            </div>
        )
    }
}
import { React, Component, useEffect, useState } from "react";

function GetSuricatos() {

    const [suricatos, setSuricatos] = useState([]);

    useEffect(() => {
        const handlerSuricatos = async () => {
            let url = 'http://localhost:8080/suricato'
        
            const res = await fetch(url)
            const answer = await res.json()
        
            //console.log(answer)
        
            setSuricatos(answer)
        }
        
        handlerSuricatos().catch(console.error)
    }, [])

    let tb_data = suricatos.map((item) => {
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.gender}</td>
                <td>{item.weight}</td>
                <td>{item.age}</td>
                <td>{item.height}</td>
                <td>{item.arriveDate}</td>
            </tr>
        )
    })
    return (
        <div>
            <div className="m-0 vh-100  align-items-center m-0 p-0">
            <div className="cardTable m-3"> 
                <div className="col-auto p-3 text-center">
                    <table class="table" id="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Weight</th>
                                <th scope="col">Age</th>
                                <th scope="col">Height</th>
                                <th scope="col">Arrive date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tb_data}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
    )
}

export default GetSuricatos;
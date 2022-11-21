import { React, Component, useEffect, useState } from "react";

function GetTigers() {

    const [tigers, setTiger] = useState([]);

    useEffect(() => {
        const handlerTigers = async () => {
            let url = 'http://localhost:8080/tigers'
        
            const res = await fetch(url)
            const answer = await res.json()
        
            //console.log(answer)
        
            setTiger(answer)
        }
        
        handlerTigers().catch(console.error)
    }, [])

    let tb_data = tigers.map((item) => {
        return (
            <tr key={item.id}>
                <td>{item.mother? item.mother:"Doesn't have"}</td>
                <td>{item.father? item.father:"Doesn't have"}</td>
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
                <div className="col-auto p-3 text-center">
                    <table class="table" id="table">
                        <thead>
                            <tr>
                                <th scope="col">Mother</th>
                                <th scope="col">Father</th>
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
    )
}

export default GetTigers;
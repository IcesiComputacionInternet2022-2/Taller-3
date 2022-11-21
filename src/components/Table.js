import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import CreateModal from './CreateModal';


const HYENAS_API = 'http://localhost:8080/hyenas';


const columns = [
    {
        name: 'ID',
        selector: row => row.id,
        grow: 3,
    },
    {
        name: 'Name',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Sex',
        selector: row => row.sex,
        sortable: true,
    },
    {
        name: 'Weight',
        selector: row => row.weight,
        sortable: true,
    },
    {
        name: 'Age',
        selector: row => row.age,
        sortable: true,
    },
    {
        name: 'Height',
        selector: row => row.height,
        sortable: true,
    },
    {
        name: 'Arrival Date',
        selector: row => row.arrivalDate,
        sortable: true,
        grow: 2,
    },
    {
        name: 'Father ID',
        selector: row => row.fatherId,
        grow: 3,
    },
    {
        name: 'Mother ID',
        selector: row => row.motherId,
        grow: 3,
    },
];



export default function Table() {
    const [hyenas, setHyenas] = useState([]);

    function getHyenas () {
        fetch(HYENAS_API)
            .then(response => response.json())
            .then(responseJson => {
                setHyenas(responseJson);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    
    useEffect(() => {
        getHyenas();
    }, [hyenas]);

    return (
        <DataTable
            title="All"
            columns={columns}
            data={hyenas}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="600px"
            horizontalScroll
            highlightOnHover
            actions={<CreateModal/>}
        />
    );
}